const express = require("express");
const router = express.Router();
const Task = require("../models/Task.model");

// Read
router.get("/", (req, res) => {
	console.log("Getting All Tasks");

	Task.find()
		.then((tasksFromDb) => {
			res.json({ success: true, data: tasksFromDb });
			// res.json({
			// 	success: true,
			// 	data: [
			// 		{ task: "Review lesson", completed: true, taskId: 0 },
			// 		{ task: "Review Routing", completed: true, taskId: 1 },
			// 		{ task: "Review Services", completed: true, taskId: 2 },
			// 		{
			// 			task: "Review LifeCycle Hooks",
			// 			completed: true,
			// 			taskId: 3,
			// 		},
			// 		{ task: "Create API", completed: false, taskId: 4 },
			// 	],
			// });
		})
		.catch((err) => res.json({ success: false, error: err }));
});

// Read
router.get("/:taskId", (req, res) => {
	Task.findById(req.params.taskId)
		.then((taskFromDb) => {
			res.json({ success: true, data: taskFromDb });
		})
		.catch((err) => res.json({ success: false, error: err }));
});

// Create
router.post("/", (req, res) => {
	Task.create({ ...req.body })
		.then((taskFromDb) => {
			res.json({ success: true, data: taskFromDb });
		})
		.catch((err) => res.json({ success: false, error: err }));
});

// Update
router.put("/:taskId", (req, res) => {
	Task.findByIdAndUpdate(req.params.taskId, { ...req.body })
		.then((taskFromDb) => {
			res.json({ success: true, data: taskFromDb });
		})
		.catch((err) => res.json({ success: false, error: err }));
});

// Delete
router.delete("/:taskId", (req, res) => {
	Task.findByIdAndDelete(req.params.taskId)
		.then(() => {
			res.json({
				success: true,
				data: {
					message: `Successfully removed task ${req.params.taskId}.`,
				},
			});
		})
		.catch((err) => res.json({ success: false, error: err }));
});

module.exports = router;
