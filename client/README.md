# 🤖 AI Mock Interview Platform         🚀 Live Demo: [https://ai-mock-interview-agent.onrender.com/]

An AI-powered  mock interview platform that helps users prepare for technical and HR interviews through **resume-based question generation, interactive practice sessions, and intelligent AI feedback**.

The project is designed with a real-world SaaS architecture, including authentication, credit-based access, payment integration, REST APIs, and production deployment.

---

## 🚀 Features

* 📄 **Resume Upload** — Upload your resume in PDF format.
* 🤖 **AI Question Generation** — Generate personalized interview questions based on your resume.
* 💻 **Technical Interviews** — Practice technical questions tailored to your profile.
* 🧑‍💼 **HR Interviews** — Prepare for common and role-specific HR questions.
* 🧠 **AI-Powered Feedback** — Receive intelligent feedback on your interview performance.
* 💳 **Credit-Based System** — Use credits to access interview features.
* 💰 **Razorpay Payments** — Purchase additional credits securely.
* 🔐 **Google Authentication** — Secure login using Firebase Authentication.
* ✨ **Smooth UI/UX** — Responsive interface with Framer Motion animations.
* ☁️ **Production Deployment** — Full-stack application deployed on Render.

---

## 🛠️ Tech Stack

### Frontend

* **React.js**
* **Tailwind CSS**
* **Framer Motion**

### Backend

* **Node.js**
* **Express.js**
* **REST APIs**

### Database

* **MongoDB**

### Authentication

* **Firebase Google Authentication**

### Payments

* **Razorpay**

### Deployment

* **Render**

---

## 🏗️ System Architecture

```text
                    ┌──────────────────┐
                    │      User        │
                    └────────┬─────────┘
                             │
                             ▼
                    ┌──────────────────┐
                    │   React Frontend │
                    │  + Tailwind CSS   │
                    │  + Framer Motion  │
                    └────────┬─────────┘
                             │
                    REST API │
                             ▼
                    ┌──────────────────┐
                    │ Express / Node.js│
                    │     Backend      │
                    └──────┬─────┬─────┘
                           │     │
              ┌────────────┘     └─────────────┐
              ▼                                ▼
      ┌───────────────┐                 ┌──────────────┐
      │   MongoDB     │                 │ AI Services  │
      │    Database   │                 │              │
      └───────────────┘                 └──────────────┘
              │
              │
              ▼
      ┌───────────────┐
      │    Razorpay   │
      │    Payments   │
      └───────────────┘
```

---

## 🔄 How It Works

### 1. Authentication

Users sign in using their **Google account** through Firebase Authentication.

### 2. Resume Upload

Users upload their resume in **PDF format**, which is processed by the backend.

### 3. AI Question Generation

The platform analyzes the resume and generates relevant **technical and HR interview questions**.

### 4. Interview Practice

Users can participate in simulated interview rounds and answer generated questions.

### 5. AI Feedback

The system evaluates responses and provides meaningful feedback to help users identify areas for improvement.

### 6. Credit System

Interview features consume credits. Users can purchase additional credits when their balance is low.

### 7. Payment

**Razorpay** handles secure credit purchases.

---

## 📂 Project Structure

```text
AI-Mock-Interview/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   ├── services/
│   │   └── App.jsx
│   └── package.json
│
├── server/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── services/
│   ├── utils/
│   └── server.js
│
├── .gitignore
├── README.md
└── package.json
```

> The exact folder structure may vary depending on the implementation.

---


## ⚙️ Getting Started

### Prerequisites

Make sure you have installed:

* Node.js
* npm
* MongoDB
* Git

### Clone the Repository

```bash
git clone https://github.com/your-username/your-repository.git

cd your-repository
```

### Install Dependencies

For the frontend:

```bash
cd client
npm install
```

For the backend:

```bash
cd ../server
npm install
```

---



## ▶️ Run Locally

Start the backend:

```bash
cd server
npm run dev
```

Start the frontend in another terminal:

```bash
cd client
npm run dev
```

The application will then be available through your local development URL.

---

## 💳 Credit-Based SaaS Model

The platform follows a credit-based access model:

```text
User
  │
  ▼
Check Credit Balance
  │
  ├── Credits Available ──► Start Interview
  │                            │
  │                            ▼
  │                     Deduct Credits
  │
  └── Insufficient Credits ──► Purchase Credits
                                  │
                                  ▼
                              Razorpay
                                  │
                                  ▼
                         Credits Added
```

This architecture demonstrates how a real SaaS application can control access to premium features using a usage-based credit system.

---

## 🌐 Deployment

The application is designed for production deployment using **Render**.

Typical deployment setup:

```text
Frontend ──► Render
Backend  ──► Render
Database ──► MongoDB
Payments ──► Razorpay
Auth     ──► Firebase
```

---

## 🎯 What I Learned

This project helped me gain practical experience with:

* Building a **full-stack SaaS application**
* Designing scalable backend architecture
* Developing and consuming REST APIs
* Implementing Firebase authentication
* Working with MongoDB
* Integrating Razorpay payments
* Building a credit-based subscription/access system
* Handling PDF resume uploads
* Integrating AI-powered features
* Creating responsive React interfaces
* Implementing UI animations with Framer Motion
* Managing environment variables and secrets
* Deploying a full-stack application to production

---

## 🔮 Future Improvements

* 🎙️ Real-time voice-based interviews
* 📊 Advanced interview performance analytics
* 📝 Interview history and progress tracking
* 🎯 Personalized preparation roadmap
* 📈 Skill-wise performance dashboard
* 🌍 Support for multiple languages
* 🤖 More advanced AI evaluation

---

## 👨‍💻 Author

**Abhishek Kumar Singh**

If you found this project interesting, consider giving the repository a ⭐!

---

## 📄 License

This project is developed for **educational and portfolio purposes**.
