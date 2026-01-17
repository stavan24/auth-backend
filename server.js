const express = require("express")
const dotenv = require("dotenv")
const cors = require("cors")
const connectDb = require("./config/dbConnection.js")
const errorHandler = require("./middlewares/errorMiddlewares.js");
const authMiddleware = require("./middlewares/authMiddleware.js");

dotenv.config()
connectDb()

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/auth",require("./routes/authRoutes.js"))

app.use(errorHandler)
app.use(authMiddleware)

const PORT = process.env.PORT || 5000

app.listen(PORT, () =>
  console.log(`Server running on port https://localhost:${PORT}`)
);