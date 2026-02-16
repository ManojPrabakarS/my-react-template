import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

function Layout() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <NavBar />
      <div className="flex-grow-1 container mt-4">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
