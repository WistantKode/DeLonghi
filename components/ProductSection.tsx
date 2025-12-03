'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { TbPointFilled } from "react-icons/tb";
import { FaHeart, FaStar, FaRegHeart } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';
import Link from 'next/link';
import { Product, ProductSectionProps } from '@/types/product';

const StarRating = ({ rating }: { rating: number }) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    
    for (let i = 0; i < fullStars; i++) {
        stars.push(<FaStar key={i} className="w-4 h-4 text-amber-400" />);
    }

    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
        if (i + fullStars < 5) {
            stars.push(<FaStar key={`empty-${i}`} className="w-4 h-4 text-gray-300" />);
        }
    }
    
    return <div className="flex items-center">{stars.slice(0, 5)}</div>; 
};

interface ProductCardProps {
    product: Product;
    isFavorite: boolean;
    isComparing: boolean;
    onToggleFavorite: (id: number) => void;
    onToggleCompare: (id: number) => void;
}

const ProductCard = ({ product, isFavorite, isComparing, onToggleFavorite, onToggleCompare }: ProductCardProps) => {
    const [isHovered, setIsHovered] = useState(false);

    const statusBadges = [];
    if (product.status.includes('WEB')) {
        statusBadges.push(<span key="web" className="bg-[#C9E3F9] text-black px-3 py-1.5 text-xs font-semibold inline-block">COLD BREW</span>);
    }
    if (product.status.includes('PROMO')) {
        statusBadges.push(<span key="promo" className="bg-[#C9E3F9] text-black px-3 py-1.5 text-xs font-semibold inline-block">PROMO</span>);
    }
    if (product.status.includes('stock')) {
        statusBadges.push(<span key="stock" className="bg-[#C9E3F9] text-black px-3 py-1.5 text-xs font-semibold inline-block">RUPTURE DE STOCK</span>);
    }

    // Nom du produit encodé pour l'URL
    const encodedProductName = encodeURIComponent(product.name);

    return (
        <div 
            className="shadow-md hover:shadow-xl overflow-hidden group border border-transparent hover:border-gray-300 relative transition-shadow duration-300 ease-in-out" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <div className="relative p-6 pb-0">
                <button onClick={() => onToggleFavorite(product.id)} className="absolute top-6 right-6 p-2 transition-all duration-200 hover:scale-110 cursor-pointer z-8">
                    {isFavorite ? (
                        <FaHeart className="w-5 h-5 text-[#0A2342]" />
                    ) : (
                        <FaRegHeart className="w-5 h-5 text-gray-400 hover:text-[#0A2342]  transition-colors" />
                    )}
                </button>
                
                {/* Image produit */}
                <div className="relative h-48 bg-gray-100 flex items-center justify-center">
                    <Image src={product.image} alt={product.name} width={200} height={200} className="max-h-44 object-contain transition-transform duration-300 group-hover:scale-105" />
                </div>
            </div>

            {/* Badges */}
            <div className="absolute flex flex-wrap gap-2 -mt-7 px-6 ">
                {statusBadges}
            </div>
            
            {/* Détails du produit */}
            <div className="p-6 pt-4">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
                    {product.series} {/* Changed from product.category to product.series */}
                </p>

                <div className="flex justify-between items-start">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-tight pr-4">
                        {product.name}
                    </h3>
                    
                    {/* Prix */}
                    <div className="text-right">
                        <p className="text-xl text-gray-900 leading-none">{product.price}</p>
                        {product.oldPrice && (
                            <p className="text-sm text-gray-500 line-through mt-1">{product.oldPrice}</p>
                        )}
                        {product.oldPrice && (
                            <p className="text-xs text-gray-500 mt-1">(Prix suggéré)</p>
                        )}
                    </div>
                </div>
            
                {/* Notation & Comparer */}
                <div className="flex items-center justify-between gap-4 mt-2">
                    <div className="flex items-center">
                        <StarRating rating={product.rating} />
                        <span className="text-sm  font-semibold text-gray-900 ml-2 mr-1">
                            {product.rating}
                        </span>
                        <span className="text-sm text-gray-500">({product.reviews} avis)</span>
                    </div>

                    <label className="flex items-center text-gray-600 cursor-pointer text-sm font-medium hover:text-[#266BBF] transition-colors">
                        <span className="pr-2 hidden sm:inline">Comparer</span>
                        <input 
                            type="checkbox" 
                            checked={isComparing}
                            onChange={() => onToggleCompare(product.id)}
                            className="h-4 w-4 text-[#266BBF] rounded border-gray-300 focus:ring-[#266BBF]" 
                        />
                    </label>
                </div>
                
                {product.colors && product.colors > 1 && (
                    <div className="pt-4">
                        <a href="#" className="text-gray-500 hover:text-[#266BBF] text-xs font-medium transition-colors">
                            {product.colors} autres couleurs
                        </a>
                    </div>
                )}
                
                {/* Section apparaissant au survol */}
                {(isHovered && product.features && product.features.length > 0) ? (
                    <div className="px-0 pb-0 border-t border-gray-100 pt-4 mt-4">
                        <ul className="space-y-2 mb-4">
                            {product.features.map((feature, index) => (
                                <li key={index} className="flex items-center gap-2">
                                    <TbPointFilled  className="w-3 h-3 shrink-0" /> 
                                    <span className="text-sm text-gray-700">{feature}</span>
                                </li>
                            ))}
                        </ul>
                        
                        {/* Boutons d'action */}
                        <div className="flex flex-col gap-2">
                            <Link href={`/commander?name=${encodedProductName}`}>
                                <button className="flex items-center justify-center w-full bg-[#0A2342] cursor-pointer text-white text-sm py-3 px-4 rounded-full font-semibold hover:bg-white hover:text-[#0A2342] border border-[#0A2342] transition-colors shadow-md">
                                    Commander
                                </button>   
                            </Link>
                            <Link href={`/${product.type}/${product.id}`}> {/* Link to product detail page using type and id */}
                                <button className="w-full py-3 px-4 text-center cursor-pointer rounded-full border border-[#0A2342] font-bold text-sm text-[#0A2342] hover:bg-[#0A2342] hover:text-white transition-colors">
                                    En découvrir plus
                                </button>
                            </Link>
                        </div>
                    </div>
                ) : (
                    <div className="h-[148px] pt-4 mt-4" /> 
                )}
            </div>
        </div>
    );
};


