import { Router } from "express";
import { getCustomers, postCustomers, getCustomerById, updateCustomers } from "../controllers/customersController.js";


const customersRouter=Router();

customersRouter.get("/customers", getCustomers);
customersRouter.post("/customers", postCustomers )
customersRouter.get("/customers/:id", getCustomerById);
customersRouter.put("/customers/:id", updateCustomers);


export default customersRouter;

