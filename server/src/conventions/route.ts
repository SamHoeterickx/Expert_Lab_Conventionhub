import { Router } from "express";
import { createNewConvention, deleteConvention, getConventions } from "./controller";

export const conventionRouter = Router();

conventionRouter.get('/', getConventions);
conventionRouter.post('/create', createNewConvention);
conventionRouter.delete('/delete', deleteConvention);