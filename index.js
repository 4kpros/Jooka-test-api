const express = require('express');
const app = express();
require('./models/dbConfig');
const postsRoutes = require('./controllers/postsController');
const commentsRoutes = require('./controllers/commentsController');
const bodyParser = require('body-parser');
const cors = require('cors');
app.use(bodyParser.json());
app.use((cors()));
app.use('/posts', postsRoutes);
app.use('/comments', commentsRoutes);

app.listen(5500, () => console.log('Server started: 5500'));