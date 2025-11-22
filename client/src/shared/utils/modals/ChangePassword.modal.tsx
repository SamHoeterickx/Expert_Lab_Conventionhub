import { useState, type FC } from "react";

//Hooks
import { useUpdatePassword } from "../../hooks";

//Type
import type { DangerZoneModalProps } from "../../types/DangerZone.type";
interface updatePasswordDataProps {
    oldPassword: string,
    newPassword: string,
    repeatNewPassword: string,
    email: string
}

//Style
import './modal.css'

export const ChangePasswordModal: FC<DangerZoneModalProps> = ({ isOpen, email, onClose }) => {
    const [updatePasswordData, setUpdatePasswordData] = useState<updatePasswordDataProps>({
        oldPassword: '',
        newPassword: '',
        repeatNewPassword: '',
        email: email
    });

    const { mutate, isPending, isError, error } = useUpdatePassword();

    const handleSubmit = async() => {
        mutate(updatePasswordData, {
            onSuccess: (data) => {
                console.log('Password updated:', data);
                onClose(); 
            },
            onError: (error) => {
                console.error('Failed to update password:', error);
            }
        });
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, field:string) => {
        setUpdatePasswordData(prev => ({
            ...prev,
            [field]: e.target.value
        }))
    }
  
    if (!isOpen) return null;
  
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h3>Change Password</h3>
                <input 
                    className="modal-input"
                    id="oldPassword"
                    type="password" 
                    placeholder="Old Password" 
                    onChange={(e) => handleInputChange(e, 'oldPassword')} 
                    value={ updatePasswordData.oldPassword }
                />
                <input 
                    className="modal-input"
                    id="password"
                    type="password" 
                    placeholder="New Password" 
                    onChange={(e) => handleInputChange(e, 'newPassword')} 
                    value={ updatePasswordData.newPassword }
                    autoComplete="new-password"
                />
                <input 
                    className="modal-input"
                    id="repeatPassword"
                    type="password" 
                    placeholder="Repeat New Password" 
                    onChange={(e) => handleInputChange(e, 'repeatNewPassword')}
                    value={ updatePasswordData.repeatNewPassword }
                    autoComplete="new-password"
                />
                {
                    isError && <p style={{color: 'red', textAlign: 'center'}}>{error?.message || 'Something went wrong'}</p>
                }
                <button 
                    onClick={onClose} 
                    className="danger-button"
                >
                    Cancel
                </button>
                <button 
                    onClick={handleSubmit} 
                    className="modal-button"
                    disabled={ updatePasswordData.oldPassword === '' || updatePasswordData.newPassword === '' || updatePasswordData.repeatNewPassword === '' }
                >
                    { isPending ? 'Updating password...' : 'Update'}
                </button>
            </div>
        </div>
    );
  };