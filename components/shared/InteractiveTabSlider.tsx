'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import { TabName, TabData } from '@/types/tab'; // NEW: Import TabName and TabData from shared types

interface InteractiveTabSliderProps {
    tabsData: Record<TabName, TabData>;
    tabOrder: TabName[];
}

const InteractiveTabSlider: React.FC<InteractiveTabSliderProps> = ({ tabsData, tabOrder }) => {
    const [activeTab, setActiveTab] = useState<TabName>('Mouture');
    const currentData = tabsData[activeTab];

    const nextTab = () => {
        const currentIndex = tabOrder.indexOf(activeTab);
        const nextIndex = (currentIndex + 1) % tabOrder.length;
        setActiveTab(tabOrder[nextIndex]);
    };

    const prevTab = () => {
        const currentIndex = tabOrder.indexOf(activeTab);
        const prevIndex = (currentIndex - 1 + tabOrder.length) % tabOrder.length;
        setActiveTab(tabOrder[prevIndex]);
    };

    return (
        <section className="bg-white mt-10 lg:mt-20">
            <div className="relative w-full h-[600px] lg:h-[800px] overflow-hidden">
                <div 
                    className="absolute inset-0 bg-cover bg-center transition-all duration-500"
                    style={{ 
                        backgroundImage: `url(${currentData.imageSrc})`,
                    }}
                >
                     <div className="absolute inset-0 bg-black opacity-40"></div> 
                </div>

                <button onClick={prevTab} className="absolute left-4 lg:left-20 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 lg:p-3 transition-all duration-300 cursor-pointer z-20">
                    <IoIosArrowBack className="text-xl lg:text-2xl text-gray-700" />
                </button>

                <button onClick={nextTab} className="absolute right-4 lg:right-20 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 lg:p-3 transition-all duration-300 cursor-pointer z-20">
                    <IoIosArrowForward className="text-xl lg:text-2xl text-gray-700" />
                </button>

                <div className="relative h-full w-full max-w-7xl mx-auto px-6 md:px-8 flex flex-col items-center justify-center text-white z-10 pb-20 lg:pb-0">
                    <div className="flex flex-col items-center justify-center text-center mb-4 lg:mb-12 animate-in fade-in zoom-in duration-300 key={activeTab}">
                        <span className="font-medium text-xs lg:text-sm tracking-widest uppercase mb-2 lg:mb-4 text-gray-200">
                            {currentData.tagline}
                        </span>
                        <h2 className="font-medium text-3xl lg:text-5xl mb-4 lg:mb-6">
                            {currentData.title}
                        </h2>
                        <p className="text-base lg:text-xl max-w-3xl leading-relaxed px-4 lg:px-0">
                            {currentData.subtitle}
                        </p>
                    </div>

                    <div className="absolute bottom-4 lg:bottom-10 left-0 right-0 w-full">
                        <div className="flex overflow-x-auto lg:flex-wrap justify-start lg:justify-center gap-2 lg:gap-4 p-4 w-full no-scrollbar snap-x">
                            {tabOrder.map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`flex-shrink-0 snap-center py-2 px-4 lg:py-3 lg:px-6 text-sm lg:text-base font-medium transition-all duration-300 whitespace-nowrap cursor-pointer rounded-full lg:rounded-none
                                        ${activeTab === tab 
                                            ? 'bg-white/20 lg:bg-transparent lg:underline font-bold' 
                                            : 'hover:bg-white/10 lg:hover:bg-transparent'
                                        }`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InteractiveTabSlider;
