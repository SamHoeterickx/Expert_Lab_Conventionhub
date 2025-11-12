import { type Request, type Response } from 'express';
import { getAllConventions, saveConvention, removeConvention, findConventionBySlug } from './model';


export const createNewConvention = async(req:Request, res:Response) => {
    try{
        const {title, description, category, contentMd} = req.body;
        const authorId = req.signedCookies.session_id;
        const conventionData = {title, description, category, contentMd, authorId}

        if(!title || !description ||!contentMd || !authorId || !category){
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

export const getConventions = async(req:Request, res:Response) => {
    try{
      
        const allConventions = await getAllConventions();
        if(!allConventions){
            return res.status(404).send({
                status: 404,
                message: 'No conventions found'
            });
        };

        return res.status(200).send({
            status: 200,
            message: 'Found conventions successfull',
            data: allConventions
        });

    }catch(error:any){
        console.error('Error fetching conventions:', error);
        return res.status(500).send({
            status: 500,
            message: error.message
        });
    };
}

export const getSingleConvention = async(req:Request, res:Response) => {
    try{

        const querySlug = req.query.slug;

        if(!querySlug) return 
        const slug = querySlug.toString();
        const convention = await findConventionBySlug(slug);

        if(!convention){
            return res.status(404).send({
                status: 404,
                message: 'Convention not found'
            });
        };

        return res.status(200).send({
            status: 200,
            message: 'Fetched convention successfull',
            data: convention
        })

    }catch(error:any){
        console.error('Error fetching convention:', error);
        return res.status(500).send({
            status: 500,
            message: error.message
        });
    }
}

export const deleteConvention = async(req:Request, res:Response) => {
    try{

        const {conventionId} = req.body;
        const authorId = req.signedCookies.session_id;

        if(!conventionId || !authorId){
            return res.status(401).send({
                status: 401,
                message: 'Missing info'
            });
        };

        const deletedConvention = await removeConvention(conventionId, authorId);
        console.log(deletedConvention);

        return res.status(202).send({
            status: 202,
            message: 'Delete convention successfully'
        });

    }catch(error:any){
        console.error('Error fetching conventions:', error);
        return res.status(500).send({
            status: 500,
            message: error.message
        })
    };
}