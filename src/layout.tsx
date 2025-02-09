// src/layout.tsx
import { Outlet } from "react-router-dom";
import Navbar from "./components/ui/Navbar"; // Adjust path as needed

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Outlet /> {/* This renders the current page inside the layout */}
      </main>
    </div>
  );
};

export default Layout;
