import { useState, type FC, type FormEvent } from "react";

//Hooks
import { useDeleteAccount } from "../../hooks";

//Type
interface DeleteAccountModalProps {
    isOpen:boolean,
    onClose: () => void,
    username: string
}
//Style
import './modal.css'

export const DeleteAccountModal: FC<DeleteAccountModalProps> = ({ isOpen, onClose, username }) => {
    const [deleteInput, setDeleteInput] = useState<string>('');

    const { mutate, isPending, error } = useDeleteAccount();
    
    const handleDelete = (e:FormEvent) => {
        mutate(e)
        onClose();
    }
  
    if (!isOpen) return null;
  
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h3>Delete Account</h3>
                <p>
                    To confirm, type <strong>{ username }</strong> below:
                </p>
                <input 
                    type="text"
                    className="modal-input"
                    placeholder={"username"}
                    value={deleteInput}
                    onChange={(e) => setDeleteInput(e.target.value)}
                />
                <button onClick={ onClose }>Cancel</button>
                <button 
                    onClick={ handleDelete } 
                    className="danger-button"
                    disabled={deleteInput !== username}
                >
                    {isPending ? 'Deleting...' : 'Confirm Delete'}
                </button>
            </div>
        </div>
    );
};