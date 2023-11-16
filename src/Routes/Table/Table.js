import { getAuth, signOut } from "firebase/auth";

export default function Table() {
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
            <p>Table</p>
            <button onClick={() => handleSignOut()}>Sign Out</button>
        </div>
    );
}
