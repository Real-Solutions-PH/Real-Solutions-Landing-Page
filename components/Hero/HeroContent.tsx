import { HeroBadge } from "./HeroBadge";
import { HeroTitle } from "./HeroTitle";
import { HeroButtons } from "./HeroButtons";

export const HeroContent = () => {
  return (
    <div className="relative content-center items-center box-border caret-transparent gap-x-[30px] flex flex-col shrink-0 h-min justify-center max-w-[1640px] gap-y-[30px] w-full z-[4]">
      <div className="relative content-center items-center box-border caret-transparent gap-x-8 flex flex-col shrink-0 h-min justify-center max-w-[995px] gap-y-8 w-full z-[3]">
        <div className="relative box-border caret-transparent shrink-0">
          <HeroBadge />
        </div>
        <HeroTitle />
        <HeroButtons />
      </div>
    </div>
  );
};
