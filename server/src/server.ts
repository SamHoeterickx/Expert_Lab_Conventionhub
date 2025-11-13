import express, { type Express, type Request, type Response} from 'express';
import { PrismaClient } from '@prisma/client';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import * as dotenv from 'dotenv';
dotenv.config();

//Route
import { conventionRouter } from './conventions/route.ts';
import { likeConventionRoute } from './likeConvention/route.ts';
import { userRouter } from './user/route.ts';

const app:Express = express();
const port = 3000;

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));
app.use(cookieParser(process.env.COOKIE_SECRET))

app.use('/api/conventions', conventionRouter)
app.use('/api/users', userRouter);
app.use('/api/like', likeConventionRoute)

app.listen(port, () => {
    console.log('App is listening on port:', port); 
})