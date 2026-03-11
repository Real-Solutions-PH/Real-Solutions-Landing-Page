"use client";
import { ReactLenis, useLenis } from "lenis/react";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    // Jump to top
    lenis.scrollTo(0, { immediate: true });

    // 🔥 Force Lenis to recalc height AFTER DOM updates
    requestAnimationFrame(() => {
      lenis.resize();
    });
  }, [pathname, lenis]);

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.05,
        duration: 1.5,
        smoothWheel: true,
      }}
    >
      {children}
    </ReactLenis>
  );
}
