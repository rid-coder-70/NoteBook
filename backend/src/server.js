import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import rateLimiter from "./middleware/rateLimiter.js";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors({
    origin: "http://localhost:5173", // ✅ FIXED "locahost" typo
    credentials: true,
}));

// Middleware
app.use(express.json());
app.use(rateLimiter);


// Routes
app.use("/api/notes", notesRoutes);

// Start server after DB connected
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("Server started on PORT:", PORT);
    });
});
