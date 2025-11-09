import type { FormEvent } from "react";
import { Link } from "react-router-dom";

//Routes
import { LOGIN_ROUTE } from "../../login";
import { authService } from "../../../../shared/services/auth.service";

export const Register = () => {

    const handleFormSubmition = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        const form = e.currentTarget;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries()) as Record<string, string>;
        register(data.email, data.username, data.password, data.repeatPassword)
    }

    const register = async(email:string, username:string, password:string, repeatPassword:string) => {
        try{
            const data = await authService.register(email, username, password, repeatPassword);
            console.log(data);
        }catch(error:any){
            console.error('Faild to fetch register:', error);
        }
    } 

    return(
        <form className="auth-form" onSubmit={handleFormSubmition} >
            <div className="auth-input-option">
                <label>EMAIL</label>
                <input type="email" name="email" id="login_email" />
            </div>
            <div className="auth-input-option">
                <label>USERNAME</label>
                <input type="text" name="username" id="login_username" />
            </div>
            <div className="auth-input-option">
                <label>PASSWORD</label>
                <input type="password" name="password" id="login_password" />
            </div>
            <div className="auth-input-option">
                <label>REPEATPASSWORD</label>
                <input type="password" name="repeatPassword" id="login_repeat_password" />
            </div>
            <input className="auth-button" type="submit" value="REGISTER" />
            <Link to={`/auth/${LOGIN_ROUTE.path}`}>
                LOGIN
            </Link>
        </form>
    )
}