const mongoose = require("mongoose");

var Schema = mongoose.Schema;
var CommentSchema = new Schema({
	post_id: {
		type: Number,
		required: true
	},
	sender_mail: {
		type: String,
		required: true
	},
	content: {
		type: String,
		required: true
	},
	date: {
		type: Date,
		default: Date.now
	}
 });
 const CommentModel = module.exports = mongoose.model('comments', CommentSchema);  

module.exports = { CommentModel };