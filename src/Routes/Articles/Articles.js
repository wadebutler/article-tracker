import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import "./Articles.css";
import Table from "../../Components/Table/Table";
import Modal from "../../Components/Modal/Modal";
import { useRecoilState } from "recoil";
import { modalContentAtom } from "../../Atoms";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Articles() {
    const auth = getAuth();
    const navigate = useNavigate();
    const [modalContent, setModalContent] = useRecoilState(modalContentAtom);

    const handleSignOut = () => {
        signOut(auth);
    };

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (!user) {
                navigate("/table", { replace: true });
            }
        });
    }, []);

    return (
        <>
            {!modalContent.view ? null : <Modal />}

            <div>
                <button
                    className="table-logout-button"
                    onClick={() => handleSignOut()}
                >
                    Sign-Out
                </button>

                <Table />
            </div>
        </>
    );
}
