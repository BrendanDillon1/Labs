import express from "express";
import cors from "cors";
import continentsRoutes from "../src/routes/index";
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", continentsRoutes);
const port = 3000;
app.listen(port, () => console.log(`Listening on port: ${port}.`));
