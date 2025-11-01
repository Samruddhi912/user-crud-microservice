# User CRUD Microservice (Node.js + Express + SQLite)

A lightweight microservice for managing user records using Node.js, Express.js, and SQLite.  
This project demonstrates modular microservice-style architecture, SQL-based storage, and REST API design with proper validation and error handling.

---

## 🚀 Features

✅ CRUD operations for user data  
✅ Microservice-style folder structure  
✅ SQL-based storage using SQLite  
✅ Express.js REST APIs  
✅ Postman-tested endpoints  
✅ Modular architecture (controllers, services, routes)  
✅ Easy to extend and deploy  

---

## 🏗️ Tech Stack

- **Node.js**
- **Express.js**
- **SQLite3**
- **Postman** (API testing)
- **Nodemon** (dev environment)

---

## 📂 Project Structure
```bash
user-crud-microservice/
├─ controllers/
│ └─ userController.js
├─ routes/
│ └─ users.js
├─ services/
│ └─ userService.js
├─ models/
│ └─ userModel.sql (optional)
├─ db.js
├─ server.js
└─ package.json
```
---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/yourusername/user-crud-microservice.git
cd user-crud-microservice
```

2️⃣ Install dependencies
```bash
npm install
```

3️⃣ Start the server
```bash
npm run dev     # development with nodemon
```
or
```bash
npm start       # production mode
```

✅ Server runs on:
```bash
http://localhost:3000
```

A users.db file will be auto-created for SQLite.

🗄️ Database Schema (users table)
```bash
CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  phone TEXT,
  role TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

🧪 API Endpoints
➤ Create User

POST /api/users
Request:

```bash
{
  "name": "Sam",
  "email": "sam@example.com",
  "phone": "9876543210",
  "role": "admin"
}
```

➤ Get All Users

GET /api/users

➤ Get User by ID

GET /api/users/:id

➤ Update User

PUT /api/users/:id
Request:
```bash
{
  "phone": "9999999999"
}
```

➤ Delete User

DELETE /api/users/:id

✅ Sample cURL Commands

Create User:

```bash
curl -X POST http://localhost:3000/api/users \
-H "Content-Type: application/json" \
-d '{"name":"Sam","email":"sam@example.com","phone":"9876543210","role":"admin"}'
```

Get All Users:

```bash
curl http://localhost:3000/api/users
```

🧱 Architecture Overview

This project follows a microservice-style structure:

Routes → handle endpoint mapping

Controllers → validate input, structure responses

Services → contain business logic

DB Helper (db.js) → interacts with SQLite database

This separation makes the service maintainable, scalable, and production-friendly.

🌱 Future Enhancements

✅ Replace SQLite with PostgreSQL

✅ Add JWT authentication

✅ Add request validation using Joi

✅ Add unit tests (Jest)

✅ Dockerize the service

✅ Deploy on AWS / Render

👩‍💻 Author

Samruddhi Mahesh Kadam

Full Stack Developer | Backend Engineer
