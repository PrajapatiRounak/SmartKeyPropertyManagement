
import Navbar from "../components/navbar/navbar.jsx";
import Footer from "../components/footer/index.jsx" 
import HomePage from "../pages/Home/index.jsx";
import { Outlet } from "react-router";

export default function Layout() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-purple-50 via-white to-slate-50 text-black">
      <Navbar />
         <Outlet />
      <Footer />
    </div>
  );
}
