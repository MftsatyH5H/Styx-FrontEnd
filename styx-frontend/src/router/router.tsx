/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "../features/authentication/Login";
import { useSelector } from "react-redux";
import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import HeaderCom from "../features/_shared/header/Header";
import SiderCom from "../features/_shared/sider/Sider";
import UsersView from "../features/users/usersView";
function AppRouter() {
    //remove this later
    //@ts-ignore
    const Logged = useSelector((state) => state.user.jwt);
    return (
        <BrowserRouter>
                {Logged === "" ? (
                    <Routes>
                    <Route path="/" Component={Login} />
                    </Routes>
                ) : (
                    <Layout>
                        <HeaderCom></HeaderCom>
                        <Layout>
                            <SiderCom></SiderCom>
                            <Content>
                                <Routes>
                                    <Route path="/" Component={UsersView} />
                                    <Route path="/users" Component={UsersView} />
                                </Routes>
                            </Content>
                        </Layout>
                    </Layout>
                )}
        </BrowserRouter>
    );
}
export default AppRouter;
