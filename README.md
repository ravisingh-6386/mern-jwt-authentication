# MERN JWT Authentication

Full stack authentication app built with React, Node.js, Express, MongoDB, and JWT. It includes signup, login, protected routes, persistent auth state, and a light/dark mode UI.

## Features

- User signup with hashed passwords via `bcryptjs`
- User login with JWT token generation
- Protected frontend routing for authenticated users only
- Protected backend routes with JWT verification middleware
- Persistent login state using `localStorage`
- Light and dark mode toggle with saved preference

## Tech Stack

| Layer | Stack |
| --- | --- |
| Frontend | React, Vite, React Router, Axios |
| Backend | Node.js, Express |
| Database | MongoDB with Mongoose |
| Auth | JWT, bcryptjs |

## Project Structure

```text
Full Stack Authentication App/
|- backend/
|  |- config/db.js
|  |- middleware/auth.js
|  |- models/User.js
|  |- routes/auth.js
|  |- routes/protected.js
|  |- .env.example
|  |- package.json
|  `- server.js
|- frontend/
|  |- src/
|  |  |- components/
|  |  |- context/
|  |  |- pages/
|  |  |- App.jsx
|  |  |- App.css
|  |  `- main.jsx
|  `- package.json
|- .gitignore
`- README.md
```

## Local Setup

### Prerequisites

- Node.js 18 or newer
- MongoDB running locally, or a MongoDB Atlas connection string

### 1. Configure the backend

Create `backend/.env` using `backend/.env.example`.

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/fullstack_auth
JWT_SECRET=replace_with_a_secure_random_secret
JWT_EXPIRE=7d
```

### 2. Install dependencies

```bash
cd backend
npm install

cd ../frontend
npm install
```

### 3. Start the app

Backend:

```bash
cd backend
npm run dev
```

Frontend:

```bash
cd frontend
npm run dev
```

Open `http://localhost:5173` in your browser.

## API Endpoints

| Method | Route | Auth Required | Purpose |
| --- | --- | --- | --- |
| POST | `/api/auth/signup` | No | Register a new user |
| POST | `/api/auth/login` | No | Login and receive a JWT |
| GET | `/api/auth/me` | Yes | Fetch the current user |
| GET | `/api/protected/dashboard` | Yes | Fetch protected dashboard data |

## JWT Flow

```text
User submits credentials
-> Server validates credentials
-> Server signs a JWT
-> Client stores the token in localStorage
-> Client sends Authorization: Bearer <token>
-> Backend verifies token before serving protected data
```

## Notes

- `backend/.env` is ignored by Git and should never be committed.
- `node_modules` folders are ignored.
- Update `JWT_SECRET` before deploying the backend.
