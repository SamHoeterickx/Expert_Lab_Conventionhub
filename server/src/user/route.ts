import { Router } from "express";
import { register, login } from './controller.ts';

export const userRouter = Router();

userRouter.post('/login', login);
userRouter.post('/register', register);