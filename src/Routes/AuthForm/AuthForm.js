import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AuthForm.css";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "firebase/auth";
import { FaEye } from "react-icons/fa";

export default function AuthForm({ formType }) {
    const navigate = useNavigate();
    const auth = getAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState(null);
    const [displayPassword, setDisplayPassword] = useState(false);
    const isSignIn = formType === "signin" ? true : false;

    const handleSubmit = async () => {
        setError(null);

        if (isSignIn) {
            signInWithEmailAndPassword(auth, email, password)
                .then(() => {
                    navigate("/table", { replace: true });
                })
                .catch((error) => {
                    console.log(error);
                });
        } else if (!isSignIn) {
            if (password === confirmPassword) {
                createUserWithEmailAndPassword(auth, email, password)
                    .then(() => {
                        navigate("/table", { replace: true });
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            } else {
                setError("your passwords do not match");
            }
        }
    };

    useEffect(() => {
        setEmail("");
        setConfirmPassword("");
        setPassword("");
    }, [navigate]);

    return (
        <div className="auth-container">
            <h1>Welcome {isSignIn ? "Sign-In" : "Sign-Up"}</h1>

            <label className="auth-label">
                Email
                <input
                    value={email}
                    placeholder="Email"
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                />
            </label>

            <label className="auth-label">
                Password
                <input
                    type={displayPassword ? "text" : "password"}
                    placeholder="Password"
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                />
                <FaEye
                    onClick={() => {
                        setDisplayPassword(!displayPassword);
                    }}
                    className="auth-eye-icon"
                />
            </label>

            {isSignIn ? null : (
                <label className="auth-label">
                    Confirm Password
                    <input
                        type={displayPassword ? "text" : "password"}
                        placeholder="Confirm Password"
                        onChange={(e) => {
                            setConfirmPassword(e.target.value);
                        }}
                    />
                    <FaEye
                        onClick={() => {
                            setDisplayPassword(!displayPassword);
                        }}
                        className="auth-eye-icon"
                    />
                </label>
            )}

            {error === null ? null : <p className="auth-error-text">{error}</p>}

            <button
                disabled={password === "" ? true : false}
                onClick={() => handleSubmit()}
                className="auth-submit"
            >
                Submit
            </button>

            <div className="auth-bottom-text">
                {isSignIn ? (
                    <>
                        <p>Don't have an account?</p>
                        <button
                            onClick={() =>
                                navigate("/signup", { replace: true })
                            }
                        >
                            Sign-Up
                        </button>
                    </>
                ) : (
                    <>
                        <p>Already have an account?</p>
                        <button
                            onClick={() => navigate("/", { replace: true })}
                        >
                            Sign-In
                        </button>
                    </>
                )}
            </div>
        </div>
    );
}
