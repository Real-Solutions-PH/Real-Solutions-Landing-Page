import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export type BenefitCardProps = {
  variant: string;
  title?: string;
  description?: string;
  logoUrl?: string;
  logoAlt?: string;
  badge1Text?: string;
  badge2Text?: string;
  beforeText?: string;
  afterText?: string;
  features?: Array<{
    iconUrl: string;
    iconAlt: string;
    label: string;
  }>;
};

export const BenefitCard = (props: BenefitCardProps) => {
  if (props.variant === "variant1") {
    return (
      <Card className="flex flex-col relative w-full h-full min-h-[360px] p-6 sm:p-8 border shrink-0 sm:shrink border-neutral-200/50 shadow-sm sm:shadow-md bg-white sm:bg-[#F9FAFB] rounded-[24px] sm:rounded-[32px] overflow-hidden justify-end hover:shadow-lg transition-all duration-300">
        {/* Visual Graphic */}
        <div className="absolute inset-x-0 top-0 bottom-32 flex items-center justify-center px-6">
          <div className="relative w-36 h-36 sm:w-48 sm:h-48 rounded-full bg-[#F3F4F6] shadow-[inset_0px_2px_4px_rgba(255,255,255,0.8),0px_8px_20px_rgba(0,0,0,0.06)] flex items-center justify-center border border-white/40">
            {/* Clock Hand wrapper to allow rotation */}
            <div className="absolute w-full h-full rotate-45 transform">
              {/* Arm stem */}
              <div className="absolute bottom-1/2 left-1/2 -translate-x-1/2 w-4 sm:w-5 h-[4.5rem] sm:h-[6rem] bg-[#F3F4F6] shadow-[inset_0px_2px_4px_rgba(255,255,255,0.8),0px_4px_10px_rgba(0,0,0,0.1)] rounded-full border border-white/50" />
              {/* Clock Arm end Circle */}
              <div className="absolute top-[calc(50%-4.5rem)] sm:top-[calc(50%-6rem)] left-1/2 -translate-x-1/2 w-5 h-5 sm:w-6 sm:h-6 bg-white rounded-full shadow-md border border-neutral-100 flex items-center justify-center" />
            </div>
            {/* Center Dot */}
            <div className="w-4 h-4 sm:w-[22px] sm:h-[22px] bg-neutral-800 rounded-full z-10 shadow-md border border-white/20 flex items-center justify-center">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-black rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="relative z-10 mt-auto flex flex-col gap-2 sm:gap-3">
          <h3 className="text-[1.35rem] sm:text-2xl font-semibold tracking-tight text-neutral-900 leading-tight">
            {props.title}
          </h3>
          <p className="text-neutral-500 text-sm sm:text-[15px] leading-relaxed">
            {props.description}
          </p>
        </div>
      </Card>
    );
  }

  if (props.variant === "variant2") {
    return (
      <Card className="flex flex-col relative w-full h-full min-h-[360px] p-6 sm:p-8 border shrink-0 sm:shrink border-neutral-200/50 shadow-sm sm:shadow-md bg-white sm:bg-[#F9FAFB] rounded-[24px] sm:rounded-[32px] overflow-hidden justify-end hover:shadow-lg transition-all duration-300">
        {/* Visual Graphic */}
        <div className="absolute inset-x-0 top-0 bottom-32 flex items-center justify-center pt-8">
          <div className="relative w-full max-w-[200px] sm:max-w-[240px] h-[140px] flex items-end justify-between px-2 gap-2 sm:gap-4">
            {/* Bars */}
            <div className="relative w-8 sm:w-10 h-10 bg-white rounded-[10px] shadow-sm border border-neutral-100/50 hover:h-12 transition-all duration-500 cursor-pointer">
              <div className="absolute -left-10 sm:-left-12 top-1/2 -translate-y-1/2 -rotate-90 text-[9px] sm:text-[10px] font-bold text-neutral-400 tracking-wider">
                {props.beforeText}
              </div>
            </div>

            <div className="relative w-8 sm:w-10 h-16 bg-white rounded-[10px] shadow-sm border border-neutral-100/50 hover:h-20 transition-all duration-500 cursor-pointer"></div>

            <div className="relative w-8 sm:w-10 h-[104px] sm:h-[120px] bg-white rounded-[10px] shadow-[0px_4px_16px_rgba(0,0,0,0.08)] border border-neutral-100 z-10 hover:h-[130px] transition-all duration-500 cursor-pointer">
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-xs font-semibold text-neutral-700 shadow-lg whitespace-nowrap border border-neutral-100 font-satoshi flex items-center justify-center">
                {props.badge1Text}
              </div>
            </div>

            <div className="relative w-8 sm:w-10 h-20 bg-white rounded-[10px] shadow-sm border border-neutral-100/50 hover:h-24 transition-all duration-500 cursor-pointer"></div>

            <div className="relative w-8 sm:w-10 h-[56px] bg-white rounded-[10px] shadow-sm border border-neutral-100/50 hover:h-16 transition-all duration-500 cursor-pointer">
              <div className="absolute -right-1 top-1/2 sm:-top-2 bg-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-xs font-semibold text-neutral-700 shadow-md whitespace-nowrap translate-x-3/4 sm:translate-x-full -translate-y-[120%] sm:-translate-y-1/2 border border-neutral-100 font-satoshi flex items-center justify-center">
                {props.badge2Text}
              </div>
              <div className="absolute -right-8 sm:-right-10 top-1/2 -translate-y-1/2 -rotate-90 text-[9px] sm:text-[10px] font-bold text-neutral-400 tracking-wider">
                {props.afterText}
              </div>
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="relative z-10 mt-auto flex flex-col gap-2 sm:gap-3">
          <h3 className="text-[1.35rem] sm:text-2xl font-semibold tracking-tight text-neutral-900 leading-tight">
            {props.title}
          </h3>
          <p className="text-neutral-500 text-sm sm:text-[15px] leading-relaxed">
            {props.description}
          </p>
        </div>
      </Card>
    );
  }

  if (props.variant === "variant3") {
    return (
      <Card className="flex flex-col relative w-full h-full min-h-[360px] p-6 sm:p-8 border shrink-0 sm:shrink border-neutral-200/50 shadow-sm sm:shadow-md bg-white sm:bg-[#F9FAFB] rounded-[24px] sm:rounded-[32px] overflow-hidden justify-end hover:shadow-lg transition-all duration-300">
        {/* Visual Graphic */}
        <div className="absolute inset-x-0 top-0 bottom-32 flex items-center justify-center">
          <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full bg-[#F3F4F6] shadow-[inset_0px_2px_4px_rgba(255,255,255,0.8),0px_8px_20px_rgba(0,0,0,0.06)] flex items-center justify-center group">
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-white shadow-xl flex items-center justify-center border border-neutral-50 transition-transform duration-700 group-hover:scale-[1.05]">
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white shadow-[0_4px_12px_rgba(0,0,0,0.08)] flex items-center justify-center transition-transform duration-500 delay-75 group-hover:scale-110">
                {props.logoUrl && (
                  <img
                    src={props.logoUrl}
                    alt={props.logoAlt || "logo"}
                    className="w-8 h-8 sm:w-10 sm:h-10 object-contain drop-shadow-md transition-transform duration-500 group-hover:rotate-[360deg]"
                  />
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="relative z-10 mt-auto flex flex-col gap-2 sm:gap-3">
          <h3 className="text-[1.35rem] sm:text-2xl font-semibold tracking-tight text-neutral-900 leading-tight">
            {props.title}
          </h3>
          <p className="text-neutral-500 text-sm sm:text-[15px] leading-relaxed">
            {props.description}
          </p>
        </div>
      </Card>
    );
  }

  if (props.variant === "variant4") {
    return (
      <div className="w-full relative overflow-hidden flex items-center">
        {/* Gradients to fade out edges */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-neutral-100 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-neutral-100 to-transparent z-10 pointer-events-none"></div>

        <div className="flex w-full overflow-hidden group gap-6 select-none bg-neutral-100 mask-image-edges">
          {/* First set of features */}
          <div className="flex shrink-0 animate-marquee gap-6 min-w-full justify-around items-center group-hover:[animation-play-state:paused]">
            {props.features?.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-2 sm:gap-3 bg-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full shadow-sm sm:shadow border border-neutral-200/60 shrink-0 hover:shadow-md hover:scale-[1.02] transition-all cursor-default"
              >
                <img
                  src={feature.iconUrl}
                  alt={feature.iconAlt}
                  className="w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] object-contain opacity-70"
                />
                <span className="text-[13px] sm:text-sm font-medium text-neutral-600 tracking-tight font-inter">
                  {feature.label}
                </span>
              </div>
            ))}
          </div>
          {/* Second set of features for seamless loop */}
          <div
            className="flex shrink-0 animate-marquee gap-6 min-w-full justify-around items-center group-hover:[animation-play-state:paused]"
            aria-hidden="true"
          >
            {props.features?.map((feature, index) => (
              <div
                key={`dup-${index}`}
                className="flex items-center gap-2 sm:gap-3 bg-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full shadow-sm sm:shadow border border-neutral-200/60 shrink-0 hover:shadow-md hover:scale-[1.02] transition-all cursor-default my-2"
              >
                <img
                  src={feature.iconUrl}
                  alt={feature.iconAlt}
                  className="w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] object-contain opacity-70"
                />
                <span className="text-[13px] sm:text-sm font-medium text-neutral-600 tracking-tight font-inter">
                  {feature.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return null;
};
