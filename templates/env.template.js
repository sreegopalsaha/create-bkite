export const envTemplate = (projectName) =>
  `
PORT=3000
DATABASE_URI=mongodb://127.0.0.1:27017
CORS_ORIGIN = http://localhost:5173
NODE_ENV = "development"
`.trim();
