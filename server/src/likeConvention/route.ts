import { Router } from "express";
import { getLikeStatus, getMyLikedConventions, like, removeLike } from './controller';

export const likeConventionRoute = Router();

likeConventionRoute.get('/getMyLikedConvention', getMyLikedConventions);
likeConventionRoute.get('', getLikeStatus);
likeConventionRoute.post('', like);
likeConventionRoute.delete('', removeLike)