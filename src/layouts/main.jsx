import SideBar from "../components/SideBar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const main = () => {
    return (
        <>
            <SideBar />
            <Outlet />
            <Footer />
        </>
    )
}

export default main;