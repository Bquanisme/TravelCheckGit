import { Outlet, useNavigate } from "react-router-dom";
import { Layout, Menu } from "antd";

const { Header, Content } = Layout;

export default function MainLayout() {
    const navigate = useNavigate();

    return (
        <Layout>
            <Header>
                <Menu
                    mode="horizontal"
                    onClick={(e) => navigate(e.key)}
                    items={[
                        { key: "/", label: "Home" },
                        { key: "/get-start", label: "get-start" },
                    ]}
                ></Menu>
            </Header>
            <Content style={{ padding: 24 }}>
                <Outlet />
            </Content>
        </Layout>
    );
}
