import "./Modal.css";
import { useRecoilState } from "recoil";
import { modalContentAtom, reloadAtom } from "../../Atoms";
import { deleteData } from "../../API";

export default function DeleteModal() {
    const [modalContent, setModalContent] = useRecoilState(modalContentAtom);
    const [reload, setReload] = useRecoilState(reloadAtom);

    const handleDelete = () => {
        deleteData(modalContent.item.id);
        setReload(true);
        setModalContent({ view: !modalContent.view, type: null, item: null });
    };

    return (
        <div className="delete-modal-container">
            <h2>Delete</h2>

            <p>Are you sure you want to delete this item?</p>

            <div className="delete-modal-confirm-container">
                <button onClick={() => handleDelete()}>Yes</button>

                <button onClick={() => null}>No</button>
            </div>
        </div>
    );
}
