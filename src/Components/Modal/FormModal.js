import { useState } from "react";
import "./Modal.css";
import { useRecoilState } from "recoil";
import { displayModalAtom, modalContentAtom, reloadAtom } from "../../Atoms";
import { addData, updateData } from "../../API";
import { getAuth } from "firebase/auth";

export default function FormModal() {
    const auth = getAuth();
    const [modalContent, setModalContent] = useRecoilState(modalContentAtom);
    const [displayModal, setDisplayModal] = useRecoilState(displayModalAtom);
    const [reload, setReload] = useRecoilState(reloadAtom);
    const [title, setTitle] = useState(
        modalContent.type === "add" ? "" : modalContent.item.title
    );
    const [content, setContent] = useState(
        modalContent.type === "add" ? "" : modalContent.item.content
    );

    const handleAddSubmit = () => {
        const tempPost = {
            createdAt: new Date(),
            title: title,
            author: auth.currentUser.email,
            content: content,
            tags: [],
        };

        addData(tempPost);
        setReload(true);
        setDisplayModal(!displayModal);
    };

    const handleEditSubmit = () => {
        const tempPost = {
            createdAt: modalContent.item.createdAt,
            title: title,
            author: auth.currentUser.email,
            content: content,
            tags: [],
        };

        updateData(modalContent.item.id, tempPost);
        setReload(true);
        setDisplayModal(!displayModal);
    };

    return (
        <div className="form-modal-container">
            <h2>
                {modalContent.type === "add" ? "New Article" : "Edit Article"}
            </h2>

            <label>
                Title:
                <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </label>

            <label>
                Content:
                <textarea
                    rows={10}
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
            </label>

            <label>
                Tags:
                <input />
            </label>

            <button
                disabled={title === "" || content === "" ? true : false}
                onClick={() =>
                    modalContent.type === "add"
                        ? handleAddSubmit()
                        : handleEditSubmit()
                }
            >
                Submit
            </button>
        </div>
    );
}
