export const routesTemplate = () =>
  `
import express from "express";
import { getExample } from "../controllers/example.controller.js";

const router = express.Router();

router.get("/", getExample);

export default router;
`.trim();
