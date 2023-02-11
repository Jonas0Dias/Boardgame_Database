import { db } from "../database.connection.js"
import { createCustomer } from "../schemas/customerSchema.js";

export async function getCustomers(req,res){
    try{
        const customers = await db.query('select * from customers');
        res.send(customers.rows)
    }catch(err){
        res.status(500).send(err.message)
    }
}

export async function postCustomers(req,res){
    const {name, phone, cpf, birthday} = {...req.body}
    const {error} = createCustomer.validate(req.body)

    try{
        
        if(error){
            res.status(400).send(error);
            return;
        }
        const checkIfExist = await db.query(`select * from customers where cpf = $1;`,[cpf]);
        console.log(checkIfExist)
        if(checkIfExist.rows[0]){
            res.sendStatus(409)
            return;
        }

        await db.query(`INSERT INTO customers (name, phone, cpf, birthday) values ($1, $2, $3, $4)`, [name, phone, cpf, birthday]);
        res.sendStatus(201);
    }catch(err){
        res.status(500).send(err.message)
    }
}