User Directory Full Stack   Application

Project Overview

This is a Full Stack CRUD (Create, Read, Update, Delete) application built using:

React.js (Frontend)
Node.js
Express.js (Backend)
CSS

The application allows users to:

Add Users
Fetch Users
Update Users
Delete Users
Validate Input Fields

The backend uses in-memory storage for storing user data.

Technologies Used
Frontend
React.js
CSS
Fetch API

Backend
Node.js
Express.js
CORS
Nodemon

Features
Backend Features
REST API Creation
Async/Await Usage
In-Memory Data Storage
Error Handling
CRUD Operations

Frontend Features
User Form
Input Validation
Fetch User List
Edit User Feature
Delete User Feature
Confirmation Popup Before Delete
Responsive UI Styling

API Endpoints
Create User
POST /users

Request Body
{
  "name": "Rahul",
  "email": "rahul@gmail.com"
}

Fetch Users
GET /users

Update User
PUT /users/:id

Delete User
DELETE /users/:id

Project Structure
project-folder/
│
├── backend/
│   ├── server.js
│   ├── package.json
│
├── frontend/
│   ├── src/
│   │   ├── App.js
│   │   ├── App.css
│   │   ├── index.js
│   ├── package.json
│
└── README.md

Installation Steps
Clone Repository
git clone <repository-url>

Backend Setup
cd backend
npm install
npm run dev

Backend runs on:
http://localhost:5000
Frontend Setup
cd frontend
npm install
npm start

Frontend runs on:
http://localhost:3000

Validation Implemented
Empty field validation
Name should contain only letters
Basic email validation

CRUD Operations
Operation	Method
Create	POST
Read	GET
Update	PUT
Delete	DELETE

Future Improvements
MongoDB Integration
Authentication
Responsive Mobile UI
Search Feature
Pagination

Author
Munnuru Rahul