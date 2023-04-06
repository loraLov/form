const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routes = require('./Routes');
const bodyParser = require('body-parser');
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')))

app.use(bodyParser.urlencoded({extended:true}));

require('dotenv').config();
mongoose.set('strictQuery', false)

const PORT = 7000 || process.env.post


mongoose
.connect(process.env.MONGODB_LINK)
.then(()=> console.log('We were connected to MONGO'))
.catch((err) => console.log(err));

app.use(routes);



app.listen(PORT, ()=>{
    console.log(`Server is listening on PORT ${PORT}`)
})

