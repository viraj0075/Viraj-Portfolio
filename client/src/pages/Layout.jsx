import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Social from "../components/Social";
const Layout = () => {
    return(
        <main>
            <Navbar/>
            <Outlet/>
            <Social/>
        </main>
    )
};
export default Layout;