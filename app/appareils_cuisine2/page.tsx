import React from 'react';
import ProductSection from '@/components/ProductSection'; 
import { getProducts } from '@/lib/getProducts';


export default async function AppareilsCuisine2() {
    const products = await getProducts({ type: "appareil-cuisine", series: "Roto Fry" });
    
    const listingProps = {
        products: products,
        defaultListingTitle: "Friteuses", 
        title : null,
        subtitle: null,
        filterOptions: ['Trier par', 'Prix', 'Promotion', 'Couleur', 'Série'],
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
