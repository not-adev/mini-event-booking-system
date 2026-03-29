export const logger = async (req, res, next) => {
    // Log request details
    console.log(`${req.method} request to ${req.url}`);
    
    // Call next() to move to the next middleware/route handler
    next();
};