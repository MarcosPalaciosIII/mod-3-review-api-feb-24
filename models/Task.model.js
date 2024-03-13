const { Schema, model } = require("mongoose");

const taskSchema = new Schema(
	{
		task: { type: String },
		description: { type: String },
		completed: { type: Boolean },
	},
	{
		// this second object adds extra properties: `createdAt` and `updatedAt`
		timestamps: true,
	}
);

const Task = model("Task", taskSchema);

module.exports = Task;
