import { Router } from "express";
import { register, login, authenticateMe } from './controller.ts';

export const userRouter = Router();

userRouter.get('/authenticate', authenticateMe)
userRouter.post('/login', login);
userRouter.post('/register', register);