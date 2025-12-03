'use client';

import React from 'react';
import ProductSection from '@/components/ProductSection'; 
import { Product } from '@/types/product';

const initialProducts: Product[] = [
    { 
        id: 1, 
        name: "PrimaDonna Aromatic", 
        price: "699,00 €", 
        oldPrice: "799,00 €", 
        rating: 4.7, 
        reviews: 750, 
        status: "EXCLUSIVITÉ WEB", 
        image: "product/machine1.avif",
        category: "PrimaDonna Aromatic",
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
        name: "PrimaDonna Aromatic", 
        price: "699,00 €", 
        oldPrice: "799,00 €", 
        rating: 4.7, 
        reviews: 750, 
        status: "En rupture de stock", 
        image: "product/machine.avif",
        category: "PrimaDonna Aromatic",
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
        name: "PrimaDonna Aromatic", 
        price: "699,00 €", 
        oldPrice: "799,00 €", 
        rating: 4.7, 
        reviews: 750, 
        status: "En rupture de stock", 
        image: "product/machine2.avif",
        category: "PrimaDonna Aromatic",
        colors: 5,
        features: [
            "Design compact",
            "Système LatteCrema",
            "Chauffe-tasses intégré",
            "Rinçage automatique"
        ]
    },
];


export default function PrimaDonna() {
    
    const listingProps = {
        products: initialProducts,
        title: null, 
        subtitle: null,
        backgroundImage: null, 
        defaultListingTitle: "PrimaDonna Aromatic", 
        filterOptions: ['Trier par', 'Prix', 'Couleur'],
        productsPerPage: 3,
    };

    return (
        <>
        <div className="font-sans antialiased  bg-white mt-40">
            
            <ProductSection {...listingProps} />

        </div>
     </>
    );
};
