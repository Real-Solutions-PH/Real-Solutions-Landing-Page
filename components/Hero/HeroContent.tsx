import { Button } from "../ui/button";
import { ArrowUpRight, Sparkle } from "lucide-react";
import Link from "next/link";
import { Logo } from "../Logo";
import { Badge } from "../ui/badge";

export const HeroContent = () => {
  return (
    <div className="relative content-center items-center box-border caret-transparent gap-x-[30px] flex flex-col shrink-0 h-min justify-center max-w-[1640px] gap-y-[30px] w-full z-[4]">
      <div className="relative content-center items-center box-border caret-transparent gap-x-8 flex flex-col shrink-0 h-min justify-center max-w-[995px] gap-y-8 w-full z-[3]">
        <Badge
          className="shadow-[rgba(0,0,0,0.1)_0px_0.706592px_0.706592px_-0.541667px,rgba(0,0,0,0.09)_0px_1.80656px_1.80656px_-1.08333px,rgba(0,0,0,0.09)_0px_3.62176px_3.62176px_-1.625px,rgba(0,0,0,0.09)_0px_6.8656px_6.8656px_-2.16667px,rgba(0,0,0,0.08)_0px_13.6468px_13.6468px_-2.70833px,rgba(0,0,0,0.05)_0px_30px_30px_-3.25px,rgb(255,255,255)_0px_3px_1px_0px_inset] px-3 py-1.5 rounded-full flex gap-1.5 font-normal"
          variant="secondary"
        >
          <Sparkle size={14} /> AI & SOFTWARE SOLUTIONS
        </Badge>
        <div className="flex flex-col items-center justify-center gap-5">
          <div className="flex items-center gap-3">
            <Logo />
            <h1 className="text-[40px] box-border caret-transparent tracking-[-2.4px] leading-[48px] text-left text-nowrap font-inter md:text-[60px] lg:text-[100px] md:tracking-[-4px] lg:tracking-[-6px] md:leading-[80px] lg:leading-[120px]">
              Real Solutions PH
            </h1>
          </div>
          <p className="text-sm box-border caret-transparent leading-[21px] break-words text-center font-inter md:text-base md:leading-6">
            We solve real business bottlenecks using AI and custom software.
          </p>
        </div>
        <div className="flex gap-4">
          <Button>
            Contact Us <ArrowUpRight size={16} />
          </Button>
          <Link href="#services">
            <Button variant="secondary">See Our Services</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
