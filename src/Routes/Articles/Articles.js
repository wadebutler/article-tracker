import { getAuth, signOut } from "firebase/auth";
import "./Articles.css";
import Table from "../../Components/Table/Table";

export default function Articles() {
    const auth = getAuth();

    const handleSignOut = async () => {
        try {
            await signOut(auth);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div>
            <button
                className="table-logout-button"
                onClick={() => handleSignOut()}
            >
                Sign Out
            </button>

            <div className="articles-title">
                <h2>Articles</h2>

                <button>+ Add</button>
            </div>

            <Table />
        </div>
    );
}
