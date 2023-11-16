import AuthForm from "./Routes/AuthForm/AuthForm";
import Table from "./Routes/Table/Table";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthContext } from "./Context/AuthContext";
import { Protected } from "./Routes/Protected/Protected";

export default function App() {
    const router = createBrowserRouter([
        {
            path: "/table",
            exact: true,
            element: (
                <Protected>
                    <Table />
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
            <RouterProvider router={router} />
        </AuthContext>
    );
}
