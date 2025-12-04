import React from 'react';
import Hero from '@/components/Hero';
import Link from 'next/link';
import Image from 'next/image';
import { getProducts } from '@/lib/getProducts';
import { Product } from '@/types/product';
import BradPittVideo from '@/components/BradPittVideo';

interface MachineCardProps {
    product: Product;
    ctaText: string;
}

const MachineCard: React.FC<MachineCardProps> = ({ product, ctaText }) => {
    return (
        <div className="flex flex-col items-center p-4 h-full">
            <div className="mb-4 w-full max-w-[200px] sm:max-w-[250px] mx-auto">
                <Image src={product.image} alt={`Machine à café ${product.name}`} width={250} height={250} className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300" />
            </div>
            
            <div className="flex flex-col flex-grow items-center gap-4 w-full">
                <h3 className="font-bold text-xl text-[#0A2342] min-h-[30px] flex items-center justify-center text-center">
                    {product.name}
                </h3>
                
                <p className="text-center text-sm text-gray-600 flex-grow mb-4">
                    {product.subtitle || (product.features ? product.features.join('. ') : '')}
                </p>
                
                <button className="w-full max-w-[240px] py-2 flex justify-center items-center text-white rounded-full cursor-pointer transition duration-300 shadow-md hover:shadow-lg bg-[#0A2342] hover:bg-white hover:text-[#0A2342]">
                    {ctaText}
                </button>
            </div>
        </div>
    );
};

