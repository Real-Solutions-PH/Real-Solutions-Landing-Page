import Link from "next/link";

export const DesktopMenu = () => {
  return (
    <nav className="flex gap-12 w-1/3">
      {[
        { name: "Services", href: "./#services" },
        { name: "Team", href: "./#teams" },
        { name: "FAQ", href: "./#faq" },
        { name: "Contact", href: "mailto:contact.realsolutionsph@gmail.com" },
      ].map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className="font-medium hover:text-gray-600 cursor-pointer"
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
};
