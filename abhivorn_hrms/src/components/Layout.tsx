import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";

const Layout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <WhatsAppButton />
            <Footer />
        </>
    );
};

export default Layout;
