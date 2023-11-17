import "./Modal.css";
import { useRecoilState } from "recoil";
import { displayModalAtom, modalContentAtom, reloadAtom } from "../../Atoms";
import { deleteData } from "../../API";

export default function DeleteModal() {
    const [displayModal, setDisplayModal] = useRecoilState(displayModalAtom);
    const [modalContent, setModalContent] = useRecoilState(modalContentAtom);
    const [reload, setReload] = useRecoilState(reloadAtom);

    const handleDelete = () => {
        deleteData(modalContent.item.id);
        setDisplayModal(!displayModal);
        setReload(true);
    };

    return (
        <div className="delete-modal-container">
            <h2>Delete</h2>

            <p>Are you sure you want to delete this item?</p>

            <div className="delete-modal-confirm-container">
                <button onClick={() => handleDelete()}>Yes</button>

                <button onClick={() => setDisplayModal(!displayModal)}>
                    No
                </button>
            </div>
        </div>
    );
}
