"use client";
import { useState, ReactNode } from "react";
import ArrowDown from "../../../public/icons/ArrowDown.svg";
import ArrowUp from "../../../public/icons/ArrowUp.svg";

interface AccordionType {
  title: string;
  children: ReactNode;
}
export default function Accordion({ title, children }: AccordionType) {
  const [isOpen, setIsOpen] = useState(false);
  const handleAccordion = () => [setIsOpen(!isOpen)];
  return (
    <div className="flex flex-col items-start justify-start w-full border-2 border-black rounded-md ">
      <div className="w-full text-2xl font-bold" onClick={handleAccordion}>
        <div className="flex items-center justify-between p-4 border-b-2 border-black cursor-pointer">
          <div>{title}</div>
          <div>
            {isOpen ? (
              <ArrowUp className="w-6 h-6" />
            ) : (
              <ArrowDown className="w-6 h-6" />
            )}
          </div>
        </div>
      </div>
      {isOpen && <>{children}</>}
    </div>
  );
}
