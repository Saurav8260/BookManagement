# 📚 Bookstore RESTful API

A Node.js-based REST API for managing a collection of books. This project supports full CRUD operations and uses MongoDB as the database. It follows a modular folder structure using ES6 modules for scalability and maintainability.

---

## 🚀 Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB** with **Mongoose**
- **dotenv** – Environment variable management
- **nodemon** – For local development
- **ES6 Modules**

---

## 📁 Folder Structure

bookstore-api/
│
├── controllers/
│ └── bookController.js
├── models/
│ └── bookModel.js
├── routes/
│ └── bookRoutes.js
├── config/
│ └── db.js
├── .env
├── server.js
├── package.json
└── README.md



## ⚙️ Setup Instructions

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Saurav8260/BookManagement.git
  

2. **Install dependencies**:
  ```bash
   npm install

3.**Create a .env file in the root directory and add**:
```bash
   PORT=5001
   MONGO_URI=Your db url


4.**Run the development server**:
  ```bash
     npm run dev

5.**Sample .env File**:
```bash
   PORT=5001
   MONGO_URI=your mongodb url


6.**API Endpoints**:
Method Endpoint	Description
POST	/books	Create a new book
GET	/books	Get all books
GET	/books/:id	Get book by ID
PUT	/books/:id	Update a book
DELETE	/books/:id	Delete a book"# managment" 
