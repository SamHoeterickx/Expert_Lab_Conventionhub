import { Router } from "express";
import { register, login } from './controller.ts';

const conventionRouter = Router();

conventionRouter.post('/login', login);
conventionRouter.post('/register', register);



export default conventionRouter