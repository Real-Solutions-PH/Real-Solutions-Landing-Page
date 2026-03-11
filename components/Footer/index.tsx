import { FooterContent } from "./FooterContent";
import { FooterLinks } from "./FooterLinks";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="footer"
      className="relative flex flex-col items-center justify-center w-full bg-white px-6 pt-32 pb-10 overflow-hidden"
    >
      <div className="relative flex flex-col items-center w-full max-w-[1240px] z-[2]">
        <FooterContent />
        <FooterLinks />
        <div className="flex items-center justify-center text-center">
          <p className="text-sm tracking-tight">
            Real Solutions PH © {currentYear}. Made in the Philippines.
          </p>
        </div>
      </div>

      {/* Background decoration consistent with other sections */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1200px] h-[400px] bg-neutral-100/50 rounded-full blur-[140px] -z-10" />
    </footer>
  );
};
