import bodyParser from "body-parser";
import express from "express"
import dotenv from "dotenv";

import connectToMongo from "./config/mongo.js";
import projectRouter from "./routes/project-router.js";

const app = express();
dotenv.config();
connectToMongo();

app.use(bodyParser.json());

app.use("/api", projectRouter);

app.listen(3000);