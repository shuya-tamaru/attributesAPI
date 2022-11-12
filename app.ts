import express from "express";
import { connectDB } from "./db/connect";
import panelRouetr from "./router/panels";
import "dotenv/config";

const app: express.Express = express();
const PORT = 3000;

app.use(express.json());
app.use("/api/panels", panelRouetr);
const start = async () => {
  try {
    await connectDB(`${process.env.MONGO_URL}`);
    app.listen(PORT, () => console.log("running server..."));
  } catch (err) {
    console.log(err);
  }
};

start();
