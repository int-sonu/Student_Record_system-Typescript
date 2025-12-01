import mongoose, { Connection } from "mongoose";

export interface Student extends Connection {
    id: number;
    Name: string;
    age: number;
    grade: string;
    course: string;
    enrollment_status: string;
}

const studentSchema = new mongoose.Schema<Student>({

    id: { type: Number, required: true },
    Name: { type: String, required: true },
    age: { type: Number, required: true },
    grade: { type: String, required: true },
    course: { type: String, required: true },
    enrollment_status: { type: String, required: true },
})

export default mongoose.model<Student>("Student", studentSchema);
