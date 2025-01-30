import { userTable } from "../models/userModel.js";

export const getUserData =async (req , res) => {
	
	try {
		const { userId } = req.body;
		const newUser = await userTable.findById(userId);
		if (!newUser) {
			return res.status(400).send({ success: false, message: `User not found` });
		}
		res.status(200).send({
			success: true,
			userData: {
				userName: newUser.userName,
				isVerified: newUser.isVerified
			}
		})

	} catch (error) {
		console.error(error.message);
		return res.status(400).send({ success: false, message: error.message });
	}
}