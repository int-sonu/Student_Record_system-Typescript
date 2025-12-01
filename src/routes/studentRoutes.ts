import express from "express";
import {createStudent,getStudents,getStudentById,updateStudent,deleteStudent
} from "../controllers/studentController";

const router = express.Router();

router.get("/", async (req, res) => {
    res.json(await getStudents());
});

router.get("/:id", async (req, res) => {
    const student = await getStudentById(req.params.id);
    res.json(student || { message: "Student not found" });
});

router.post("/", async (req, res) => {
    const student = await createStudent(req.body);
    res.status(201).json(student);
});

router.put("/:id", async (req, res) => {
    const updated = await updateStudent(req.params.id, req.body);
    res.json(updated || { message: "Student not found" });
});

router.delete("/:id", async (req, res) => {
    const deleted = await deleteStudent(req.params.id);
    res.json({ success: deleted ? true : false });
});

export default router;
