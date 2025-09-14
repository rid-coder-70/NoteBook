import ratelimit from "../config/upstash.js";

const rateLimiter = async (req, res, next) => {
  try {
    // const ip = req.ip ?? "global"; // track requests by client IP
    const result = await ratelimit.limit("my-rate-limit");

    // If over the limit, return 429
    if (!result.success) {
      return res.status(429).json({
        message: "Too many requests, please try again later",
        limit: result.limit,
        remaining: result.remaining,
        reset: result.reset, // unix timestamp
      });
    }


    next();
  } catch (error) {
    console.error("Rate limit error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export default rateLimiter;
