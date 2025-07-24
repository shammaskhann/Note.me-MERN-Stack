const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const passport = require("passport");
require("./config/passport");
const notesRouter = require("./routes/notes");
const usersRouter = require("./routes/users");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(passport.initialize());

// Routes
app.use("/api/notes", notesRouter);
app.use("/api/users", usersRouter);

// 404 handler
app.use((req, res, next) => {
  res.status(404).json({ message: "Not Found" });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err);
  res
    .status(err.status || 500)
    .json({ message: err.message || "Internal Server Error" });
});

module.exports = app;
