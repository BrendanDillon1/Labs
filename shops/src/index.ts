import express from "express";
import mongoose, { ConnectOptions } from "mongoose";
import cors from "cors";
import products from "./routes/productRouter";
import users from "./routes/userRouter";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use("/products", products);
app.use("/users", users);

const PORT = process.env.PORT || 3001;
const MONGO_URL = process.env.MONGO_URL || "";
mongoose.set("strictQuery", false);
mongoose
  .connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as ConnectOptions)
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
  })
  .catch((err) => console.log(`${err} did not connect`));
