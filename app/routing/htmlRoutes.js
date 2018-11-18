// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
const path = require('path');

// routing
module.exports = app => {

    // create html GET routes for /survey to display the survey page
    
    app.get("/survey", (req, res) => {
        res.sendFile(path.join(__dirname, '../public/survey.html'));
    });

    // create html GET route for default to display the home page
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/home.html'));
    });
}

