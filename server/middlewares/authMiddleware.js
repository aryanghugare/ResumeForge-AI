import jwt from 'jsonwebtoken'
import { asyncHandler } from '../utils/AsyncHandler.js';
import { ApiError } from '../utils/ApiError.js';

const protect = async (req, res, next) => {
    const token = req.headers.authorization;
    if(!token){
        throw new ApiError(401, "Unauthorized: No token provided")
    }
    
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.userId = decoded.userId;
        next();

}

export default protect;