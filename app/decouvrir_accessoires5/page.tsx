import React from 'react';
import ProductSection from '@/components/ProductSection'; 
import { getProducts } from '@/lib/getProducts';


export default async function DecouvrirAccessoires5() {
    const products = await getProducts();
    
    const listingProps = {
        products: products,
        title: null, 
        subtitle: null,
        backgroundImage: null, 
        defaultListingTitle: "Moulins à café ", 
        filterOptions: ['Trier par','Prix','Couleur', 'Catégorie'],
        productsPerPage: 10,
    };

    return (
        <div className="font-sans antialiased  bg-white mt-40">
            <ProductSection {...listingProps} />
        </div>
    );
};
