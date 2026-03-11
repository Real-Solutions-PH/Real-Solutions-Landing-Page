import {
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

export type FAQItemProps = {
  question: string;
  answer: string;
  index: number;
};

export const FAQItem = (props: FAQItemProps) => {
  return (
    <AccordionItem
      value={`item-${props.index}`}
      className={cn(
        "border-none mb-4 rounded-2xl sm:rounded-xl bg-white shadow-sm sm:shadow-md transition-all duration-300 hover:shadow-lg overflow-hidden",
      )}
    >
      <AccordionTrigger className="px-6 py-5 hover:no-underline text-left group">
        <span className="text-sm font-medium text-neutral-800 tracking-tight leading-snug pr-4">
          {props.question}
        </span>
      </AccordionTrigger>
      <AccordionContent className="px-6 pb-5">
        <p className="text-neutral-500 text-[13px] leading-relaxed max-w-[90%]">
          {props.answer}
        </p>
      </AccordionContent>
    </AccordionItem>
  );
};
