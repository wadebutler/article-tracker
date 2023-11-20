import AuthForm from "./Routes/AuthForm/AuthForm";
import Articles from "./Routes/Articles/Articles";
import { RouterProvider, createHashRouter } from "react-router-dom";
import { AuthContext } from "./Context/AuthContext";
import { Protected } from "./Routes/Protected/Protected";
import { RecoilRoot } from "recoil";
import DarkMode from "./Components/DarkModeSwitch/DarkMode";

export default function App() {
    const router = createHashRouter([
        {
            path: "/table",
            exact: true,
            element: (
                <Protected>
                    <Articles />
                </Protected>
            ),
        },
        {
            path: "/",
            exact: true,
            element: <AuthForm formType={"signin"} />,
        },
        {
            path: "/signup",
            exact: true,
            element: <AuthForm formType={"signup"} />,
        },
    ]);

    return (
        <AuthContext>
            <RecoilRoot>
                <DarkMode />
                <RouterProvider router={router} />
            </RecoilRoot>
        </AuthContext>
    );
}
