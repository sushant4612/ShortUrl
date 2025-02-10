import { z } from "zod";
import asyncHandler from "../utils/asyncHandler.js"
import ApiError from "../utils/ApiError.js";
import { nanoid } from "nanoid";
import { Url } from "../models/urls.model.js";
import ApiResponse from "../utils/ApiResponse.js";
import { User } from "../models/users.model.js";

const urlSchema = z.object({
    url: z.string().url()
})

const listUrl = asyncHandler(async (req, res) => {
    if(!req._id){
        return new ApiError(404, "Invalid Credentials");
    }

    const user = await User.findById(req._id);

    const urlIds = user.urls;
    let data = [];
    
    for(let i = 0; i < urlIds.length; i++){
        let urlId = urlIds[i];
        const url = await Url.findById(urlId);
        data.push({
            longUrl: url.url,
            shortUrl: `${process.env.URL}${url.shortId}`
        });
    }

    return res.status(200).json( new ApiResponse(200, data, "Url Recieved Successfully"));
})

const getShortUrl = asyncHandler(async (req, res) => {
    if(!urlSchema.safeParse(req.body).success){
        throw new ApiError(400, "url not valid");
    }

    let genratedUrl = ''

    const { url } = req.body;
    const shortId = nanoid(6);

    const existedUrl = await Url.findOne({url});

    if(existedUrl){
        console.log("Hello");
        console.log(req._id);
        
        if(req._id){
            await User.findByIdAndUpdate(req._id, 
                { $addToSet: {urls: existedUrl._id}}
            )
        }
        genratedUrl = `${process.env.URL}${existedUrl.shortId}`
        return res.status(200).json(new ApiResponse(200,genratedUrl,"Url Generated Succesfully"))
    }

    const urlObj = await Url.create({
        url,
        shortId
    })

    if(!urlObj){
        throw new ApiError(404, "Something went wrong");
    }

    genratedUrl = `${process.env.URL}${shortId}`
    if(req._id){
        await User.findByIdAndUpdate(req._id, 
            { $push: {urls: urlObj._id}}
        )
    }

    return res.status(200).json(new ApiResponse(200,genratedUrl,"Url Generated Succesfully"))
})

const handleRedirect = asyncHandler(async (req, res) => {
    const shortId = req.params.shortId;
    
    const url = await Url.findOne({shortId})

    if(!url){
        throw new ApiError(404, "Invalid url");
    }

    return res.redirect(url.url);
})

export {
    getShortUrl,
    handleRedirect,
    listUrl
}