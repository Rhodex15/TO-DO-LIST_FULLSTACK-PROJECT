# 📝 TODO LIST APP — Task Management App

A modern, responsive task management application built with React, Tailwind CSS, Node.js, Express, and MongoDB. It allows users to create, track, update, and delete tasks through a clean, intuitive interface connected to a RESTful API and a MongoDB database.

---

## 🛠️ Technologies Used

- **React (ES6+):** Component-based UI architecture, reusable components, hooks, and state-driven rendering.
- **Tailwind CSS (v4):** Utility-first styling for building a responsive, modern, and visually appealing interface.
- **JavaScript (ES6+):** Asynchronous operations, array methods, destructuring, and modern JavaScript syntax.
- **Node.js:** JavaScript runtime used to build and execute the backend.
- **Express.js:** Backend framework used to create RESTful API endpoints and handle HTTP requests.
- **MongoDB:** NoSQL database used for persistent task storage.
- **Mongoose:** ODM used to define task schemas, interact with MongoDB, and manage database operations.
- **REST API:** HTTP-based communication between the frontend and backend for task management.

---

## ✨ Features

- **Task Management:** Create, retrieve, update, and delete tasks.
- **Persistent Storage:** Tasks are stored in MongoDB and remain available beyond individual sessions.
- **Task Completion Tracking:** Mark tasks as completed or pending.
- **Task Filtering:** Filter tasks by their completion status.
- **RESTful API:** Dedicated endpoints for performing CRUD operations on tasks.
- **Reusable Components:** Modular React components for cleaner organization and maintainability.
- **Responsive UI:** Layout designed to provide a consistent experience across different screen sizes.
- **Real-Time UI Updates:** React state updates dynamically in response to user interactions and API operations.

---

## 🛠️ Process & Development Story

I built this app to strengthen my understanding of full-stack development by taking a project from frontend implementation to backend integration and database persistence.

I started by building the user interface with React, breaking the application into reusable components and managing the application state using React hooks. I implemented task creation, completion toggling, deletion, and filtering, focusing on how React handles state changes and dynamically renders the UI.

Next, I developed the backend using Node.js and Express, creating a RESTful API to handle task operations. I structured the backend into routes, controllers, and models to separate responsibilities and make the application easier to maintain. I also implemented request handling and error management for API operations.

For data persistence, I integrated MongoDB using Mongoose, defining a task schema and connecting the API to the database. This allowed the application to move beyond static frontend state and store tasks persistently.

Finally, I connected the frontend to the backend using asynchronous HTTP requests and handled the loading, creation, updating, and deletion of tasks through API calls.

---

## 💡 What I Learnt

- **React State Management:** Developed a better understanding of `useState` and how state changes trigger React re-renders.
- **Component Architecture:** Learned how to break an application into reusable components and pass data and functions through props.
- **Immutable State Updates:** Applied the spread operator, `map()`, and `filter()` to update state without directly mutating existing data.
- **Frontend–Backend Communication:** Learned how the frontend communicates with a backend through HTTP requests and how to handle asynchronous operations using `fetch()` and `async/await`.
- **RESTful API Development:** Practiced implementing CRUD operations using HTTP methods such as GET, POST, PATCH, and DELETE.
- **Backend Architecture:** Gained experience separating routes, controllers, and database models to organize backend logic.
- **MongoDB & Mongoose:** Learned how to define schemas, create and retrieve documents, update records, and delete data from a database.
- **Full-Stack Integration:** Developed a clearer understanding of how React, Express, Node.js, and MongoDB work together to form a complete application.

---

## 🚀 How to Run the Project

### 1. Clone the Repository

```bash
git clone https://github.com/Rhodex15/TO-DO-LIST_FULLSTACK-PROJECT.git
```

### 2. Navigate to the Project Folder

```bash
cd TO-DO-LIST_FULLSTACK-PROJECT
```

### 3. Install Backend Dependencies

```bash
cd server
npm install
```

### 4. Configure Environment Variables

Create a `.env` file inside the `server` directory:

```env
MONGODB_URI=your_mongodb_connection_string
PORT=5000
```

### 5. Start the Backend Server

```bash
npm run dev
```

### 6. Install Frontend Dependencies

Open a new terminal:

```bash
cd client
npm install
```

### 7. Start the Frontend Development Server

```bash
npm run dev
```

Open the local URL provided by Vite in your terminal to use the application.

**Note:** Make sure your MongoDB connection is configured correctly before starting the backend.
