const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const path = require('path');
const apiRoutes = require('./server/routes/router');
const viewRoutes = require('./server/routes/view');

const connectDB = require('./server/database/connection');
const app = express();

dotenv.config({path:'config.env'});
const PORT = process.env.PORT||8080

app.use(morgan('tiny'));

// mongodb connection
connectDB();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origins', '*');
    res.setHeader('Access-Control-Allow-Headers', "Authorization, Content-Type");
    res.setHeader('Access-Control-Allow-Methods', "GET POST PUT DELETE OPTIONS ");
    next();
});
// parse request to body-parser
app.use(express.json());

// set view engine
app.set("view engine", "ejs");
app.set('views', 'views');

// load assets
app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
app.use('/img', express.static(path.resolve(__dirname, "assets/img")))
app.use('/js', express.static(path.resolve(__dirname, "assets/js")))

app.use('/api', apiRoutes);
app.use('/',  viewRoutes);

app.use((err, req, res, next) => {
    console.log("Error Handling Succesfully");
});

app.listen(PORT,()=>{console.log(`server is running on http://localhost:${PORT}`)});
