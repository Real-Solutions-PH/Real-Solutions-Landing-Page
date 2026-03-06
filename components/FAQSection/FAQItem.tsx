import {
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export type FAQItemProps = {
  question: string;
  answer: string;
  index: number;
};

export const FAQItem = (props: FAQItemProps) => {
  return (
    <AccordionItem
      value={`item-${props.index}`}
      className="group border-b-0 mb-4 static box-content caret-black shrink min-h-0 min-w-0 w-auto md:relative md:aspect-auto md:box-border md:caret-transparent md:shrink-0 md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] cursor-pointer bg-neutral-100 shadow-[rgba(0,0,0,0.08)_0px_0.706592px_0.706592px_-0.666667px,rgba(0,0,0,0.08)_0px_1.80656px_1.80656px_-1.33333px,rgba(0,0,0,0.07)_0px_3.62176px_3.62176px_-2px,rgba(0,0,0,0.07)_0px_6.8656px_6.8656px_-2.66667px,rgba(0,0,0,0.05)_0px_13.6468px_13.6468px_-3.33333px,rgba(0,0,0,0.02)_0px_30px_30px_-4px,rgb(255,255,255)_0px_3px_1px_0px_inset] rounded-[10px] px-4 py-3 overflow-hidden relative hover:shadow-[0_0_15px_rgba(0,180,216,0.15)] hover:border-tertiary transition-all duration-300"
    >
      {/* We need an absolute background div mimicking the custom variant, so place it as a sibling or behind */}
      <div className="static bg-none box-content caret-black shrink h-auto opacity-100 pointer-events-none w-auto z-auto left-auto top-auto md:absolute md:aspect-auto md:bg-[radial-gradient(50%_50%_at_7.2%_6.1%,rgba(184,199,217,0.5)_0%,rgba(4,7,13,0)_100%)] md:box-border md:caret-transparent md:shrink-0 md:h-[306px] md:opacity-10 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[437px] md:z-[0] md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:left-0 md:top-0"></div>

      <AccordionTrigger className="hover:no-underline py-0 text-left static flex flex-row items-center justify-between min-h-0 min-w-0 w-full relative z-10 gap-4">
        <span className="text-base font-normal tracking-[normal] leading-[normal] font-times md:leading-6 md:font-inter">
          {props.question}
        </span>
      </AccordionTrigger>
      <AccordionContent className="pt-2 pb-0 relative z-10">
        <div className="opacity-80">
          <p className="text-base leading-[normal] font-times md:text-sm md:leading-[22.4px] md:font-inter">
            {props.answer}
          </p>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
};
