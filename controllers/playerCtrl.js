//                              //
//  SERVER LOCATION CONTROLLER  //
//                              //

var Player = require('../models/playerModel.js');

module.exports = {

//-- Create New Player

    newPlayer: function(req, res){
      console.log(req.body)
      var newPlayer = new Player(req.body);
      newPlayer.save(function(err, player) {
      if (err) {
        console.log(err)
        return res.status(500).end();
      }
        return res.json(player);
      });
    }
}

