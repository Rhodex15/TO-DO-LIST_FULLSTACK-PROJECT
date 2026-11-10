import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Todo API is running");
});

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
})