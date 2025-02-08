import ApiResponse from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";

const healthCheck = asyncHandler(async (req, res) => {
    return res.status(200).send(new ApiResponse(200,"Ok", "Health check passed"))
})

export default healthCheck