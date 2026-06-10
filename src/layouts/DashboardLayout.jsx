import { Outlet } from "react-router-dom";

import Sidebar from "../components/dashboard/Sidebar/Sidebar";

const DashboardLayout = () => {
    return (
        <div>
            <aside>
                <Sidebar />
            </aside>
            <section>
                <h1>Dashboard</h1>
                <Outlet />
            </section>
        </div>
    );
}

export default DashboardLayout; 