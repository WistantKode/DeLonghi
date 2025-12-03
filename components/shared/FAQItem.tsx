'use client';

import React, { useState } from 'react';
import { IoIosAdd, IoIosClose } from 'react-icons/io';

interface FAQItemProps {
    question: string;
    answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-300 w-full">
            <button 
                className="flex justify-between items-center w-full py-4 text-left focus:outline-none group"
                onClick={() => setIsOpen(!isOpen)}>
                <span className="text-base md:text-lg font-normal text-gray-800 cursor-pointer hover:text-[#0A2342] transition-colors pr-4">{question}</span>
                {isOpen ? (
                    <IoIosClose className="text-2xl md:text-3xl text-gray-600 flex-shrink-0 cursor-pointer " />
                ) : (
                    <IoIosAdd className="text-2xl md:text-3xl text-gray-600 flex-shrink-0 cursor-pointer " />
                )}
            </button>
            {isOpen && (
                <div className="pb-4 text-sm md:text-base text-gray-600 transition-all duration-300 animate-in fade-in slide-in-from-top-1">
                    <p>{answer}</p>
                </div>
            )}
        </div>
    );
};

export default FAQItem;
