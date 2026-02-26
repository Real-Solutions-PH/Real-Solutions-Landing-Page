"use client";

import { useState, useEffect } from "react";
import { NavbarLogo } from "@/components/Navbar/NavbarLogo";
import { DesktopMenu } from "@/components/Navbar/DesktopMenu";
import { NavbarButton } from "@/components/Navbar/NavbarButton";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <>
      <motion.div 
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          isScrolled ? "py-2" : "py-4 md:py-6"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <nav 
          className={`relative mx-auto max-w-[1350px] px-4 md:px-8 transition-all duration-300 ${
            isScrolled 
              ? "bg-white/80 backdrop-blur-md shadow-sm rounded-full mx-4 mt-2 py-3 border border-white/20" 
              : "bg-transparent"
          }`}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="shrink-0 z-50">
              <NavbarLogo />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <DesktopMenu />
            </div>

            {/* Desktop Button */}
            <div className="hidden md:block shrink-0">
              <NavbarButton />
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden z-50">
              <button 
                onClick={toggleMenu}
                className="p-2 text-black bg-white/50 rounded-full backdrop-blur-sm border border-black/5"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </nav>
      </motion.div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 pb-6 md:hidden flex flex-col gap-6 overflow-y-auto"
          >
            <div className="flex flex-col gap-6 text-center">
              <a href="#features" onClick={toggleMenu} className="text-2xl font-medium text-black py-2 border-b border-gray-100">Features</a>
              <a href="#pricing" onClick={toggleMenu} className="text-2xl font-medium text-black py-2 border-b border-gray-100">Pricing</a>
              <a href="#services" onClick={toggleMenu} className="text-2xl font-medium text-black py-2 border-b border-gray-100">Services</a>
              <a href="#updates" onClick={toggleMenu} className="text-2xl font-medium text-black py-2 border-b border-gray-100">Updates</a>
              <a href="#contact" onClick={toggleMenu} className="text-2xl font-medium text-black py-2 border-b border-gray-100">Contact</a>
              <div className="mt-4">
                <NavbarButton />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
