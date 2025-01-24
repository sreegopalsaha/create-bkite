# create-bkite <a href="https://npmjs.com/package/create-bkite"><img src="https://img.shields.io/npm/v/create-bkite" alt="npm package"></a>
## Scaffolding Your Backend Project with create-bkite

`create-bkite` is a CLI tool designed to simplify the setup of Express.js backend projects. It generates a well-structured backend environment with essential configurations, files, and folders, allowing you to kickstart your development process effortlessly.

### Installation and Usage

To create a new project, run the following command:

With NPM:

```bash
npm create bkite@latest
```

Then follow the prompts to set up your project!

## Default Project Structure

The generated project will have the following structure:

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

### Running Your Backend Server

Once your project is set up, navigate to the project directory and run the following commands:

```bash
cd my-backend-app
npm install
npm run start
```

This starts your server at `http://localhost:3000` (default port).

## Features

- **Interactive Setup**: Guides you through project initialization with prompts.
- **Organized Structure**: Creates a scalable and maintainable folder structure.
- **CORS Support**: Configures Cross-Origin Resource Sharing (CORS) out of the box.
- **Error Handling**: Includes a global error handler and utility classes for standardized error and response handling.
- **Environment Configuration**: Generates a `.env` file for managing environment variables.

## Extending Your Project

### Adding Routes
Add new route files in `src/routes/`. For example:

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
Add custom middleware in `src/middlewares/`.

### Database Configuration
Edit `src/configs/db.config.js` to set up your database connection.

## License

`create-bkite` is licensed under the [MIT License](LICENSE).

---

Start building your backend with ease using `create-bkite`! 🚀
