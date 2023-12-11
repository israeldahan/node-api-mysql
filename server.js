import express from "express";
import UserRouter from "./routers/user-router.js";
import { syncModels } from "./database/index.js";

const app = express();

//connect to db and sync models
syncModels();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.use("/users", new UserRouter().getRouter());


app.get("/", (req, res) => {
    res.send("Hello World");
    }
);

app.listen(3000, () => {
    console.log("Server running on port 3000");
    }
);

