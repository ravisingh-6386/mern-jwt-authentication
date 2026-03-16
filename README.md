# Full Stack Authentication App

A complete JWT-based authentication app with **React** frontend and **Node.js/Express** backend.

## Tech Stack

| Layer    | Technology                                        |
|----------|---------------------------------------------------|
| Frontend | React 18, Vite, React Router v6, Axios            |
| Backend  | Node.js, Express, Mongoose, bcryptjs, jsonwebtoken|
| Database | MongoDB                                           |
| Auth     | JWT (JSON Web Tokens)                             |

---

## Features
- **Signup** — register with name, email & password (hashed with bcrypt)
- **Login** — validate credentials and receive a JWT
- **JWT Auth** — token stored in `localStorage`, sent in every request header
- **Protected Routes** — `/dashboard` only accessible when authenticated
- **Persistent Sessions** — token re-validated on page refresh

---

## Project Structure

```
Full Stack Authentication App/
├── backend/
│   ├── config/db.js          # MongoDB connection
│   ├── middleware/auth.js     # JWT verification middleware
│   ├── models/User.js         # Mongoose User model
│   ├── routes/auth.js         # /signup  /login  /me
│   ├── routes/protected.js    # /dashboard (JWT-protected)
│   ├── server.js              # Express app entry point
│   ├── .env                   # Environment variables
│   └── package.json
└── frontend/
    └── src/
        ├── context/AuthContext.jsx   # Global auth state
        ├── components/
        │   ├── Navbar.jsx
        │   └── PrivateRoute.jsx
        ├── pages/
        │   ├── Login.jsx
        │   ├── Signup.jsx
        │   └── Dashboard.jsx
        ├── App.jsx
        └── App.css
```

---

## Setup & Run

### Prerequisites
- [Node.js](https://nodejs.org/) v18+
- [MongoDB](https://www.mongodb.com/try/download/community) running locally **or** a [MongoDB Atlas](https://www.mongodb.com/atlas) connection string

---

### 1. Backend

```bash
cd backend
# (dependencies already installed)
# Edit .env if needed (MONGO_URI, JWT_SECRET)
npm run dev       # development with nodemon
# or
npm start         # production
```

The API will be available at `http://localhost:5000`.

#### API Endpoints

| Method | Endpoint                   | Auth | Description               |
|--------|----------------------------|------|---------------------------|
| POST   | /api/auth/signup           | ✗    | Register new user         |
| POST   | /api/auth/login            | ✗    | Login & get JWT token     |
| GET    | /api/auth/me               | ✓    | Get current user profile  |
| GET    | /api/protected/dashboard   | ✓    | Protected dashboard data  |

---

### 2. Frontend

```bash
cd frontend
npm run dev
```

Open `http://localhost:5173` in your browser.

---

### 3. Environment Variables (backend `.env`)

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/fullstack_auth
JWT_SECRET=super_secret_jwt_key_change_this_in_production_2024
JWT_EXPIRE=7d
```

> **Security note:** Change `JWT_SECRET` to a long, random string before deploying to production.

---

## How JWT Auth Works

```
User submits credentials
       │
       ▼
Server validates → bcrypt.compare(password)
       │
       ▼
Server signs JWT (jwt.sign) with secret key
       │
       ▼
Token returned to client → stored in localStorage
       │
       ▼
Client sends token in header: Authorization: Bearer <token>
       │
       ▼
Server middleware verifies token on every protected request
       │
       ▼
Access granted / denied
```
