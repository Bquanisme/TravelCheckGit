import { createBrowserRouter } from "react-router-dom";
import GetStartPage from "../pages/get-start";
import ExamplePage from "../pages/example";
import MainLayout from "../layouts";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "",
                element: <ExamplePage />,
            },
            {
                path: "get-start",
                element: <GetStartPage />,
            },
        ]
    },
]);
