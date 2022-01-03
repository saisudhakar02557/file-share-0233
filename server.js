require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const PORT = process.env.PORT || 3001;


app.use(express.static('public'));
const connectDB = require('./config/db');
connectDB();
//cors
const corsOptions = {
    origin: 'http://localhost:3001'
    // ['http://localhost:3000', 'http://localhost:5000', 'http://localhost:3300','http://127.0.0.1:3001/']
  }
  app.use(cors(corsOptions))

app.use(express.json());
//Template engine
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

// Routes
app.use('/api/files', require('./routes/files'));
app.use('/files', require('./routes/show'));
app.use('/files/download', require('./routes/download'));




app.listen(PORT, console.log(`Listening on port ${PORT}.`));
