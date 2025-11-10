Student Management System

A full-stack Student Management System built with React, Vite, Tailwind CSS, Node.js, and MongoDB. This application allows users to add and view student records with persistent storage, demonstrating modern frontend and backend development practices.

🛠️ Features (Current Version)

Add Students – Create new student records with name, email, course, and year.

View Students – Display all students in a dynamic, responsive table.

Full-Stack Functionality – Frontend connected to a Node.js backend with MongoDB.

Responsive Design – Built with Tailwind CSS for desktop and mobile.

State Management – React useState and API calls for managing application data.

📂 Project Structure
student-management-system/
├─ student-management-backend/
│  ├─ controllers/
│  ├─ models/
│  ├─ routes/
│  ├─ server.js
│  └─ package.json
├─ student-management-frontend/
│  ├─ public/
│  ├─ src/
│  │  ├─ components/
│  │  ├─ App.jsx
│  │  ├─ main.jsx
│  │  └─ index.css
│  ├─ package.json
│  └─ vite.config.js
├─ .gitignore
└─ README.md

⚙️ Technologies Used

Frontend: React, Vite, Tailwind CSS, JavaScript

Backend: Node.js, Express.js

Database: MongoDB (NoSQL)

HTTP Requests: Axios for API calls between frontend and backend

🚀 Installation
Backend Setup

Navigate to the backend folder:

cd backend


Install dependencies:

npm install


Create a .env file and add your MongoDB URI:

MONGO_URI=your_mongodb_connection_string
PORT=5000


Start the backend server:

npm run dev

Frontend Setup

Navigate to the frontend folder:

cd frontend


Install dependencies:

npm install


Start the development server:

npm run dev


Open your browser at http://localhost:5173 (or the URL shown in the terminal).

📝 Usage

Add a new student using the Student Form.

View all students in the Student List table (data fetched from MongoDB).

Future functionality: Editing and deleting student records will be implemented in later updates.

🌟 Future Enhancements

Update Students – Edit Existing Student Information.

Delete Students – Remove student records permanently.

Search and Filter – Easily find students in the list.

Authentication & Roles – Restrict actions for secure access.

Deployment – Deploy full-stack app to cloud platforms.

👨‍💻 Contributing

Fork the repository.

Create a new branch: git checkout -b feature-name.

Commit your changes: git commit -m "Add some feature".

Push to your branch: git push origin feature-name.

Open a Pull Request.

📄 License

This project is licensed under the MIT License – see the LICENSE
 file for details.

📧 Contact

Created by Charity Uwera – reach me at charityuwera20@gmail.com
