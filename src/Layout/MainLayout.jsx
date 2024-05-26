import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function MainLayout() {
  return (
    // <div className="border-4 border-[#49C5B6]">
    <div>
      <div className="max-w-7xl mx-auto">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
}
