'use client';

import React from 'react';
import ProductSection from '@/components/ProductSection'; 
import Hero from '@/components/Hero';
import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/types/product';

const initialProducts: Product[] = [
    { 
        id: 1, 
        name: "Rivelia Jade Green | Couleur exclusive", 
        price: "699,00 €", 
        oldPrice: "799,00 €", 
        rating: 4.7, 
        reviews: 750, 
        status: "EXCLUSIVITÉ WEB", 
        image: "product/machine1.avif",
        category: "Rivelia",
        colors: 5,
        features: [
            "Technologie Cold Brew intégrée",
            "Double système de préparation",
            "Ecran tactile intuitif",
            "Nettoyage automatique"
        ]
    },
    { 
        id: 2, 
        name: "Rivelia - Sand Beige", 
        price: "699,00 €", 
        oldPrice: "799,00 €", 
        rating: 4.7, 
        reviews: 750, 
        status: "En rupture de stock", 
        image: "product/machine.avif",
        category: "Rivelia",
        colors: 5,
        features: [
            "Connectivité Wi-Fi",
            "Contrôle via application",
            "13 recettes personnalisables",
            "Broyeur céramique"
        ]
    },
    { 
        id: 3, 
        name: "Rivelia Onyx Black", 
        price: "699,00 €", 
        oldPrice: "799,00 €", 
        rating: 4.7, 
        reviews: 750, 
        status: "En rupture de stock", 
        image: "product/machine2.avif",
        category: "Rivelia",
        colors: 5,
        features: [
            "Design compact",
            "Système LatteCrema",
            "Chauffe-tasses intégré",
            "Rinçage automatique"
        ]
    },
    { 
        id: 4, 
        name: "Rivelia Arctic White", 
        price: "699,00 €", 
        oldPrice: "799,00 €", 
        rating: 4.7, 
        reviews: 750, 
        status: "PROMO", 
        image: "product/machine1.avif",
        category: "Rivelia",
        colors: 5,
        features: [
            "Double brûleur",
            "Réservoir lait intégré",
            "Ecran couleur HD",
            "Recettes barista"
        ]
    },
    { 
        id: 5, 
        name: "Eletta Explore, Gris sombre", 
        price: "699,00 €", 
        oldPrice: "799,00 €", 
        rating: 4.7, 
        reviews: 750, 
        status: "PROMO", 
        image: "cafe/cafe_machine.jpg",
        category: "Eletta Explore",
        colors: 5,
        features: [
            "Mouture réglable",
            "Programmation horaire",
            "Détartrage facile",
            "Silencieux"
        ]
    },
    { 
        id: 6, 
        name: "Eletta Explore, Gris sombre", 
        price: "699,00 €", 
        oldPrice: "799,00 €", 
        rating: 4.7, 
        reviews: 750, 
        status: "PROMO", 
        image: "cafe/cafe_machine.jpg",
        category: "Eletta Explore",
        colors: 5,
        features: [
            "Mouture réglable",
            "Programmation horaire",
            "Détartrage facile",
            "Silencieux"
        ]
    },
    { 
        id: 7, 
        name: "Eletta Explore, Gris sombre", 
        price: "699,00 €", 
        oldPrice: "799,00 €", 
        rating: 4.7, 
        reviews: 750, 
        status: "PROMO", 
        image: "cafe/cafe_machine.jpg",
        category: "Eletta Explore",
        colors: 5,
        features: [
            "Mouture réglable",
            "Programmation horaire",
            "Détartrage facile",
            "Silencieux"
        ]
    },
    { 
        id: 8, 
        name: "Eletta Explore, Gris sombre", 
        price: "699,00 €", 
        oldPrice: "799,00 €", 
        rating: 4.7, 
        reviews: 750, 
        status: "PROMO", 
        image: "cafe/cafe_machine.jpg",
        category: "Eletta Explore",
        colors: 5,
        features: [
            "Mouture réglable",
            "Programmation horaire",
            "Détartrage facile",
            "Silencieux"
        ]
    },
    { 
        id: 9, 
        name: "Eletta Explore, Gris sombre", 
        price: "699,00 €", 
        oldPrice: "799,00 €", 
        rating: 4.7, 
        reviews: 750, 
        status: "PROMO", 
        image: "cafe/cafe_machine.jpg",
        category: "Eletta Explore",
        colors: 5,
        features: [
            "Mouture réglable",
            "Programmation horaire",
            "Détartrage facile",
            "Silencieux"
        ]
    },
    { 
        id: 10, 
        name: "Eletta Explore, Gris sombre", 
        price: "699,00 €", 
        oldPrice: "799,00 €", 
        rating: 4.7, 
        reviews: 750, 
        status: "PROMO", 
        image: "cafe/cafe_machine.jpg",
        category: "Eletta Explore",
        colors: 5,
        features: [
            "Mouture réglable",
            "Programmation horaire",
            "Détartrage facile",
            "Silencieux"
        ]
    },
];

