import { db } from "../database.connection.js"
import { createGameSchema } from "../schemas/gameSchema.js";

export async function getGames(req,res){
    try{
        const gamesList = await db.query('select * from games');
        res.send(gamesList.rows)
    }catch(err){
        res.status(500).send(err.message)
    }
}

export async function postGames(req,res){
    const {name, image, stockTotal, pricePerDay} = {...req.body}
    const {error} = createGameSchema.validate(req.body)

    try{
        
        if(error){
            res.status(400).send(error);
            return;
        }
        const checkIfExist = await db.query(`select * from games where name = $1;`,[name]);
        console.log(checkIfExist)
        if(checkIfExist.rows[0]){
            res.sendStatus(409)
            return;
        }

        await db.query(`INSERT INTO games (name, image, "stockTotal", "pricePerDay") values ($1, $2, $3, $4)`, [name, image, stockTotal, pricePerDay]);
        res.sendStatus(201);
    }catch(err){
        res.status(500).send(err.message)
    }
}