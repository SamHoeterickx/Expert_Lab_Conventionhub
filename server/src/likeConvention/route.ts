import { Router } from "express";
import { getLikeStatus, like, removeLike } from './controller';

export const likeConventionRoute = Router();

likeConventionRoute.get('', getLikeStatus);
likeConventionRoute.post('', like);
likeConventionRoute.delete('', removeLike)