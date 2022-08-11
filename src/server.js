import express from "express";

const PORT = 4000;

const app = express();

const routerLogger = (req, res, next) => {
  console.log(req.path);
  next();
};
const methodLogger = (req, res, next) => {
  console.log(req.method);
  next();
};
const home = (req, res) => res.send("<h1>Hello</h1>");
const login = (req, res) => res.send("<h1>Login</h1>");

app.use(methodLogger, routerLogger);
app.get("/", home);
app.get("/login", login);

app.listen(PORT, () =>
  console.log(`✅ Server listening on port http://localhost:${PORT} 🚀`)
);
