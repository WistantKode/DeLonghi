import React from 'react';
import ProductSection from '@/components/ProductSection';
import { getProducts } from '@/lib/getProducts';


export default async function AccessoiresSimple() {
    const products = await getProducts();
    
    const listingProps = {
        products: products,
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
