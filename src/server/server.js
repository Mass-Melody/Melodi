'use strict';

let express = require('express');
let mongoose = require('mongoose');
let cors = require('cors');
let bodyParser = require('body-parser');
let database = require('./data/db.js');

const backend_URI = process.env.BACKEND_URI;

const userRoute = require('../server/routes/user.routes')

mongoose.connect('mongodb+srv://mgreene1:viHW45vn2z9d9Cwc@cluster0.jk1h9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then(() => {
    console.log('Database connected sucessfully !')
},
    error => {
        console.log('Database could not be connected : ' + error)
    }
)

const app = express();
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(cors());
app.use('/users', userRoute)


const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
    console.log('Connected to port ' + port)
})

// Error Handling
app.use((req, res, next) => {
    next(createError(404));
});

app.use(function (err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
});