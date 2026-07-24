import { Menu } from "lucide-react";
import React from "react";

function Navbar() {
  return (
    <nav class="flex items-center justify-between bg-white shadow px-6 h-16">
      <div>
        <Menu />{" "}
      </div>
      <div>🔍 Search...</div>
      <div className="flex">
        <ul>🔔</ul>
        <ul>🌙</ul>
        <ul>👤</ul>
      </div>
    </nav>
  );
}

export default Navbar;
