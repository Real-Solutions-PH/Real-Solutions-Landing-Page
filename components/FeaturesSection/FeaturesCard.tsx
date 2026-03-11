import { Card } from "@/components/ui/card";

export type FeatureCardProps = {
  variant: string;
  iconSrc: string;
  title: string;
  description: string;
  graphicSrc?: string;
  graphicClassName?: string;
  graphicSizes?: string;
};

export const FeatureCard = (props: FeatureCardProps) => {
  const hasGraphic = props.variant === "md:grow-[1.5]";

  return (
    <Card
      className={`static bg-transparent border-0 shadow-none box-content caret-black basis-auto grow-0 shrink min-h-0 min-w-0 w-auto z-auto md:relative md:aspect-auto md:box-border md:caret-transparent md:basis-0 md:shrink-0 md:min-h-[auto] md:min-w-[300px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-px md:z-[2] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] ${props.variant}`}
    >
      <div className="static [align-items:normal] bg-transparent shadow-none box-content caret-black gap-x-[normal] block h-auto justify-normal min-h-0 gap-y-[normal] w-auto rounded-none md:relative md:content-center md:items-center md:aspect-auto md:bg-neutral-100 md:shadow-[rgba(0,0,0,0.08)_0px_0.706592px_0.706592px_-0.666667px,rgba(0,0,0,0.08)_0px_1.80656px_1.80656px_-1.33333px,rgba(0,0,0,0.07)_0px_3.62176px_3.62176px_-2px,rgba(0,0,0,0.07)_0px_6.8656px_6.8656px_-2.66667px,rgba(0,0,0,0.05)_0px_13.6468px_13.6468px_-3.33333px,rgba(0,0,0,0.02)_0px_30px_30px_-4px,rgb(255,255,255)_0px_3px_1px_0px_inset] md:box-border md:caret-transparent md:gap-x-6 md:flex md:h-min md:justify-start md:min-h-[268px] md:overscroll-x-auto md:overscroll-y-auto md:gap-y-6 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:p-5 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[20px]">
        {hasGraphic && (
          <div className="static [align-items:normal] box-content caret-black gap-x-[normal] block basis-auto grow-0 shrink justify-normal min-h-0 min-w-0 gap-y-[normal] w-auto md:relative md:aspect-auto md:box-border md:caret-transparent md:flex md:basis-0 md:grow md:shrink-0 md:justify-center md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-px md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] self-auto shadow-none rounded-none md:content-center md:items-center md:self-stretch md:shadow-[rgba(0,0,0,0.08)_0px_0.706592px_0.706592px_-0.666667px,rgba(0,0,0,0.08)_0px_1.80656px_1.80656px_-1.33333px,rgba(0,0,0,0.07)_0px_3.62176px_3.62176px_-2px,rgba(0,0,0,0.07)_0px_6.8656px_6.8656px_-2.66667px,rgba(0,0,0,0.05)_0px_13.6468px_13.6468px_-3.33333px,rgba(0,0,0,0.02)_0px_30px_30px_-4px] md:gap-x-2.5 md:gap-y-2.5 md:p-4 md:rounded-2xl">
            <div className="static box-content caret-black rounded-none md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] inset-auto md:absolute md:rounded-2xl md:inset-0">
              <img
                sizes={props.graphicSizes}
                src={props.graphicSrc}
                alt="graphic"
                className={`box-content caret-black h-auto object-fill align-middle w-auto rounded-none md:box-border md:caret-transparent md:h-full md:object-cover md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-2xl ${props.graphicClassName}`}
              />
            </div>
            <div className="static box-content caret-black shrink md:box-border md:caret-transparent md:shrink-0 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] bg-none opacity-100 pointer-events-auto z-auto rounded-none left-auto inset-y-auto md:absolute md:aspect-[1.4281_/_1] md:bg-[radial-gradient(50%_100%_at_-5.4%_35.5%,rgba(240,248,255,0.9)_0%,rgba(4,7,13,0)_100%)] md:opacity-30 md:pointer-events-none md:z-[1] md:rounded-2xl md:left-0 md:inset-y-0"></div>
          </div>
        )}
        <div className="static [align-items:normal] box-content caret-black gap-x-[normal] block basis-auto flex-row grow-0 shrink h-auto justify-normal min-h-0 min-w-0 gap-y-[normal] w-auto md:relative md:content-start md:items-start md:aspect-auto md:box-border md:caret-transparent md:gap-x-6 md:flex md:basis-0 md:flex-col md:grow md:shrink-0 md:h-min md:justify-center md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:gap-y-6 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-px md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
          <div className="static [align-items:normal] bg-none shadow-none box-content caret-black gap-x-[normal] block shrink h-auto justify-normal min-h-0 min-w-0 gap-y-[normal] w-auto p-0 rounded-none md:relative md:content-center md:items-center md:aspect-auto md:bg-[linear-gradient(rgb(0,0,0)_0%,rgb(255,255,255)_170%)] md:shadow-[rgba(171,171,171,0.64)_0px_0.706592px_0.706592px_-0.541667px,rgba(171,171,171,0.63)_0px_1.80656px_1.80656px_-1.08333px,rgba(171,171,171,0.61)_0px_3.62176px_3.62176px_-1.625px,rgba(171,171,171,0.58)_0px_6.8656px_6.8656px_-2.16667px,rgba(171,171,171,0.51)_0px_13.6468px_13.6468px_-2.70833px,rgba(171,171,171,0.35)_0px_30px_30px_-3.25px] md:box-border md:caret-transparent md:gap-x-0 md:flex md:shrink-0 md:h-min md:justify-center md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:gap-y-0 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-min md:[mask-position:0%] md:bg-left-top md:px-2.5 md:py-2 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[10px]">
            <div className="static box-content caret-black shrink h-auto min-h-0 min-w-0 w-auto md:relative md:aspect-auto md:box-border md:caret-transparent md:shrink-0 md:h-[34px] md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[31px] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
              <div className="box-content caret-black block md:aspect-auto md:box-border md:caret-transparent md:contents md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                <img
                  src={props.iconSrc}
                  alt="Icon"
                  className="text-black box-content caret-black block shrink h-auto align-middle w-auto md:text-white md:aspect-auto md:box-border md:caret-transparent md:inline-block md:shrink-0 md:h-full md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
                />
              </div>
            </div>
          </div>
          <div className="static [align-items:normal] box-content caret-black gap-x-[normal] block flex-row shrink h-auto justify-normal min-h-0 min-w-0 gap-y-[normal] w-auto md:relative md:content-start md:items-start md:aspect-auto md:box-border md:caret-transparent md:gap-x-4 md:flex md:flex-col md:shrink-0 md:h-min md:justify-center md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:gap-y-4 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
            <div className="static box-content caret-black block flex-row shrink justify-normal min-h-0 min-w-0 w-auto break-normal md:relative md:aspect-auto md:box-border md:caret-transparent md:flex md:flex-col md:shrink-0 md:justify-start md:min-h-[auto] md:min-w-[auto] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
              <p className="text-base font-normal box-content caret-black tracking-[normal] leading-[normal] min-h-0 min-w-0 text-start break-normal  md:text-xl md:font-medium md:aspect-auto md:box-border md:caret-transparent md:tracking-[-0.2px] md:leading-6 md:min-h-[auto] md:min-w-[auto] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-satoshi">
                {props.title}
              </p>
            </div>
            <div className="static box-content caret-black block flex-row shrink justify-normal min-h-0 min-w-0 opacity-100 w-auto break-normal md:relative md:aspect-auto md:box-border md:caret-transparent md:flex md:flex-col md:shrink-0 md:justify-start md:min-h-[auto] md:min-w-[auto] md:opacity-80 md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
              <p className="text-base box-content caret-black leading-[normal] min-h-0 min-w-0 text-start break-normal  md:aspect-auto md:box-border md:caret-transparent md:leading-6 md:min-h-[auto] md:min-w-[auto] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-inter">
                {props.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};
