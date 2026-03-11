import { Logo } from "../Logo";

export const HeroTitle = () => {
  return (
    <div className="relative content-center items-center box-border caret-transparent gap-x-4 flex flex-col shrink-0 h-min justify-center gap-y-4 w-full">
      <div className="relative content-center items-center box-border caret-transparent gap-x-2 flex shrink-0 h-min justify-center gap-y-2 w-full md:gap-x-4 md:gap-y-4">
        <Logo />
        <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start text-nowrap">
          <h1 className="text-[40px] box-border caret-transparent tracking-[-2.4px] leading-[48px] text-left text-nowrap font-inter md:text-[60px] lg:text-[100px] md:tracking-[-4px] lg:tracking-[-6px] md:leading-[80px] lg:leading-[120px]">
            <span className="text-[40px] bg-clip-text bg-[linear-gradient(25deg,rgb(0,0,0)_34%,rgb(255,255,255)_124%)] box-border caret-transparent inline-block tracking-[-2.4px] leading-[48px] text-nowrap pr-[-60%] mb-[-] ml-[16px)] mr-[60%] mt-[min(0px,] pl-[16px)] pt-[max(0px,] pb-[+] md:text-[60px] lg:text-[100px] md:tracking-[-4px] lg:tracking-[-6px] md:leading-[80px] lg:leading-[120px] md:pr-[-60%] md:mb-[-] md:ml-[45px)] md:mr-[60%] md:mt-[min(0px,] md:pl-[45px)] md:pt-[max(0px,] md:pb-[+]">
              Real Solutions PH
            </span>
          </h1>
        </div>
      </div>
      <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start max-w-[446px] break-words w-full">
        <p className="text-sm box-border caret-transparent leading-[21px] break-words text-center font-inter md:text-base md:leading-6">
          We solve real business bottlenecks using AI and custom software.
        </p>
      </div>
    </div>
  );
};
