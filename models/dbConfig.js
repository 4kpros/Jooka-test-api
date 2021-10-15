const mongoose = require('mongoose');
var url = "mongodb+srv://freeUser:YQCJlFxXGOWD8S9g@cluster0.5tvbu.mongodb.net/jooka-test-api?retryWrites=true&w=majority";

mongoose.connect(
	url,
	{useNewUrlParser: true, useUnifiedTopology: true },
	(err) => {
		if(!err) console.log("Mongodb connected");
		else console.log("Connection error : "+ err);
	}
);