const ProductSection = ({ 
    products, 
    title, 
    subtitle, 
    filterOptions, 
    backgroundImage, 
    defaultListingTitle = "Produits",
    listingPreTitle, 
    productsPerPage = 10 
}: ProductSectionProps) => {
    const [favorites, setFavorites] = useState<Record<number, boolean>>({});
    const [compareItems, setCompareItems] = useState<Record<number, boolean>>({});
    const [visibleProducts, setVisibleProducts] = useState(productsPerPage);

    const toggleFavorite = (productId: number) => {
        setFavorites(prev => ({
            ...prev,
            [productId]: !prev[productId]
        }));
    };

    const toggleCompare = (productId: number) => {
        setCompareItems(prev => ({
            ...prev,
            [productId]: !prev[productId]
        }));
    };

    const loadMoreProducts = () => {
        setVisibleProducts(prev => prev + productsPerPage);
    };

    const displayedProducts = products.slice(0, visibleProducts);
    const currentDisplayedCount = displayedProducts.length;
    const totalProductsCount = products.length;
    const hasMoreProducts = visibleProducts < products.length;
    const displayTitle = defaultListingTitle;

    return (
        <div className="max-w-7xl mx-auto ">
            
            {/* Hero */}
            {title && backgroundImage &&(

                <section  className="relative h-[400px] sm:h-[500px] w-full bg-cover bg-center bg-no-repeat flex items-center" style={{ backgroundImage: `url("${backgroundImage}")` }}>
                    <div className="absolute inset-0 bg-black opacity-30"></div>
                    <div className="relative text-white mt-40 p-6 md:p-12">
                        <h3 className="text-3xl sm:text-4xl font-serif font-light leading-tight mb-2">
                            {title}
                        </h3>
                        <p className="text-lg max-w-2xl opacity-90 leading-relaxed">
                            {subtitle}
                        </p>
                    </div>
                    
                </section>

            )}

            {/* Filter Bar */}
            <section className="py-8 font-medium">
               <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">

                    <div>
                        {listingPreTitle && (
                            <p className="text-lg font-normal text-center mb-4">
                                {listingPreTitle}
                            </p>
                        )}
                        <h2 className="text-2xl text-gray-900 mb-4 sm:mb-0">
                            {displayTitle} <span className="font-normal">({products.length})</span>
                        </h2>
                    </div>

                    </div>

                <div className="flex flex-wrap gap-3">
                    {filterOptions && filterOptions.map((filter) => (
                        <div key={filter} className="relative">
                            <button className="flex items-center px-4 py-3 bg-gray-100 text-gray-700 text-sm  hover:bg-gray-200 transition-colors">
                                <span>{filter}</span>
                                <IoIosArrowDown className="ml-2 w-4 h-4 text-gray-400" />
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            <div className="border-t border-gray-200 my-8"></div>

            {/* produits */}
            <section className="w-full py-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {displayedProducts.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            isFavorite={!!favorites[product.id]}
                            isComparing={!!compareItems[product.id]}
                            onToggleFavorite={toggleFavorite}
                            onToggleCompare={toggleCompare}/>
                    ))}
                </div>
            </section>

            {/* btn */}
            {totalProductsCount > 0 && (
                <div className="flex flex-col items-center justify-center mt-8 mb-8">
                    <p className="text-sm text-gray-700 mb-6">
                        Vous visualisez <span className="font-semibold">{currentDisplayedCount}</span> des <span className="font-semibold">{totalProductsCount}</span> produits
                    </p>
                    {hasMoreProducts && (
                    <button onClick={loadMoreProducts} className="px-8 py-3 border border-[#0A2342] text-[#0A2342] rounded-full cursor-pointer font-bold hover:bg-[#0A2342] hover:text-white transition-all duration-300 ">
                        Voir plus
                    </button>
                    )}
                </div>
            )}
        </div>
    );
};

export default ProductSection;
