import { Router } from "express";
import { register, login, authenticateMe, getUser, logout, deleteAccount } from './controller.ts';

export const userRouter = Router();

userRouter.get('/user', getUser);
userRouter.get('/logout', logout);
userRouter.get('/authenticate', authenticateMe);
userRouter.post('/login', login);
userRouter.post('/register', register);
userRouter.delete('/account', deleteAccount);