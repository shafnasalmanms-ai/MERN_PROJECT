# 🎓 Student Management System

A full-stack web application to manage student records — add, view, edit, and delete students.

## 🛠️ Tech Stack

| Layer | Technology |
|---------|------------|
| Frontend | React.js, Axios |
| Backend | Node.js, Express.js |
| Database | MongoDB (via Mongoose) |

## 📁 Project Structure

```text
student-management/
├── client/
│   ├── public/
│   └── src/
│       ├── App.js
│       └── App.css
│
└── server/
    ├── index.js
    ├── models/
    │   └── Student.js
    └── routes/
        └── studentRoutes.js
```

## ⚙️ Prerequisites

- Node.js (v16 or above)
- MongoDB
- npm

## 🚀 Getting Started

### 1. Start Backend

```bash
cd server
npm install
node index.js
```

Server runs at:

```text
http://localhost:5000
```

### 2. Start Frontend

```bash
cd client
npm install
npm start
```

Frontend runs at:

```text
http://localhost:3000
```

## 📡 API Endpoints

| Method | Endpoint | Description |
|----------|------------|-------------|
| GET | /students | Get all students |
| POST | /students | Add a student |
| PUT | /students/:id | Update a student |
| DELETE | /students/:id | Delete a student |

## 🧾 Student Model

| Field | Type | Required |
|---------|--------|----------|
| name | String | Yes |
| usn | String | Yes |
| email | String | No |
| branch | String | No |

## ✨ Features

- Add students
- View students
- Edit students
- Delete students

## 👤 Author

Built as a beginner MERN Stack CRUD project using MongoDB, Express.js, React.js, and Node.js.
