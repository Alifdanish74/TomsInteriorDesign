"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button"; // Using shadcn/ui button
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"; // shadcn/ui for Sidebar
import { Menu } from "lucide-react"; // Icon for menu

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full  z-50 transition-all ${
        scrolled
          ? "bg-zinc-300 bg-opacity-40 shadow-md text-black"
          : "bg-transparent bg-opacity-60 shadow-md text-white"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex justify-center items-center text-lg md:text-2xl font-bold">
          <img src="/logo.jpg" alt="Logo" className="w-12 h-12 mr-2 " />|
          Désir Design Studio
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex text-xl space-x-6 items-center">
          <li>
            <Link href="/#about-us" className="hover:text-gray-300">
              About
            </Link>
          </li>
          <li>
            <Link href="/services" className="hover:text-gray-300">
              Services
            </Link>
          </li>
          <li>
            <Link href="/projects" className="hover:text-gray-300">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-gray-300">
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Desktop Button */}
        <Button className="hidden md:flex bg-[#7C877F]  text-white px-5 py-3">
          <Link href="/contact">Get In Touch →</Link>
        </Button>

        {/* Mobile Menu (Hamburger) */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost">
                <Menu size={28} />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-gray-900 text-white">
              <ul className="flex flex-col space-y-6 text-xl p-6">
                <li>
                  <Link href="/about" className="hover:text-gray-400">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-gray-400">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="hover:text-gray-400">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-gray-400">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Button className="w-full bg-[#7C877F] text-white">
                    <Link href="/contact">Get In Touch →</Link>
                  </Button>
                </li>
              </ul>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
