import React from 'react';
import ProductSection from '@/components/ProductSection'; 
import { getProducts } from '@/lib/getProducts';


export default async function PrimaDonna() {
    const products = await getProducts();
    
    const listingProps = {
        products: products,
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
