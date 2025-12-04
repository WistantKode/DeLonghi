import React from 'react';
import Hero from '@/components/Hero';
import Link from 'next/link';
import Image from 'next/image';
import { getProducts } from '@/lib/getProducts'; // Import Product interface

interface ProductCardProps {
    product: Product; // Now accepts a Product object
    isLarge?: boolean;
    hidePadding?: boolean;
    isHorizontal?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, isLarge = false, hidePadding = false, isHorizontal = false }) => {
    const heightClass = isLarge ? 'h-full' : 'h-44 sm:h-52';
    const textClass = isLarge ? 'text-xl mt-4' : 'text-lg mt-2';
    const paddingClass = hidePadding ? 'p-0' : 'p-4';
    const cardBgColor = 'bg-gray-200'; 

    const cardDirection = isHorizontal ? 'flex flex-col sm:flex-row' : 'flex flex-col';
    const imageContainerClasses = isHorizontal 
        ? 'flex-shrink-0 w-full sm:w-1/2 h-44 sm:h-full flex justify-center items-center p-4' 
        : `relative flex flex-col justify-center items-center ${heightClass} ${paddingClass}`;
    const textContainerClasses = isHorizontal 
        ? 'flex-grow p-4 sm:p-6 flex flex-col justify-center items-start text-left' 
        : `text-center pt-2 ${isLarge ? 'pb-4' : 'pb-6'}`;
    const nameTextClass = isHorizontal ? 'text-2xl mt-0' : textClass;
    
    const priceDisplay = isHorizontal ? 'sm:mt-auto' : 'mt-2';
    
    return (
        <Link href={product.link || '#'} className={`group block ${cardBgColor} overflow-hidden transition duration-300 ease-in-out h-full ${cardDirection}`}>
            <div className={imageContainerClasses}>
                <Image
                    src={product.image}
                    alt={product.name}
                    width={isLarge ? 500 : 300}
                    height={isLarge ? 500 : 300}
                    className="object-contain max-h-full w-full transform transition-transform duration-500 ease-in-out group-hover:scale-105"
                />
            </div>
            
            <div className={textContainerClasses}>
                <p className="text-xs font-bold text-gray-400 mb-1">{product.series}</p>
                <h3 className={`font-semibold text-gray-900 ${nameTextClass} font-serif`}>{product.name}</h3>
                
                {product.price && (
                    <div className={`${priceDisplay}`}>
                        <p className="text-xl mt-2">{product.price}</p>
                        {/* Assuming product.oldPrice is the "Prix le plus bas 30 derniers jours" for refurbished */}
                        {product.oldPrice && <p className="text-xs text-gray-500 mt-1">{product.oldPrice} Prix le plus bas 30 derniers jours</p>}
                    </div>
                )}
            </div>
        </Link>
    );
};

async function getRefurbishedProducts(): Promise<Product[]> {
    // Assuming "reconditionné" is a status or a specific type for refurbished products
    // For now, we'll fetch all and filter by status if available, or just use a subset.
    const res = await fetch('http://localhost:3000/api/products'); // Fetch all products
    if (!res.ok) {
        throw new Error('Failed to fetch products');
    }
    const allProducts: Product[] = await res.json();
    // Filter for products that might be considered "refurbished" based on status or other criteria
    // This is a placeholder logic, adjust based on actual data structure for refurbished items
    return allProducts.filter(p => p.status === "RECONDITIONNÉ" || p.name.includes("Reconditionné"));
}

