"use client";

import { useState } from "react";
import { FAQItem } from "./FAQItem";

export const FAQList = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We specialize in AI solutions, including machine learning models, automation, chatbots, predictive analytics, and consulting tailored to your business needs"
    },
    {
      question: "How long does it take to develop an AI solution?",
      answer: "Depending on the project's complexity, timelines typically range from 2 to 12 weeks. We'll provide a detailed timeline after our initial discovery call"
    },
    {
      question: "Do I need technical expertise to work with you?",
      answer: "No technical background is required! We handle all the complexity for you and explain every step in simple, actionable terms"
    },
    {
      question: "Is my data safe when working with your agency?",
      answer: "Absolutely. We follow strict data privacy protocols, comply with GDPR standards, and offer NDAs to ensure your information stays secure"
    },
    {
      question: "Can AI really help my business grow?",
      answer: "Yes! AI can automate tasks, enhance customer experiences, uncover insights, and open new revenue streams — and we'll show you exactly how it can work for your business."
    }
  ];

  return (
    <div className="static [align-items:normal] box-content caret-black gap-x-[normal] block flex-row shrink h-auto justify-normal max-w-none min-h-0 min-w-0 gap-y-[normal] w-auto md:relative md:content-center md:items-center md:aspect-auto md:box-border md:caret-transparent md:gap-x-8 md:flex md:flex-col md:shrink-0 md:h-min md:justify-center md:max-w-[1000px] md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:gap-y-8 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
      <div
        className="static box-content caret-black shrink max-w-none min-h-0 min-w-0 opacity-100 transform-none w-auto md:relative md:aspect-auto md:box-border md:caret-transparent md:shrink-0 md:max-w-[600px] md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
      >
        <div
          className="static [align-items:normal] box-content caret-black gap-x-[normal] block flex-row h-auto justify-normal max-w-none gap-y-[normal] w-auto md:relative md:content-center md:items-center md:aspect-auto md:box-border md:caret-transparent md:gap-x-4 md:flex md:flex-col md:h-min md:justify-center md:max-w-full md:overscroll-x-auto md:overscroll-y-auto md:gap-y-4 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
        >
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isExpanded={openIndex === index}
              onClick={() => toggleFAQ(index)}
            />
          ))}
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
          <p className="text-base box-content caret-black leading-[normal] min-h-0 min-w-0 text-start text-wrap font-times md:aspect-auto md:box-border md:caret-transparent md:leading-6 md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-center md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-inter">
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
