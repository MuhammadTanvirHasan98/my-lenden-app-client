import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";

const MainLayout = () => {
  return (
    <div>
         <Navbar/>
         <Outlet/>
        <h1>This is footer</h1>
    </div>
  );
};

export default MainLayout;