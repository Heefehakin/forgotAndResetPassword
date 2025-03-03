const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const { connectDB } = require("./src/config/db");
const userRouter = require("./src/routes/user.routes");


const app = express();
app.use(morgan("dev"))
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
dotenv.config()

app.get("/", (req, res) => {
    res.send("Hello, This is the Forgot and Reset Password API")
})

app.get("/*", (req, res) => {
    res.status(404).json({
        succes: false,
        message: "Page not found"
    })
});

app.use('/api/v1/users', userRouter)




app.listen(process.env.PORT, () => {
    connectDB();
    console.log(`Server is running on port ${process.env.PORT}`);

})