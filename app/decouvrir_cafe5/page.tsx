import React from 'react';
import Hero from '@/components/Hero';
import Link from 'next/link';
import Image from 'next/image';
import { getProducts } from '@/lib/getProducts'; // Import Product interface
import InteractiveYoutubePlayer from '@/components/shared/InteractiveYoutubePlayer'; // Import the new Client Component

async function getPrimaDonnaAromaticProducts(): Promise<Product[]> {
    const res = await fetch('http://localhost:3000/api/products?series=PrimaDonna Aromatic');
    if (!res.ok) {
        throw new Error('Failed to fetch PrimaDonna Aromatic products');
    }
    return res.json();
}

export default async function DecouvrirCafe5() {
    const models = await getPrimaDonnaAromaticProducts();

    const customBlueButton = 'bg-[#266BBF] text-white hover:bg-[#8bb1e0]';
    const youtubeUrl = "https://youtu.be/PA2WdgvXVdo"; 
    const videoId = "PA2WdgvXVdo"; 
    const youtubeChannelUrl = "https://www.youtube.com/@delonghifrance"; 
    
    return (
        <div className="w-full">

            <div className="bg-white w-full hidden lg:flex justify-between z-10 mt-48 -mb-10 pl-30 pr-30 items-center">
                <div className="flex items-center">
                    {/* Assuming the first model's image is representative */}
                    {models.length > 0 && (
                        <Image className="w-20" src={models[0].image} alt={models[0].name} width={80} height={80} />
                    )}
                    <span className="font-bold text-xl pl-8">Laissez-vous tenter par la PrimaDonna Aromatic</span>
                </div>

                <div>
                    <button className="border border-[#0A2342] transition-all font-bold rounded-full max-w-70 p-2 bg-white hover:bg-[#0A2342] cursor-pointer hover:text-white">PrimaDonna Aromatic</button>
                </div>

            </div>

            <Hero 
                tagline="LA SPECIALISTA TOUCH"
                title={<>Perfetto, Ultimate Pleasure</>}
                subtitle={<> Plongez dans un monde aux saveurs café incomparables Avec PrimaDonna Aromatic, chaque tasse devient une véritable œuvre d'art, un chef-d'œuvre d'arômes subtilement <br /> conçus pour éveiller vos sens. </>}
                ctaText="PrimaDonna Aromatic"
                videoUrl="/cafe/video_cafe10.webm"
                textColor='text-black' 
                btnColor={customBlueButton}
                contentPosition="center"
                taglinecolor='text-gray-500'
                paddingTop='pt-0'

            />

          
            <section className="w-full flex flex-col lg:flex-row bg-black gap-10 lg:gap-30 pt-10 lg:pt-20 text-white px-6 lg:px-0 pb-10 lg:pb-0">
              
               <div className=" w-full lg:w-1/2">
                     <Image src="/cafe/decouvrir_cafe5.avif" alt="" width={800} height={600} /> 
               </div>

              <div className="flex flex-col justify-center w-full lg:w-1/2 gap-4 lg:pr-20 text-center lg:text-left">
                    
                    <h2 className="font-medium text-3xl">
                        Le monde du café, d'une simple touche.
                    </h2>
                    <p className="text-lg">
                       Grâce à son écran intuitif de 5 pouces, la PrimaDonna Aromatic vous permet d'accéder facilement à votre café préféré d'une simple touche, offrant une immersion dans un monde de saveurs riches et uniques. Son interface intuitive vous accompagne sans effort, transformant chaque préparation en une expérience personnalisée et un moment de pur plaisir.
                    </p>

               </div>


            </section>

           
            <section className="w-full flex flex-col lg:flex-row bg-black gap-10 lg:gap-30 pt-10 lg:pt-20 text-white px-6 lg:px-0 pb-10 lg:pb-0">
            

              <div className="flex flex-col justify-center w-full lg:w-1/2 gap-4 lg:pl-20 text-center lg:text-left">
                    
                    <h2 className="font-medium text-3xl">
                       Faites-vous plaisir avec une expérience café riche en arômes
                    </h2>
                    <p className="text-lg">
                      Avec la technologie Bean Adapt de De'Longhi et le réglage automatique du moulin, la PrimaDonna Aromatic dévoile des saveurs inédites, transformant chaque café en un véritable moment de pur plaisir.
                    </p>

               </div>

               <div className="w-full lg:w-1/2">
                     <Image src="/cafe/decouvrir_cafe5_1.avif" alt="" width={800} height={600} /> 
               </div>


            </section>

            <InteractiveYoutubePlayer
                videoId={videoId}
                youtubeUrl={youtubeUrl}
                youtubeChannelUrl={youtubeChannelUrl}
            />
         
            <section className="bg-black py-16 px-4 md:px-8">
                <div className="max-w-7xl mx-auto text-white">
                    
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-center mb-8 lg:mb-12">
                        Votre immersion dans le monde du café commence ici.
                    </h2>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {models.map((model) => (

                            <div key={model.id} className="flex flex-col items-center text-center p-6">
                                <div className="h-88 flex items-center justify-center mb-6">
                                    <Image 
                                        src={model.image} 
                                        alt={model.name} 
                                        width={300}
                                        height={300}
                                        className="max-h-full w-auto"
                                    />
                                </div>
                                
                                <h3 className="text-xl font-bold mb-2">
                                    {model.name}
                                </h3>
                                <p className="text-white text-sm mb-6 h-10">
                                    {model.subtitle}
                                </p>

                                <div className="w-full">
                                    {model.features && model.features.map((feature, index) => (
                                        <div 
                                            key={index} 
                                            className="py-3 border-b border-white last:border-transparent">
                                            <p className="text-sm font-bold">
                                                {feature}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                                
                                <button className={`w-full font-bold rounded-full py-3 mt-8 cursor-pointer border hover:bg-white hover:text-black transition-all`}>
                                    Achetez maintenant
                                </button>
                            </div>
                        ))}
                    </div>

                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-center pt-10 pb-10">
                        Un plus grand choix s'offre à vous
                    </h2>
                    <p className="md:text-base lg:text-lg text-center">
                        Découvrez une infinité de saveurs avec plus de 35 options de cafés chauds et froids, allant de l'Espresso au café filtre en passant par les Cold Brew, sans oublier une grande sélection de boissons lactées. Grâce aux nouvelles technologies LatteCrema Hot & Cool et Cold Extraction, la PrimaDonna Aromatic comble en toute simplicité toutes vos envies de café.
                    </p>
                </div>

            </section>


        </div>
    );
}
