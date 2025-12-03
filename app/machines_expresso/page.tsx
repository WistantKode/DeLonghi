import React from 'react';
import Image from 'next/image';
import ProductSection from '@/components/ProductSection';
import { Product } from '@/types/product';

interface ContentBlockProps {
    title: string;
    content: string[];
    imageUrl?: string;
    imageAlt?: string;
}

const ContentBlock = ({ title, content, imageUrl, imageAlt }: ContentBlockProps) => {
    return (
        <div className="mb-12">
            <div className="w-full px-4 lg:px-32">
                
                {/* Texte */}
                <div className="py-8 flex flex-col items-center justify-center text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                        {title}
                    </h2>
                    
                    <div className="text-gray-700 leading-relaxed max-w-4xl mx-auto">
                        {content.map((pContent, index) => (
                            <p key={index} 
                                className="text-base md:text-lg mb-4" 
                                dangerouslySetInnerHTML={{ __html: pContent }} 
                            />
                        ))}
                    </div>
                </div>
            </div>

            {imageUrl && imageAlt && (
                <div className="w-full overflow-hidden my-8 px-4 lg:px-0">
                    <Image src={imageUrl} alt={imageAlt} width={1200} height={600} className='w-full h-auto object-cover rounded-lg lg:rounded-none' />
                </div>
            )}
        </div>
    );
};

const contentBlocks = [
    {
        title: "Comment fonctionne une machine à café percolateur?",
        content: [
            `La machine à café manuelle, comme son nom l'indique, est une machine dont le processus de préparation du café est mené par l'utilisateur. Le porte-filtre est rempli de café moulu, pressé fermement, serré dans le groupe d'extraction et infusé à une pression d'environ 9 bars. La méthode de préparation de l'expresso permet à l'arôme des grains de café de se développer pleinement, laissant apparaitre sa mousse emblématique sur l'espresso.`
        ],
        imageUrl: undefined,
        imageAlt: ""
    },
];

async function getProducts(): Promise<Product[]> {
    const res = await fetch('http://localhost:3000/api/products?type=machine-expresso-manuelle');
    if (!res.ok) {
        throw new Error('Failed to fetch products');
    }
    return res.json();
}

