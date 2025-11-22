import React, { useState, type FC, type FormEvent } from "react";

//Type
import type { DangerZoneModalProps } from "../../types/DangerZone.type";
interface UpdateUsernameProps{
    oldUsername: string,
    newUsername: string,
    email: string
}

//Style
import './modal.css'
import { useUpdateUsername } from "../../hooks";

export const ChangeUsernameModal: FC<DangerZoneModalProps> = ({ isOpen, email, onClose }) => {
    
    const [updateUsernameData, setUpdateUsernameData] = useState<UpdateUsernameProps>({
        oldUsername: '',
        newUsername: '',
        email:email
    });

    const { mutate, isPending, isError, error } = useUpdateUsername();

    const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>, field:string) => {
        setUpdateUsernameData(prev => ({
            ...prev,
            [field]: e.target.value
        }));
    }
    
    const handleSubmit = () => {
        mutate(updateUsernameData, {
            onSuccess: (data) => {
                console.log('Password updated:', data);
                onClose(); 
                window.location.reload();
            },
            onError: (error) => {
                console.error('Failed to update password:', error);
            }
        });
    }
  

    if (!isOpen) return null;
  
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h3>Change Username</h3>
                <input 
                    type="text" 
                    placeholder="Old Username" 
                    className="modal-input"
                    onChange={(e) => handleInputChange(e, 'oldUsername')} 
                />
                <input 
                    type="text" 
                    placeholder="New Username" 
                    className="modal-input"
                    onChange={(e) => handleInputChange(e, 'newUsername')} 
                />
                {
                    isError && <p style={{color: 'red', textAlign: 'center'}}>{error?.message || 'Something went wrong'}</p>
                }
                <button onClick={onClose} className="danger-button">Cancel</button>
                <button 
                    onClick={handleSubmit} 
                    className="modal-button"
                    disabled={ updateUsernameData.newUsername === '' || updateUsernameData.oldUsername === '' || updateUsernameData.email === ''}
                >
                    { isPending ? 'Updating...' : 'Update' }
                </button>
            </div>
        </div>
    );
};