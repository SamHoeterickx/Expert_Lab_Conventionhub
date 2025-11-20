const BASE_URL = import.meta.env.VITE_API_URL;

class AuthService {
    async login(email:string, password:string){
        const response = await fetch(`${BASE_URL}/users/login`, {
            method: 'POST',
            headers: {
                'Content-type': "application/json"
            },
            body: JSON.stringify({
                email,
                password
            }),
            credentials: 'include'
        });

        if(!response.ok){
            const errorData = await response.json();
            throw new Error(`${errorData.status} | ${errorData.message}` || 'Failed to login');
        }

        const data = await response.json();
        return data
    }

    async register(email:string, username:string, password:string, repeatPassword:string){
        const response = await fetch(`${BASE_URL}/users/register`, {
            method: 'POST',
            headers: {
                'Content-type': "application/json"
            },
            body: JSON.stringify({
                email,
                username,
                password,
                repeatPassword
            }),
            credentials: 'include'
        });

        if(!response.ok){
            const errorData = await response.json();
            console.log(errorData)
            throw new Error(`${errorData.status} | ${errorData.message}` || 'Failed to register');
        }

        const data = await response.json();
        return data;
    }

    async authenticateMe(){
        const response = await fetch(`${BASE_URL}/users/authenticate`,{
            method: 'GET',
            credentials: 'include'
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Not authenticated');
        };

        const data = await response.json();
        return data
    }

    async getUserData(){
        const response = await fetch(`${BASE_URL}/users/user`, {
            credentials: 'include'
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Not authenticated');
        };

        const data = await response.json();
        return data
    }
}

export const authService = new AuthService();