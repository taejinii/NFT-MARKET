"use client";
import { useState, ReactNode } from "react";
import { TiArrowDownThick, TiArrowUpThick } from "react-icons/ti";
interface AccordionType {
  title: string;
  children: ReactNode;
}
export default function Accordion({ title, children }: AccordionType) {
  const [isOpen, setIsOpen] = useState(false);
  const handleAccordion = () => [setIsOpen(!isOpen)];
  return (
    <div className="flex flex-col items-start justify-start w-full border-2 border-black rounded-md cursor-pointer">
      <div className="w-full text-2xl font-bold" onClick={handleAccordion}>
        <div className="flex justify-between p-4 border-b-2 border-black">
          <div>{title}</div>
          <div>
            {isOpen ? (
              <TiArrowUpThick size={30} />
            ) : (
              <TiArrowDownThick size={30} />
            )}
          </div>
        </div>
      </div>
      {isOpen && <>{children}</>}
    </div>
  );
}
