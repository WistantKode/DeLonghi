import React from 'react';
import ProductSection from '@/components/ProductSection';
import { getProducts } from '@/lib/getProducts';


export default async function AccessoiresDetartrant() {
    const products = await getProducts({ type: "accessoire", series: "Détartrant et filtre" });
    
    const listingProps = {
        products: products,
        title: null, 
        subtitle: null,
        backgroundImage: null, 
        defaultListingTitle: "Détartrants et filtres à eau", 
        filterOptions: ['Trier par', 'Promotion', 'Prix'],
        productsPerPage: 10,
    };

    return (
        <div className="font-sans antialiased  bg-white mt-40">
            <ProductSection {...listingProps} />
        </div>
    );
};
