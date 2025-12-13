import e, { type Request, type Response } from 'express';

import { checkExcistingUser, registerNewUser, verifyPassword, findUser, getUserData, deleteUserById, updatePasswordById, updateUsernameById, isUserNameUnique } from './model'

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

        const checkUsernameAlreadyInUse = await isUserNameUnique(username);
        if(checkUsernameAlreadyInUse){
            return res.status(409).send({
                status: 409,
                message: 'Username is already in use'
            });
        };

        if(password.length < 8){
            return res.status(400).send({
                status: 400,
                message: "Password isn't 8 characters long"
            })
        }

        //Check not supported passwords
        
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
            sameSite: process.env.NODE_STATE === 'production' ? 'none' : 'lax', 
            secure: process.env.NODE_STATE === 'production', 
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
            sameSite: process.env.NODE_STATE === 'production' ? 'none' : 'lax', 
            secure: process.env.NODE_STATE === 'production', 
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

export const getUser = async(req:Request, res:Response) => {
    try{

        const userId = req.signedCookies.session_id;

        if(!userId){
            return res.status(401).send({
                status: 401,
                message: 'Missing info'
            });
        };

        const userData = await getUserData(userId);

        if(!userData){
            return res.status(404).send({
                status: 404,
                message: 'User not found'
            });
        };

        return res.status(200).send({
            status: 200,
            message: 'User found successfull',
            data: userData
        })

    }catch(error:any){
        console.error('Error fetching getUser:', error);
        return res.status(500).send({
            status: 500,
            message: error.message
        });
    };
}

export const logout = async(req:Request, res:Response) => {
    try{

        const userId = req.signedCookies.session_id;

        if(!userId){
            return res.status(401).send({
                status: 401,
                message: 'Missing info'
            });
        };

        res.cookie('session_id', '', {expires: new Date(0)});

        return res.status(200).send({
            status: 200,
            message: 'User found successfull',
        })

    }catch(error:any){
        console.error('Error fetching logout:', error);
        return res.status(500).send({
            status: 500,
            message: error.message
        });
    };
}

export const updatePassword = async(req:Request, res:Response) => {
    try{

        const { oldPassword, newPassword, repeatNewPassword, email } = req.body;
        const userId = req.signedCookies.session_id;

        if(!oldPassword || !newPassword || !repeatNewPassword || !userId || !email){
            return res.status(401).send({
                status: 401,
                message: 'Missing credentials'
            });
        }

        if(newPassword !== repeatNewPassword){
            return res.status(401).send({
                status: 401,
                message: 'newPasswords dont match'
            });
        };

        const excistingUser = await checkExcistingUser(email);
        if(!excistingUser){
            return res.status(404).send({
                status: 404,
                message: 'User not found'
            });
        };
        
        const passwordMatch = await verifyPassword(oldPassword, excistingUser.password);
        if(!passwordMatch){
            return res.status(401).send({
                status: 401,
                message: 'Incorrect old password'
            });
        };

        const updatedPassword = await updatePasswordById(newPassword, userId);

        if(!updatedPassword){
            return res.status(409).send({
                status: 409,
                message: 'Failed to update password'
            });
        }

        return res.status(200).send({
            status: 200,
            message: 'Password updated successfully'
        });
        
    }catch(error:any){
        console.error('Error fetching update password:', error);
        return res.status(500).send({
            status: 500,
            message: error.message
        });
    };
}

export const updateUsername = async(req:Request, res:Response) => {
    try{

        const { oldUsername, newUsername, email } = req.body;
        const userId = req.signedCookies.session_id;

        if(!oldUsername || !newUsername || !userId || !email){
            return res.status(401).send({
                status: 401,
                message: 'Missing credentials'
            });
        }

        const checkUsernameAlreadyInUse = await isUserNameUnique(newUsername);
        if(checkUsernameAlreadyInUse){
            return res.status(409).send({
                status: 409,
                message: 'Username is already in use'
            });
        };

        const excistingUser = await checkExcistingUser(email);
        if(!excistingUser){
            return res.status(404).send({
                status: 404,
                message: 'User not found'
            });
        };

        if(oldUsername !== excistingUser.username){
            return res.status(401).send({
                status: 401,
                message: 'Old username not correct'
            });
        }

        const updatedUsername = await updateUsernameById(newUsername, userId);
        if(!updatedUsername){
            return res.status(409).send({
                status: 409,
                message: 'Failed to update username'
            });
        }

        return res.status(200).send({
            status: 200,
            message: 'Username updated successfully'
        });
        
    }catch(error:any){
        console.error('Error fetching update password:', error);
        return res.status(500).send({
            status: 500,
            message: error.message
        });
    };
}

export const deleteAccount = async(req:Request, res:Response) => {
    try{

        const userId = req.signedCookies.session_id;

        // const { userId } = req.body;

        if(!userId){
            return res.status(401).send({
                status: 401,
                message: 'Missing user info'
            });
        }

        const excistingUser = await findUser(userId);

        if(!excistingUser){
            return res.status(404).send({
                status: 404,
                message: 'User not found'
            });
        };
        
        const result = await deleteUserById(userId);

        if(!result){
            return res.status(409).send({
                status: 409,
                message: 'Failed to delete user'
            });
        };

        return res.status(204).send({
            status: 204,
            message: 'Account deleted successfully',
        });

    }catch(error:any){
        console.error('Error fetching delete account:', error);
        return res.status(500).send({
            status: 500,
            message: error.message
        });
    };
}