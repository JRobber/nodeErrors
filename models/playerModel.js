//                //
//  PLAYER MODEL  //
//                //

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var playerSchema = new Schema({
	"name": {type: String},
	"collage": {type: String},
	"forty": {type: Number},
	"benchpress": {type: Number},
	"interestedTeams": [String]
});

module = mongoose.model('Player', playerSchema);