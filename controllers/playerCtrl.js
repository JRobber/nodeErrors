//                              //
//  SERVER LOCATION CONTROLLER  //
//                              //

var Player = require('../models/playerModel.js');

module.exports = {

//-- Create New Player

//     newPlayer: function(req, res){
//       console.log(req.body)
//       var newPlayer = new Player(req.body);
//       newPlayer.save(function(err, player) {
//       if (err) {
//         console.log(err)
//         return res.status(500).end();
//       }
//         return res.json(player);
//       });
//     }
// }
    newPlayer: function(req, res){
      Player.create({
        name: req.body.name,
        collage: req.body.collage,
        forty: req.body.forty,
        benchpress: req.body.benchpress,
        interestedTeams: req.body.interestedTeams
      }, function(err, player){
           if(err) return res.status(500).end();
           return res.json(player);
      });
    }
}