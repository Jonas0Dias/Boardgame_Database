import express from "express";
import cors from "cors";
import jogosRouter from "./routers/gamesRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());
// app.use([homeRouter, loginRouter, newentryorexitRouter, signupRouter, deleteRouter])


app.use(jogosRouter)
app.listen(5000, () => console.log(`Server running in port: 5000`));