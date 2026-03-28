import Resume from "../models/Resume.js";
import ai from "../configs/ai.js";
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/AsyncHandler.js";

// controller for enhancing a resume's professional summary
// POST: /api/ai/enhance-pro-sum
export const enhanceProfessionalSummary = asyncHandler(async (req,res)=>{
 const { userContent } = req.body;

        if(!userContent){
           throw new ApiError(400, "Missing required fields!!!");
        }

       const response = await ai.chat.completions.create({
            model: process.env.OPENAI_MODEL,
            messages: [
                { role: "system", content: "You are an expert in resume writing. Your task is to enhance the professional summary of a resume. The summary should be 1-2 sentences also highlighting key skills, experience, and career objectives. Make it compelling and ATS-friendly. and only return text no options or anything else." },
                {
                    role: "user",
                    content: userContent,
                },
    ],
        })

if(!response || !response.choices || response.choices.length === 0) throw new ApiError(500, "Failed to get response from AI");

        const enhancedContent = response.choices[0].message.content;
        return res.status(200).json({enhancedContent})

})



