# create-bkite <a href="https://npmjs.com/package/create-bkite"><img src="https://img.shields.io/npm/v/create-bkite" alt="npm package"></a>

# Scaffolding Your Backend Project with **create-bkite**

**create-bkite** is a CLI tool designed to streamline the setup of **Express.js** backend projects. It scaffolds a clean and well-organized backend environment, enabling you to start coding your application immediately.

---

## Installation and Usage

Run the following command to scaffold a new backend project:

```bash
npm create bkite@latest
```

### Specifying Project Name

You can directly specify the project name you want to use via additional command line options. For example:

- To create a project in a folder named `my-backend-app`:  
  ```bash
  npm create bkite@latest my-backend-app
  ```

- To scaffold a project in the current directory:  
  ```bash
  npm create bkite@latest .
  ```

Follow the interactive prompts to complete the setup.

---

## Default Project Structure

Your new project will include the following structure:

```
my-backend-app/
├── src/
│   ├── configs/
│   │   └── db.config.js
│   ├── controllers/
│   │   └── example.controller.js
│   ├── middlewares/
│   │   └── globalErrorHandler.js
│   ├── models/
│   ├── routes/
│   │   └── example.routes.js
│   ├── utils/
│   │   ├── ApiError.js
│   │   ├── ApiResponse.js
│   │   └── asyncHandler.js
│   ├── app.js
│   └── index.js
├── .env
├── .gitignore
├── package.json
├── README.md
```

---

## Running Your Backend Server

After scaffolding your project, navigate to the project directory and run the following commands:

1. Install dependencies:  
   ```bash
   npm install
   ```

2. Start the server:  
   ```bash
   npm run start
   ```

By default, the server will start at **http://localhost:3000**.

---

## Features

- **Interactive Setup**: Guides you through project initialization with prompts.  
- **Custom Commands**: Flexible options to scaffold in a specified folder or the current directory.  
- **Clean Structure**: Provides a scalable and maintainable folder layout.  
- **CORS Support**: Built-in Cross-Origin Resource Sharing (CORS) configuration.  
- **Error Handling**: Includes a global error handler and utility classes for standardized responses.  
- **Environment Configuration**: Prepares a `.env` file for easy environment variable management.

---

## Extending Your Project

### Adding Routes
To add new routes, create files in the `src/routes/` directory. Example:

```javascript
// src/routes/newExample.routes.js
import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello from the new route!');
});

export default router;
```

### Middleware
Add custom middleware in the `src/middlewares/` directory.

### Database Configuration
Edit `src/configs/db.config.js` to configure your database connection.

---

## License

**create-bkite** is licensed under the **MIT License**.

---

## Contributions

This project is open for contributions. Feel free to:

- Request a pull and open new issues.
- Connect with me on [LinkedIn](https://www.linkedin.com/in/sreegopalsaha/) to communicate and collaborate.

Start building your backend with ease using **create-bkite**! 🚀