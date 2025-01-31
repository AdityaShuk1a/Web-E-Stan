import { Child } from "../models/childModel.js";
import { parentTable } from "../models/parentModel.js";
export const createChild = async (req, res) => {
	try {
		const { childName, parentID } = req.body;
		if(!childName || !parentID){
			return res.status(400).send({ success: false, message: `fill out the details please` });
		}
		const newChild = new childModel({
			childName,
			parentID
		});
		await newChild.save();
		res.status(201).send({ success: true, message: "Child created successfully", child: newChild });
	} catch (error) {
		res.status(500).send({ success: false, message: "Error creating child", error });
	}
};
export const getChildData =async (req , res) => {	
	try {
		const { childId } = req.params;
		
		const child = await childModel.findById(childId).populate({
			path: "subjects.chapters.topics",
			model: "Topic"
		});
		if (!child) {
			return res.status(404).send({ success: false, message: "Child not found" });
		}
		
		res.status(200).send({ success: true, message: "Child data retrieved successfully", child });
	} catch (error) {
		res.status(500).send({ success: false, message: "Error retrieving child", error });
	}
}
// export const updateChildProgress = async (req, res) => {
//     try {
//         const { childId } = req.params;
//         const { progress } = req.body;

//         const child = await childModel.findByIdAndUpdate(childId, { progress }, { new: true });

//         if (!child) {
//             return res.status(404).json({ message: "Child not found" });
//         }

//         res.status(200).send({ success: true, message: "Progress updated successfully", child });
//     } catch (error) {
//         res.status(500).send({ success: false, message: "Error updating progress", error });
//     }
// };
