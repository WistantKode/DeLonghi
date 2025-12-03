'use client';

import React, { useState, useRef } from 'react'; 
import { FaStar, FaHeart, FaRegHeart, FaInfoCircle, FaShippingFast, FaUndo, FaShieldAlt } from 'react-icons/fa';
import { IoIosArrowUp, IoIosArrowDown, IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Link from 'next/link';
import { Product, ProductDescriptionSectionProps } from '@/types/product';

// Fonctions d'aide (StarRating et ServiceItem) - Elles restent ici car elles servent à ce composant
const StarRating = ({ rating }: { rating: number }) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    
    for (let i = 0; i < fullStars; i++) {
        stars.push(<FaStar key={i} className="w-4 h-4 text-amber-300" />);
    }

    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
        // Ajout des étoiles vides
        stars.push(<FaStar key={`empty-${i}`} className="w-4 h-4 text-gray-300" />);
    }
    return <div className="flex items-center">{stars}</div>;
};

const ServiceItem = ({ text, icon }: { text: string; icon: React.ReactNode }) => (
    <div className="flex justify-between pl-4 pr-4 items-center rounded-lg bg-gray-200 py-4 mb-2">
        <div className="flex items-center">
            {icon}
            <span className="text-sm text-[#0A2342] ml-3">{text}</span>
        </div>
        <FaInfoCircle className="w-5 h-5 cursor-pointer " />
    </div>
);

const ProductDescriptionSection = ({ product }: ProductDescriptionSectionProps) => {
    
    // Les states (favoris, activeIndex, etc.) restent ici car elles gèrent l'interaction de CE composant
    const [favorites, setFavorites] = useState<Record<number, boolean>>({});
    const [activeIndex, setActiveIndex] = useState(0);
    const thumbnailContainerRef = useRef<HTMLDivElement>(null);

    const toggleFavorite = (productId: number) => {
        setFavorites(prev => ({
            ...prev,
            [productId]: !prev[productId]
        }));
    };

    const handleNext = () => {
        if (product.images) {
            setActiveIndex((prevIndex) => (prevIndex + 1) % product.images!.length);
        }
    };

    const handlePrev = () => {
        if (product.images) {
            setActiveIndex((prevIndex) => (prevIndex - 1 + product.images!.length) % product.images!.length);
        }
    };

    const scrollThumbnails = (direction: 'up' | 'down') => {
        if (thumbnailContainerRef.current) {
            const scrollAmount = 100; 
            thumbnailContainerRef.current.scrollBy({
                top: direction === 'down' ? scrollAmount : -scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    // Nom du produit encodé pour l'URL
    const encodedProductName = encodeURIComponent(product.name);
    
    if (!product.images) return null;

    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
            <div className="lg:grid lg:grid-cols-2 lg:gap-12">

                {/* Bloc 1: Galerie d'images */}
                <div className="flex">
                    <div className="flex-shrink-0 mr-4 hidden md:flex flex-col items-center">
                        <button onClick={() => scrollThumbnails('up')} className="p-1 text-gray-400 hover:text-black">
                            <IoIosArrowUp />
                        </button>
                        
                        <div 
                            ref={thumbnailContainerRef}
                            className="space-y-3 my-2 overflow-y-hidden"
                            style={{ height: '350px' }} >
                            {product.images.map((thumb, index) => (
                                <div 
                                    key={index}
                                    className={`w-20 h-20 border p-1 cursor-pointer transition-all ${activeIndex === index ? 'border-gray-800' : 'border-gray-200 hover:border-gray-400'}`}
                                    onClick={() => setActiveIndex(index)} >
                                    <img 
                                        src={thumb} 
                                        alt={`Vignette ${index + 1}`} 
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                            ))}
                        </div>
                        
                        <button onClick={() => scrollThumbnails('down')} className="p-1 text-gray-400 hover:text-black">
                            <IoIosArrowDown />
                        </button>
                    </div>
                    
                    <div className="flex-1 relative mb-6 lg:mb-0 flex items-center justify-center p-4">
                        <img 
                            src={product.images[activeIndex]} 
                            alt={product.name} 
                            className="w-full h-auto max-h-[500px] object-contain"
                        />
                        <button onClick={handlePrev} className="absolute left-0 top-1/2 -translate-y-1/2 p-2">
                            <IoIosArrowBack className="w-6 h-6" />
                        </button>
                        <button onClick={handleNext} className="absolute right-0 top-1/2 -translate-y-1/2 p-2">
                            <IoIosArrowForward className="w-6 h-6" />
                        </button>
                    </div>
                </div>

                {/* Bloc 2: Détails du produit et achat */}
                <div className="space-y-6 lg:pl-8">
                    <div className="">
                        <div className="flex gap-8 items-center">
                            <h1 className="text-3xl font-semibold">{product.name}</h1>
                            <button 
                                onClick={() => toggleFavorite(product.id)} 
                                className="p-2 transition-all duration-200 hover:scale-110 cursor-pointer">
                                {favorites[product.id] ? (
                                    <FaHeart className="w-6 h-6 text-[#0A2342]" />
                                ) : (
                                    <FaRegHeart className="w-6 h-6 text-[#0A2342] hover:text-[#0A2342] transition-colors" />
                                )}
                            </button>
                        </div>
                        <p className="text-sm font-light text-gray-700">{product.subtitle}</p>
                        
                        <div className="flex items-center mt-3">
                            <StarRating rating={product.rating} />
                            <a href="#" className="text-sm text-[#0A2342] ml-2 hover:underline">
                                {product.rating} ({product.reviews})
                            </a>
                        </div>
                        <span className="text-xs">{product.reference}</span> 
                    </div>

                    <div className="text-sm space-y-2">
                        <p>
                            <span className="font-semibold">Couleur:</span> {product.color}
                        </p>
                    </div>

                    <div className="py-4">
                        <p className="text-4xl font-semibold">{product.price} €</p>
                        <p className="text-xs font-normal mt-1">*{product.taxInfo}</p>
                    </div>
                    
                    <Link href={`/commander?name=${encodedProductName}`}>
                        <button className="w-full bg-[#0A2342] text-white text-lg py-2 px-4 rounded-full font-semibold hover:bg-white hover:border hover:border-[#0A2342] hover:text-[#0A2342] transition-colors cursor-pointer">
                            Ajouter au panier
                        </button>
                    </Link>


                    {product.klarna && (
                        <div className="p-2 mt-4 border border-gray-200 flex items-center gap-4 rounded-lg">
                           <img src="/accessoires/klarna.png" alt="Logo Klarna" className="w-20"/>
                           <div className="">
                                <p className="text-sm text-gray-800">
                                    3 paiements de <span className="font-bold">{product.klarna.payment} €</span> à <span className="font-bold">{product.klarna.interest}</span> d'intérêt avec <span className="font-bold">Klarna</span>
                                </p>
                                <a href={product.klarna.link} className="text-xs font-semibold inline-block underline -pt-20">
                                    En savoir plus
                                </a>
                           </div>
                        </div>
                    )}
                    
                    <div className="pt-4">
                        <ServiceItem text="Livraison gratuite standard à partir de 39 €" icon={<FaShippingFast className="w-5 h-5 text-gray-500" />} />
                        <ServiceItem text="Retours gratuits" icon={<FaUndo className="w-5 h-5 text-gray-500" />} />
                        <ServiceItem text="Garantie fabricant complète" icon={<FaShieldAlt className="w-5 h-5 text-gray-500" />} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductDescriptionSection;
