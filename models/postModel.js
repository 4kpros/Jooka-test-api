const mongoose = require("mongoose");

var Schema = mongoose.Schema;
var postSchema = new Schema({
	title:String,
	description:String,
	date:Date,
	sender:String,
	thumbnail:String
});
const PostModel = module.exports = mongoose.model('posts', postSchema);  

// const PostModel = mongoose.model(
// 	"jooka-test-api",
// 	{
// 		title: {
// 			type: String,
// 			required: true
// 		},
// 		description: {
// 			type: String,
// 		},
// 		date: {
// 			type: Date,
// 			default: Date.now
// 		},
// 		sender: {
// 			type: String,
// 			required: true
// 		},
// 		thumbnail: {
// 			type: String
// 		}
// 	},
// 	"posts"
// );

module.exports = { PostModel };