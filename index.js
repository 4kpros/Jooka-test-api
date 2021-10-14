const express = require('express');
const app = express();
require('./models/dbConfig');
const postsRoutes = require('./controllers/postsController');
const commentsRoutes = require('./controllers/commentsController');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.env.PORT || 5000

app.use(bodyParser.json());
app.use((cors()));
app.use('/posts', postsRoutes);
app.use('/comments', commentsRoutes);

// Home page message
app.get('/', (req, res) => {
    res.send('Hello and welcome to jooka-test API ! <br><br> Add <b>/posts/all</b> to look all posts <br> Add <b>/comments/all</b> to look all comments');
});

app.listen(port, () => console.log('Server started: 5000'));