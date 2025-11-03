import React, { useState } from "react";

function Sidebar() {
  const [active, setActive] = useState("Loads");

  const menuItems = [
    { name: "Loads", icon: "💰" },
    { name: "Transactions", icon: "💳" },
    { name: "Users", icon: "👥" },
    { name: "Settings", icon: "⚙️" },
    { name: "Logout", icon: "🚪" },
  ];

  return (
    <aside className="sidebar">
      <h2 className="sidebar-title">EazyPayouts</h2>
      <nav>
        {menuItems.map((item) => (
          <div
            key={item.name}
            className={`nav-item ${active === item.name ? "active" : ""}`}
            onClick={() => setActive(item.name)}
          >
            <span className="nav-icon">{item.icon}</span>
            <span>{item.name}</span>
          </div>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
