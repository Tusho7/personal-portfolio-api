import express from "express";
import { getAllProjects } from "../controllers/project-controller.js";

const projectRouter = express.Router()

projectRouter.get("/projects", getAllProjects);

export default projectRouter;