import { PrismaClient, User} from '@prisma/client';
import * as bcrypt from 'bcrypt';
const prisma = new PrismaClient();

//Types
interface UserDataProps {
    email: string,
    password: string,
    username: string
}

export const checkExcistingUser = async(email:string) => {
    const result = prisma.user.findFirst({
        where: {
            email: email
        }
    });

    return result
}

export const verifyPassword = async(password:string, hashedPassword:string) => {
    return await bcrypt.compare(password, hashedPassword);
}

export const findUser = async(userId:string) => {
    const result = await prisma.user.findUnique({
        where: {
            id: userId
        },
        select: {
            id: true,
            email: true,
            username: true
        }
    });
    return result;
}

export const isUserNameUnique = async(username:string) => {
    const result = await prisma.user.findUnique({
        where: {
            username: username
        }
    });

    return result;
}

export const getUserData = async(userId:string) => {
    const result = await prisma.user.findUnique({
        where: {
            id: userId
        },
        select: {
            id: true,
            username: true,
            email: true,
        }
    });

    return result;
}

export const registerNewUser = async(userData:UserDataProps) => {

    const hashedPassword = await bcrypt.hash(userData.password, 10);

    const result = await prisma.user.create({
        data: {
            email: userData.email,
            username: userData.username,
            password: hashedPassword
        },
        select: {
            id: true
        }
    })

    return result
}

export const updatePasswordById = async(newPassword:string, userId: string) => {

    const newHashedPassword = await bcrypt.hash(newPassword, 10);

    const result = await prisma.user.update({
        where: { 
            id: userId 
        },
        data: {
            password: newHashedPassword 
        },
    });

    return result;
}

export const updateUsernameById = async(newUsername:string, userId: string) => {

    const result = await prisma.user.update({
        where: { 
            id: userId 
        },
        data: {
            username: newUsername 
        },
    });
    
    return result;
}

export const deleteUserById = async(userId:string) => {
    const result = await prisma.user.delete({
        where: {
            id: userId
        }
    });

    return result;
};