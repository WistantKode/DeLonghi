import React from 'react';
import ProductSection from '@/components/ProductSection'; 
import { getProducts } from '@/lib/getProducts';


export default async function Rivelia() {
    const products = await getProducts();
    
    const listingProps = {
        products: products,
        title: null, 
        subtitle: null,
        backgroundImage: null, 
        defaultListingTitle: "Rivelia", 
        filterOptions: ['Trier par', 'Prix', 'Promotion', 'Couleur'],
        productsPerPage: 8,
    };

    return (
        <>
        <div className="font-sans antialiased  bg-white mt-40">
            
            <ProductSection {...listingProps} />

        </div>
     </>
    );
};
