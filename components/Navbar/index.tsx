"use client";

import { Button } from "@/components/ui/button";

import { useState, useEffect } from "react";
import { DesktopMenu } from "@/components/Navbar/DesktopMenu";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { HeaderLogo } from "../Logo";
import Link from "next/link";

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
        className={`fixed top-0 inset-x-0 z-50 px-6 md:px-12 lg:px-20 transition-all duration-300 ${
          isScrolled ? "py-2" : "py-4 md:py-6"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <nav
          className={`relative w-full mx-auto transition-all duration-300 max-w-[1240px] ${
            isScrolled
              ? "bg-white/80 backdrop-blur-md shadow-[rgba(0,0,0,0.08)_0px_0.706592px_0.706592px_-0.666667px,rgba(0,0,0,0.08)_0px_1.80656px_1.80656px_-1.33333px,rgba(0,0,0,0.07)_0px_3.62176px_3.62176px_-2px,rgba(0,0,0,0.07)_0px_6.8656px_6.8656px_-2.66667px,rgba(0,0,0,0.05)_0px_13.6468px_13.6468px_-3.33333px,rgba(0,0,0,0.02)_0px_30px_30px_-4px,rgb(255,255,255)_0px_3px_1px_0px_inset] rounded-full py-3 px-6 border border-white/20"
              : "bg-transparent"
          }`}
        >
          <div className="w-full flex items-center justify-between">
            {/* Logo */}
            <div className="shrink-0 z-50 flex-1">
              <HeaderLogo />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <DesktopMenu />
            </div>

            {/* Desktop Button */}
            <div className="hidden md:flex shrink-0 flex-1 justify-end">
              <Button>
                Get Started <ArrowUpRight size={16} />
              </Button>
            </div>

            <div className="md:hidden z-50">
              <Button
                asChild
                variant="ghost"
                className="p-0 h-auto w-auto hover:bg-transparent"
              >
                <button
                  onClick={toggleMenu}
                  className="p-2 text-black bg-white/50 rounded-full backdrop-blur-sm border border-black/5"
                >
                  {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </Button>
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
              <a
                href="#services"
                onClick={toggleMenu}
                className="py-2 border-b border-gray-100"
              >
                Services
              </a>
              <a
                href="#team"
                onClick={toggleMenu}
                className="py-2 border-b border-gray-100"
              >
                Team
              </a>
              <a
                href="#faq"
                onClick={toggleMenu}
                className="py-2 border-b border-gray-100"
              >
                FAQ
              </a>
              <a
                href="#contact"
                onClick={toggleMenu}
                className="py-2 border-b border-gray-100"
              >
                Contact
              </a>
              <Link
                href="mailto://contact.realsolutionsph@gmail.com"
                className="mt-4"
              >
                <Button>
                  Contact Us <ArrowUpRight size={16} />
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
