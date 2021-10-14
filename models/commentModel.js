const mongoose = require("mongoose");

const CommentModel = mongoose.model(
	"jooka-test-api",
	{
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
	},
	"comments"
);

module.exports = { CommentModel };