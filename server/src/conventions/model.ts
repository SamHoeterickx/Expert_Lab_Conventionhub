import { PrismaClient, Prisma } from '@prisma/client';
import slugify from 'slugify';
import crypto from 'crypto';


const prisma = new PrismaClient();

//Types
interface ConventionDataProps {
    title: string,
    category: string,
    description: string,
    contentMd: string,
    authorId: string
}

export const getAllConventions = async() => {
    const result = await prisma.convention.findMany({});
    return result
}

export const findConventionBySlug = async(slug:string) => {
    const result = await prisma.convention.findUnique({
        where: {
            slug
        },
        include: {
            likes: true,
            author: {
                select:{
                    id: true,
                    username: true 
                }
            }
        }
    })
    return result
}

export const saveConvention = async(conventionData:ConventionDataProps) => {
    const slug = generateSlug(conventionData.title);

    const result = await prisma.convention.create({
        data: {
            title: conventionData.title,
            category: conventionData.category,
            description: conventionData.description,
            slug: slug,
            contentMd: conventionData.contentMd,
            authorId: conventionData.authorId
        }
    });

    return result
}

export const getRandomConvetionsWithLimit = async(limit:number, random:boolean) => {
    const orderByClause = random ? Prisma.sql`ORDER BY RANDOM()` : Prisma.empty;

    const conventions = await prisma.$queryRaw(
        Prisma.sql`SELECT * FROM "Convention" ${orderByClause} LIMIT ${limit}`
    ); 

    return conventions;
}

export const removeConvention = async(conventionId:string, authorId:string) => {
    const result = await prisma.convention.delete({
        where: {
            id: conventionId,
            authorId: authorId
        }
    });

    return result
}

const generateSlug = (title:string) => {

    const baseSlug = slugify(title);
    const randomSuffix = crypto.randomBytes(6).toString('hex');

    const slug = `${baseSlug}-${randomSuffix}`;
    return slug;
}