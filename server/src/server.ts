import express, { type Express} from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import * as dotenv from 'dotenv';
dotenv.config();

//Route
import { conventionRouter } from './conventions/route';
import { likeConventionRoute } from './likeConvention/route';
import { userRouter } from './user/route';

const app:Express = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors({
    origin: [
        'https://conventionhub.dev', 
        'https://conventionhub.dev/',
        'https://www.conventionhub.dev/',
        'https://www.conventionhub.dev',
    ],
    credentials: true
}));
app.use(cookieParser(process.env.COOKIE_SECRET))

app.use('/api/conventions', conventionRouter)
app.use('/api/users', userRouter);
app.use('/api/like', likeConventionRoute)

app.listen(port, () => {
    console.log('App is listening on port:', port); 
})