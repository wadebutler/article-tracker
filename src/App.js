import AuthForm from "./Routes/AuthForm/AuthForm";
import Articles from "./Routes/Articles/Articles";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthContext } from "./Context/AuthContext";
import { Protected } from "./Routes/Protected/Protected";
import { RecoilRoot } from "recoil";

export default function App() {
    const router = createBrowserRouter([
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
                <RouterProvider router={router} />
            </RecoilRoot>
        </AuthContext>
    );
}
