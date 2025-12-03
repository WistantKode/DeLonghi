'use client';

import React from 'react';
import ProductSection from '@/components/ProductSection';
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

    { 
        id: 11, 
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


export default function AccessoiresSimple() {
    
    const listingProps = {
        products: initialProducts,
        title: null, 
        subtitle: null,
        backgroundImage: null, 
        defaultListingTitle: "Accessoires", 
        filterOptions: ['Trier par', 'Prix'],
        productsPerPage: 10,
    };

    return (
        <div className="font-sans antialiased  bg-white mt-40">
            <ProductSection {...listingProps} />
        </div>
    );
};
