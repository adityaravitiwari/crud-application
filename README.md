# Poetry Management Application

## Project Overview

This project is a full-stack Poetry Management Application built using React.js, Node.js, Express.js, MongoDB Atlas, Mongoose, and Axios.

The application allows users to manage poetry records by performing CRUD operations. Each poetry record contains:

* Title
* Poetry Content
* Poet Name

Users can add, view, search, update, and delete poetry records through a simple user interface.

---

# Database Schema

The application uses the following MongoDB schema:

```javascript
const todoSchema = new mongoose.Schema(
{
    title:{
        type:String,
        required:true,
    },

    poetry:{
        type:String,
        required:true,
    },

    poet:{
        type:String,
        required:true,
    }

},
{ timestamps:true }
);
```

### Field Description

| Field     | Description          |
| --------- | -------------------- |
| title     | Title of the poetry  |
| poetry    | Poetry content       |
| poet      | Name of the poet     |
| createdAt | Record creation time |
| updatedAt | Record update time   |

---

# Features

* Add a new poetry record
* View all poetry records
* Search poetry by ID
* Update poetry details
* Delete poetry records
* Dynamic UI updates after CRUD operations

---

# API Endpoints

| Method | Endpoint       | Description                |
| ------ | -------------- | -------------------------- |
| POST   | /api/tasks     | Create a new poetry record |
| GET    | /api/tasks     | Get all poetry records     |
| GET    | /api/tasks/:id | Get poetry by ID           |
| PUT    | /api/tasks/:id | Update poetry              |
| DELETE | /api/tasks/:id | Delete poetry              |

---

# Setup

## Backend

```bash
npm install
npm start
```

Runs on:

```txt
http://localhost:5000
```

## Frontend

```bash
npm install
npm run dev
```

Runs on:

```txt
http://localhost:5173
```

---

# Environment Variables

Create a `.env` file inside the backend folder:

```env
MONGO_URL=your_mongodb_connection_string
PORT=5000
```

---

# Technologies Used

* React.js
* Axios
* Node.js
* Express.js
* MongoDB Atlas
* Mongoose

---

# Challenges Faced

While implementing the project, I faced a MongoDB Atlas connection issue. Although the connection string was correct, Node.js was using local DNS, which caused errors such as:

```txt
querySrv ECONNREFUSED
querySrv ETIMEOUT
```

After debugging the issue, I configured Google DNS in the server:

```javascript
const dns = require("dns");

dns.setServers(["8.8.8.8", "8.8.4.4"]);
```

After this change, MongoDB Atlas connected successfully.

Another challenge was integrating the React frontend with backend APIs and updating the UI dynamically after Create, Update, Delete, and Search operations.

---



# Deployment

Frontend (Netlify):

```txt
(https://poetrrry.netlify.app/)
```




---

# Conclusion

This project helped me understand CRUD operations, REST APIs, MongoDB Atlas integration, React frontend integration, and communication between frontend and backend using Axios. It also helped me learn how to debug real-world issues such as MongoDB DNS connection problems.
