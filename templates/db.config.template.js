export const dbConfigTemplate = () =>
  `
import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const dbUri = \`\${process.env.DATABASE_URI}/\${DB_NAME}\`;
    const conn = await mongoose.connect(dbUri);
    console.log(\`DB CONNECTED: \${conn.connection.host}\`);
  } catch (error) {
    console.error("ERROR WHILE DB CONNECTION:", error.message);
    process.exit(1);
  }
};

export default connectDB;
`.trim();
