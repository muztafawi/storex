import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between items-center w-9/12 mx-auto mt-8">
      <div>
        <p>HabitBoost</p>
      </div>

      <div className="flex gap-x-5 text-sm font-medium">
        <Link href="/">Home</Link>
        <Link href="/">Docs</Link>
        <Link href="/">About</Link>
        <Link href="/">Login</Link>
      </div>
    </div>
  );
};

export default Header;
