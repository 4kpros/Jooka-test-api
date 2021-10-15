const mongoose = require("mongoose");

var Schema = mongoose.Schema;
var postSchema = new Schema({
	title: {
		type: String,
		required: true
	},
	description: {
		type: String,
	},
	date: {
		type: Date,
		default: Date.now
	},
	sender: {
		type: String,
		required: true
	},
	thumbnail: {
		type: String
	}
});
const PostModel = module.exports = mongoose.model('posts', postSchema);  
module.exports = { PostModel };