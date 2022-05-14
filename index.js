const express = require("express");

const app = express()

const route = require("./src/routes/routes")

app.use(express.json())
app.use(route)

const PORT = 3001

app.listen(PORT, () => console.log(`On em http://localhost:${PORT}`));