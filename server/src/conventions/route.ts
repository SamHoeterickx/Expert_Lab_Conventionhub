import { Router } from "express";
import { createNewConvention, getConventions } from "./controller";

export const conventionRouter = Router();

conventionRouter.get('/', getConventions);
conventionRouter.post('/create', createNewConvention);
