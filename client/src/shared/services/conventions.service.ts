const BASE_URL = import.meta.env.VITE_API_URL;

//Type
import { type ConventionType } from "../types/Convention.type";

interface GetConventionProps {
    status: number,
    message: string,
    data?: ConventionType[]
}

interface GetSingleConventionProps {
    status: number,
    message: string,
    data?: ConventionType
}

class ConventionService {
    async getAllConventions():Promise<GetConventionProps>{
        const response = await fetch(`${BASE_URL}/conventions/`);

        if(!response.ok){
            const errorData = await response.json();
            throw new Error(`${errorData.status} | ${errorData.message}` || 'failed to get conventions');
        }

        const data = await response.json();
        return data;
    }

    async getSingleConvention(slug:string | undefined):Promise<GetSingleConventionProps>{
        const response = await fetch(`${BASE_URL}/conventions/convention?slug=${slug}`);

        if(!response.ok){
            const errorData = await response.json();
            throw new Error(`${errorData.status} | ${errorData.message}` || 'failed to get conventions');
        }

        const data = await response.json();
        return data;
    }

}

export const conventionService = new ConventionService();