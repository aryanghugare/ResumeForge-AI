import { asyncHandler } from "../utils/AsyncHandler.js"
import { ApiError } from "../utils/ApiError.js"
import Resume from "../models/Resume.js"
import imagekit from "../configs/imageKit.js"
import fs from 'fs';



export const createResume = asyncHandler(async(req,res)=>{
const userId = req.userId;
        const {title} = req.body;

        // create new resume
        const newResume = await Resume.create({userId, title})
            if(!newResume) throw new ApiError(500, "Failed to create resume")
        // return success message
        return res.status(201).json({message: 'Resume created successfully', resume: newResume})


})


export const deleteResume = asyncHandler(async(req,res)=>{

const userId = req.userId;
        const {resumeId} = req.params;

       await Resume.findOneAndDelete({userId, _id: resumeId})

        // return success message
        return res.status(200).json({message: 'Resume deleted successfully'})


})


export const getResumeById = asyncHandler(async(req,res)=>{
const userId = req.userId;
        const {resumeId} = req.params;

       const resume = await Resume.findOne({userId, _id: resumeId})

       if(!resume){
      throw new ApiError(404, "Resume not found");
       }

        resume.__v = undefined;
        resume.createdAt = undefined;
        resume.updatedAt = undefined;

        return res.status(200).json({resume})



})



export const getPublicResumeById = asyncHandler(async(req,res)=>{

const { resumeId } = req.params;
        const resume = await Resume.findOne({public: true, _id: resumeId})

        if(!resume){
       throw new ApiError(404, "Resume not found");
       }

       return res.status(200).json({resume})


})


// controller for updating a resume 
// PUT: /api/resumes/update 


export const updateResume = asyncHandler(async(req,res)=>{
 const userId = req.userId;
        const {resumeId, resumeData, removeBackground} = req.body
        const image = req.file;
        
        let resumeDataCopy; 
        if(typeof resumeData === 'string'){
            resumeDataCopy = await JSON.parse(resumeData)
        }else{
            resumeDataCopy = structuredClone(resumeData)
        }

        if(image){
            

            const imageBufferData = fs.createReadStream(image.path)

            const response = await imagekit.files.upload({
                            file: imageBufferData,
                            fileName: 'resume.png',
                            folder: 'user-resumes',
                             transformation: {
                                pre: 'w-300,h-300,fo-face,z-0.75' + (removeBackground ? ',e-bgremove' : '')
                             }
                            });

            resumeDataCopy.personal_info.image = response.url
        }

       const resume = await Resume.findByIdAndUpdate({userId, _id: resumeId}, resumeDataCopy, {new: true})

       return res.status(200).json({message: 'Saved successfully', resume})




})