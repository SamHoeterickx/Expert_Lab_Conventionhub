import { Router } from "express";
import { register } from './controller.ts';

const conventionRouter = Router();

conventionRouter.post('/register', register);



export default conventionRouter