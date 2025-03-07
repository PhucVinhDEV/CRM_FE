import React from "react";
import Link from "next/link";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-50 p-4">
      <nav className="space-y-2">
        <Link
          href="/dashboard"
          className="block rounded px-4 py-2 hover:bg-gray-100"
        >
          Dashboard
        </Link>
        <Link
          href="/profile"
          className="block rounded px-4 py-2 hover:bg-gray-100"
        >
          Profile
        </Link>
        <Link
          href="/settings"
          className="block rounded px-4 py-2 hover:bg-gray-100"
        >
          Settings
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
