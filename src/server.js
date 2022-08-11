import express from "express";
import morgan from "morgan";

const PORT = 4000;

const app = express();
const logger = morgan("dev");

const home = (req, res) => res.send("<h1>Hello</h1>");
const login = (req, res) => res.send("<h1>Login</h1>");

app.use(logger);
app.get("/", home);
app.get("/login", login);

app.listen(PORT, () =>
  console.log(`✅ Server listening on port http://localhost:${PORT} 🚀`)
);
