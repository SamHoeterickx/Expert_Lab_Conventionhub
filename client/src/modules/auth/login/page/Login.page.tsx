import type { FormEvent } from "react";
import { Link } from "react-router-dom";

//Routes
import { REGISTER_ROUTE } from "../../register";
import { authService } from "../../../../shared/services/auth.service";

export const Login = () => {

    const handleFormSubmition = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries()) as Record<string, string>;

        login(data.email, data.password);
    }

    const login = async(email:string, password:string) => {
        try{
            const data = await authService.login(email, password);
            console.log(data)

        }catch(error:any){
            console.error('Failed to fetch login:', error);
        }
    }

    return(
        <form className="auth-form" onSubmit={handleFormSubmition} >
            <div className="auth-input-option">
                <label>EMAIL</label>
                <input type="email" name="email" id="login_email" />
            </div>
            <div className="auth-input-option">
                <label>PASSWORD</label>
                <input type="password" name="password" id="login_password" />
            </div>
            <input className="auth-button" type="submit" value="LOGIN" />
            <Link to={`/auth/${REGISTER_ROUTE.path}`}>
                REGISTER
            </Link>
        </form>
    )
}