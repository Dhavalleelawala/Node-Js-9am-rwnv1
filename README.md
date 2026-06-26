# 📋 Todo App

A simple and responsive Todo Application built with **React.js**, **Axios**, and **JSON Server**. The application allows users to create, view, and delete todos through REST APIs.

![React](https://img.shields.io/badge/React-19-blue?logo=react)
![Axios](https://img.shields.io/badge/Axios-API-orange)
![JSON Server](https://img.shields.io/badge/JSON--Server-REST-green)
![License](https://img.shields.io/badge/License-MIT-yellow)

---

## 🚀 Features

- ➕ Add New Todo
- 📋 Display All Todos
- ❌ Delete Todo
- 🔄 Real-Time Data Updates
- 🌐 REST API Integration
- 📱 Responsive UI with Bootstrap

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Vite
- Bootstrap 5
- Axios

### Backend
- JSON Server (Fake REST API)

---

## 📂 Project Structure

```bash
todo-app/
│
├── public/
├── src/
│   ├── api/
│   │   └── apiInstence.js
│   ├── assets/
│   ├── App.jsx
│   └── main.jsx
│
├── db.json
├── package.json
├── vite.config.js
├── README.md
└── .gitignore
```

---

## ⚙️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/todo-app.git
```

### 2. Navigate to Project Directory

```bash
cd todo-app
```

### 3. Install Dependencies

```bash
npm install
```

---

## 📦 Install Required Packages

```bash
npm install axios bootstrap
npm install json-server --save-dev
```

---

## 🗄️ Setup Database

Create a `db.json` file in the root directory:

```json
{
  "todos": []
}
```

---

## ▶️ Start JSON Server

```bash
npx json-server --watch db.json --port 3000
```

API URL:

```bash
http://localhost:3000/todos
```

---

## ▶️ Start React Application

```bash
npm run dev
```

Application URL:

```bash
http://localhost:5173
```

---

## 🔗 API Endpoints

| Method | Endpoint | Description |
|---------|-----------|-------------|
| GET | `/todos` | Get all todos |
| POST | `/todos` | Create a new todo |
| DELETE | `/todos/:id` | Delete a todo |

---

## 📸 Screenshots

### Add Todo

- Enter a todo title.
- Click **Add Todo**.

### Todo List

- Displays all todos in a table.

### Delete Todo

- Click the **Delete** button to remove a todo.

---

## 💻 Example Data

```json
[
  {
    "id": "1",
    "title": "Learn React"
  },
  {
    "id": "2",
    "title": "Learn Axios"
  }
]
```

---

## ⚙️ Axios Configuration

```javascript
import axios from "axios";

const apiInstence = axios.create({
  baseURL: "http://localhost:3000"
});

export default apiInstence;
```

---

## 🧩 Project Functionalities

### Create Todo

```javascript
await apiInstence.post('/todos', todo);
```

### Get All Todos

```javascript
await axios.get('http://localhost:3000/todos');
```

### Delete Todo

```javascript
await apiInstence.delete('/todos/' + id);
```

---

## 🔮 Future Improvements

- ✏️ Edit Todo
- ✅ Mark Todo as Completed
- 🔍 Search Todo
- 📅 Add Due Date
- 🌙 Dark Mode
- 🔐 User Authentication
- ☁️ MongoDB Integration

---

## 👨‍💻 Author

**Dhaval Leelawala**

- MERN Stack Developer
- React.js & Node.js Enthusiast

### Connect with Me

- GitHub: https://github.com/your-username
- LinkedIn: https://linkedin.com/in/your-profile

---

## 📜 License

This project is licensed under the **MIT License**.

---

⭐ If you found this project useful, please give it a **Star** on GitHub!
