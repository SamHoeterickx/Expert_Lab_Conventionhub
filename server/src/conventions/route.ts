import { Router } from "express";
import { createNewConvention, deleteConvention, getConventions, getSingleConvention, getRandomConventions, getMyConventions } from "./controller";

export const conventionRouter = Router();

conventionRouter.get('/', getConventions);
conventionRouter.get('/random', getRandomConventions)
conventionRouter.get('/convention', getSingleConvention);
conventionRouter.get('/myConventions', getMyConventions);
conventionRouter.post('/create', createNewConvention);
conventionRouter.delete('/delete', deleteConvention);