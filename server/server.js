import express, { urlencoded } from "express";
import connectDB from "./db/database.js";
import crudRoutes from "./routes/crud.routes.js";

connectDB();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Working");
});

app.use("/crud", crudRoutes);

app.listen(8000, (err) => {
  console.log("Port listening on 8000");
});
