'use client';

import React, { useRef, useState } from 'react'; 
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Link from 'next/link'; 

interface Product {
    name: string;
    category: string;
    imageUrl: string;
    link: string;
}

const products: Product[] = [
    { name: "Machines à Café", category: "Machines à Café", imageUrl: "product/machine.avif", link: "/cafe" },
    { name: "Machines à Café à Grain", category: "Expresso broyeurs", imageUrl: "product/machine1.avif", link: "/expresso_broyeurs" },
    { name: "Machines Expresso Manuelles", category: "Machines expresso", imageUrl: "product/machine2.avif", link: "/machines_expresso" },
    { name: "Climatiseurs mobiles", category: "Climatiseurs Mobiles", imageUrl: "product/machine3.avif", link: "/appareils_confort" },
    { name: "Déshumidificateur d'air", category: "Déshumidificateur", imageUrl: "product/machine4.avif", link: "/deshumi" },
];

const ProductCarousel: React.FC = () => {
    
    const scrollRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const CARD_WIDTH = 300; 

    const handleScroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const container = scrollRef.current;
            const scrollDistance = CARD_WIDTH * 2; 

            if (direction === 'left') {
                container.scrollBy({ left: -scrollDistance, behavior: 'smooth' });
            } else {
                container.scrollBy({ left: scrollDistance, behavior: 'smooth' });
            }

            setTimeout(() => {
                const newScrollLeft = container.scrollLeft;
                const newIndex = Math.round(newScrollLeft / CARD_WIDTH);
                
                const maxIndex = products.length - 1; 
                setActiveIndex(Math.min(Math.max(0, newIndex), maxIndex));
            }, 300); 
        }
    };

    const goToSlide = (index: number) => {
        if (scrollRef.current) {
            const container = scrollRef.current;
            container.scrollTo({ left: index * CARD_WIDTH, behavior: 'smooth' });
            setActiveIndex(index);
        }
    };
    
    const ProductCard: React.FC<{ product: Product }> = ({ product }) => (
        <div className="flex flex-col items-center p-4 min-w-[280px] max-w-[300px] mx-4 transition-transform duration-300">
            <div className="h-64 flex items-center justify-center bg-transparent">
                <img 
                    src={product.imageUrl} 
                    alt={product.name} 
                    className="max-h-full max-w-full object-contain" 
                />
            </div>

            <p className="text-gray-500 text-sm mt-4">{product.name}</p>

            <Link 
                href={product.link}
                className="mt-4 py-2 w-52 px-6 text-white font-semibold rounded-full transition duration-300 bg-[#0A2342] hover:bg-white hover:text-[#0A2342] border border-2-[#0A2342] cursor-pointer text-center" >
                {product.category}
            </Link>
        </div>
    );

    return (
        <div className="relative w-full">
            <div className="flex items-center justify-center">
                
                <button className="absolute left-0 p-3 bg-white border border-gray-300 rounded-full shadow-md hover:bg-gray-100 transition" onClick={() => handleScroll('left')}>
                    <FaChevronLeft className="w-5 h-5 text-gray-700 cursor-pointer" />
                </button>

                <div ref={scrollRef} className="flex overflow-hidden w-full px-4" style={{ scrollSnapType: 'x mandatory' }}>
                    {products.map((product, index) => (
                        <div key={index} style={{ scrollSnapAlign: 'start' }}>
                            <ProductCard product={product} />
                        </div>
                    ))}
                </div>

                <button className="absolute right-0 p-3 bg-white border border-gray-300 rounded-full shadow-md hover:bg-gray-100 transition" onClick={() => handleScroll('right')}>
                    <FaChevronRight className="w-5 h-5 text-gray-700 cursor-pointer" />
                </button>
            </div>

            <div className="flex justify-center space-x-2 mt-8">
                {products.map((_, index) => (
                    <div 
                        key={index} className={`w-2 h-2 rounded-full cursor-pointer transition-colors ${ index === activeIndex ? 'bg-gray-900' : 'bg-gray-400'}`}onClick={() => goToSlide(index)}>

                    </div>
                ))}
            </div>
            
        </div>
    );
};

export default ProductCarousel;
