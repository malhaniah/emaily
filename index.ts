import express from "express";
import router from "./routes";
import "dotenv/config";
import "./services/passport";

// initialize an express app
const app = express();

// app configuration
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});
