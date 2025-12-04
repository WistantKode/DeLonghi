import React from 'react';
import ProductSection from '@/components/ProductSection'; 
import { getProducts } from '@/lib/getProducts';


export default async function Promotion4() {
    const products = await getProducts();
    
    const listingProps = {
        products: products,
        defaultListingTitle: "Dedica Duo ", 
        title : null,
        subtitle: null,
        filterOptions: ['Trier par', 'Prix','Couleur', 'Série'],
        backgroundImage: null, 
        productsPerPage: 10,
    };

    return (
        <>
        <div className="font-sans antialiased mt-40">
            
            <ProductSection {...listingProps} />

          
        </div>


     </>
    );
};
