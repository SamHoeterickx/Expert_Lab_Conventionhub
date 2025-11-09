import { PrismaClient } from '@prisma/client';
import slugify from 'slugify';
import crypto from 'crypto';


const prisma = new PrismaClient();

//Types
interface ConventionDataProps {
    title: string,
    description: string,
    contentMd: string,
    authorId: string
}

export const getAllConventions = async() => {
    const result = await prisma.convention.findMany({});
    return result
}

export const saveConvention = async(conventionData:ConventionDataProps) => {
    const slug = generateSlug(conventionData.title);

    const result = await prisma.convention.create({
        data: {
            title: conventionData.title,
            description: conventionData.description,
            slug: slug,
            contentMd: conventionData.contentMd,
            authorId: conventionData.authorId
        }
    });

    return result
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