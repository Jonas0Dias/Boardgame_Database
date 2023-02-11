import express from "express";
import cors from "cors";
import GamesRouter from "./routers/gamesRoutes.js";
import customersRouter from "./routers/customersRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());
// app.use([homeRouter, loginRouter, newentryorexitRouter, signupRouter, deleteRouter])


app.use([GamesRouter, customersRouter])
app.listen(5000, () => console.log(`Server running in port: 5000`));