export const DesktopMenu = () => {
  return (
    <nav className="flex gap-12 w-1/3">
      {[
        { name: "Services", href: "./#services" },
        { name: "Team", href: "./#team" },
        { name: "FAQ", href: "./#faq" },
        { name: "Contact", href: "./#contact" },
      ].map((item) => (
        <a
          key={item.name}
          href={item.href}
          className="font-medium hover:text-gray-600 cursor-pointer"
        >
          {item.name}
        </a>
      ))}
    </nav>
  );
};
