//                //
//  PLAYER MODEL  //
//                //

var mongoose = require('mongoose');


var playerSchema = new Schema({
	"name": {type: String},
	"collage": {type: String},
	"forty": {type: Number},
	"benchpress": {type: Number},
	"interestedTeams": [String]
});

module.exper = mongoose.model('Player', playerSchema);