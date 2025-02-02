const express = require('express');
const helmet = require('helmet');
const userRoutes = require('./routes/user')

const app = express();

app.use(express.json());

app.use(
    helmet({
        crossOriginResourcePolicy: true,
    })
);  

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
    }
);

app.use('/api/auth', userRoutes);


module.exports = app;