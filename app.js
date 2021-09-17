const express = require('express');
const logger = require('morgan');
const path = require('path');

const animalRouter = require('./Routes/animalRouter.js')

const app = express();

app.set("views", path.join(__dirname, 'views'))
app.set('view engine', "ejs")

app.use(express.static(path.join(__dirname, 'public')))

const PORT = process.env.PORT || 3000;

app.use(logger('combined'));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

app.use('/api/team/', animalRouter)

app.listen(PORT, function () {
    console.log(`Server is now running on port ${PORT}`);
})