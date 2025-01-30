import jwt from "jsonwebtoken";
import { jwbSecretToken } from "../config.js";


export const userAuth = async (req, res, next) => {
	const { userToken } = await req.cookies;
	if (!userToken) {
		return res.status(400).send({ success: false, message: `Unauthorized login. Try again` });
	}
	try {
		const decodedJwtToken = jwt.verify(userToken, jwbSecretToken);
		console.log(decodedJwtToken);
		if (decodedJwtToken.id) {
			req.body.userId = decodedJwtToken.id;
			console.log(decodedJwtToken.id);
		}
		else {
			return res.status(400).send({ success: false, message: `Unauthorized login. Try again` });
		}
		next();
		
	} catch (err) {
		console.error(err.message);
		if (err.name === 'TokenExpiredError') {
			return res.status(401).send({ message: 'Token expired, please log in again.' });
		}
		return res.status(400).send({ message: err.message });		
	}
}
	
	/*	got this on the console by the wayi n req.cookies but token is undefined- {
	userToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3OTQ2ZmQyZTI4NDMyZTc2NTMwNjU4YiIsImlhdCI6MTczNzc4MTcyNywiZXhwIjoxNzM3NzkyNTI3fQ.76CC86G1yWmOsS5eZtJHyGuzgz_5xg9dxEZkocR39Pc'
	}
	*/
	