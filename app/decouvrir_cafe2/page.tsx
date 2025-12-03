import React from 'react';
import Hero from '@/components/Hero';
import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/types/product'; // Import Product interface
import InteractiveYoutubePlayer from '@/components/shared/InteractiveYoutubePlayer'; // Import the new Client Component

interface MachineCardProps {
    product: Product; // Now accepts a Product object
    ctaText: string;
}

const MachineCard: React.FC<MachineCardProps> = ({ product, ctaText }) => {
    return (
        <div className="flex flex-col h-full p-4">
            <div className="w-full max-w-[300px] sm:max-w-[350px] mx-auto mb-6">
                <Image src={product.image} alt={`Machine à café ${product.name}`} width={350} height={350} className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300" />
            </div>
            
            <div className="flex flex-col items-center flex-grow">
                
                <h3 className="font-bold text-xl text-gray-900 min-h-[30px] flex items-center justify-center text-center mb-2">
                    {product.name}
                </h3>
                
                <p className="text-center text-sm text-gray-600 flex-grow mb-6 px-4">
                    {product.subtitle || (product.features ? product.features.join('. ') : '')} {/* Use subtitle or concatenated features for description */}
                </p>
                
                <button className="w-full max-w-[300px] py-3 px-4 flex justify-center items-center text-center text-sm font-bold text-white rounded-full cursor-pointer transition duration-300 bg-[#0A2342] border-2 border-[#0A2342] hover:text-[#0A2342] hover:bg-white">
                    {ctaText}
                </button>
            </div>
        </div>
    );
};

async function getProducts(): Promise<Product[]> {
    const res = await fetch('http://localhost:3000/api/products'); // Fetch all products for now
    if (!res.ok) {
        throw new Error('Failed to fetch products');
    }
    return res.json();
}

