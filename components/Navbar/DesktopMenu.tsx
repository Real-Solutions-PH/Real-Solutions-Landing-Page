export const DesktopMenu = () => {
  return (
    <nav className="static [align-items:normal] box-content caret-black gap-x-[normal] block shrink h-auto justify-normal min-h-0 min-w-0 gap-y-[normal] w-auto md:relative md:content-center md:items-center md:aspect-auto md:box-border md:caret-transparent md:gap-x-2 md:flex md:shrink-0 md:h-min md:justify-start md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:gap-y-2 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-min md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
      {[
        { name: "Services", href: "./#services" },
        { name: "Team", href: "./#team" },
        { name: "FAQ", href: "./#faq" },
        { name: "Contact", href: "./#contact" },
      ].map((item) => (
        <div key={item.name} className="static box-content caret-black shrink min-h-0 min-w-0 md:relative md:aspect-auto md:box-border md:caret-transparent md:shrink-0 md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
          <a
            href={item.href}
            className="group static text-black [align-items:normal] shadow-none box-content caret-black gap-x-[normal] inline flex-row h-auto justify-normal gap-y-[normal] w-auto p-0 rounded-none md:relative md:text-blue-700 md:content-start md:items-start md:aspect-auto md:shadow-[rgba(0,0,0,0)_0px_1px_2px_0px_inset] md:box-border md:caret-transparent md:gap-x-2.5 md:flex md:flex-col md:h-min md:justify-center md:overscroll-x-auto md:overscroll-y-auto md:gap-y-2.5 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-min md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:px-4 md:py-2 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[10px] hover:bg-tertiary/10 transition-colors duration-300"
          >
            <div className="static box-content caret-black block flex-row shrink justify-normal min-h-0 min-w-0 text-wrap md:relative md:aspect-auto md:box-border md:caret-transparent md:flex md:flex-col md:shrink-0 md:justify-start md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
              <p className="text-black text-base box-content caret-black leading-[normal] min-h-0 min-w-0 text-wrap font-times md:text-sm md:aspect-auto md:box-border md:caret-transparent md:leading-[22.4px] md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-inter group-hover:text-tertiary transition-colors duration-300">
                {item.name}
              </p>
            </div>
          </a>
        </div>
      ))}
    </nav>
  );
};
