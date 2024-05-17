import { Outlet } from "react-router-dom";
import Footer from "../Pages/Sharedpage/Footer/Footer";
import Navbar from "../Pages/Sharedpage/Navbar/Navbar";

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>     
        </div>
    );
};

export default Main;