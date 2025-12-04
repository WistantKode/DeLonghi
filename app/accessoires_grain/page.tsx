import React from 'react';
import ProductSection from '@/components/ProductSection';
import { getProducts } from '@/lib/getProducts';


export default async function AccessoiresGrain() {
    const products = await getProducts();
    
    const listingProps = {
        products: products,
        defaultListingTitle: "Grains de café", 
        title : "Café en grain",
        subtitle: "Découvrez nos cafés De'Longhi pour une expérience Perfetto, du grain à la tasse.",
        filterOptions: ['Trier par', 'Prix'],
        backgroundImage: "/cafe/decouvrir_cafe6_5.avif", 
        productsPerPage: 10,
    };

    return (
        <div className="font-sans antialiased  bg-white">
            <ProductSection {...listingProps} />
        </div>
    );
};
