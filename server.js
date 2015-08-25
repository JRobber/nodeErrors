//          //
//  SERVER  //
//          //

//**********        *                            *        **********
//******************* Definititions and Requires *******************
//**********        *                            *        ********** 

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var app = express();

//**********        *            *        **********
//******************* Middleware *******************
//**********        *            *        ********** 

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(__dirname+"/public"));

//**********        *             *        **********
//******************* Controllers *******************
//**********        *             *        ********** 

var playerCtrl = require('./controllers/playerCtrl');

//**********        *        *        **********
//******************* Models *******************
//**********        *        *        ********** 

var Location = require('./models/playerModel');

//**********        *          *        **********
//******************* Database *******************
//**********        *          *        ********** 

var mongoUri = "mongodb://localhost:27017/rookieTracker";
mongoose.connect(mongoUri);
mongoose.connection.once('open', function() {
    console.log("Connected on " + mongoUri);
});

//**********        *      *        **********
//******************* Port *******************
//**********        *      *        ********** 

var port = 8080; 
app.listen(process.env.EXPRESS_PORT || port, function(){
    console.log("We are on ", port); 
});

app.use(express.static(__dirname+'/public'));

//**********        *           *        **********
//******************* Endpoints *******************
//**********        *           *        ********** 

//-- Create New Player
app.post('/api/newplayer', playerCtrl.newPlayer);

