const mongoose = require("mongoose");

const PostModel = mongoose.model(
	"jooka-test-api",
	{
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
	},
	"posts"
);

module.exports = { PostModel };