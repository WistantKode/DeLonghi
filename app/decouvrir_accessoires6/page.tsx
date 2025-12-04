import React from 'react'; 
import Image from 'next/image';
import ProductDescriptionSection from '@/components/ProductDescriptionSection'; 
import { getProducts } from '@/lib/getProducts';

async function getProduct(): Promise<Product | null> {
    const res = await fetch('http://localhost:3000/api/products?type=accessoire&series=La Specialista');
    if (!res.ok) {
        console.error('Failed to fetch product');
        return null;
    }
    const products: Product[] = await res.json();
    return products.length > 0 ? products[0] : null; // Return the first product found
}

export default async function DecouvrirAccessoires6() {
    const productData = await getProduct();

    if (!productData) {
        return <div className="text-center py-12">Produit non trouvé.</div>;
    }
    
    return (
        <div className="font-sans antialiased text-gray-800 bg-white mt-24 lg:mt-40 overflow-x-hidden">
            
            <ProductDescriptionSection product={productData} />
            
            {/* Modif: Flex-col sur mobile, row sur desktop. Suppression des largeurs vw fixes */}
            <section className="w-full flex flex-col lg:flex-row gap-10 px-6 lg:px-20 mt-20 mb-20">
              

                <div className="flex flex-col justify-center w-full lg:w-1/2 gap-4 lg:pr-6">
                    
                    <p className="text-lg">
                        Fabriqué en acier inoxydable haute qualité et doté d’un manche joliment conçu en bois de rose, il est pensé pour durer pour les baristas à domicile et les amateurs de café. 
                        La construction sans fond permet d’observer clairement l’extraction afin de perfectionner vos tasses de café.
                    </p>
                    <ul className="list-disc pl-8 text-gray-700 space-y-1 text-lg">
                        <li className="">Acier inoxydable haute qualité (AISI304) et poignée en bois de rose.</li>
                        <li className="">Porte-filtre 51 mm avec panier double offrant polyvalence et précision. Associez-le aux tampons De’Longhi pour une configuration idéale de l’expresso.</li>
                        <li className="">Compatible avec tous les modèles de la gamme La Specialista.</li>
                    </ul>
                    

                </div>

                <div className="w-full lg:w-1/2 flex justify-center">
                        <Image src="/accessoires/decouvrir6_5.avif" alt="" width={800} height={600} className="w-full h-auto object-cover" /> 
                </div>

            </section>
            
           

        </div>
    );
};
