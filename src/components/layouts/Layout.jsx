import { useState } from "react";
import Header from "./Header";
import Sidebar from "./sidebar/Sidebar";

const Layout = ({ children }) => {

    const [collapsed, setCollapsed] = useState(false);
    // mobil
    const [isMobile, setIsMobile] = useState(false);

    // toggle sidebar in mobile view
    const toggleMobilSidebar = () => {
        setIsMobile(!isMobile);
    };

    //  toggle large screen sidebar
    const toggleSidebar = () => {
        setCollapsed(!collapsed);
        console.log(collapsed)
    };
    return (
        <div className="flex min-h-screen w-full bg-gray-100">
            <Sidebar collapsed={collapsed} isMobile={isMobile} setIsMobile={setIsMobile} />
            <main className="flex-1 p-8 md:p-6">
                <Header toggleSidebar={toggleSidebar} toggleMobilSidebar={toggleMobilSidebar} />
                {children}
            </main>
        </div>
    );
};

export default Layout;