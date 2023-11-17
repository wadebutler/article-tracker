import { getAuth, signOut } from "firebase/auth";
import "./Articles.css";
import Table from "../../Components/Table/Table";
import Modal from "../../Components/Modal/Modal";
import { useRecoilState } from "recoil";
import { displayModalAtom } from "../../Atoms";

export default function Articles() {
    const auth = getAuth();
    const [displayModal, setDisplayModal] = useRecoilState(displayModalAtom);

    const handleSignOut = () => {
        signOut(auth);
    };

    return (
        <>
            {!displayModal ? null : <Modal />}

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
