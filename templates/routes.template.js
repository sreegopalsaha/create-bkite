export const routesTemplate = () =>
  `
import express from "express";
import { getExample } from "../controllers/example.controller.js";

export const exampleRouter = express.Router();

exampleRouter.get("/", getExample);
`.trim();
