/***********************************
 * Dependancies and Configurations *
 *                                 *
 ***********************************/
const express = require('express');
const app = express();
const session = require('express-session');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();
const db = mongoose.connection
const PORT = process.env.PORT || 3001;

/**************
 * Middleware *
 *            *
 **************/
app.use(express.json());
app.use(session({
	secret: process.env.SECRET,
	resave: false,
	saveUninitialized: false
}));

/************
 * Database *
 *          *
 ************/
const uri = process.env.ATLAS_URI || ;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true});
db.on('connected', () => console.log('mongo connected:'));

/***************
 * Controllers *
 *             *
 ***************/
 const adminController = require('./controller/admin.controller.js');
 app.use('/admin', adminController);

 const projectsController = require('./controllers/projects.controller.js');
 app.use('/projects', projectsController);

 /************
  * Listener *
  *          *
  ************/
 app.listen(PORT, () => console.log( 'Listening on port:', PORT));
