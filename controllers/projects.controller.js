const express = require("express");
const router = express.Router();
const Projects = require("../models/projects.model.js");

///////////////////////ROUTES////////////////////////////

//Index
router.get("/", async (req, res) => {
	try {
		const allProjects = await Projects.find();
		res.status(200).json(allProjects);
	} catch (error) {
		res.status(400).json({error: error.message});
	}
});

//Create
router.post('/', async (req,res) => {
	try {
		//req.body.postedBy = req.session.currentUser.username;
		const createdProject = await Projects.create(req.body);
		res.status(201).json(createdProject);
	} catch (e) {
		res.status(400).json({error: e.message});
	}
});

//Update
router.put("/:id", async (req, res) => {
	try {
		const updatedProject = await Projects.findByIdAndUpdate(req.params.id, req.body, { new: true } );
		res.status(202).json(updatedProject);
	} catch (e) {
		res.status(400).json({error: e.message});
	}
});

//Delete
router.delete("/:id", async (req, res) => {
	try {
		const deletedProject = await Projects.findByIdAndRemove(req.params.id);
		res.status(200).json(deletedProject);
	} catch (e) {
		res.status(400).json({error: e.message});
	}
	// finally {
	//
	// }
});

module.exports = router;
