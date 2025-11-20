import { Router } from "express";
import { register, login, authenticateMe, getUser } from './controller.ts';

export const userRouter = Router();

userRouter.get('/user', getUser);
userRouter.get('/authenticate', authenticateMe);
userRouter.post('/login', login);
userRouter.post('/register', register);