export default function Promotion6() {

    const customBlueButton = 'bg-[#266BBF] text-white hover:bg-[#8bb1e0]';
    // const whiteButtonWithGrayText = 'bg-white text-gray-700 hover:bg-gray-300';
    
      
    const listingProps = {
        products: initialProducts,
        defaultListingTitle: "Sortie", 
        title : null,
        subtitle: null,
        filterOptions: ['Trier par', 'Prix', 'Promotion', 'Couleur', 'Série', 'Catégorie'],
        backgroundImage: null, 
        productsPerPage: 10,
    };

    return (
        <div className="w-full overflow-x-hidden">
            
            <Hero 
                title={<>Découvrez, cumulez et <br/> profitez d&apos;offres uniques </>}
                subtitle="Avec nos offres allant jusqu'à 40%, c'est toujours le moment d'économiser"
                videoUrl="promotions/video.webm"
                textColor='text-black' 
                btnColor={customBlueButton}
                
            />

            <div className="font-sans antialiased">
                {/* ProductSection est censé gérer son propre responsive, nous le laissons tel quel */}
                <ProductSection {...listingProps} />
            </div>

            {/* SECTION 1 : MACHINE À CAFÉ (Image Gauche, Texte Droite) */}
            <section className="w-full flex flex-col lg:flex-row gap-10 lg:gap-20 mt-10 px-4 lg:px-20 mb-10">
              
              <div className="w-full lg:w-1/2">
                    <img src="promotions/promotion6.avif" alt="Machine à café en promotion" className="w-full h-auto object-cover rounded-lg shadow-md" /> 
              </div>

                <div className="flex flex-col justify-center w-full lg:w-1/2 gap-6 lg:pr-6">
                    
                    <h2 className="font-medium text-2xl lg:text-3xl text-[#0A2342]">
                       Économisez sur la machine à café de vos rêves
                    </h2>
                    <p className="text-base lg:text-lg text-gray-700">
                        Explorez un monde d&apos;excellence avec notre sélection de machines à café, conçues pour vous offrir une tasse parfaite à tout moment. Découvrez nos promotions, combinez-les et économisez.
                    </p>

                    <Link href="/cafe">
                        <button className="border border-gray-400 font-bold rounded-full w-60 sm:w-auto px-6 py-3 bg-white hover:bg-[#0A2342] cursor-pointer hover:text-white transition-colors">
                            Machines à café
                        </button>
                    </Link>


                </div>

            </section>

            {/* SECTION 2 : APPAREILS DE CUISINE (Texte Gauche, Image Droite) - Utilisation de flex-col-reverse pour l'alternance visuelle sur PC */}
            <section className="w-full flex flex-col-reverse lg:flex-row gap-10 lg:gap-20 mt-10 px-4 lg:px-20 mb-10">

                <div className="flex flex-col justify-center w-full lg:w-1/2 gap-6 lg:pr-6">
                    
                    <h2 className="font-medium text-2xl lg:text-3xl text-[#0A2342]">
                        Transformez les repas de tous les jours en moments inoubliables
                    </h2>
                    <p className="text-base lg:text-lg text-gray-700">
                        Découvrez nos promotions sur une gamme exclusive d&apos;appareils de cuisine. Découvrez des offres imbattables et rendez votre expérience culinaire délicieuse avec des appareils de haute qualité à des prix réduits.
                    </p>

                    <Link href="/cuisine">
                        <button className="border border-gray-400 font-bold rounded-full w-60 sm:w-auto px-6 py-3 bg-white hover:bg-[#0A2342] cursor-pointer hover:text-white transition-colors">
                            Appareils de cuisine
                        </button>
                    </Link>


                </div>

                <div className="w-full lg:w-1/2">
                    <img src="promotions/promotion6_1.avif" alt="Appareils de cuisine en promotion" className="w-full h-auto object-cover rounded-lg shadow-md" /> 
                </div>

            </section>

            {/* SECTION 3 : PETIT DÉJEUNER (Image Gauche, Texte Droite) */}
            <section className="w-full flex flex-col lg:flex-row gap-10 lg:gap-20 mt-10 px-4 lg:px-20 mb-20">
              
              <div className="w-full lg:w-1/2">
                    <img src="promotions/promotion6_2.avif" alt="Bouilloires et grille-pain" className="w-full h-auto object-cover rounded-lg shadow-md" /> 
              </div>

                <div className="flex flex-col justify-center w-full lg:w-1/2 gap-6 lg:pr-6">
                    
                    <h2 className="font-medium text-2xl lg:text-3xl text-[#0A2342]">
                        Pour un petit déjeuner mémorable
                    </h2>
                    <p className="text-base lg:text-lg text-gray-700">
                        Imaginez une cuisine équipée d&apos;appareils innovants, créés dans un souci d&apos;élégance et de performance : découvrez notre sélection de grille-pain et de bouilloires élégants et fonctionnels. Appréciez la routine du petit-déjeuner grâce à nos offres.
                    </p>

                    <Link href="/appareils_bouilloire">
                        <button className="border border-gray-400 font-bold rounded-full w-60 sm:w-auto px-6 py-3 bg-white hover:bg-[#0A2342] cursor-pointer hover:text-white transition-colors">
                            Bouilloires et grille pain
                        </button>   
                    </Link>

                </div>

            </section>

        </div>
    );
};
