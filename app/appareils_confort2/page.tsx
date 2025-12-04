import React from 'react';
import ProductSection from '@/components/ProductSection'; 
import { getProducts } from '@/lib/getProducts';


export default async function AppareilsConfort2() {
    const products = await getProducts({ type: "appareil-confort", series: "Tasciugo AriaDry" });
    
    const listingProps = {
        products: products,
        defaultListingTitle: "Déshumidificateurs", 
        title : <>Gamme de <br /> déshumidificateurs <br /> De&apos;Longhi </>,
        subtitle: <> Les déshumidificateurs De&apos;Longhi éliminent l&apos;humidité excessive de l&apos;air, <br /> résolvant ainsi tous les problèmes liés à l&apos;humidité et vous permettant, à vous et à votre famille, <br /> de profiter d&apos;une maison confortable tout au long de l&apos;année.  </>,
        filterOptions: ['Trier par', 'Prix', 'Couleur'],
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
