import { Router } from "express";
import { createNewConvention, deleteConvention, getConventions, getSingleConvention } from "./controller";

export const conventionRouter = Router();

conventionRouter.get('/', getConventions);
conventionRouter.get('/convention', getSingleConvention);
conventionRouter.post('/create', createNewConvention);
conventionRouter.delete('/delete', deleteConvention);