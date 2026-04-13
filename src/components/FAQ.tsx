import Button from '../ui/Button/Button';
import AccordionItem from './AccordionItem';
import { faqData } from '../data/Faq';
import { useAccordion } from '../hooks/useAccordion';

export default function FAQ() {
  const { openIndex, toggle } = useAccordion();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 py-16 px-6 lg:px-12 gap-12 lg:gap-20 min-h-[500px]">
      
      <div className="flex flex-col justify-between h-full py-2">
        <div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-lg">
            Answers to your real estate questions and concerns
          </p>
        </div>

        <div className="mt-12 lg:mt-0">
          <p className='text-base font-semibold text-gray-900'>Still have a Questions?</p>
          <p className='text-sm text-slate-500 mt-1'>
            We're here to help! Don't hesitate—ask away and get the answers you need.
          </p>
          <Button variant="primary" className="mt-6 px-6 py-2">
            Contact Us
          </Button>
        </div>
      </div>

      <div className="flex flex-col">
        {faqData.map((item, index) => (
          <AccordionItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={openIndex === index}
            onClick={() => toggle(index)}
          />
        ))}
      </div>

    </div>
  );
}