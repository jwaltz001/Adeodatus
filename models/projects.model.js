const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectsSchema = new Schema({
	title: {type:String, required:true},
	constructionType: {type:String, required:true},
	streetAddress: String,
	city: String,
    state: String,
	zipcode: Number,
    description: String,
	images:[],
	postedBy: {adminID:String, adminUsername:String, date:Date}
},{timeStamps:true});

const Projects = mongoose.model('Projects', projectsSchema);

module.exports = Projects;
