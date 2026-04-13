import { ChevronDown } from "lucide-react";

type AccordionItemProps = {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
};

export default function AccordionItem({ question, answer, isOpen, onClick }: AccordionItemProps) {
  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full py-5 flex justify-between items-center text-left transition-all"
        onClick={onClick}
      >
        <span className="text-base font-medium text-gray-900">{question}</span>
        <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </button>
      
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-40 pb-5 opacity-100" : "max-h-0 opacity-0"}`}>
        <p className="text-gray-500 text-sm leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
}