import express from "express";
import studentRoutes from "./routes/studentRoutes";
import connectDB from "./config/db";

const app = express();
app.use(express.json());

connectDB();

app.use("/students", studentRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
