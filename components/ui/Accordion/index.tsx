"use client";
import { useState, ReactNode } from "react";
interface AccordionType {
  title: string;
  children: ReactNode;
}
export default function Accordion({ title, children }: AccordionType) {
  const [isOpen, setIsOpen] = useState(false);
  const handleAccordion = () => [setIsOpen(!isOpen)];
  return (
    <div className="flex flex-col items-start justify-start w-full border-2 border-black rounded-md">
      <div className="w-full text-2xl font-bold" onClick={handleAccordion}>
        <div className="p-4 border-b-2 border-black">{title}</div>
      </div>
      {isOpen && <>{children}</>}
    </div>
  );
}
