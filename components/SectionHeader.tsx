import { Badge } from "@/components/ui/badge";

export type SectionHeaderProps = {
  iconUrl: string;
  label: string;
  title: string;
  description: string;
  containerVariant?: string;
};

export const SectionHeader = (props: SectionHeaderProps) => {
  return (
    <div className="box-content caret-black block md:aspect-auto md:box-border md:caret-transparent md:contents md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
      <div
        className={`static box-content caret-black shrink min-h-0 min-w-0 md:relative md:aspect-auto md:box-border md:caret-transparent md:shrink-0 md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] ${props.containerVariant || "[align-items:normal] gap-x-[normal] block flex-row h-auto justify-normal max-w-none gap-y-[normal] w-auto md:content-center md:items-center md:gap-x-4 md:flex md:flex-col md:h-min md:justify-center md:max-w-[700px] md:gap-y-4 md:w-full"}`}
      >
        <div className="static box-content caret-black md:relative md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] shrink min-h-0 min-w-0 md:shrink-0 md:min-h-[auto] md:min-w-[auto]">
          <Badge variant="secondary" className="static box-content caret-black h-auto w-auto md:relative md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] [align-items:normal] bg-transparent shadow-none gap-x-[normal] block justify-normal gap-y-[normal] p-0 md:content-center md:items-center md:bg-neutral-100 md:shadow-[rgba(0,0,0,0.1)_0px_0.706592px_0.706592px_-0.541667px,rgba(0,0,0,0.09)_0px_1.80656px_1.80656px_-1.08333px,rgba(0,0,0,0.09)_0px_3.62176px_3.62176px_-1.625px,rgba(0,0,0,0.09)_0px_6.8656px_6.8656px_-2.16667px,rgba(0,0,0,0.08)_0px_13.6468px_13.6468px_-2.70833px,rgba(0,0,0,0.05)_0px_30px_30px_-3.25px,rgb(255,255,255)_0px_3px_1px_0px_inset] md:gap-x-2 md:flex md:h-min md:justify-center md:gap-y-2 md:w-min md:overflow-hidden md:px-3 md:py-1.5 md:rounded-[60px] after:md:accent-auto after:md:box-border after:md:caret-transparent after:md:text-black after:md:block after:md:text-xs after:md:not-italic after:md:normal-nums after:md:font-normal after:md:h-full after:md:tracking-[normal] after:md:leading-[normal] after:md:list-outside after:md:list-disc after:md:pointer-events-none after:md:absolute after:md:text-start after:md:no-underline after:md:indent-[0px] after:md:normal-case after:md:visible after:md:w-full after:md:border after:md:border-neutral-100 after:md:rounded-[60px] after:md:border-separate after:md:border-solid after:md:left-0 after:md:top-0 after:md:font-sans_serif">
            <div className="box-content caret-black md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] static shrink h-auto min-h-0 min-w-0 w-auto md:relative md:shrink-0 md:h-5 md:min-h-[auto] md:min-w-[auto] md:w-4">
              <div className="box-content caret-black block md:aspect-auto md:box-border md:caret-transparent md:contents md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                <img
                  src={props.iconUrl}
                  alt="Icon"
                  className="text-black box-content caret-black block shrink h-auto align-middle w-auto md:text-black/40 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:shrink-0 md:h-full md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
                />
              </div>
            </div>
            <div className="static box-content caret-black block flex-row shrink justify-normal min-h-0 min-w-0 text-wrap md:relative md:aspect-auto md:box-border md:caret-transparent md:flex md:flex-col md:shrink-0 md:justify-start md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
              <p className="font-normal box-content caret-black leading-[normal] min-h-0 min-w-0 text-wrap font-times md:font-medium md:aspect-auto md:box-border md:caret-transparent md:leading-[14.4px] md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-satoshi">
                {props.label}
              </p>
            </div>
          </Badge>
        </div>
        <div className="static box-content caret-black block flex-row shrink justify-normal min-h-0 min-w-0 w-auto break-normal md:relative md:aspect-auto md:box-border md:caret-transparent md:flex md:flex-col md:shrink-0 md:justify-start md:min-h-[auto] md:min-w-[auto] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
          <h2 className="text-2xl font-bold box-content caret-black tracking-[normal] leading-[normal] min-h-0 min-w-0 text-start break-normal font-times md:text-[56px] md:font-medium md:aspect-auto md:box-border md:caret-transparent md:tracking-[-0.56px] md:leading-[67.2px] md:min-h-[auto] md:min-w-[auto] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-center md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-satoshi">
            {props.title}
          </h2>
        </div>
        <div className="static box-content caret-black block flex-row shrink justify-normal max-w-none min-h-0 min-w-0 opacity-100 w-auto break-normal md:relative md:aspect-auto md:box-border md:caret-transparent md:flex md:flex-col md:shrink-0 md:justify-start md:max-w-[500px] md:min-h-[auto] md:min-w-[auto] md:opacity-80 md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
          <p className="text-base box-content caret-black leading-[normal] min-h-0 min-w-0 text-start break-normal font-times md:aspect-auto md:box-border md:caret-transparent md:leading-6 md:min-h-[auto] md:min-w-[auto] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-center md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-inter">
            {props.description}
          </p>
        </div>
      </div>
    </div>
  );
};
