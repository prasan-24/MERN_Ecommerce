const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const expressValidator = require('express-validator');
const cors = require('cors');

const app = express();

const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const categoryRoutes = require('./routes/category');
const productRoutes = require('./routes/product');


// db

const url = 'mongodb+srv://<username>:<password>@cluster0.24gcg.mongodb.net/<databasename>?retryWrites=true&w=majority';

mongoose.connect(url.toString(),{
    // useNewUrlParser: true,
    // useCreateIndex: true
}).then(()=> console.log("DataBase Connected"));

require('dotenv').config();


//middleware

app.use(morgan('dev'));
app.use(express.urlencoded({extended: true}));
app.use(express.json())
app.use(cookieParser());
app.use(expressValidator());
app.use(cors());

//Routes Middleware

app.use("/api",authRoutes);
app.use("/api",userRoutes);
app.use("/api",categoryRoutes);
app.use("/api",productRoutes);

const port = process.env.PORT || 8000

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})
