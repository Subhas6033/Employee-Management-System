import express from "express";
import cors from "cors";

const app = express();

// Basic applications middlewares setup
app.use(cors());
app.use(
  express.json({
    limit: "10mb",
  }),
);

app.use(express.urlencoded({ extended: true, limit: "10mb" }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

export { app };
