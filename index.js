const express = require('express');
const app = express();
require('./models/dbConfig');
const postsRoutes = require('./controllers/postsController');
const commentsRoutes = require('./controllers/commentsController');
const port = process.env.PORT || 5000

app.use(BodyParser.json());
app.use('/posts', postsRoutes);
app.use('/comments', commentsRoutes);

app.listen(port, () => console.log('Server started: 5000'));