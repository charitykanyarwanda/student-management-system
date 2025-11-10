import React, {useState} from 'react';
import axios from 'axios';

const StudentForm = ({onStudentAdded})=>{
    const [name, setName]= useState("");
    const [email, setEmail]= useState("");
    const [course, setCourse]=useState("")
    const[year, setYear]= useState(0);


   const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/students", {
        name,
        email,
        course,
        year,
      });

      // ✅ Moved inside the try block so `response` exists
      onStudentAdded(response.data);

      // ✅ Reset form inputs after successful add
      setName("");
      setEmail("");
      setCourse("");
      setYear("");
    } catch (error) {
      console.error("Error adding student:", error);
    }
  };


return(
    <form 
    onSubmit={handleSubmit}
    className='bg-teal-500 rounded-lg shadow-md p-3'
    >
        <h1 className='text-xl font-bold bg-linear-to-r from-purple-500 to-pink-600 text-black text-center'>Adding a New Student</h1>


        {/* Name */}
        <input
        text="text"
        placeholder='Name'
        value={name}
        onChange={(e)=>setName(e.target.value)}
        className='w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400'
        />

        {/*email*/}
        <input
        text='email'
        placeholder='Email'
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        className='w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400'
        />

        {/*course*/}
        <input
        name='text'
        placeholder='Course'
        value={course}
        onChange={(e)=>setCourse(e.target.value)}
        className='w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400'
        />

        {/* Year */}
        <input
        text="number"
        placeholder='year'
        value={year}
        onChange={(e)=>setYear(e.target.value)}
        className='w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400'
        />

        {/* button */}
        <div className='flex justify-center'>
        <button type='submit' className='bg-purple-500 border rounded-lg text-white hover:bg-pink-500 transition w-50 h-10'>Add
        </button>
        </div>
</form>
);
};

export default StudentForm;

