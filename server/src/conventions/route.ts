import { Router } from "express";
import { createNewConvention } from "./controller";

export const conventionRouter = Router();

conventionRouter.post('/create', createNewConvention);