import { Button } from "../ui/button";
import { ArrowUpRight, Sparkle } from "lucide-react";
import Link from "next/link";
import { Logo } from "../Logo";
import { Badge } from "../ui/badge";

export const HeroContent = () => {
  return (
    <div className="relative content-center items-center box-border caret-transparent gap-x-[30px] flex flex-col shrink-0 h-min justify-center max-w-[1240px] gap-y-[30px] w-full z-[4]">
      <div className="relative content-center items-center box-border caret-transparent gap-x-8 flex flex-col shrink-0 h-min justify-center max-w-[995px] gap-y-8 w-full z-[3]">
        <Badge variant="secondary">
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
