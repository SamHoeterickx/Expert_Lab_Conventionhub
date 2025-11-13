import { PrismaClient} from '@prisma/client';

const prisma = new PrismaClient({ log:['query']});

//Types
interface LikeDataProps {
    conventionId: string,
    userId: string
}

export const getLikeStatusOfConvetionWithId = async (likeData:LikeDataProps) => {
    const result = await prisma.like.findFirst({
        where: {
            conventionId: likeData.conventionId,
            userId: likeData.userId
        },
    });
    
    return result
}

export const checkIfLikeExcist = async (likeData:LikeDataProps) => {
    const result = await prisma.like.findFirst({
        where: {
            userId: likeData.userId,
            conventionId: likeData.conventionId
        }
    });

    return result
}

export const likeConventionWithId = async(likeData:LikeDataProps) => {
    const result = await prisma.like.create({
        data: {
            userId: likeData.userId,
            conventionId: likeData.conventionId
        }
    });
    return result;
}

export const removeLikeConventionWithId = async(likeData:LikeDataProps) => {
    const result = await prisma.like.delete({
        where: {
            userId_conventionId: {
                conventionId: likeData.conventionId,
                userId: likeData.userId
            }
        }
    })

    return result
}