import React from 'react';
import ProductSection from '@/components/ProductSection'; 
import { getProducts } from '@/lib/getProducts';


export default async function Bouilloire() {
    const products = await getProducts({ type: "bouilloire-grille-pain", series: "Icona Capitals" });
    
    const listingProps = {
        products: products,
        defaultListingTitle: "Bouilloires", 
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
