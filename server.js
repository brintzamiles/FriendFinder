// express
const express = require("express");
const bodyParser = require("body-parser");

// Creates an "express" server
const app = express();

//sets the port
const PORT = process.env.PORT || 8080;

//Sets up the Express app to handle data parsing (html/json)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// ================================================================================
// ROUTER
// configure my routes
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================
require(`./app/routes/htmlRoutes`)(app);
require(`./app/routes/apiRoutes`)(app);


//"Start" our server
app.listen(PORT, () => {
    console.log(`App is listening on: http://localhost:${PORT}`);
});