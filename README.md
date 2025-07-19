
# 💖 My Love App - Full Stack Relationship Diary

A personalized full-stack relationship journaling and memory app, built with ❤️ using **React**, **Tailwind**, **Vite**, **Node.js**, **Express**, and **MongoDB**. Designed for couples to document love quotes, special dates, galleries, and memories — all in a secure, elegant, and responsive interface.

---

## 🧩 Project Structure

```bash
loveapp/
├── frontend/      → React + Tailwind UI (Vite)
├── backend/       → Node.js + Express API (Netlify Functions ready)
````

---

## ✨ Features

### 🌸 Frontend (`loveapp`)

* 💖 Responsive and animated UI built with **Tailwind CSS**
* 🎨 Stunning pages:

  * **Landing Page**
  * **Love Quotes**
  * **Photo Gallery**
  * **Timeline & Calendar Events**
* 🌈 Soft UI and floating shapes for a romantic feel
* 📆 Calendar timeline for special memories
* 📷 Image preview and modal views
* 🔒 Secure login and signup using JWT
* 📝 Real-time quote creation and updates
* 🚀 Hosted on Netlify

### ⚙️ Backend (`loveappbackend`)

* 🌍 REST API built using **Express + MongoDB**
* 🔐 Authentication using JWT and Bcrypt
* 📅 CRUD APIs for:

  * Quotes
  * Calendar Events
  * Gallery Images
* 📦 Models:

  * `User`
  * `Quote`
  * `Gallery`
  * `Calendar`
* 📁 Modular route and middleware structure
* 🧪 Supports local dev and serverless (Netlify Functions)

---

## 🧱 Tech Stack

| Area       | Technology                                    |
| ---------- | --------------------------------------------- |
| Frontend   | React, Tailwind CSS, TypeScript, Vite         |
| Backend    | Node.js, Express, MongoDB, Mongoose           |
| Auth       | JWT, bcrypt                                   |
| Deployment | Netlify (Frontend + Functions), MongoDB Atlas |
| Dev Tools  | Nodemon, dotenv, Netlify CLI                  |

---

## 🛠 Setup Instructions

### 🔮 Clone Both Repositories

```bash
git clone https://github.com/lokeshvivek2511/loveapp.git
git clone https://github.com/lokeshvivek2511/loveapp-backend.git
```

---

### 🧼 Frontend Setup

```bash
cd loveapp
npm install
npm run dev
```

#### 📦 Build for Production

```bash
npm run build
npm run preview
```

---

### 🚀 Backend Setup

```bash
cd loveapp-backend
npm install
touch .env
```

#### 📄 .env File

```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

#### 🔧 Run Locally

```bash
npm run dev
```

#### ⚙️ For Netlify Functions

```bash
npm run build
netlify dev
```

---

## 🚦API Endpoints

### 🔐 Auth

* `POST /api/auth/register`
* `POST /api/auth/login`

### 📷 Gallery

* `GET /api/gallery`
* `POST /api/gallery`

### 💬 Quotes

* `GET /api/quotes`
* `POST /api/quotes`
* `PUT /api/quotes/:id`
* `DELETE /api/quotes/:id`

### 📆 Calendar

* `GET /api/calendar`
* `POST /api/calendar`

---

## 📬 Contact

* 🧑‍💻 Developer: **Lokeshwaran V**
* 📧 Email: [lokeshvlw2004@gmail.com](mailto:lokeshvlw2004@gmail.com)
* 🔗 LinkedIn: [linkedin.com/in/lokeshwaran-v-680827257](https://linkedin.com/in/lokeshwaran-v-680827257)
* 💻 GitHub: [@lokeshvivek2511](https://github.com/lokeshvivek2511)

---

## 📝 License

This project is for personal use and educational demonstration. Reach out for collaborations or reuse permissions.

---

> ❤️ Crafted with love, for love — by **Lokeshwaran V**

