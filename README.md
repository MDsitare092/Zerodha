# 📊  Zerodha

A full-stack MERN (MongoDB, Express.js, React, Node.js) application that simulates a Zerodha-like stock trading platform. It features user login, holdings management, real-time charting, and a clean dashboard experience—all built in just *1 day*.

🔗 **Project GitHub Link:** (https://github.com/MDsitare092/Zerodha)

---

## 📁 Project Structure

- `backend/` – Node.js + Express server connected to MongoDB
- `frontend/` – React frontend for users
- `dashboard/` – Standalone dashboard module

---

## 🚀 Features

- 🔐 **Secure Login & Registration** – User authentication setup.
- 📊 **View Holdings** – Track stocks with quantity, avg price, current price, and live P&L.
- 📈 **Charting Support** – Beautiful data visualization using Chart.js.
- 📦 **MongoDB Data Persistence** – Reliable data storage with Mongoose schemas.
- 🎯 **Color-Coded P&L Indicators** – Visual cues for profits (green) and losses (red).
- 🧠 **Conditional Rendering** – Clean states when no holdings are available.
- ⚙️ **Modular Architecture** – Well-structured codebase for scaling.
- ⚡ **Responsive UI** – Built using Tailwind CSS for all screen sizes.

---

## 🛠️ Tech Stack

- **Frontend:** React.js, Tailwind CSS, Axios, Chart.js
- **Backend:** Node.js, Express.js, CORS
- **Database:** MongoDB + Mongoose
- **Tools:** Nodemon, dotenv, bcrypt

---

## 🌐 Getting Started

To run this project locally, follow these steps:

```bash
# Clone the repository
git clone [https://github.com/ShehbaazAalam/Stock-Trading-Plateform.git](https://github.com/ShehbaazAalam/Stock-Trading-Plateform.git)

# Navigate into the project directory
cd Stock-Trading-Plateform

# 1. Start backend
cd backend
npm install
nodemon index.js

# 2. Start frontend
cd ../frontend
npm install
npm start

# 3. Start dashboard
cd ../dashboard
npm install
npm start

📬 API Endpoints
GET /allHoldings – Get all user holdings

POST /addHoldings – Add a new holding (name, qty, avg, price)
```
👨‍💻 Author

Md Sitare

GitHub: https://github.com/MDsitare092

Email: mdsitare9202@gmail.com
