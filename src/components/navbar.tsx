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
              className="h-10 md:h-14 cursor-pointer" // Responsive logo height
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-6">
            <li>
              <Link
                href="/"
                className="text-gray-700 hover:text-blue-500"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/servicios"
                className="text-gray-700 hover:text-blue-500"
              >
                Servicios
              </Link>
            </li>
          </ul>
          <Button className="w-full py-6 rounded-full bg-secondary_hauler font-black text-xl px-8 sm:w-auto hover:bg-primary_strong_hauler">
            Request
          </Button>
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <Button variant="ghost" onClick={toggleMenu}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu (Collapsible) */}
      {isOpen && (
        <div className="md:hidden bg-white">
          <ul className="flex flex-col space-y-4 p-4">
            <li>
              <Link
                href="/"
                className="text-gray-700 hover:text-blue-500"
                onClick={toggleMenu} // Close menu on click
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/servicios"
                className="text-gray-700 hover:text-blue-500"
                onClick={toggleMenu} // Close menu on click
              >
                Servicios
              </Link>
            </li>
            <li>
              <Button className="w-full py-6 rounded-full bg-secondary_hauler font-black text-xl px-8 sm:w-auto hover:bg-primary_strong_hauler">
                Request
              </Button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}