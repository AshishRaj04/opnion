import { ApiResponse } from "../utils/apiResponse";
import { asyncHandler } from "../utils/asyncHandler";

const dashboard = asyncHandler(async (req, res) => {
  return res
    .status(200)
    .json(new ApiResponse(200, { valid: true }, "user authorized"));
});

export {dashboard}