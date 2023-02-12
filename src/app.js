import express from "express";
import cors from "cors";
import GamesRouter from "./routers/gamesRoutes.js";
import customersRouter from "./routers/customersRoutes.js";
import rentalsRouter from "./routers/rentalsRouter.js";

const app = express();
app.use(cors());
app.use(express.json());
// app.use([homeRouter, loginRouter, newentryorexitRouter, signupRouter, deleteRouter])

const PORT=5000

app.use([GamesRouter, customersRouter, rentalsRouter])
app.listen(PORT, () => console.log(`Server running in port: ${PORT}`));