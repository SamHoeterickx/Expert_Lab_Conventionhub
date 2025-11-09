import { type Request, type Response } from 'express';
import { saveConvention } from './model';


export const createNewConvention = async(req:Request, res:Response) => {
    try{
        const {title, description, contentMd, authorId} = req.body;

        // const {title, contentMd} = req.body;
        // const authorId = req.signedCookies.session_id;
        const conventionData = {title, description, contentMd, authorId}

        if(!title || !contentMd || !authorId){
            return res.status(401).send({
                status: 401,
                message: 'Missing info'
            });
        };

        const newConvention = await saveConvention(conventionData);
        if(!newConvention){
            return res.status(409).send({
                status: 409,
                message: 'Failed to create convention'
            });
        }

        return res.status(201).send({
            status: 201,
            message: 'Convention created successfull',
            data: newConvention
        });

    }catch(error:any){
        console.error('Error fetching conventions:', error);
        return res.status(500).send({
            status: 500,
            message: error.message
        });
    }
}