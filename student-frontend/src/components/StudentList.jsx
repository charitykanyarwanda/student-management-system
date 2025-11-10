import React from 'react';

const StudentList = ({ students }) => {
    


return(
   <div className='bg-teal-50 p-6 rounded-2xl shadow-md w-full max-w-2xl mx-auto mt-6'>
    <h2 className='text-xl font-bold text-teal-700 mb-4 text-center'>Student List</h2>
    {students===0 ?(
        <p className='text-teal-500 text-center'>No student found</p>
    ):(
        <ul className='space-y-3'>
            {students.map((student)=>(
                <li key={student._id} className='p-3 bg-white rounded-lg shadow-sm flex justify-between items-center'>
                    <div>
                        <p className="font-semibold">{student.name}</p>
                        <p className="text-sm text-teal-500">{student.email}</p>
                    </div>
                    <div className='text-right'>
                        <p className='text-sm text-teal-600'>{student.course}</p>
                        <p className='text-sm text-teal-400'>{student.year}</p>
                    </div>
                    

                </li>
            ))}
        </ul>
    )}
   </div>
    
);
}

export default StudentList;
