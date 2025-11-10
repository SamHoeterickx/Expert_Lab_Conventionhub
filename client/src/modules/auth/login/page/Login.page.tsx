import { useEffect, useState, type FormEvent } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";

//Hooks

//Routes
import { REGISTER_ROUTE } from "../../register";
import { useLogin } from "../../../../shared/hooks";

//Types
interface FormDataProps {
    email: string,
    password: string
}

export const Login = () => {

    const [redirectUri, setRedirectUri] = useState<string | undefined>(undefined);
    const [formData, setFormData] = useState<FormDataProps>({
        email: '',
        password: ''
    });
    const [searchParams, setSearchParams] = useSearchParams();
    const {mutate, isPending, isError, error} = useLogin();
    const location = useLocation();
    
    useEffect(() => {
        const redirectPath:string|null = searchParams.get('redirect_uri');
        if(redirectPath){
            const path:string[] = redirectPath.split('/');
            setRedirectUri(path[1]);
        }
    }, [location])

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
        setFormData(prev => ({
            ...prev,
            [field]: e.target.value
        }));
    }

    const handleFormSubmition = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(redirectUri){
            mutate(formData, redirectUri);
        }
    }

    return(
        <form className="auth-form" onSubmit={handleFormSubmition} >
            <div className="auth-input-option">
                <label>EMAIL</label>
                <input 
                    type="email" 
                    name="email" 
                    id="login_email"
                    onChange={(e) => handleInputChange(e, 'email')}
                />
            </div>
            <div className="auth-input-option">
                <label>PASSWORD</label>
                <input 
                    type="password" 
                    name="password" 
                    id="login_password"
                    onChange={(e) => handleInputChange(e, 'password')}
                />
            </div>
            <input 
                className="auth-button" 
                type="submit"
                value={ isPending ? 'LOGGING IN...' : 'LOGIN'} 
                disabled={ isPending }
            />
            {
                isError && (
                    <p style={{ color: 'red' }}>
                        Error: { error.message }
                    </p>
                )
            }
            <Link to={`/auth/${REGISTER_ROUTE.path}`}>
                REGISTER
            </Link>
        </form>
    )
}