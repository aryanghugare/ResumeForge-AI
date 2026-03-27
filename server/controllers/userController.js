import User from "../models/User.js";
import bcrypt from 'bcrypt'
import { asyncHandler } from "../utils/AsyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import jwt from 'jsonwebtoken';
import Resume from "../models/Resume.js"


const generateToken = (userId)=>{
    const token = jwt.sign({userId}, process.env.JWT_SECRET, {expiresIn: '7d'})
    return token;
}

// controller for user registration
// POST: /api/users/register
export const registerUser = asyncHandler( async (req, res) => {
        const {name, email, password} = req.body;

        // check if required fields are present
        if(!name || !email || !password){
            throw new ApiError(400, "Name, email and password are required")
        }

        // check if user already exists
        const user = await User.findOne({email})
        if(user){
            throw new ApiError(400, "User already exists")
        }

        // create new user
         const hashedPassword = await bcrypt.hash(password, 10)
         const newUser = await User.create({
            name, email, password: hashedPassword
         })
 if(!newUser) throw new ApiError(500, "Failed to create user")
     
const finalUser = await User.findOne({email}).select("-password");


         // return success message
         const token = generateToken(newUser._id)

         return res.status(201).json({message: 'User created successfully', token, user: finalUser})


})



// controller for user login
// POST: /api/users/login
export const loginUser = asyncHandler( async (req, res) => {

const {email, password} = req.body;

// check if required fields are present
if(!email || !password){
    throw new ApiError(400, "Email and password are required")
}

// check if user exists
const user = await User.findOne({email})
if(!user){
    throw new ApiError(400, "Invalid email or password")
}

let isPasswordValid = await user.comparePassword(password);

if(!isPasswordValid) throw new ApiError(400, "Invalid email or password")

const token = generateToken(user._id)
 user.password = undefined;

return res.status(200).json({message: 'Login successful', token, user})

})


// controller for getting user by id
// GET: /api/users/data

export const getUserById = asyncHandler(async(req,res)=>{
const userId = req.userId;

if(!userId) throw new ApiError(400, "User id is required");

const user = await User.findById(userId).select("-password");
if(!user) throw new ApiError(404, "User not found");


return res.status(200).json({message: "User data fetched successfully", user})
})




// controller for getting user resumes
// GET: /api/users/resumes
export const getUserResumes = asyncHandler( async (req, res) => {
   
        const userId = req.userId;
        const resumes = await Resume.find({userId})
if(!resumes) throw new ApiError(404, "No resumes found for this user");
        return res.status(200).json({resumes})

    
})