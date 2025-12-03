'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import ProductSection from '@/components/ProductSection';
import { Product } from '@/types/product';

interface ContentBlockProps {
    title: string;
    content: string[];
    imageUrl?: string;
    imageAlt?: string;
}

const ContentBlock = ({ title, content, imageUrl, imageAlt }: ContentBlockProps) => {
    return (
        <div className="mb-12 lg:mb-24">
            <div className="w-full px-6 md:px-20 lg:px-40">
                
                {/* Texte */}
                <div className="py-6 lg:py-10 flex flex-col items-center justify-center text-center">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                        {title}
                    </h2>
                    
                    <div className="text-gray-700 leading-relaxed max-w-4xl mx-auto space-y-4">
                        {content.map((pContent, index) => (
                            <p key={index} 
                                className="text-base md:text-lg" 
                                dangerouslySetInnerHTML={{ __html: pContent }} 
                            />
                        ))}
                    </div>
                </div>
            </div>

            {imageUrl && imageAlt && (
                <div className="w-full overflow-hidden flex justify-center">
                    <Image 
                        src={imageUrl} 
                        alt={imageAlt} 
                        width={1200}
                        height={600}
                        className='w-full  h-auto object-cover ' 
                    />
                </div>
            )}
        </div>
    );
};


const initialProducts: Product[] = [
    { 
        id: 1, 
        name: "Dedica Duo", 
        price: "699,00 €", 
        oldPrice: "799,00 €", 
        rating: 4.7, 
        reviews: 746, 
        status: "EXCLUSIVITÉ WEB", 
        image: "/product/machine1.avif",
        category: "Dedica Duo",
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
        name: "Magnifica Smart", 
        price: "699,00 €", 
        oldPrice: "799,00 €", 
        rating: 4.7, 
        reviews: 746, 
        status: "En rupture de stock", 
        image: "/product/machine.avif",
        category: "Magnifica Smart",
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
        name: "Magnifica Evo", 
        price: "699,00 €", 
        oldPrice: "799,00 €", 
        rating: 4.7, 
        reviews: 746, 
        status: "En rupture de stock", 
        image: "/product/machine2.avif",
        category: "Magnifica Evo",
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
        name: "Eleta Explore", 
        price: "699,00 €", 
        oldPrice: "799,00 €", 
        rating: 4.7, 
        reviews: 746, 
        status: "PROMO", 
        image: "/product/machine1.avif",
        category: "Eleta Explore",
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
        name: "Magnifica Plus", 
        price: "699,00 €", 
        oldPrice: "799,00 €", 
        rating: 4.7, 
        reviews: 746, 
        status: "PROMO", 
        image: "/cafe/cafe_machine.jpg",
        category: "Magnifica Plus",
        colors: 5,
        features: [
            "Mouture réglable",
            "Programmation horaire",
            "Détartrage facile",
            "Silencieux"
        ]
    },
];

