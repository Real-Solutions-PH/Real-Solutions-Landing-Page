import { FAQItem } from "./FAQItem";
import { Accordion } from "@/components/ui/accordion";
import { Mail } from "lucide-react";
import Link from "next/link";

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
    <div className="flex flex-col items-center w-full max-w-[840px] gap-6">
      <div className="w-full">
        <Accordion type="single" collapsible className="w-full space-y-4">
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

      {/* Footer Email Section */}
      <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left text-neutral-600 sm:pt-4">
        <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-white border border-neutral-100 shadow-sm transition-transform hover:scale-105">
          <Mail className="size-4 text-neutral-800" />
        </div>
        <p className="text-sm font-medium tracking-tight">
          Feel free to mail us for any enquiries:{" "}
          <Link
            href="mailto:contact.realsolutionsph@gmail.com"
            className="text-neutral-900 underline underline-offset-4 hover:text-neutral-700 transition-colors"
          >
            contact.realsolutionsph@gmail.com
          </Link>
        </p>
      </div>
    </div>
  );
};
