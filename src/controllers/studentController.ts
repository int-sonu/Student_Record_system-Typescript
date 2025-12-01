import Student from "../models/Student";

export const createStudent = async (data: any) => {
    const student = await Student.create(data);
    return student;
};

export const getStudents = async () => {
    return await Student.find();
};

export const getStudentById = async (id: string) => {
    return await Student.findById(id);
};

export const updateStudent = async (id: string, data: any) => {
    return await Student.findByIdAndUpdate(id, data, { new: true });
};

export const deleteStudent = async (id: string) => {
    return await Student.findByIdAndDelete(id);
};
