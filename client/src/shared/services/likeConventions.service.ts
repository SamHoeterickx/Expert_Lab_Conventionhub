const BASE_URL = import.meta.env.VITE_API_URL;

class LikeConventionService {

    async getLikeStatus(conventionId: string){
        const response = await fetch(`${BASE_URL}/like/?conventionId=${conventionId}`, {
            credentials: 'include',
        });

        if(!response.ok){
            const errorData = await response.json();
            throw new Error(`${errorData.status} | ${errorData.message}` || 'Failed to fetch likeStatus');
        };

        const data = await response.json();
        return data
    }

    async likeConvention(conventionId: string){
        const response = await fetch(`${BASE_URL}/like/`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            credentials: 'include',
            body: JSON.stringify({
                conventionId,
            })
        });

        if(!response.ok){
            const errorData = await response.json();
            throw new Error(`${errorData.message}` || 'Failed to like convention' );
        }

        const data = await response.json();
        return data
    }

    async removeLikeConvention(conventionId:string){
        const response = await fetch(`${BASE_URL}/like/`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json"
            },
            credentials: 'include',
            body: JSON.stringify({
                conventionId,
            })
        });

        if(!response.ok){
            const errorData = await response.json();
            throw new Error(`${errorData.status} | ${errorData.message}` || 'Failed to like convention' );
        }

        const data = await response.json();
        return data
    }

    async getMyLikedConventions(){
        const response = await fetch(`${BASE_URL}/like/getMyLikedConvention`, {
            credentials: 'include'
        });

        if(!response.ok){
            const errorData = await response.json();
            throw new Error(`${errorData.status} | ${errorData.message}` || 'Failed to like convention' );
        }

        const data = await response.json();
        return data
    }
}

export const likeConventionService = new LikeConventionService();