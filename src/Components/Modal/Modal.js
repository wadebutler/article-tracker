import "./Modal.css";
import { IoMdCloseCircle } from "react-icons/io";
import { useRecoilState } from "recoil";
import { displayModalAtom, modalContentAtom } from "../../Atoms";
import Delete from "./DeleteModal";
import FormModal from "./FormModal";

export default function Modal() {
    const [displayModal, setDisplayModal] = useRecoilState(displayModalAtom);
    const [modalContent, setModalContent] = useRecoilState(modalContentAtom);

    return (
        <div className="modal-backdrop">
            <div className="modal-container">
                <IoMdCloseCircle
                    size={30}
                    className="modal-close-icon"
                    onClick={() => setDisplayModal(!displayModal)}
                />

                {modalContent.type !== "delete" ? null : <Delete />}
                {modalContent.type !== "add" ? null : <FormModal />}
                {modalContent.type !== "edit" ? null : <FormModal />}
            </div>
        </div>
    );
}
