import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export type ServiceCardProps = {
  variant: "variant1" | "variant2" | "variant3" | "variant4";
  title: string;
  description: string;
  logoUrl?: string;
  logoAlt?: string;
  generateButtonText?: string;
  menuItems?: string[];
  chatPlaceholder?: string;
  workflowIcons?: Array<{
    src: string;
    alt: string;
  }>;
};

export const ServiceCard = (props: ServiceCardProps) => {
  const isLarge = props.variant === "variant2" || props.variant === "variant3";

  return (
    <Card
      className={cn(
        "group flex flex-col relative w-full h-full min-h-[380px] p-6 sm:p-8 border border-neutral-200/50 shadow-sm transition-all duration-300 hover:shadow-lg rounded-[24px] sm:rounded-[32px] overflow-hidden bg-[#F9FAFB] justify-end",
        isLarge ? "md:col-span-2" : "md:col-span-1",
      )}
    >
      {/* Visual Graphics Container */}
      <div className="absolute inset-x-0 top-0 bottom-32 flex items-center justify-center p-6 overflow-hidden pointer-events-none">
        {/* VARIANT 1: AI Customer Support Stack */}
        {props.variant === "variant1" && (
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Background floating circles */}
            <div className="absolute top-[10%] left-[15%] w-16 h-16 rounded-full bg-white shadow-sm border border-neutral-100/50 opacity-40" />
            <div className="absolute bottom-[20%] left-[10%] w-8 h-8 rounded-full bg-white shadow-sm border border-neutral-100/50 opacity-60" />
            <div className="absolute top-[15%] right-[10%] w-10 h-10 rounded-full bg-white shadow-sm border border-neutral-100/50" />

            {/* Connecting line */}
            <div className="absolute w-[120px] h-[2px] bg-neutral-200/50 -rotate-45 -translate-x-12 -translate-y-6" />

            {/* Main Center Logo */}
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-white shadow-[0_8px_30px_rgb(0,0,0,0.06)] flex items-center justify-center border border-white/40 group-hover:scale-105 transition-transform duration-500">
              {props.logoUrl && (
                <img
                  src={props.logoUrl}
                  alt={props.logoAlt}
                  className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                />
              )}
            </div>
          </div>
        )}

        {/* VARIANT 2: Custom Product Engineering (Editor Tool) */}
        {props.variant === "variant2" && (
          <div className="relative w-full max-w-[440px] mt-8">
            {/* Generating Button */}
            <div className="absolute -top-12 right-0 sm:-right-4 bg-white px-5 py-2 rounded-full shadow-lg border border-neutral-100 text-xs font-bold text-neutral-800 tracking-tight z-20 group-hover:-translate-y-1 transition-transform">
              {props.generateButtonText}
            </div>

            {/* Editor Box */}
            <div className="bg-white rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-neutral-100 overflow-hidden group-hover:shadow-xl transition-all">
              <div className="h-12 border-b border-neutral-50 px-4 flex items-center">
                <div className="w-4 h-4 rounded-full border-[3.5px] border-neutral-200" />
              </div>
              <div className="p-4 space-y-3">
                {props.menuItems?.map((item, i) => (
                  <div
                    key={i}
                    className="text-sm sm:text-[15px] text-neutral-400 font-medium pl-2"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* VARIANT 3: Workflow Automation (Chat) */}
        {props.variant === "variant3" && (
          <div className="w-full max-w-[400px]">
            <div className="bg-white/80 backdrop-blur-sm px-6 py-4 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-white flex items-center group-hover:scale-[1.02] transition-transform duration-500">
              <span className="text-neutral-400 text-sm sm:text-[15px] font-medium">
                {props.chatPlaceholder}
              </span>
            </div>
          </div>
        )}

        {/* VARIANT 4: Maintenance Retainers (Icons) */}
        {props.variant === "variant4" && (
          <div className="relative w-full h-full">
            {/* Main Center Icon */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-2xl shadow-xl flex items-center justify-center border border-white/40 z-10 group-hover:scale-110 transition-transform duration-500">
              {props.logoUrl && (
                <img
                  src={props.logoUrl}
                  alt={props.logoAlt}
                  className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                />
              )}
            </div>

            {/* Floating peripheral icons */}
            {props.workflowIcons?.map((icon, i) => {
              const positions = [
                "top-4 left-8",
                "top-12 right-6",
                "bottom-8 left-4",
                "bottom-4 right-12",
              ];
              const sizes = [
                "w-10 h-10",
                "w-11 h-11",
                "w-12 h-12",
                "w-11 h-11",
              ];

              return (
                <div
                  key={i}
                  className={cn(
                    "absolute bg-white rounded-xl shadow-md border border-white/40 flex items-center justify-center p-2.5 transition-all duration-700 group-hover:opacity-100 opacity-80",
                    positions[i % positions.length],
                    sizes[i % sizes.length],
                  )}
                  style={{
                    transitionDelay: `${i * 100}ms`,
                    transform: `translateY(${Math.sin(i) * 5}px)`,
                  }}
                >
                  <img
                    src={icon.src}
                    alt={icon.alt}
                    className="w-full h-full object-contain"
                  />
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Text Content */}
      <div className="relative z-10 mt-auto flex flex-col gap-2 sm:gap-3">
        <h3 className="text-[1.35rem] sm:text-2xl font-semibold tracking-tight text-neutral-900 leading-tight">
          {props.title}
        </h3>
        <p className="text-neutral-500 text-sm sm:text-[15px] leading-relaxed max-w-[480px]">
          {props.description}
        </p>
      </div>
    </Card>
  );
};
