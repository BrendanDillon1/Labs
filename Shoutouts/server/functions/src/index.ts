import * as functions from "firebase-functions";
import express from "express";
import cors from "cors";
import shoutouts from "./routes/shoutouts";

//config

const app = express();
app.use(cors());
app.use(express.json());

// routes

app.use("/", shoutouts);

//API export

export const api = functions.https.onRequest(app);
