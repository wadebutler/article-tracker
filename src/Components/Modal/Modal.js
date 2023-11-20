import "./Modal.css";
import { IoMdCloseCircle } from "react-icons/io";
import { useRecoilState } from "recoil";
import { modalContentAtom } from "../../Atoms";
import Delete from "./DeleteModal";
import FormModal from "./FormModal";

export default function Modal() {
    const [modalContent, setModalContent] = useRecoilState(modalContentAtom);

    return (
        <div className="modal-backdrop">
            <div className="modal-container">
                <IoMdCloseCircle
                    size={30}
                    className="modal-close-icon"
                    onClick={() =>
                        setModalContent({
                            view: !modalContent.view,
                            type: null,
                            item: null,
                        })
                    }
                />

                {modalContent.type === "delete" ? <Delete /> : null}
                {modalContent.type === "add" || modalContent.type === "edit" ? (
                    <FormModal />
                ) : null}
            </div>
        </div>
    );
}
