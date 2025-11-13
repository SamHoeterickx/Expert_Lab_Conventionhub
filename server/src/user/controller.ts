import { type Request, type Response } from 'express';

import { checkExcistingUser, registerNewUser, verifyPassword, findUser } from './model'

export const register = async(req:Request, res:Response) => {
    try{

        const { email, password, repeatPassword, username } = req.body;
        const userData = {email, password, username}
        
        if(!email || !password || !repeatPassword || !username){
            return res.status(422).send({
                status: 422,
                message: 'Missing register info'
            });
        };

        if(password.length <= 8){
            return res.status(400).send({
                status: 400,
                message: "Password isn't 8 characters long"
            })
        }
        
        const excistingUser = await checkExcistingUser(email);
        
        if(excistingUser){
            return res.status(409).send({
                status: 409,
                message: 'Email already in use'
            });
        };
        
        if(password !== repeatPassword){
            return res.status(401).send({
                status: 401,
                message: 'Passwords dont match'
            });
        };

        const newUser = await registerNewUser(userData);

        if(!newUser){
            return res.status(409).send({
                status: 409,
                message: 'Failed to create new user'
            });
        };

        res.cookie('session_id', newUser.id, {
            httpOnly: true,
            sameSite: 'strict',
            signed: true,
            maxAge: 7 * 24 * 60 * 60 * 1000
        });

        return res.status(201).send({
            status:201,
            message: 'Register successfull'
        });

    }catch(error:any){

        console.error('Error fetching register:', error);
        return res.status(500).send({
            status: 500,
            message: error.message
        })

    }
}

export const login = async(req:Request, res:Response) => {
    try{

        const {email, password} = req.body;

        if(!email || !password){
            return res.status(422).send({
                status: 422,
                message: 'Missing login info'
            });
        };

        const excistingUser = await checkExcistingUser(email);
        
        if(!excistingUser){
            return res.status(401).send({
                status: 401,
                message: 'Invalid credentials'
            });
        };
        
        const passwordMatch = await verifyPassword(password, excistingUser.password);

        if(!passwordMatch){
            return res.status(401).send({
                status: 401,
                message: 'Invalid credentials'
            });
        };

        res.cookie('session_id', excistingUser.id, {
            httpOnly: true,
            sameSite: 'strict',
            signed: true,
            maxAge: 7 * 24 * 60 * 60 * 1000
        });

        return res.status(200).send({
            status: 200,
            message: 'Login succesfull',
            sessioId: excistingUser.id
        })


    }catch(error:any){
        console.error('Error fetching login:', error);
        return res.status(500).send({
            status: 500,
            message: error.message
        });
    }
}

export const authenticateMe = async(req:Request, res:Response) => {
    try{

        const sessionId = req.signedCookies.session_id;

        if(!sessionId){
            return res.status(401).send({
                status: 401,
                message: 'Not authenticated'
            });
        };

        const user = await findUser(sessionId);

        if(!user){
            return res.status(401).send({
                status: 401,
                message: 'User not autenticated'
            });
        };

        return res.status(200).send({
            status: 200,
            message: 'Authentication successfull',
            data: user
        });

    }catch(error:any){
        console.error('Error fetching authenticate:', error);
        return res.status(500).send({
            status: 500,
            message: error.message
        });
    };
}