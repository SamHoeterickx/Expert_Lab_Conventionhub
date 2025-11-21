import { useEffect, useState, type FormEvent } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

//Hooks
import { useRegister } from "../../../../shared/hooks";

//Routes
import { LOGIN_ROUTE } from "../../login";
import { HOME_ROUTE } from "../../../home";

//Type
interface FormDataProps {
    email: string,
    password: string,
    repeatPassword: string,
    username: string
}


export const Register = () => {

        const [formData, setFormData] = useState<FormDataProps>({
            email: '',
            password: '',
            repeatPassword: '',
            username: ''
        });
        const [targetPath, setTargetPath] = useState<string>('');
        const [searchParams] = useSearchParams();
        
        const nav = useNavigate();

        const { mutate, isPending, isError, error} = useRegister();

        useEffect(() => {
            const redirectPath = searchParams.get('redirect_uri');
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
                    console.error("Register failed:", error.message);
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
                    onChange={e => handleInputChange(e, 'email')}
                />
            </div>
            <div className="auth-input-option">
                <label>USERNAME</label>
                <input 
                    type="text" 
                    name="username" 
                    id="login_username"
                    onChange={e => handleInputChange(e, 'username')}
                />
            </div>
            <div className="auth-input-option">
                <label>PASSWORD <span>{ "(MIN 8 CHARACTERS)" }</span></label>
                <input 
                    type="password" 
                    name="password" 
                    id="login_password"
                    onChange={e => handleInputChange(e, 'password')}
                />
            </div>
            <div className="auth-input-option">
                <label>REPEATPASSWORD</label>
                <input 
                    type="password" 
                    name="repeatPassword" 
                    id="login_repeat_password"
                    onChange={e => handleInputChange(e, 'repeatPassword')}
                    required
                />
            </div>
            <input 
                className="auth-button" 
                type="submit" 
                value={ isPending ? 'PENDING...' : 'REGISTER' }
                disabled={ isPending }
            />
            {
                isError && (
                    <p style={{ color: 'red' }}>
                        Error: { error.message }
                    </p>
                )
            }
            <Link to={`/auth/${LOGIN_ROUTE.path}?redirect_uri=${targetPath}`}>
                LOGIN
            </Link>
        </form>
    )
}