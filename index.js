const express = require('express');

const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 5000;  

//middleware

app.use(express.json());

//routes
const blog = require('./routes/blog');
//mounting routes
app.use('/api/v1', blog);

const connectWithDb = require('./config/database');
connectWithDb();

//starting the server
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

app.get('/', (req, res) => {
    res.send(`<h1> Hi WELCOME TO MY BLOG</h1>`);
})