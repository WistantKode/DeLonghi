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
            <div className="w-full px-4 lg:px-24">
                
                {/* Texte */}
                <div className="py-8 flex flex-col items-center justify-center text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                        {title}
                    </h2>
                    
                    <div className="text-gray-700 leading-relaxed max-w-4xl mx-auto">
                        {content.map((pContent, index) => (
                            <p key={index} 
                                className="text-base md:text-lg" 
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
        title: "Comment fonctionne une machine à café à grain avec broyeur ?",
        content: [
            `Cette machine à café entièrement automatique prépare des boissons café à partir de grains fraîchement moulus, d'une simple touche. Profitez de boissons lactées parfaites avec la technologie LatteCrema Hot : Cappuccino, Latte Macchiato... en toute simplicité. Personnalisez et enregistrez vos boissons préférées.`
        ],
        imageUrl: undefined,
        imageAlt: ""
    },
];

async function getProducts(): Promise<Product[]> {
    const res = await fetch('http://localhost:3000/api/products?type=expresso-broyeur');
    if (!res.ok) {
        throw new Error('Failed to fetch products');
    }
    return res.json();
}

export default async function ExpressoBroyeurs() {
    const products = await getProducts();
    
    const listingProps = {
        products: products,
        title: "Machines à café Expresso Broyeurs",
        defaultListingTitle: "Expresso Broyeurs", 
        subtitle: "Découvrez notre gamme d'expresso broyeurs et créez vos boissons café préférées. Vivez votre expérience café à la maison !.",
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
         <section className="w-full flex flex-col lg:flex-row px-4 lg:px-24 gap-10 lg:gap-20 mb-10">
               <div className="w-full lg:w-[60%]">
                  <Image src="/cafe/expresso1.avif" alt="Gamme machines" width={800} height={600} className="w-full h-auto object-cover" />
               </div>
               <div className="flex flex-col justify-center w-full lg:w-[40%] gap-4 text-center lg:text-left">
                  <h2 className="font-medium text-2xl lg:text-3xl text-[#0A2342] md">
                      Quel expresso broyeur est fait pour moi?
                  </h2>
                  <p className="text-base lg:text-lg text-gray-600">
                     Parmi les expresso broyeurs De Longhi, chacun peut trouver un modèle qui lui convient. Les modèles Magnifica sont parfaits pour tous ceux qui recherchent un expresso en toute simplicité. Avec Dinamica, vous pourrez découvrir une gamme plus large de boissons café et lactées. Avec Eletta Explore, laissez-vous surprendre par les boissons chaudes et froides et entrez dans le monde de la créativité. PrimaDonna est parfaite pour les personnes à la recherche d'une large gamme de boissons et d'un concentré de technologies.
                  </p>
               </div>
         </section>


         {/* SECTION 2 : TEXTE GAUCHE / IMAGE DROITE */}
         <section className="w-full flex flex-col-reverse lg:flex-row px-4 lg:px-24 gap-10 lg:gap-20 mt-10">
               <div className="flex flex-col justify-center w-full lg:w-[40%] gap-4 text-center lg:text-left">
                  <h2 className="font-medium text-2xl lg:text-3xl text-[#0A2342]">
                       Pourquoi choisir pour un expresso broyeur?
                  </h2>
                  <p className="text-base lg:text-lg text-gray-600">
                     Parmi les expresso broyeurs De Longhi, chacun peut trouver un modèle qui lui convient. Les modèles Magnifica sont parfaits pour tous ceux qui recherchent un expresso en toute simplicité. Avec Dinamica, vous pourrez découvrir une gamme plus large de boissons café et lactées. Avec Eletta Explore, laissez-vous surprendre par les boissons chaudes et froides et entrez dans le monde de la créativité. PrimaDonna est parfaite pour les personnes à la recherche d'une large gamme de boissons et d'un concentré de technologies.
                  </p>
               </div>

               <div className="w-full lg:w-[60%]">
                  <Image src="/cafe/expresso2.avif" alt="Choix machine" width={800} height={600} className="w-full h-auto object-cover" />
               </div>
         </section>

            <div className="flex flex-col px-6 lg:px-24 items-center text-center py-12 lg:py-20">
                  <h2 className="font-medium text-2xl lg:text-3xl text-[#0A2342]">
                       Comment choisir sa machine a café automatique ?
                  </h2>
                  <p className="text-base lg:text-lg pt-4 lg:pt-8 text-gray-600 max-w-4xl">
                     Qu'est-ce qui est le plus important pour vous lors du choix de votre machine à café ? Le design, l'interaction avec la machine (boutons, écran LCD, écran tactile...), la variété des boissons, la personnalisation... ou tout cela à la fois ?
                  </p>
            </div>

            {/* GRID SECTION */}
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-6 lg:px-24 gap-8 lg:gap-12">

                <div className="flex flex-col gap-4 items-center lg:items-start text-center lg:text-left">
                    <Image src="/cafe/expresso3.avif" alt="Design" width={400} height={300} className="w-full h-auto object-cover" />
                    <h3 className="font-medium text-xl text-[#0A2342]">
                       Le Design
                    </h3>
                    <p className="text-sm text-gray-600">
                        Chaque modèle a un design et des caractéristiques uniques. Il vous suffit de choisir celui qui convient le mieux à votre cuisine et à vos goûts. Le design est moderne, enrichi de détails chromés, 
                        peints ou métalliques. Mais l'ergonomie est également au centre des préoccupations : ces appareils ne sont pas seulement beaux, ils sont aussi faciles à utiliser.
                    </p>
                </div>

                <div className="flex flex-col gap-4 items-center lg:items-start text-center lg:text-left">
                    <Image src="/cafe/expresso4.avif" alt="Buse à lait" width={400} height={300} className="w-full h-auto object-cover" />
                    <h3 className="font-medium text-xl text-[#0A2342]">
                      Buse à lait
                    </h3>
                    <p className="text-sm text-gray-600">
                        Il existe deux systèmes lactés : manuel ou automatique. Si vous souhaitez réaliser vos boissons manuellement, comme un Barista, une buse vapeur vous suffit. 
                        En revanche, si vous souhaitez que tout soit automatique, il faut opter pour la technologie avec carafe dédiée. Cette technologie permet de réaliser toutes vos boissons lactées parfaites, d'une simple touche.
                    </p>
                </div>

                <div className="flex flex-col gap-4 items-center lg:items-start text-center lg:text-left">
                    <Image src="/cafe/expresso5.avif" alt="Choix boissons" width={400} height={300} className="w-full h-auto object-cover" />
                    <h3 className="font-medium text-xl text-[#0A2342]">
                       Choix de boissons à base de café
                    </h3>
                    <p className="text-sm text-gray-600">
                        Êtes-vous plutôt traditionnel (expresso, ristretto, café...), plutôt gourmand (cappuccino, latte macchiato...) ou curieux/créatif (cold brew, cappuccino glacé...). 
                        Tous nos expresso broyeurs réalisent les boissons dites "traditionnelles" mais si vous souhaitez aller plus loin, vous pouvez choisir un modèle avec des boissons gourmandes et créatives.
                    </p>
                </div>

                <div className="flex flex-col gap-4 items-center lg:items-start text-center lg:text-left">
                    <Image src="/cafe/expresso6.avif" alt="Interface" width={400} height={300} className="w-full h-auto object-cover" />
                    <h3 className="font-medium text-xl text-[#0A2342]">
                       Interface intuitive
                    </h3>
                    <p className="text-sm text-gray-600">
                      Du plus simple au plus sophistiqué, vous pouvez choisir l'interface qui vous convient le mieux : boutons mécaniques, panneau de commande tactile, 
                      écran LCD, écran couleur, écran couleur tactile... A vous de choisir !
                    </p>
                </div>

            </section>


            {/* NETTOYAGE ONE TOUCH */}
            <div className="flex flex-col gap-6 items-center mt-16 lg:mt-20 px-4">
                    <Image src="/cafe/expresso7.avif" alt="Nettoyage" width={500} height={400} className="max-w-full lg:max-w-lg h-auto" />
                    <div className="text-center max-w-2xl">
                        <h3 className="font-medium text-xl text-[#0A2342] mb-4">
                            Nettoyage automatique "One Touch"
                        </h3>
                        <p className="text-sm text-gray-600">
                            Chaque expresso broyeur De'Longhi vous demandera le même nettoyage : rincer l'infuseur amovible (qui se trouve dans la trappe derrière le réservoir d'eau) 
                            sous l'eau chaude et faire le détartrage (programme automatique). En revanche, si vous avez une buse vapeur, vous devez la nettoyer manuellement alors que 
                            si vous optez pour la technologie LatteCrema Hot avec carafe dédiée, elle se nettoie en profondeur grâce à un cycle automatique de rinçage (&#34;Clean").
                        </p>
                    </div>
            </div>

            {/* FINAL SECTION */}
            <section className="w-full flex flex-col lg:flex-row px-4 lg:px-24 gap-10 lg:gap-20 mt-20 mb-20">
               <div className="flex flex-col justify-center w-full lg:w-[40%] gap-4 text-center lg:text-left">
                  <h2 className="font-medium text-2xl lg:text-3xl text-[#0A2342]">
                  Quel est le meilleur système pour la mousse de lait?
                  </h2>
                  <p className="text-base lg:text-lg text-gray-600">
                     Choisissez le LatteCrema Hot pour une mousse dense et onctueuse en toute simplicité ou la buse vapeur pour exercer vos talents de Barista et faire du LatteArt.
                  </p>
               </div>

               <div className="w-full lg:w-[60%]">
                  <Image src="/cafe/expresso8.avif" alt="Mousse de lait" width={800} height={600} className="w-full h-auto object-cover" />
               </div>
            </section>


     </>
    );
};
