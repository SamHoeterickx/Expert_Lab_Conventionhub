import type { FC } from "react";

//Type
import type { DangerZoneModalProps } from "../../types/DangerZone.type";

//Style
import './modal.css'

export const DeleteAccountModal: FC<DangerZoneModalProps> = ({ isOpen, onClose }) => {
    
    const handleDelete = () => {
       // TODO: Add delete mutation here
       console.log("Account Deleted");
       onClose();
    }
  
    if (!isOpen) return null;
  
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h3>Delete Account</h3>
                <p>Are you sure? This action cannot be undone.</p>
                <button onClick={onClose}>Cancel</button>
                <button onClick={handleDelete} className="danger-button">Confirm Delete</button>
            </div>
        </div>
    );
};