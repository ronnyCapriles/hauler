"use client"; // Required for client-side interactivity

import { useState } from "react";
import { Menu, X } from "lucide-react"; // Icons for the toggle button
import { Button } from "@/components/ui/button"; // shadcn/ui Button component
import Link from "next/link"; // Import Link from Next.js

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // State to manage the collapsed state

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      {/* Container for Navbar Content */}
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-4">
        {/* Logo */}
        <div>
          <Link href="/">
            <img
              src="/logo.svg" // Replace with your logo path
              alt="Logo"
              className="h-8 md:h-10 cursor-pointer" // Responsive logo height
            />
          </Link>
        </div>
      </div>
    </nav>
  );
}