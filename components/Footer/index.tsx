import { FooterContent } from "./FooterContent";
import { FooterLinks } from "./FooterLinks";

export const Footer = () => {
  return (
    <footer className="flex flex-col items-center justfy-center py-20">
      <FooterContent />
      <FooterLinks />
    </footer>
  );
};
