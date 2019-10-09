const express = require("express");
const router = express.Router();
const Projects = require("../models/projects.model.js");

///////////////////////ROUTES////////////////////////////

//Index
router.get("/", (req, res) => {
	Projects.find({}, (error, allProjects) => {
		res.json(allProjects);
  });
});

//Create
router.post('/', (req,res) => {
	Projects.create(req.body, (err, createdproject) => {
		res.json(createdTownie);
	});
});

//Update
router.put("/:id", (req, res) => {
	Projects.findByIdAndUpdate(req.params.id, req.body, (error, updatedProject) => {
		res.json(updatedProject)
  });
});

//Delete
router.delete("/:id", (req, res) => {
	Projects.findByIdAndRemove(req.params.id, (deletedProject) => {
		res.json(deletedProject);
  });
});

module.exports = router;
