import React from 'react';
import ProductSection from '@/components/ProductSection'; 
import { getProducts } from '@/lib/getProducts';


export default async function DecouvrirAccessoires4() {
    const products = await getProducts({ type: "accessoire", series: "Bac à grain Rivelia" });
    
    const listingProps = {
        products: products,
        title: null, 
        subtitle: null,
        backgroundImage: null, 
        defaultListingTitle: "Édition spéciale Rivelia et « Venice Inspired » de bacs à grains", 
        filterOptions: ['Trier par','Prix','Couleur', 'Catégorie'],
        productsPerPage: 10,
    };

    return (
        <div className="font-sans antialiased  bg-white mt-40">
            <ProductSection {...listingProps} />
        </div>
    );
};
