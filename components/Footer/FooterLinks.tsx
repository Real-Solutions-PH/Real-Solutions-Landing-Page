import Link from "next/link";

export const FooterLinks = () => {
  const links = [
    { name: "Services", href: "./#services" },
    { name: "Team", href: "./#teams" },
    { name: "FAQ", href: "./#faq" },
    { name: "Contact", href: "mailto:contact.realsolutionsph@gmail.com" },
  ];

  return (
    <div className="flex flex-wrap items-center justify-center gap-x-8 sm:gap-x-12 gap-y-4 py-8 sm:py-12">
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className="font-medium hover:text-gray-600 cursor-pointer"
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
};
