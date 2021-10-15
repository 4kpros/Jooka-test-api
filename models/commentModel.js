const mongoose = require("mongoose");

var Schema = mongoose.Schema;
var CommentSchema = new Schema({
	post_id:String,
	sender_mail:String,
	content:String,
	date:Date
 });
 const CommentModel = module.exports = mongoose.model('jooka-test-api', CommentSchema);  

// const CommentModel = mongoose.model(
// 	"jooka-test-api",
// 	{
// 		post_id: {
// 			type: Number,
// 			required: true
// 		},
// 		sender_mail: {
// 			type: String,
// 			required: true
// 		},
// 		content: {
// 			type: String,
// 			required: true
// 		},
// 		date: {
// 			type: Date,
// 			default: Date.now
// 		}
// 	},
// 	"comments"
// );

module.exports = { CommentModel };