export default async function MachinesExpresso() {
    const products = await getProducts();
    
    const listingProps = {
        products: products,
        title: "Machines Expresso Manuelles",
        defaultListingTitle: "Machines Expresso", 
        subtitle: "Avec les machines à expressos, l'imagination n'a plus de limites lorsqu'il s'agit de préparer de délicieux cafés. Chaque tasse devient un chef-d'œuvre digne d'un véritable barista.",
        filterOptions: ['Trier par', 'Prix', 'Promotion', 'Couleur', 'Catégorie', 'Série', 'Type de boisson', 'Nettoyage'],
        backgroundImage: "/bg1.jpg", 
        productsPerPage: 4,
    };

    return (
        <>
        <div className="font-sans antialiased overflow-x-hidden">
            
            <ProductSection {...listingProps} />

            {contentBlocks.map((block, index) => (
                <ContentBlock 
                    key={index}
                    title={block.title}
                    content={block.content}
                    imageUrl={block.imageUrl}
                    imageAlt={block.imageAlt}
                />
            ))}
        </div>

         {/* SECTION 1 : IMAGE GAUCHE / TEXTE DROITE */}
         <section className="w-full flex flex-col lg:flex-row px-4 lg:pr-10 gap-10 lg:gap-30 mb-10">
               <div className="w-full lg:w-[60%]">
                  <Image src="/cafe/machines_expresso1.avif" alt="Meilleurs cafés" width={800} height={600} className="w-full h-auto object-cover" />
               </div>
               <div className="flex flex-col justify-center w-full lg:w-[40%] gap-4 text-center lg:text-left">
                  <h2 className="font-medium text-2xl lg:text-3xl text-[#0A2342]">
                       Quelle est la machine à café qui fait les meilleurs cafés ?
                  </h2>
                  <p className="text-base lg:text-lg text-gray-600">
                      Avec une machine manuelle, la préparation est effectuée par l'utilisateur, qui imite les gestes du barista. Avec les machines automatiques, la boisson finale est préparée par simple pression d'un bouton. Les deux machines peuvent produire de délicieux cafés, mais la différence de préparation réside dans l'approche personnelle de l'utilisateur.
                  </p>
               </div>
         </section>

            {/* TITRE SECTION 2 */}
            <div className="flex flex-col px-6 lg:px-30 items-center text-center py-12 lg:py-20">
                  <h2 className="font-medium text-2xl lg:text-3xl text-[#0A2342]">
                      Quelle machine expresso choisir ?
                  </h2>
                  <p className="text-base lg:text-lg pt-4 lg:pt-8 text-gray-600 max-w-4xl">
                     La gamme De'Longhi comprend des modèles aux caractéristiques et aux prix croissants. Découvrez la gamme complète et choisissez celle qui correspond le mieux à vos préférences. Les éléments à prendre en compte sont les matériaux et le design, la pression et le système de moussage du lait.
                  </p>
            </div>

            {/* GRILLE FEATURES */}
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-6 lg:px-24 gap-8 lg:gap-12 mb-12">

                <div className="flex flex-col gap-4 items-center lg:items-start text-center lg:text-left">
                    <Image src="/cafe/machines_expresso2.avif" alt="Finition" width={400} height={300} className="w-full h-auto object-cover" />
                    <h3 className="font-medium text-xl text-[#0A2342]">
                       Finition et Design
                    </h3>
                    <p className="text-sm text-gray-600">
                        Le design des machines à café manuelles s'inspire des modèles commerciaux que vous pouvez trouver dans vos bars/cafés préférés. 
                        Elles sont fabriquées en plastique ou en métal, et certaines sont peintes pour s'harmoniser avec le style intérieur de votre cuisine. 
                        Si l'espace est limité, la gamme comprend également des appareils plus compacts.
                    </p>
                </div>

                <div className="flex flex-col gap-4 items-center lg:items-start text-center lg:text-left">
                    <Image src="/cafe/machines_expresso3.avif" alt="Types de boissons" width={400} height={300} className="w-full h-auto object-cover " />
                    <h3 className="font-medium text-xl text-[#0A2342]">
                       Types de boissons
                    </h3>
                    <p className="text-sm text-gray-600">
                        Avec les machines à café manuelles De'Longhi, vous pouvez choisir entre des modèles qui préparent uniquement des expressos riches et crémeux 
                        ou découvrir des modèles plus avancés, tels que la gamme , qui offrent une plus grande variété de cafés et de boissons à base de lait, grâce 
                        à la technologie ColdBrew et au système De'Longhi de préparation automatique du lait.
                    </p>
                </div>

                <div className="flex flex-col gap-4 items-center lg:items-start text-center lg:text-left">
                    <Image src="/cafe/machines_expresso4.avif" alt="Pression" width={400} height={300} className="w-full h-auto object-cover " />
                    <h3 className="font-medium text-xl text-[#0A2342]">
                       Pression
                    </h3>
                    <p className="text-sm text-gray-600">
                        La pression est l'un des éléments qui déterminent une bonne extraction de l'expresso. D'autres éléments se conjuguent pour produire un résultat parfait :
                        la taille du broyeur, la pression du tassage, la température de l'eau et la quantité de café moulu.
                    </p>
                </div>

                <div className="flex flex-col gap-4 items-center lg:items-start text-center lg:text-left">
                    <Image src="/cafe/machines_expresso5.avif" alt="Moussage lait" width={400} height={300} className="w-full h-auto object-cover " />
                    <h3 className="font-medium text-xl text-[#0A2342]">
                       Système de moussage du lait
                    </h3>
                    <p className="text-sm text-gray-600">
                        Les machines à café manuelles sont équipées d'une buse à vapeur pour faire mousser le lait. Ces machines expresso haut de gamme sont équipées d'une buse à 
                        vapeur puissante, parfaite pour créer la mousse soyeuse nécessaire à la préparation des boissons de type "latte art". Certains modèles sont équipés du 
                        LatteCrema : un système de moussage automatique qui mélange la vapeur, l'air et le lait dans les proportions idéales pour créer une mousse parfaite qui 
                        est versée directement de la carafe à la tasse.
                    </p>
                </div>

            </section>

            {/* SECTION FINALE : TEXTE GAUCHE / IMAGE DROITE (Sur Desktop) */}
            <section className="w-full flex flex-col lg:flex-row px-4 lg:pl-10 gap-10 lg:gap-30 mt-20 mb-20">
               <div className="flex flex-col justify-center w-full lg:w-[40%]  gap-4 text-center lg:text-left">
                  <h2 className="font-medium text-2xl lg:text-3xl text-[#0A2342]">
                     Quelle machine à café manuelle pour les débutants ?
                  </h2>
                  <p className="text-base lg:text-lg text-gray-600">
                      Les débutants peuvent commencer leur expérience de préparation du café avec une machine manuelle moins sophistiquée. À cet égard, la gamme Dedica peut être un bon compromis. Si vous avez plus d'expérience dans la préparation des expressos, vous pouvez opter pour une machine à porte-filtre plus avancée,  dotée de réglages plus précis et plus nombreux, comme celle de la gamme "La Specialista".
                  </p>
               </div>

               <div className="w-full lg:w-[60%] ">
                  <Image src="/cafe/machines_expresso6.avif" alt="Débutants" width={800} height={600} className="w-full h-auto object-cover" />
               </div>
            </section>


     </>
    );
};
