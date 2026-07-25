import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import HeaderPage from "../components/header/Header";

export default function MainLayout() {

    return (
        <Layout>
            <HeaderPage/>
            <Outlet />
        </Layout>
    );
}
