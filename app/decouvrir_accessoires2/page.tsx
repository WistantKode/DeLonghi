import React from 'react';
import ProductSection from '@/components/ProductSection'; 
import { getProducts } from '@/lib/getProducts';


export default async function DecouvrirAccessoires2() {
    const products = await getProducts({ type: "accessoire", series: "Carafe à lait" });
    
    const listingProps = {
        products: products,
        defaultListingTitle: "Pichets à lait automatiques", 
        title : <>Une machine à café, <br /> plusieurs carafes</>,
        subtitle: <>Profitez de la liberté offerte par les carafes à lait - parfaites pour les familles ou <br /> pour tous ceux qui aiment la variété. Conservez le lait animal ou les boissons <br /> végétales au réfrigérateur, prêts à être utilisés à tout moment. </>,
        filterOptions: ['Trier par', 'Prix'],
        backgroundImage: "/cafe/decouvrir_cafe6_5.avif", 
        productsPerPage: 10,
    };

   return (
      <>
        <div className="font-sans antialiased">
            
            <ProductSection {...listingProps} />

          
        </div>


     </>
    );
};
