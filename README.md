# 🚀 create-bkite ![npm](https://img.shields.io/npm/v/bkite)  ![npm downloads](https://img.shields.io/npm/dt/bkite)

**create-bkite** is a CLI tool that helps you **instantly generate a complete backend folder structure** for your Express.js project — just like how `npm create vite@latest` does for frontend apps.

No setup headaches. Just run one command and you're ready to code.

---

## 🛠️ How to Use

To scaffold your backend project, just run:

```bash
npm create bkite@latest
```

This will ask you a few simple questions and then create a complete backend folder structure for you.

You can also:

- Create a project in a specific folder:
  ```bash
  npm create bkite@latest my-backend-app
  ```

- Create the project in your current folder:
  ```bash
  npm create bkite@latest .
  ```

---

## 📁 What You Get

After running the command, you’ll get a production-ready structure like this:

```
my-backend-app/
├── src/
│   ├── configs/             # Database config
│   ├── controllers/         # Route logic
│   ├── middlewares/         # Error handling, etc.
│   ├── models/              # Mongoose models (if needed)
│   ├── routes/              # API routes
│   ├── utils/               # Helpers like ApiError, ApiResponse
│   ├── app.js               # Main Express app
│   └── index.js             # Entry point
├── .env
├── .gitignore
├── package.json
└── README.md
```

---

## ▶️ Run Your Server

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the server:

   ```bash
   npm run start
   ```

Your server will run at: **http://localhost:3000**

---

## ✨ Features

- 🧠 **Simple and Interactive** — Follow prompts to set up.
- 🗂️ **Clean Project Structure** — Easy to understand and scalable.
- 🔐 **Built-in CORS and Error Handling**
- 🔧 **Ready `.env` for configs**

---

## 🌱 Future Plans & Call for Contributors

We're just getting started! We plan to add:

- ✅ Options to choose **JavaScript or TypeScript**
- ✅ Support for **different databases** (MySQL, PostgreSQL, etc.)
- ✅ Customizable features during setup

👉 **We need contributors** to help add these!  
If you're interested in helping us grow this tool, reach out or open a PR.

---

## 🤝 Connect & Contribute

- Submit issues or pull requests on [GitHub](https://github.com)
- Connect on [LinkedIn](https://www.linkedin.com/in/sreegopalsaha/)

Let’s build something great together.  
**Just run `npm create bkite@latest` and start coding!**

