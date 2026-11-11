import express from "express";
import cors from "cors";
import "dotenv/config"
import connectDB from "./config/db.js";
import taskRoutes from "./routes/taskRoutes.js"


const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/tasks", taskRoutes);

app.get("/", (req, res) => {
    res.send("Server is running")
});

async function startServer() {
    try{
        await connectDB()
        
        const PORT = process.env.PORT || 5000;
        
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        })
    }
    catch(error){
        console.error("Failed to start server:", error);
        process.exit(1);
    }
};

startServer()