const contentBlocks = [
    {
        title: "Un univers de machines à café",
        content: [
            `Notre gamme comprend <strong class="font-semibold text-gray-900">des machines expresso, des expresso broyeurs, des machines expresso manuelles</strong> et bien d'autres. De'Longhi se distingue pour son engagement envers la qualité, l'innovation et les designs intuitifs.`,
            `Nos machines à café sont reconnues pour leur fiabilité, leur performance et leur capacité à préparer de délicieux cafés. De'Longhi est le choix parfait pour les amateurs qui souhaitent profiter d'un <strong class="font-semibold text-gray-900">café de qualité</strong> dans le confort de leur maison.`
        ],
        imageUrl: "/cafe/1.png",
        imageAlt: "Vue d'une machine à café"
    },
    {
        title: "Machine à cafe à Grain",
        content: [
            `Les Expresso Broyeurs sont des machines pratiques et faciles d'utilisation conçues pour préparer des <strong class="font-semibold text-gray-900"> cafés et boissons au lait </strong> de haut de gamme en appuyant simplement sur un bouton. Composées de réservoirs d’eau, <strong class="font-semibold text-gray-900">moulins à café intégrés,</strong> et diverses <strong class="font-semibold text-gray-900">options d'infusion,</strong> profiter d’une tasse de café avec un minimum d’effort devient facile.`,
            `De la simple tasse de café noir aux boissons spéciales comme le <strong class="font-semibold text-gray-900">Latte et le Cappuccino,</strong> les cafetières automatiques offrent polyvalence et praticité aux passionnés de café. Reveillez-vous avec l’arôme du café fraîchement moulu jour après jour.`
        ],
        imageUrl: "/cafe/2.png",
        imageAlt: "Gros plan sur une tasse de café"
    },
    {
        title: "Machines expresso manuelles",
        content: [
            `Pour ceux qui aiment l’art de la préparation du café, <strong class="font-semibold text-gray-900">les Machines à Expresso Manuelles,</strong> également connues sous le nom de <strong class="font-semibold text-gray-900">Machines à Expresso à Pompe,</strong> offrent une expérience unique.`,
            `L'utilisation de ces machines nécessite d'imiter les gestes d'un vrai barista : l’utilisateur doit remplir le porte-filtre de la bonne quantité de café et le presser, puis le verrouiller sur la machine. En appuyant sur un bouton, la machine préparera la bonne pression d’eau pour extraire un délicieux espresso.`,
            `Les <strong class="font-semibold text-gray-900">machines manuelles </strong> offrent un contrôle précis sur le <strong class="font-semibold text-gray-900">processus d'infusion, </strong> permettant aux amateurs de café d’expérimenter des variables telles que <strong class="font-semibold text-gray-900">la taille de la mouture, la pression de bourrage et le temps d’extraction.</strong> Avec <strong class="font-semibold text-gray-900">les machines à expresso manuelles,</strong> appréciez le rituel de préparation d'<strong class="font-semibold text-gray-900">un café parfaitement équilibré et personnalisé.</strong>`
        ],
        imageUrl: "/cafe/3.png",
        imageAlt: "Machine à expresso manuelle"
    },
    {
        title: "Machines à cappuccino",
        content: [
            `Si vous aimez les <strong class="font-semibold text-gray-900">cappuccinos gourmands et crémeux,</strong> une machine à café avec <strong class="font-semibold text-gray-900">mousseur à lait intégré,</strong> dotés de la <strong class="font-semibold text-gray-900">Technologie LatteCrema,</strong> ou des buses à vapeur, disponibles sur une grande partie de nos machines expresso manuelles, sont la solution.`,
            `Avec <strong class="font-semibold text-gray-900">une machine à Cappuccino,</strong> créez l’équilibre parfait entre le <strong class="font-semibold text-gray-900">café, le lait vapeur et la mousse</strong> pour créer un Cappuccino aussi bon que beau.`,
            `Des modèles d’entrée de gamme avec <strong class="font-semibold text-gray-900">mousseur à lait manuel,</strong> aux plus aboutis avec <strong class="font-semibold text-gray-900">systèmes automatiques,</strong> les machines à cappuccino offrent une gamme variée en fonction de vos préférences et de votre niveau de compétence.`
        ],
        imageUrl: "/cafe/4.png",
        imageAlt: "Cappuccino mousseux"
    },
    {
        title: "Machines à café - Accessoires et entretien",
        content: [
            `Il existe divers <strong class="font-semibold text-gray-900">accessoires</strong> qui peuvent améliorer votre expérience de préparation du café.`,
            `Le <strong class="font-semibold text-gray-900">détartrant,</strong> tel que l'EcoDeCalk De'Longhi, est un accessoire essentiel qui permet d'éliminer les dépôts de calcaire et l’accumulation de tartre des composants internes de la machine à café. Un détartrage régulier aide à maintenir les performances et la longévité de la machine.`,
            `En outre, d’autres accessoires tels que les pichets à mousse de lait, les moulins à café et les récipients pour café sous vide de café peuvent améliorer davantage votre routine de préparation du café. Ces accessoires offrent <strong class="font-semibold text-gray-900">commodité, précision et possibilité de personnaliser</strong> votre processus de préparation du café.`,
            `Les vrais passionnés de café peuvent également profiter du design et de la fonctionnalité de nos verres à Expresso, ou des mugs thermaux en céramique faites main, chacune avec un style et un design uniques qui en feront des cadeaux parfaits pour vos amis et votre famille !`,
            `Le presse-café (Tamper) est un autre <strong class="font-semibold text-gray-900">accessoire essentiel</strong> utilisé pour répartir uniformément et compresser le marc de café dans le porte-filtre d’une machine à expresso, assurant de cette manière <strong class="font-semibold text-gray-900">une extraction optimale.</strong> Un tamper de bonne qualité peut contribuer à des <strong class="font-semibold text-gray-900">espresso consistants et savoureux.</strong>`
        ],
        imageUrl: undefined, 
        imageAlt: ""
    },
];


export default function Cafe() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('/api/products');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data: Product[] = await response.json();
                setProducts(data);
            } catch (error) {
                console.error("Failed to fetch products:", error);
                setError("Failed to load products.");
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) {
        return <div className="text-center py-12">Chargement des produits...</div>;
    }

    if (error) {
        return <div className="text-center py-12 text-red-500">{error}</div>;
    }
    
    const listingProps = {
        products: products,
        title: "Machines à café De'Longhi",
        defaultListingTitle: "Machines à café", 
        subtitle: "De'Longhi assure une expérience gustative unique avec la machine parfaite à chaque café.",
        filterOptions: ['Trier par', 'Prix', 'Promotion', 'Couleur', 'Catégorie', 'Série', 'Type de boisson', 'Nettoyage'],
        backgroundImage: "/bg2.jpg", 
        productsPerPage: 4,
    };

    return (
        <div className="font-sans antialiased bg-white overflow-x-hidden">
            
            <ProductSection {...listingProps} />

            {contentBlocks.map((block, index) => (
                <ContentBlock 
                    key={index}
                    title={block.title}
                    content={block.content}
                    imageUrl={block.imageUrl}
                    imageAlt={block.imageAlt}
                />
            ))}
        </div>
    );
};
