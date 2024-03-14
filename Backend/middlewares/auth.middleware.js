import { apiError } from "../utils/apiError";
import { asyncHandler } from "../utils/asyncHandler";

const verifyJWT = asyncHandler(async (req, res, next) => {
  try {
    const token =
      req.cookie?.accessToken ||
      req.headers("Authorization").replace("Bearer ", "");
    if(!token){
        throw new apiError(401,"Unautorize request");
    }
  } catch (error) {}
});

export { verifyJWT };
