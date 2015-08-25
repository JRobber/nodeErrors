//                              //
//  SERVER LOCATION CONTROLLER  //
//                              //

var Player = require('../models/playerModel.js')

module.exports = {

//-- Create New Player

    newPlayer: function(req, res){
      var newLocation = new Player(req.body);
      newPlayer.save(function(err, location) {
      if (err) {
        console.log(err)
        return res.status(500).end();
      }
        return res.json(location);
      });
    }
}