const peopleData = require('../data/friends');

// routing
module.exports = app => {

  // Display JSON of all friends
  app.get('/api/friends', (req, res) => {
    res.json(peopleData);
  });

  // create api POST route to /api/friends to handle incoming survey results
  app.post('/api/friends', (req, res) => {
    const scores = [];
    for (i in req.body.scores) {
      ///this pushes scores to the scores array minus the strongly agree/disagree stuff
      scores.push(parseInt(req.body.scores[i].slice(0, 1)));
    }

    //json of the new friend
    let jsonData = {
      name: req.body.name,
      photo: req.body.photo,
      scores: scores
    };

    //Logic to determine match
    let matchArr = [];
    //random initialization
    let compatibilityComparison = 150;
    peopleData.forEach(person => {

      // Calculate difference between new score and existing friends
      let totalDiff = 0;
      for (i in scores) {
        totalDiff += Math.abs(scores[i] - person.scores[i]);
      }

      // if values equal, you have a match
      if (compatibilityComparison === totalDiff) {
        matchArr.push(person);
      }

      // if the last (or initial) check for compatability is bigger than the current diff,   
      // Empty the matcharray and push this as the current match
      // This Check happens recursively
      if (compatibilityComparison > totalDiff) {
        matchArr = [];
        matchArr.push(person);
        compatibilityComparison = totalDiff;
      }
    });

    //Here's your closest compatability match
    console.log(matchArr);
    res.json(matchArr);



    // Add your new friend 
    peopleData.push(jsonData)



  });
}