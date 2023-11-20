import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import "./Articles.css";
import Table from "../../Components/Table/Table";
import Modal from "../../Components/Modal/Modal";
import { useRecoilState } from "recoil";
import { modalContentAtom } from "../../Atoms";

export default function Articles() {
    const auth = getAuth();
    const [modalContent, setModalContent] = useRecoilState(modalContentAtom);

    const handleSignOut = () => {
        signOut(auth);
    };

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
