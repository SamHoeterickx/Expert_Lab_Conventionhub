import express, { type Express, type Request, type Response} from 'express';
import { PrismaClient } from '@prisma/client';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import * as dotenv from 'dotenv';
dotenv.config();

//Route
import userRouter from './user/route.ts';

const prisma = new PrismaClient({ log:['query']});
const app:Express = express();
const port = 3000;


app.use(express.json());
app.use(cors());
app.use(cookieParser(process.env.COOKIE_SECRET))

app.use('/api/users', userRouter);

app.listen(port, () => {
    console.log('App is listening on port:', port); 
})