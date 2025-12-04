import React from 'react';
import ProductSection from '@/components/ProductSection';
import { getProducts } from '@/lib/getProducts';

export default async function PromoHallo() {
    const products = await getProducts({ status: 'PROMO' });
    
    const listingProps = {
        products: products,
        title: <>Ne manquez pas les offres <br /> d&apos;Halloween!</>,
        defaultListingTitle: "De'Longhi promotions d'Halloween", 
        listingPreTitle:"Les images sont fournies à titre indicatif uniquement, les stocks peuvent varier ou être épuisés. La promotion est valable jusqu'au 02.11 sur une sélection de produits et ne peut être cumulée avec d'autres promotions en cours.",
        subtitle:<>15% de réduction avec le code <strong>SCARYSALES</strong> </>,
        backgroundImage: "/bg1.jpg", 
        productsPerPage: 8,
    };

    return (
        <>
        <div className="font-sans antialiased">
            
            <ProductSection {...listingProps} />

        </div>


     </>
    );
};
