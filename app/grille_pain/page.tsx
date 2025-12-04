import React from 'react';
import ProductSection from '@/components/ProductSection'; 
import { getProducts } from '@/lib/getProducts';


export default async function GrillePain() {
    const products = await getProducts();
    
    const listingProps = {
        products: products,
        defaultListingTitle: "Grille pains", 
        title : null,
        subtitle: null,
        filterOptions: ['Trier par', 'Prix', 'Promotion', 'Couleur','Série'],
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
