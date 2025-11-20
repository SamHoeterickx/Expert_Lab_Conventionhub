const BASE_URL = import.meta.env.VITE_API_URL;

//Type
import { type ConventionType } from "../types/Convention.type";
import type { conventionFormData } from "../types/ConventionForm.type";

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
        console.log(data);
        return data;
    }

    async getConventionPreview(limit:number, random:boolean):Promise<GetConventionProps>{
       const response = await fetch(`${BASE_URL}/conventions/random?limit=${limit}&random=${random}`);

        if(!response.ok){
            const errorData = await response.json();
            throw new Error(`${errorData.status} | ${errorData.message}` || 'failed to get conventions');
        }

        const data = await response.json();
        return data;
    }

    async createnewConvention(formData:conventionFormData){
        const response = await fetch(`${BASE_URL}/conventions/create`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-type': "application/json"
            },
            body: JSON.stringify({
                title: formData.title,
                category: formData.category,
                description: formData.description,
                contentMd: formData.contentMd
            })
        });

        if(!response.ok){
            const errorData = await response.json();
            throw new Error(`${errorData.status} | ${errorData.message}` || 'failed to create conventions');
        }

        const data = await response.json();
        return data;
    }

    async getMyConventions(){
        const response = await fetch(`${BASE_URL}/conventions/myConventions`, {
            credentials: 'include',
        });

        if(!response.ok){
            const errorData = await response.json();
            throw new Error(`${errorData.status} | ${errorData.message}` || 'failed to create conventions');
        }

        const data = await response.json();
        return data;
    }

}

export const conventionService = new ConventionService();