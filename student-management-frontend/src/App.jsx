import React, { useEffect, useState } from "react";
import axios from "axios";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";

const App = () => {
  const [students, setStudents] = useState([]);

  // Get all students when the page loads
  useEffect(() => {
    const fetchStudents = async () => {
      const response = await axios.get("http://localhost:5000/api/students");
      setStudents(response.data);
    };
    fetchStudents();
  }, []);

  // Add new student and refresh list instantly
  const handleStudentAdded = (newStudent) => {
    setStudents([...students, newStudent]);
  };

  return (
    <div className="min-h-screen bg-teal-100 p-6">
      <h1 className="text-3xl font-bold text-center text-pink-800 mb-8">
        🎓 Student Management System
      </h1>

      <StudentForm onStudentAdded={handleStudentAdded} />
      <StudentList students={students} />
    </div>
  );
};

export default App;