export default async function Refurbished() {
    const refurbishedProducts = await getRefurbishedProducts();

    const customBlueButton = 'bg-[#266BBF] text-white hover:bg-[#8bb1e0]';
    const coffeeMachineStyle = {
        backgroundImage: 'url("/bg1.jpg")', 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };
    const btn = 'w-120'

    // Map fetched products to the specific layout of this page
    // This part needs careful mapping based on what products are actually "large", "medium", "small"
    const largeProduct = refurbishedProducts.find(p => p.series === "ECAM23.466.S") || refurbishedProducts[0];
    const mediumProduct = refurbishedProducts.find(p => p.series === "ECAM23.460.B") || refurbishedProducts[1];
    const smallProduct1 = refurbishedProducts.find(p => p.series === "ECAM23.260.B") || refurbishedProducts[2];
    const smallProduct2 = refurbishedProducts.find(p => p.series === "ECAM370.70.BB") || refurbishedProducts[3];
    
    // Fallback if not enough products or specific series not found
    const displayProducts = [largeProduct, mediumProduct, smallProduct1, smallProduct2].filter(Boolean) as Product[];


    return (
        <div className="w-full overflow-x-hidden font-sans antialiased">
            <Hero 
                title={<>Reconditionner, <br /> Réutiliser, Réduire notre <br /> impact</>}
                subtitle={<>Découvrez les produits reconditionnés par De&apos;Longhi et économisez jusqu&apos;à 45 %.</>}
                ctaText="Expressos broyeurs automatiques reconditionnés"
                ctaLink=""
                videoUrl="/cafe/video_cafe12.webm"
                textColor='text-black' 
                btnColor={customBlueButton}
                btnWidth={btn}
            />

            {/* TEXTE CENTRÉ 1 */}
            <div className="flex flex-col px-6 lg:px-32 items-center text-center py-12 lg:py-20">
                  <h2 className="font-medium text-2xl lg:text-3xl text-[#0A2342]">
                      De&apos;Longhi Renova: pourquoi choisir un produit reconditionné ?
                  </h2>
                  <p className="text-base lg:text-lg pt-4 lg:pt-8 max-w-4xl text-gray-700">
                      Dans un monde où la consommation est devenue excessive, choisir des produits reconditionnés représente un choix conscient et responsable. Votre produit reconditionné sera soigneusement livré dans un état impeccable, vous offrant ainsi la possibilité de savourer des instants café tout en réalisant des économies pouvant atteindre jusqu&apos;à 45%. Un bonheur quotidien pour vous, tout en apportant un soutien concret à notre planète. Faites le choix du renouveau, alliez qualité, économie et responsabilité environnementale
                  </p>
            </div>

            {/* TEXTE CENTRÉ 2 */}
            <div className="flex flex-col px-6 lg:px-32 items-center text-center py-10">
                  <h2 className="font-medium text-2xl lg:text-3xl uppercase text-[#0A2342]">
                      RECONDITIONNÉ À LA PERFECTION
                  </h2>
            </div>

            {/* SECTION 1: CARACTÉRISTIQUES (GRILLE) */}
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:px-20 gap-8 lg:gap-12 mb-12">

                <div className="flex flex-col gap-4">
                    <Image src="/cafe/decouvrir_cafe3.avif" alt="Savourez votre café Perfetto" width={400} height={300} className="w-full h-auto object-cover" />
                    <h3 className="font-medium text-xl text-[#0A2342]">
                        Savourez votre café Perfetto, du grain à la tasse
                    </h3>
                    <p className="text-sm text-gray-700">
                        Assurez-vous d&apos;extraire parfaitement tous les arômes de vos cafés préférés grâce à la technologie Bean Adjust. 
                        Vous pouvez facilement adapter les réglages pour préserver et révéler tous les arômes, quelle que soit votre variété de café préférée.
                    </p>
                </div>

                <div className="flex flex-col gap-4">
                    <Image src="/cafe/decouvrir_cafe3_1.avif" alt="Préparez votre café à emporter" width={400} height={300} className="w-full h-auto object-cover" />
                    <h3 className="font-medium text-xl text-[#0A2342]">
                        Préparez votre café à emporter
                    </h3>
                    <p className="text-sm text-gray-700">
                        Emportez votre boisson partout avec vous en choisissant parmi trois tailles de café (jusqu&apos;à 47 cl) : 
                        la fonction To-Go avec plateau ajustable est conçue pour remplir parfaitement votre tasse de voyage préférée.
                    </p>
                </div>

                <div className="flex flex-col gap-4">
                    <Image src="/cafe/decouvrir_cafe3_2.avif" alt="Boissons végétales parfaites" width={400} height={300} className="w-full h-auto object-cover" />
                    <h3 className="font-medium text-xl text-[#0A2342]">
                        Savourez des boissons végétales parfaites
                    </h3>
                    <p className="text-sm text-gray-700">
                        Dégustez une mousse riche et crémeuse, y compris pour des boissons végétales*. Que vous souhaitiez une boisson 
                        chaude ou froide, Eletta Explore permet d’obtenir un goût et une texture exceptionnels, à chaque fois.
                    </p>
                </div>

                <div className="flex flex-col gap-4">
                    <Image src="/cafe/decouvrir_cafe3_3.avif" alt="Une machine propre sans effort" width={400} height={300} className="w-full h-auto object-cover" />
                    <h3 className="font-medium text-xl text-[#0A2342]">
                        Une machine propre sans effort
                    </h3>
                    <p className="text-sm text-gray-700">
                       La grille égouttoir et la carafe à lait étant amovibles et compatibles avec le lave-vaisselle, il est très 
                       simple de garder votre Eletta Explore parfaitement propre.
                    </p>
                </div>

            </section>
           
            {/* TEXTE CENTRÉ 3 */}
            <div className="flex flex-col px-6 lg:px-32 items-center text-center py-12 lg:py-20">
                  <h2 className="font-medium text-2xl lg:text-3xl text-[#0A2342]">
                      La qualité garantie par De&apos;Longhi
                  </h2>
                  <p className="text-base lg:text-lg pt-4 lg:pt-8 max-w-4xl text-gray-700">
                      Nous vous garantissons la qualité De&apos;Longhi pour chacun de nos produits remis en état.
                  </p>
            </div>

            {/* SECTION 2: GRILLE PRODUITS SHOWCASE */}
            <a id="produits-refurbished" className="block -mt-20 pt-20"></a>
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 h-auto">
                    
                    {/* Colonne 1 : La Grande Carte */}
                    <div className="lg:col-span-1 h-auto min-h-[500px] lg:min-h-[700px]">
                        {displayProducts[0] && <ProductCard product={displayProducts[0]} isLarge={true} />}
                    </div>

                    {/* Colonne 2 : La Grille 1x2 + 2x1 */}
                    <div className="lg:col-span-1 grid grid-rows-2 gap-4 h-auto min-h-[500px] lg:min-h-[700px]">
                        
                        {/* Carte Horizontale */}
                        <div className="row-span-1 h-auto min-h-[250px] lg:min-h-0"> 
                            {displayProducts[1] && <ProductCard product={displayProducts[1]} isHorizontal={true} />}
                        </div>

                        {/* 2 Petites Cartes (alignées horizontalement sur mobile aussi) */}
                        <div className="row-span-1 flex flex-col sm:flex-row gap-4 h-auto min-h-[250px] lg:min-h-0">
                            <div className="flex-1 h-full min-h-[250px] sm:min-h-0">
                                {displayProducts[2] && <ProductCard product={displayProducts[2]} />}
                            </div>
                            
                            <div className="flex-1 h-full min-h-[250px] sm:min-h-0">
                                {displayProducts[3] && <ProductCard product={displayProducts[3]} />}
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            
            {/* SECTION 3 : CHOIX RESPONSABLE (Texte Gauche, Image Droite) */}
            <section className="w-full flex flex-col lg:flex-row gap-8 lg:gap-16 mt-16 lg:px-20">

                <div className="flex flex-col justify-center w-full lg:w-1/2 gap-6 lg:pr-6">
                
                    <h2 className="font-medium text-2xl lg:text-3xl text-[#0A2342]">
                        Ensemble, faisons des choix plus responsables
                    </h2>
                    <p className="text-base lg:text-lg text-gray-700">
                        Nous pensons que les grands changements commencent par de petites actions, c&apos;est pourquoi nous avons décidé de vous offrir la possibilité d&apos;acheter des produits reconditionnés. Cela nous permet de conserver des ressources précieuses au lieu de les détruire.Nous pouvons tous jouer un rôle dans la création d&apos;un avenir plus durable
                    </p>

                </div>

                <div className="w-full lg:w-1/2 flex items-center justify-center">
                    <Image src="/cafe/refur5.avif" alt="Choix responsable" width={800} height={600} className="w-full h-auto object-cover" /> 
                </div>


            </section>

            {/* SECTION 4 : COFFEE LOUNGE (Image Gauche, Texte Droite) */}
            <section className="w-full flex flex-col-reverse lg:flex-row gap-8 lg:gap-16 mt-16 lg:px-20">
                <div className="w-full lg:w-1/2 flex items-center justify-center">
                    <Image src="/cafe/refur6.avif" alt="Coffee Lounge" width={800} height={600} className="w-full h-auto object-cover" /> 
                </div>

                <div className="flex flex-col justify-center w-full lg:w-1/2 gap-6 lg:pr-6">

                    <h2 className="font-medium text-2xl lg:text-3xl text-[#0A2342]">
                        Si vous êtes un véritable amateur de café...
                    </h2>
                    <p className="text-base lg:text-lg text-gray-700">
                        ... rejoignez le Coffee Lounge, un lieu unique où nous célébrons la culture du café et inspirons les gens à faire des choix plus responsables en matière de café chaque jour.
                    </p>
                    

                </div>

            </section>

            {/* SECTION 5 : BANDEAU CTA */}
            <section className="relative w-full overflow-hidden p-10 mt-20" style={coffeeMachineStyle}>
                <div className="absolute inset-0 bg-gray-900 opacity-40"></div>
                
                    <div className="relative max-w-7xl mx-auto px-4 flex flex-col justify-center">
                        <div className="text-white"> 
                            
                            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold font-serif leading-tight mb-6">
                                Adopter une attitude <br />responsable
                            </h2>
                            
                            <p className="text-base mb-8">
                                ...et découvrez notre sélection de produits reconditionnés
                            </p>

                           <Link href="#produits-refurbished"> 
                               <button className={`py-3 px-8 font-semibold cursor-pointer rounded-full w-fit ${customBlueButton}`}>
                                  Expressos broyeurs automatiques reconditionnés
                               </button>
                            </Link>
                        </div>
                    </div>
            </section>

            {/* SECTION 6 : CTA FINAL */}
            <section className="w-full mt-10 lg:px-32">
             <div className="flex flex-col items-center max-w-4xl mx-auto">
                 <span className="text-gray-500 font-medium uppercase tracking-wider text-sm">
                     VOTRE CHOIX PERFETTO
                 </span>
                 <h2 className="font-medium text-3xl sm:text-5xl lg:text-6xl text-center pt-6 pb-6 text-[#0A2342]">
                     Découvrez la gamme complète des expresso broyeurs automatiques
                 </h2>
                 <p className="text-base lg:text-lg pb-10 text-center text-gray-700 max-w-2xl">
                     Un large éventail d’options pour tous les goûts en matière de café
                 </p>

                 <button className="font-bold rounded-full px-8 py-3 mb-20 bg-[#266BBF] hover:bg-[#9fb9de] cursor-pointer text-white transition-colors">
                     Découvrez le vôtre
                 </button>
             </div>
           </section>


        </div>
    );
};
