import { FAQItem } from "./FAQItem";
import { Accordion } from "@/components/ui/accordion";

export const FAQList = () => {
  const faqs = [
    {
      question: "What specific solutions do you offer?",
      answer:
        "For MSMEs, we offer productized 'AI Customer Support' and 'Workflow Automation' stacks that can be deployed in 4-8 weeks. For global startups, we provide custom, end-to-end software and AI engineering services.",
    },
    {
      question: "How long does it take to see results?",
      answer:
        "Our productized MSME packages are scoped to launch within 4-8 weeks, ensuring you start seeing real business outcomes like reduced manual work and faster support times almost immediately.",
    },
    {
      question: "Do I need an in-house tech team to maintain what you build?",
      answer:
        "Not at all. We serve as your long-term tech partner. We offer ongoing retainers for maintenance, bug fixes, and continuous AI model tuning to ensure everything runs smoothly.",
    },
    {
      question: "Why should a global startup choose your studio?",
      answer:
        "We offer direct access to senior founders combining full-stack engineering, UX strategy, and deep AI capabilities, providing high-quality engineering at a highly competitive TCO.",
    },
    {
      question:
        "Are your AI solutions just technical buzzwords or real business tools?",
      answer:
        "We focus completely on business outcomes. Our goal is to leverage AI to cut costs, accelerate your operations, and enhance customer experiences, not to sell you buzzwords.",
    },
  ];

  return (
    <div className="static [align-items:normal] box-content caret-black gap-x-[normal] block flex-row shrink h-auto justify-normal max-w-none min-h-0 min-w-0 gap-y-[normal] w-auto md:relative md:content-center md:items-center md:aspect-auto md:box-border md:caret-transparent md:gap-x-8 md:flex md:flex-col md:shrink-0 md:h-min md:justify-center md:max-w-[1000px] md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:gap-y-8 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
      <div className="static box-content caret-black shrink max-w-none min-h-0 min-w-0 opacity-100 transform-none w-auto md:relative md:aspect-auto md:box-border md:caret-transparent md:shrink-0 md:max-w-[600px] md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
        <div className="static [align-items:normal] box-content caret-black gap-x-[normal] block flex-row h-auto justify-normal max-w-none gap-y-[normal] w-auto md:relative md:content-center md:items-center md:aspect-auto md:box-border md:caret-transparent md:gap-x-4 md:flex md:flex-col md:h-min md:justify-center md:max-w-full md:overscroll-x-auto md:overscroll-y-auto md:gap-y-4 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                index={index}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </Accordion>
        </div>
      </div>
      <div className="static [align-items:normal] box-content caret-black gap-x-[normal] block shrink h-auto justify-normal min-h-0 min-w-0 opacity-100 gap-y-[normal] transform-none w-auto p-0 rounded-none md:relative md:content-center md:items-center md:aspect-auto md:box-border md:caret-transparent md:gap-x-2 md:flex md:shrink-0 md:h-min md:justify-center md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:gap-y-2 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-min md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:px-3 md:py-1.5 md:scroll-m-0 md:scroll-p-[auto] md:rounded-lg">
        <div className="static box-content caret-black shrink h-auto min-h-0 min-w-0 w-auto md:relative md:aspect-auto md:box-border md:caret-transparent md:shrink-0 md:h-[25px] md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[25px] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
          <div className="box-content caret-black block md:aspect-auto md:box-border md:caret-transparent md:contents md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
            <img
              src="https://c.animaapp.com/mloikyq0WG9Ud9/assets/icon-46.svg"
              alt="Icon"
              className="box-content caret-black block shrink h-auto align-middle w-auto md:aspect-auto md:box-border md:caret-transparent md:inline-block md:shrink-0 md:h-full md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
            />
          </div>
        </div>
        <div className="static box-content caret-black block flex-row shrink justify-normal min-h-0 min-w-0 text-wrap md:relative md:aspect-auto md:box-border md:caret-transparent md:flex md:flex-col md:shrink-0 md:justify-start md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
          <p className="text-base box-content caret-black leading-[normal] min-h-0 min-w-0 text-start text-wrap  md:aspect-auto md:box-border md:caret-transparent md:leading-6 md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-center md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-inter">
            Feel free to mail us for any enquiries :{" "}
            <a
              href="mailto://contact.realsolutionsph@gmail.com"
              className="box-content caret-black no-underline text-wrap md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:underline md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
            >
              contact.realsolutionsph@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
