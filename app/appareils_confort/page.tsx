import React from 'react';
import ProductSection from '@/components/ProductSection'; 
import { getProducts } from '@/lib/getProducts';


export default async function AppareilsConfort() {
    const products = await getProducts();
    
    const listingProps = {
        products: products,
        defaultListingTitle: "Confort", 
        title : null,
        subtitle: null,
        filterOptions: ['Trier par', 'Prix', 'Promotion', 'Couleur', 'Catégorie', 'Série'],
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
