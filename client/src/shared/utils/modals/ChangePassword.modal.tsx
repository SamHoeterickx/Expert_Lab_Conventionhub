import { useState, type FC } from "react";

//Type
import type { DangerZoneModalProps } from "../../types/DangerZone.type";

//Style
import './modal.css'

export const ChangePasswordModal: FC<DangerZoneModalProps> = ({ isOpen, onClose }) => {
    const [password, setPassword] = useState("");
    
    const handleSubmit = () => {
       // mutate({ password });
       console.log(password);
       onClose();
    }
  
    if (!isOpen) return null;
  
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h3>Change Password</h3>
                <input 
                    id="oldPassword"
                    type="oldPassword" 
                    placeholder="Old Password" 
                    onChange={(e) => setPassword(e.target.value)} 
                />
                <input 
                    id="password"
                    type="password" 
                    placeholder="New Password" 
                    onChange={(e) => setPassword(e.target.value)} 
                />
                <input 
                    id="repeatPassword"
                    type="repeatPassword" 
                    placeholder="Repeat New Password" 
                    onChange={(e) => setPassword(e.target.value)} 
                />
                <button onClick={onClose} className="danger-button">Cancel</button>
                <button onClick={handleSubmit} className="modal-button">Save</button>
            </div>
        </div>
    );
  };