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

export const verifyPassword = async(password:string, hashedPassword:string) => {
    return await bcrypt.compare(password, hashedPassword);
}