import { Router } from "express";
import { register, login, authenticateMe, getUser, logout, deleteAccount, updatePassword, updateUsername } from './controller';

export const userRouter = Router();

userRouter.get('/user', getUser);
userRouter.get('/logout', logout);
userRouter.get('/authenticate', authenticateMe);
userRouter.post('/login', login);
userRouter.post('/register', register);
userRouter.patch('/password', updatePassword);
userRouter.patch('/username', updateUsername);
userRouter.delete('/account', deleteAccount);