export default async function DecouvrirCafe2() {

    const allProducts = await getProducts();

    const whiteButtonWithGrayText = 'bg-white text-gray-700 hover:bg-gray-300';
    
    const coffeeMachineStyle = {
        backgroundImage: 'url("/bg1.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    const youtubeUrl = "https://youtu.be/Hb6H3Ms70PU"; // Example URL, adjust if needed
    const videoId = "Hb6H3Ms70PU"; // Example Video ID, adjust if needed
    const youtubeChannelUrl = "https://www.youtube.com/@delonghifrance"; 

    // Manually map fetched products to the structure needed for MachineCard
    const featuredMachinesData = [
        { series: "Rivelia", ctaText: "Rivelia avec la technologie LatteCrema Hot" },
        { series: "Eletta Explore", ctaText: "Eletta Explore avec mousseur à lait manuel" }, // Corrected CTA text
    ];

    const featuredMachines = featuredMachinesData.map(item => {
        const product = allProducts.find(p => p.series === item.series);
        return product ? { product, ctaText: item.ctaText } : null;
    }).filter(Boolean) as { product: Product; ctaText: string }[];


    return (
        <div className="w-full overflow-x-hidden">
            
            {/* HERO 1: Le Hero gère maintenant lui-même le responsive (stack mobile / overlay desktop) */}
            <Hero 
                tagline="Rivelia"
                title={<>Passez à l&apos;expérience  <br className="hidden lg:block"/> d&apos;un café Perfetto</>}
                subtitle={<>Découvrez le monde infini des saveurs et des arômes du café en grain avec <br className="hidden lg:block"/> Rivelia, l&apos;expresso broyeur qui transforme votre café en une expérience unique.</>}
                ctaText="Choisissez Perfetto"
                videoUrl="/cafe/video_cafe1.webm"
                textColor='text-white' 
                contentPosition="right"
                btnColor={whiteButtonWithGrayText}
                border = "border border-gray-200"
            />

            {/* SECTION 1: VIDEO GAUCHE / TEXTE DROITE */}
            <section className="w-full flex flex-col lg:flex-row px-4 lg:pr-15 lg:pl-20 mt-10 mb-20 gap-10 lg:gap-0">
                
                {/* Bloc Vidéo */}
                <div className="w-full lg:w-1/2">
                   <video autoPlay loop muted playsInline className="w-full h-auto " >
                      <source src="/cafe/video_cafe.webm" type="video/webm" /> 
                   </video>
                </div>

                {/* Bloc Texte */}
                <div className="flex flex-col justify-center w-full lg:w-1/2 gap-4 lg:pl-20 text-center lg:text-left">
                    <span className="text-gray-500 font-medium tracking-widest text-xs uppercase">
                        SYSTÈME BEAN SWITCH
                    </span>
                    <h2 className="font-serif font-medium text-2xl lg:text-3xl text-[#0A2342]">
                        Envie de partir à l&apos;aventure ? Passez à la vitesse supérieure
                    </h2>
                    <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
                        Profitez d&apos;une expérience café Perfetto unique grâce au système innovant Bean Switch de Rivelia : essayez facilement différentes variétés de grains et découvrez leurs saveurs uniques en passant sans effort d&apos;un bac à grains interchangeable à l&apos;autre.
                    </p>
                </div>
            </section>


            {/* SECTION 2: TEXTE GAUCHE / IMAGE DROITE */}
            {/* On utilise flex-col-reverse sur mobile pour mettre l'image au dessus du texte si souhaité, sinon flex-col met le texte au dessus */}
            <section className="w-full flex flex-col-reverse lg:flex-row px-4 lg:px-20 gap-10 lg:gap-32 mb-20">
              
              {/* Bloc Texte */}
              <div className="flex flex-col justify-center w-full lg:w-1/2 gap-4 text-center lg:text-left">
                <span className="text-gray-500 font-medium tracking-widest text-xs uppercase">
                    L&apos;EXCELLENCE EN MATIÈRE DE CONCEPTION ET D&apos;INNOVATION
                </span>
                <h2 className="font-serif font-medium text-2xl lg:text-3xl text-[#0A2342]">
                    Sublimez votre intérieur
                </h2>
                <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
                    Pour vous qui désirez exprimer votre style dans les moindres détails. Rivelia, avec son design révolutionnaire et son interface intuitive centrée sur l&apos;utilisateur, a remporté 3 prestigieux iF Design Awards dans les catégories Design de produit, Expérience utilisateur et Interface utilisateur.
                </p>

                <button className="border border-gray-400 font-bold rounded-full px-6 py-3 bg-white hover:bg-[#0A2342] cursor-pointer hover:text-white hover:border-transparent transition duration-300 w-fit mx-auto lg:mx-0">
                    Choisissez votre Rivelia
                </button>
              </div>

              {/* Bloc Image */}
              <div className="w-full lg:w-1/2">
                  <Image src="/cafe/decouvrir_cafe2.avif" alt="Rivelia Design" width={800} height={600} className="w-full h-auto " /> 
              </div>
            </section>

            {/* HERO 2 (Ecran Tactile) */}
            <Hero 
                tagline="ECRAN TACTILE"
                title={<>L&apos;expérience personnalisée d&apos;un café Perfetto</>}
                subtitle={<>Laissez-vous séduire par un délicieux moment café. <br className="hidden lg:block"/>Vous n&apos;auriez qu&apos;à faire glisser votre doigt sur son écran tactile intuitif couleur de 3,5 pouces aux animations immersives pour que Rivelia vous accompagne des grains à votre tasse parfaite. <br className="hidden lg:block"/>Avec jusqu&apos;à 4 profils d&apos;utilisateurs, vous pouvez créer vos menus café personnalisés et adapter vos boissons selon votre propre goût unique.</>}
                videoUrl="/cafe/video_cafe1.webm"
                textColor='text-white' 
                contentPosition="center"
            />

            {/* SECTION 3: VIDEO GAUCHE / TEXTE DROITE */}
            <section className="w-full flex flex-col lg:flex-row px-4 lg:pr-15 lg:pl-20 mt-10 mb-20 gap-10 lg:gap-30">
               <div className="w-full lg:w-1/2">
                  <video autoPlay loop muted playsInline className="w-full h-auto shadow-lg" >
                      <source src="/cafe/video_cafe3.webm" type="video/webm" /> 
                  </video>
               </div>
               <div className="flex flex-col justify-center w-full lg:w-1/2 gap-4 text-center lg:text-left">
                <span className="text-gray-500 font-medium tracking-widest text-xs uppercase">
                   TOUTES LES BOISSONS D&apos;UNE SIMPLE PRESSION
                </span>
                  <h2 className="font-serif font-medium text-2xl lg:text-3xl text-[#0A2342]">
                      Un large choix de cafés et de boissons lactées à portée de main
                  </h2>
                  <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
                      Choisissez votre café ou boisson lactée préférée parmi 16 options personnalisables et servies automatiquement grâce à la technologie LatteCrema Hot. Savourez un délicieux Flat White ou un Cappuccino onctueux avec une mousse fine et riche d&apos;une simple touche. Ou optez pour Rivelia avec mousse de lait manuelle, 8 boissons de café pré-enregistrées et préparation du lait à la manière d&apos;un barista.
                  </p>
               </div>
            </section>

            {/* SECTION 4: GRILLE MACHINES */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
                    <h2 className="text-3xl font-bold sm:text-2xl text-[#0A2342]">
                       À quel Rivelia passerez-vous ?
                    </h2>
                </div>

                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    {/* Grid : 1 col mobile, 2 cols desktop */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                        {featuredMachines.map((item, index) => (
                            <MachineCard 
                                key={item.product.id || index} // Use product.id for key if available
                                product={item.product}
                                ctaText={item.ctaText}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 5: BANNIERE FINALE */}
            <section className="relative w-full overflow-hidden py-20 px-6 lg:p-20" style={coffeeMachineStyle}>
                <div className="absolute inset-0 bg-[#0A2342] opacity-50"></div>
                
                    <div className="relative flex flex-col justify-center items-center lg:items-start max-w-7xl mx-auto">
                        <div className="text-white font-bold text-center lg:text-left"> 
                            
                            <h2 className="text-sm md:text-base tracking-widest font-bold mb-4 uppercase">
                               KIT LATTECREMA COOL UPGRADE
                            </h2>
                            
                            <p className="text-4xl lg:text-6xl font-serif mb-8 leading-tight">
                               Révélez une expérience <br className="hidden lg:block" /> rafraîchissante
                            </p>

                            <button className="py-3 px-8 font-semibold cursor-pointer rounded-full w-fit mx-auto lg:mx-0 transition  hover:scale-105 bg-white text-[#0A2342]">
                                En savoir plus
                            </button>
                        </div>
                    </div>
            </section>

        </div>
    );
}
