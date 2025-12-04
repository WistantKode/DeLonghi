import React from 'react';
import ProductSection from '@/components/ProductSection';
import { getProducts } from '@/lib/getProducts';


export default async function MachinesCapsules() {
    const products = await getProducts();
    
    const listingProps = {
        products: products,
        title: "Machines à café à capsules",
        defaultListingTitle: "Machines à café à capsules", 
        subtitle: "Découvrez notre sélection de machines à café à capsules pour un café rapide et délicieux.",
        filterOptions: ['Trier par', 'Prix', 'Promotion', 'Couleur', 'Catégorie', 'Série', 'Type de boisson', 'Nettoyage'],
        backgroundImage: "/bg1.jpg", 
        productsPerPage: 4,
    };

    return (
        <div className="font-sans antialiased overflow-x-hidden">
            <ProductSection {...listingProps} />
        </div>
    );
};
