import { type Request, type Response } from 'express';

import { getLikeStatusOfConvetionWithId, checkIfLikeExcist, likeConventionWithId, removeLikeConventionWithId, getAllLikedConventionsByUserId } from './model';
import { findUser } from '../user/model';

export const getLikeStatus = async(req:Request, res:Response) => {
    try{

        const { conventionId } = req.query;
        const userId = req.signedCookies.session_id;

        if(!conventionId){
            return res.status(401).send({
                status: 401,
                message: 'Missing info'
            });
        };

        if(!userId){
            return res.status(200).send({
                status: 200,
                message: 'No user id',
                data: {
                    likeStatus: false
                }
            })
        }

        const likeData = {
            conventionId: conventionId.toString(),
            userId
        };
        console.log(likeData)

        const likeStatus = await getLikeStatusOfConvetionWithId(likeData);

        if(!likeStatus){
            return res.status(200).send({
                status: 200,
                message: 'Successfull getting likeStatus',
                data: {
                    likeStatus: false
                }
            });
        };

        return res.status(200).send({
            status: 200,
            message: 'Successfull getting likeStatus',
            data: {
                likeStatus: true
            }
        });

    }catch(error:any){
        console.error('Error fetching get like status:', error);
        return res.status(500).send({
            status: 500,
            message: error.message
        });
    };
}

export const like = async(req:Request, res:Response) => {
    try{

        const { conventionId } = req.body;
        const userId = req.signedCookies.session_id;
        
        if(!conventionId){
            return res.status(401).send({
                status: 401,
                message: 'Missing info'
            });
        };

        if(!userId){
            return res.status(401).send({
                status: 401,
                message: 'Login required'
            });
        };
        
        const likeData = {
            conventionId, 
            userId
        };

        const excistingLike = await checkIfLikeExcist(likeData);
        if(excistingLike){
            return res.status(400).send({
                status: 400,
                message: "You've already liked this convention"
            })
        }

        const result = await likeConventionWithId(likeData);
        return res.status(201).send({
            status: 201,
            message: 'Successfully liked convention',
            data: {
                result
            }
        })

    }catch(error:any){
        console.error('Failed to fetch like:', error);
        return res.status(500).send({
            status: 500,
            message: error.message
        });
    };
}

export const removeLike = async(req:Request, res:Response) => {
    try{

        const { conventionId } = req.body;
        const userId = req.signedCookies.session_id;

        if(!conventionId || !userId){
            return res.status(401).send({
                status: 401,
                message: 'Missing info'
            });
        };

        const likeData = {
            conventionId, 
            userId
        };
        
        const excistingLike = await checkIfLikeExcist(likeData);
        if(!excistingLike){
            return res.status(400).send({
                status: 400,
                message: "You've not liked this convention yet"
            })
        }

        const result = await removeLikeConventionWithId(likeData);
        return res.status(201).send({
            status: 201,
            message: 'Successfully removed liked convention',
            data: {
                result
            }
        })

    }catch(error:any){
        console.error('Failed to fetch remove like:', error);
        return res.status(500).send({
            status: 500,
            message: error.message
        });
    };
}

export const getMyLikedConventions = async(req:Request, res:Response) => {
    try{

        const userId = req.signedCookies.session_id;
        
        const excistingUser = await findUser(userId);
        if(!excistingUser){
            return res.status(404).send({
                status: 404,
                message: "No user found"
            })
        }

        const result = await getAllLikedConventionsByUserId(userId);

        return res.status(201).send({
            status: 201,
            message: 'Found my liked conventions successfully',
            data: result
        })

    }catch(error:any){
        console.error('Failed to fetch get my liked conventions:', error);
        return res.status(500).send({
            status: 500,
            message: error.message
        });
    };
}