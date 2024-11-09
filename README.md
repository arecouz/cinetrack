# 🎬 CineTrack

[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
[![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/react-%2320232a.svg?style=flat&logo=react&logoColor=%2361DAFB)](https://reactjs.org/)
[![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=flat&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Node.js](https://img.shields.io/badge/node.js-6DA55F?style=flat&logo=node.js&logoColor=white)](https://nodejs.org/)

> A full-stack web application for movie enthusiasts to search, track, and rate their favorite films.

## ✨ Features

- 🔍 **Search Movies** - Find movies by title using our comprehensive database
- 📝 **Track Movies** - Maintain watchlists and viewing history
- ⭐ **Rate Movies** - Share your opinions with a detailed rating system
- 📱 **Responsive Design** - Optimized for both mobile and desktop experiences
- 🔐 **User Authentication** - Secure login system to save your preferences

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or later)
- MongoDB (local or cloud instance)

### Frontend Setup

1. Clone the repository:
```bash
git clone https://github.com/your-username/cinetrack.git
cd cinetrack/client
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

Your app will be running at `http://localhost:5173` 🎉

### Backend Setup

1. Navigate to server directory:
```bash
cd cinetrack/server
```

2. Install dependencies:
```bash
npm install
```

3. Configure environment:
```bash
# Create .env file and add your configurations
cp .env.example .env
```

4. Start the server:
```bash
npm run dev
```

Server will be available at `http://localhost:3000` 🚀

## 🛠️ Tech Stack

### Frontend
- ⚛️ React
- 🛠️ Vite (Build tool)
- 💅 Tailwind CSS
- 🎨 Radix UI Components
- 🔄 Axios
- ⭐ @smastrom/react-rating
- 🔀 React Router

### Backend
- 📡 Node.js
- ⚡ Express
- 🗄️ MongoDB
- 🔗 Mongoose ODM
- 🔒 JWT Authentication
- 🔑 Bcrypt

## 📜 Available Scripts

### Client
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run lint     # Run ESLint
npm run preview  # Preview production build
```

### Server
```bash
npm start        # Start production server
npm run dev      # Start development server with nodemon
npm run test     # Run tests
```

## 🚢 Deployment

This project is configured for deployment on [fly.io](https://fly.io). Deployment files are included in the repository.

## 📱 Screenshots

<div align="center">
  <img src="https://via.placeholder.com/250x500?text=Mobile+View" alt="Mobile View" width="250"/>
  <img src="https://via.placeholder.com/250x500?text=Movie+Details" alt="Movie Details" width="250"/>
  <img src="https://via.placeholder.com/250x500?text=Watchlist" alt="Watchlist" width="250"/>
</div>

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 👏 Acknowledgments

- [The Movie Database (TMDb)](https://www.themoviedb.org/) for movie data
- [Radix UI](https://www.radix-ui.com/) for accessible components
- All our contributors and users!

---

<div align="center">
  Made with ❤️ by [Your Name]
</div>
