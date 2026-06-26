
# 🚀 Express.js Web Application

A simple Node.js and Express.js web application using EJS as a template engine, MongoDB for database connection, and Cookie Parser for handling cookies.

---

## 📌 Features

- Express.js Server Setup
- EJS Template Engine
- MongoDB Database Connection
- Environment Variables using Dotenv
- Static File Management
- Upload Folder Support
- Cookie Management
- Routing System
- MVC Folder Structure

---

## 🛠️ Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- EJS
- Dotenv
- Cookie Parser

---

## 📂 Project Structure

```bash
project/
│
├── configs/
│   ├── db.js
│   └── dotenv.js
│
├── routers/
│   └── index.js
│
├── uploads/
│
├── public/
│   ├── css/
│   ├── js/
│   └── images/
│
├── views/
│   └── *.ejs
│
├── app.js
├── package.json
├── .env
└── README.md
```

---

## ⚙️ Installation

### Step 1: Clone Repository

```bash
git clone https://github.com/yourusername/project-name.git
```

### Step 2: Move to Project Directory

```bash
cd project-name
```

### Step 3: Install Dependencies

```bash
npm install
```

---

## 📦 Required Packages

```bash
npm install express ejs mongoose dotenv cookie-parser
```

For development:

```bash
npm install nodemon --save-dev
```

---

## 🔧 Environment Variables

Create a `.env` file in the root directory.

```env
PORT=3000
MONGO_URL=mongodb://127.0.0.1:27017/your_database_name
JWT_SECRET=your_secret_key
```

---

## ▶️ Run Project

### Production Mode

```bash
npm start
```

### Development Mode

```bash
npm run dev
```

---

## 📝 Package.json Scripts

```json
"scripts": {
  "start": "node app.js",
  "dev": "nodemon app.js"
}
```

---

## 🌐 Server URL

```
http://localhost:3000
```

---

## 📄 Main Server File

```javascript
import express from "express";
import dotenv from "./configs/dotenv.js";
import router from "./routers/index.js";
import db from "./configs/db.js";
import cookieParser from "cookie-parser";

const app = express();
const port = dotenv.PORT || 3000;

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use('/uploads', express.static('uploads'));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/', router);

app.listen(port, () => {
    console.log("Server started.");
    console.log(`http://localhost:${port}`);
});
```

---

## 📌 API Routes

| Method | Route | Description |
|--------|--------|-------------|
| GET | / | Home Page |
| GET | /login | User Login |
| GET | /register | User Registration |
| POST | /login | Login User |
| POST | /register | Register User |

> Add more routes according to your project requirements.

---

## 📁 Static Files

### Public Folder

```javascript
app.use(express.static('public'));
```

Used for:

- CSS Files
- JavaScript Files
- Images

### Upload Folder

```javascript
app.use('/uploads', express.static('uploads'));
```

Used for:

- User Uploaded Images
- Documents
- Profile Pictures

---

## 🍪 Cookie Parser

```javascript
app.use(cookieParser());
```

Used for:

- Authentication Tokens
- Session Management
- User Preferences

---

## 🗄️ Database Connection

Example:

```javascript
mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("Database Connected"))
.catch(err => console.log(err));
```

---

## 🚀 Future Enhancements

- User Authentication using JWT
- Role Based Authentication
- Admin Dashboard
- File Upload System
- Password Reset Functionality
- Email Verification
- REST API Integration

---

## 👨‍💻 Author

**Dhaval Leelawala**

- Full Stack Developer
- MERN Stack Enthusiast

---

## 📜 License

This project is licensed under the MIT License.
