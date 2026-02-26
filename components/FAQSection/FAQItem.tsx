import { motion, AnimatePresence } from "framer-motion";

export type FAQItemProps = {
  question: string;
  answer: string;
  isExpanded?: boolean;
  onClick?: () => void;
};

export const FAQItem = (props: FAQItemProps) => {
  return (
    <div 
      className="static box-content caret-black shrink min-h-0 min-w-0 w-auto md:relative md:aspect-auto md:box-border md:caret-transparent md:shrink-0 md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] cursor-pointer"
      onClick={props.onClick}
    >
      <motion.div
        layout
        className={`static bg-transparent shadow-none box-content caret-black gap-x-[normal] h-auto gap-y-[normal] w-auto rounded-none md:relative md:aspect-auto md:bg-neutral-100 md:shadow-[rgba(0,0,0,0.08)_0px_0.706592px_0.706592px_-0.666667px,rgba(0,0,0,0.08)_0px_1.80656px_1.80656px_-1.33333px,rgba(0,0,0,0.07)_0px_3.62176px_3.62176px_-2px,rgba(0,0,0,0.07)_0px_6.8656px_6.8656px_-2.66667px,rgba(0,0,0,0.05)_0px_13.6468px_13.6468px_-3.33333px,rgba(0,0,0,0.02)_0px_30px_30px_-4px,rgb(255,255,255)_0px_3px_1px_0px_inset] md:box-border md:caret-transparent md:gap-x-2 md:overscroll-x-auto md:overscroll-y-auto md:gap-y-2 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-[10px] [align-items:normal] block flex-row justify-normal p-0 md:content-center md:items-center md:flex md:flex-col md:justify-center md:px-4 md:py-3`}
      >
        <div
          className={`static [align-items:normal] box-content caret-black gap-x-[normal] block shrink h-auto justify-normal gap-y-[normal] md:content-center md:items-center md:aspect-auto md:box-border md:caret-transparent md:gap-x-2.5 md:flex md:shrink-0 md:h-min md:justify-center md:overscroll-x-auto md:overscroll-y-auto md:gap-y-2.5 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] min-h-0 min-w-0 w-auto md:relative md:min-h-[auto] md:min-w-[auto] md:w-full`}
        >
          <div className="static box-content caret-black block basis-auto flex-row grow-0 shrink justify-normal min-h-0 min-w-0 w-auto break-normal md:relative md:aspect-auto md:box-border md:caret-transparent md:flex md:basis-0 md:flex-col md:grow md:shrink-0 md:justify-start md:min-h-[auto] md:min-w-[auto] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-px md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
            <p className="text-base box-content caret-black leading-[normal] min-h-0 min-w-0 text-start break-normal font-times md:aspect-auto md:box-border md:caret-transparent md:leading-6 md:min-h-[auto] md:min-w-[auto] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-inter">
              {props.question}
            </p>
          </div>
          <div className="static box-content caret-black shrink h-auto min-h-0 min-w-0 w-auto md:relative md:aspect-auto md:box-border md:caret-transparent md:shrink-0 md:h-5 md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-5 md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
            <motion.div
              animate={{ rotate: props.isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className={`static box-content caret-black shrink h-auto w-auto left-auto top-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:shrink-0 md:h-5 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-5 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:left-0 md:top-0`}
            >
              <div className="static box-content caret-black shrink h-auto w-auto left-auto top-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:shrink-0 md:h-5 md:left-[calc(50%_-_10px)] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:top-[calc(50%_-_10px)] md:w-5 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                <div className="box-content caret-black block md:aspect-auto md:box-border md:caret-transparent md:contents md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                  <img
                    src="https://c.animaapp.com/mloikyq0WG9Ud9/assets/icon-45.svg"
                    alt="Icon"
                    className="box-content caret-black block shrink h-auto align-middle w-auto md:aspect-auto md:box-border md:caret-transparent md:inline-block md:shrink-0 md:h-full md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <AnimatePresence>
          {props.isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden w-full"
            >
              <div
                className={`static box-content caret-black block flex-row shrink justify-normal opacity-100 break-normal md:aspect-auto md:box-border md:caret-transparent md:flex md:flex-col md:shrink-0 md:justify-start md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] min-h-0 min-w-0 w-auto md:relative md:blur-0 md:min-h-[auto] md:min-w-[auto] md:opacity-80 md:w-full pt-2`}
              >
                <p className="text-base box-content caret-black leading-[normal] min-h-0 min-w-0 break-normal font-times md:text-sm md:aspect-auto md:box-border md:caret-transparent md:leading-[22.4px] md:min-h-[auto] md:min-w-[auto] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-inter">
                  {props.answer}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <div className="static bg-none box-content caret-black shrink h-auto opacity-100 pointer-events-auto w-auto z-auto left-auto top-auto md:absolute md:aspect-auto md:bg-[radial-gradient(50%_50%_at_7.2%_6.1%,rgba(184,199,217,0.5)_0%,rgba(4,7,13,0)_100%)] md:box-border md:caret-transparent md:shrink-0 md:h-[306px] md:opacity-10 md:overscroll-x-auto md:overscroll-y-auto md:pointer-events-none md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[437px] md:z-[1] md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:left-0 md:top-0"></div>
      </motion.div>
    </div>
  );
};
