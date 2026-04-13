import { useState } from 'react';

export function useAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); 

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return { openIndex, toggle };
}