import { useEffect, useState, type FormEvent } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

//Hooks
import { useLogin } from "../../../../shared/hooks";

//Routes
import { REGISTER_ROUTE } from "../../register";
import { HOME_ROUTE } from "../../../home";

//Types
interface FormDataProps {
    email: string,
    password: string
}

export const Login = () => {

    const [formData, setFormData] = useState<FormDataProps>({
        email: '',
        password: ''
    });
    const [targetPath, setTargetPath] = useState<string>('');
    const [searchParams] = useSearchParams();
    
    const nav = useNavigate();

    const {mutate, isPending, isError, error} = useLogin();

    useEffect(() => {
        const redirectPath = searchParams.get('redirect_uri');
        console.log(redirectPath)
        setTargetPath( redirectPath === '' ? `/${HOME_ROUTE.path}` : `${redirectPath}`);
    }, [searchParams]);
    
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
        setFormData(prev => ({
            ...prev,
            [field]: e.target.value
        }));
    }

    const handleFormSubmition = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        mutate(formData, {
            onSuccess: () => {
                nav(targetPath, { replace: true })
            },
            onError: (error) => {
                console.error("Login failed:", error.message);
            }
        });
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
                    required
                />
            </div>
            <div className="auth-input-option">
                <label>PASSWORD</label>
                <input 
                    type="password" 
                    name="password" 
                    id="login_password"
                    onChange={(e) => handleInputChange(e, 'password')}
                    required
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
            <Link to={`/auth/${REGISTER_ROUTE.path}?redirect_uri=${targetPath}`}>
                REGISTER
            </Link>
        </form>
    )
}