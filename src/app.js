import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

// Create the Express application instance.
const app = express();

// Configure Cross-Origin Resource Sharing (CORS) using the origin in environment variables.
// credentials: true allows cookies to be shared across domains when supported.
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));

// Parse incoming JSON request bodies and limit their size to 16 KB.
app.use(express.json({limit: "16kb"}));

// Parse URL-encoded form data and also limit its size.
app.use(express.urlencoded({extended: true, limit:
    "16kb"
}));

// Serve static files from the public directory.
app.use(express.static("public"));

// Parse cookies from incoming requests.
app.use(cookieParser());

// routes import
import userRouter from './routes/user.routes.js';

// routes declaration
app.use("/api/v1/users", userRouter);

export { app };