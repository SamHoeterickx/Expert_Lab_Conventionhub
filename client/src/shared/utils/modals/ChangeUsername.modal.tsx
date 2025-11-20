import { useState, type FC } from "react";

//Type
import type { DangerZoneModalProps } from "../../types/DangerZone.type";

//Style
import './modal.css'

export const ChangeUsernameModal: FC<DangerZoneModalProps> = ({ isOpen, onClose }) => {
    const [username, setUsername] = useState("");
    
    const handleSubmit = () => {
       // TODO: Add mutate logic here
       console.log("New Username:", username);
       onClose();
    }
  
    if (!isOpen) return null;
  
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h3>Change Username</h3>
                <input 
                    type="text" 
                    placeholder="New Username" 
                    className="modal-input"
                    onChange={(e) => setUsername(e.target.value)} 
                />
                    <button onClick={onClose} className="danger-button">Cancel</button>
                    <button onClick={handleSubmit} className="modal-button">Save</button>
            </div>
        </div>
    );
};