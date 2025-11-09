const BASE_URL = 'http://localhost:3000/api/users';

class AuthService {
    async login(email:string, password:string){
        const response = await fetch(`${BASE_URL}/login`, {
            method: 'POST',
            headers: {
                'Content-type': "application/json"
            },
            body: JSON.stringify({
                email,
                password
            })
        });

        if(!response.ok){
            throw new Error('Failed to login');
        }

        const data = response.json();
        return data
    }

    async register(email:string, username:string, password:string, repeatPassword:string){
        const response = await fetch(`${BASE_URL}/register`, {
            method: 'POST',
            headers: {
                'Content-type': "application/json"
            },
            body: JSON.stringify({
                email,
                username,
                password,
                repeatPassword
            })
        });

        if(!response.ok){
            throw new Error('Failed to register');
        }

        const data = response.json();
        return data;
    }
}

export const authService = new AuthService();