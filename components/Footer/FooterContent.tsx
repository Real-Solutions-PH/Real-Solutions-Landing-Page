import { Button } from "@/components/ui/button";
import { FooterLogo } from "../Logo";
import { ArrowUpRight, Instagram, Linkedin, Facebook } from "lucide-react";
import Link from "next/link";

export const FooterContent = () => {
  return (
    <div className="flex flex-col items-center w-full max-w-[1240px] gap-8">
      {/* Social Icons */}
      <div className="flex items-center gap-6 text-neutral-500">
        <Link
          href="https://www.facebook.com/people/Real-Solutions-PH/61588405073622/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-neutral-900 transition-colors"
        >
          <Facebook size={20} />
        </Link>
        <Link
          href="https://www.instagram.com/realsolutions.ph/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-neutral-900 transition-colors"
        >
          <Instagram size={20} />
        </Link>
        <Link
          href="https://linkedin.com/company/real-solutions-ph"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-neutral-900 transition-colors"
        >
          <Linkedin size={20} />
        </Link>
      </div>

      {/* Logo & Text Section */}
      <div className="flex flex-col items-center gap-4 text-center">
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <FooterLogo />
          <h2 className="text-[32px] sm:text-[48px] md:text-[64px] -tracking-wider text-neutral-900 leading-tight">
            Real Solutions PH
          </h2>
        </div>

        <p className="text-sm sm:text-base md:text-lg max-w-[480px] leading-relaxed px-4 tracking-tighter">
          We solve real business bottlenecks using AI and custom software.
        </p>
      </div>

      {/* CTA Button */}
      <div className="flex shrink-0 flex-1 justify-end">
        <Button>
          Get Started <ArrowUpRight size={16} />
        </Button>
      </div>
    </div>
  );
};
