CineTrack - Movie Search, Track, and Rate App
CineTrack is a full-stack web application that allows users to search, track, and rate movies. The app is built using React, Vite, and Tailwind CSS on the client-side, and Node.js with Express and MongoDB on the server-side. It uses APIs to fetch movie data, and users can log in to save their movie ratings and preferences.

Features
Search Movies: Search for movies by title.
Track Movies: Keep a list of movies you've watched, plan to watch, or rated.
Rate Movies: Rate movies you've watched using a rating system.
Responsive Design: Optimized for both mobile and desktop devices.

Prerequisites
Ensure that you have the following installed on your machine:
Node.js (v16 or later)

bash
Copy code
git clone https://github.com/your-username/cinetrack.git
Navigate to the cinetrack-client directory:

bash
Copy code
cd cinetrack/client
Install dependencies:

bash
Copy code
npm install

bash
Copy code
npm run dev

The app will be available at http://localhost:5173.

Scripts
dev: Start the development server using Vite.
build: Build the app for production.
lint: Run ESLint to check for code quality issues.
preview: Preview the built app locally.
Server Setup
The server-side is built using Express and MongoDB.

Prerequisites
Ensure that you have the following installed on your machine:

Node.js
MongoDB (local or cloud instance)
Installation
Navigate to the cinetrack-server directory:

bash
Copy code
cd cinetrack/server
Install dependencies:

bash
Copy code
npm install
Set up environment variables:

Create a .env file in the root of the cinetrack-server directory and configure your environment variables, including MongoDB URI and JWT secret.
Start the server:

bash
Copy code
npm run dev
This will start the server using nodemon in development mode, and the server will be available at http://localhost:3000.

Scripts
start: Start the server in production mode.
start:test: Start the server in test mode.
dev: Start the server in development mode with nodemon.
test: Run server-side tests.
Development
Client Development
The client uses React with functional components, React Hooks, and React Router for routing. The app is styled using Tailwind CSS and integrates with Radix UI for accessible components. State management is handled using React's built-in useState and useEffect.

Server Development
The server is built with Node.js, Express, and MongoDB. It provides endpoints for user authentication (JWT-based), fetching movie data, storing movie ratings, and tracking movie lists.

Running Locally
Client: Run the client locally using npm run dev.
Server: Run the server locally using npm run dev in the server directory.

Deployment
Files for deployment on fly.io.

React
Vite (Build tool)
Tailwind CSS (Styling)
Radix UI (Components)
Axios (HTTP requests)
@smastrom/react-rating (Rating UI)
React Router (Routing)
Backend:

Node.js
Express (API server)
MongoDB (Database)
Mongoose (ODM)
JWT (Authentication)
Bcrypt (Password hashing)
License
This project is licensed under the ISC License. See the LICENSE file for details.
