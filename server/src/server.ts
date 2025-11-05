import express, { type Express, type Request, type Response} from 'express';
import { PrismaClient } from '@prisma/client';
import cors from 'cors';

import * as dotenv from 'dotenv';
dotenv.config();


const app:Express = express();
const port = 3000;

const prisma = new PrismaClient({ log:['query']});

app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
    res.send('hello world');
})

app.post('/users', async(req:Request, res: Response) => {
    try{

        const { name, email } = req.body;

        const user = await prisma.user.create({
            data: {
                email,
                name
            }
        })

        res.status(201).send({
            status: 201,
            message: 'User created successfull',
            data: user
        })

    }catch(error){
        console.error('Error while fetching data:', error);
        return res.status(500).send({
            status: 500,
            message: error
        })
    }
})

app.listen(port, () => {
    console.log('App is listening on port:', port); 
})