export default async function DecouvrirCafe1() {

    const allProducts = await getProducts();

    const customBlueButton = 'bg-[#266BBF] text-white hover:bg-[#8bb1e0]';

    // Manually map fetched products to the structure needed for MachineCard
    const featuredMachinesData = [
        { series: "Rivelia", ctaText: "Découvrez le vôtre" },
        { series: "Eletta Explore", ctaText: "Découvrez-en plus" },
        { series: "PrimaDonna Aromatic", ctaText: "Savourez-les dès maintenant" },
        { series: "La Specialista Touch", ctaText: "Créez la vôtre" },
    ];

    const featuredMachines = featuredMachinesData.map(item => {
        const product = allProducts.find(p => p.series === item.series);
        return product ? { product, ctaText: item.ctaText } : null;
    }).filter(Boolean) as { product: Product; ctaText: string }[];

    return (
        <div className="w-full overflow-x-hidden">
            
            {/* Hero Section */}
            <Hero 
                title={<>Ce n&apos;est pas seulement <br className="hidden sm:block"/> parfait. C&apos;est Perfetto.</>}
                subtitle={<>La perfection, c&apos;est le souci du moindre détail. Le grain. La température. <br className="hidden lg:block"/> La mousse soyeuse. Perfetto, c&apos;est le plaisir de prendre le temps, avec les rayons <br className="hidden lg:block"/> du soleil sur le visage et une vue inoubliable.</>}
                ctaText="Choisissez votre De'Longhi"
                imageUrl="/cafe/homme1.jpg"
                textColor='text-black' 
                btnColor={customBlueButton}
            />

            {/* Section Vidéo + Texte 1 */}
            <section className="w-full flex flex-col lg:flex-row items-center justify-center py-12 lg:py-20 px-4 lg:px-20 gap-10">
                <div className="w-full lg:w-1/2 max-w-3xl shadow-xl overflow-hidden">
                   <video autoPlay loop muted playsInline className="w-full h-auto" >
                      <source src="/cafe/video_cafe.webm" type="video/webm" /> 
                   </video>
                </div>
                <div className="flex flex-col justify-center w-full lg:w-1/2 gap-6 text-center lg:text-left px-4">
                   <h2 className="font-serif text-3xl lg:text-4xl text-[#0A2342]">
                       Pourquoi se contenter d&apos;un simple parfait quand vous pouvez avoir un Perfetto?
                   </h2>
                   <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
                       Avec Brad, le café Perfetto paraît si simple à réaliser. Et c&apos;est parce que c&apos;est le cas. Choisissez vos grains préférés et laissez De&apos;Longhi s&apos;occuper du reste. Chaud ou froid, doux ou fort, expresso ou macchiato. Votre tasse parfaite est prête d&apos;une simple pression. Il ne vous reste plus qu&apos;à la déguster, façon Perfetto.
                   </p>
                </div>
            </section>

            {/* Section Grille Machines */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
                    <h2 className="text-3xl lg:text-4xl font-serif text-[#0A2342] mb-4">
                        Choisissez votre expresso broyeur Perfetto
                    </h2>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Grille responsive : 1 col mobile, 2 col tablette, 4 col desktop */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
                        {featuredMachines.map((item, index) => (
                            <MachineCard 
                                key={index} 
                                product={item.product}
                                ctaText={item.ctaText}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Section Grise (Texte Gauche / Vidéo Droite) */}
            <section className="w-full flex flex-col lg:flex-row bg-gray-100 overflow-hidden">
               <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 py-12 lg:p-20 gap-6 order-2 lg:order-1">
                  <h2 className="font-serif text-3xl lg:text-4xl text-[#0A2342] ">
                      D&apos;une simple pression. Choisissez votre boisson préférée, vous ne pouvez pas vous tromper.
                  </h2>
                  <p className="text-base lg:text-lg text-gray-600">
                      Latte glacé au lever du soleil, expresso après le dîner. Quelle que soit l&apos;heure de la journée, choisissez parmi une sélection de cafés qui sont toujours préparés comme vous le souhaitez. Une simple pression pour des possibilités de boissons infinies. C&apos;est tout. C&apos;est simple. C&apos;est Perfetto.
                  </p>
                  <button className="border cursor-pointer border-gray-400 rounded-full px-8 py-3 bg-white hover:bg-[#0A2342] hover:text-white hover:border-transparent transition duration-300 w-fit mx-auto lg:mx-0 font-semibold text-[#0A2342] ">
                      Découvrez votre café Perfetto
                  </button>
               </div>

               <div className="w-full lg:w-1/2 order-1 lg:order-2">
                  <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                      <source src="/cafe/video_cafe1.webm" type="video/webm" /> 
                  </video>
               </div>
            </section>
            
            {/* Section Vidéo Gauche / Texte Droite */}
            <section className="w-full flex flex-col lg:flex-row py-12 lg:py-20 px-4 lg:px-0 gap-10 lg:gap-0">
                <div className="w-full lg:w-1/2 px-4 lg:pl-20 lg:pr-10">
                   <div className="shadow-xl overflow-hidden">
                       <video autoPlay loop muted playsInline className="w-full h-auto" >
                          <source src="/cafe/video_cafe2.webm" type="video/webm" /> 
                       </video>
                   </div>
                </div>
                <div className="flex flex-col justify-center w-full lg:w-1/2 px-4 lg:pr-20 lg:pl-10 gap-6 text-center lg:text-left">
                   <h2 className="font-serif text-3xl lg:text-4xl text-[#0A2342]">
                      C&apos;est vraiment beau. Et le goût est encore meilleur.
                   </h2>
                   <p className="text-base lg:text-lg text-gray-600">
                       La forme rencontre l&apos;arôme dans chaque machine De&apos;Longhi. Un superbe design italien rencontre une technologie d&apos;extraction de pointe. Pour que chaque tasse soit sublimée.
                   </p>

                   <button className="border border-[#0A2342] rounded-full px-8 py-3 bg-white hover:bg-[#0A2342] cursor-pointer  hover:text-white hover:border-transparent transition duration-300 w-fit mx-auto lg:mx-0 font-semibold">
                      Parcourir les expresso broyeurs
                   </button>
                </div>
            </section>


            <div className="text-center pb-8 px-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#0A2342]">
                     Découvrez l&apos;univers d&apos;un café Perfetto avec Brad Pitt
                </h2>
            </div>
            
            {/* Section YouTube */}
            <BradPittVideo />

        </div>
    );
}
