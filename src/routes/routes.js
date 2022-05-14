const route = require("express").Router();

const authenticateToken = require("../middlware/loginMiddleware")
const loginController = require("../controller/loginController");

route.get("/", (_request, response) => response.json({ message: "Welcome to login." }));

route.post("/", authenticateToken, loginController);

module.exports = route;
