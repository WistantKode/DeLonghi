'use client';

import React, { useState } from 'react';
import YouTube from 'react-youtube'; 
import { FaPlayCircle, FaRegCopy,FaYoutube} from "react-icons/fa";
import Hero from '@/components/Hero';
import Link from 'next/link';

// Fonction de simulation pour copier le lien
const handleCopyLink = (url: string) => {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(url)
            .then(() => alert('Lien YouTube copié !'))
            .catch(() => {
                const textarea = document.createElement('textarea');
                textarea.value = url;
                document.body.appendChild(textarea);
                textarea.select();
                try {
                    document.execCommand('copy');
                    alert('Lien YouTube copié ! (via fallback)');
                } catch (err) {
                    console.error('Erreur lors de la copie (fallback):', err);
                }
                document.body.removeChild(textarea);
            });
    } else {
         alert(`Veuillez copier manuellement ce lien : ${url}`);
    }
};

export default function DecouvrirCafe5() {

    const customBlueButton = 'bg-[#266BBF] text-white hover:bg-[#8bb1e0]';
    // const white ButtonWithGrayText = 'bg-white text-gray-700 hover:bg-gray-300';
   
    const youtubeUrl = "https://youtu.be/PA2WdgvXVdo"; 
    // const youtubeUrl = "https://youtu.be/Hb6H3Ms70PU?si=vSLwbqQh5vlIx2nQ";
     const videoId = "PA2WdgvXVdo"; 
     const youtubeChannelUrl = "https://www.youtube.com/@delonghifrance"; 
     
     // État pour contrôler l'affichage de la vidéo
     const [isPlaying, setIsPlaying] = useState(false);
 
     const getThumbnailUrl = (id: string) => `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;
     const videoCoverImage = getThumbnailUrl(videoId);

    const models = [
        {
            id: 1,
            title: "PrimaDonna Aromatic",
            subtitle: "Une élégance intemporelle avec son design en métal brossé argenté",
            features: [
                "Technologie LatteCrema Hot",
                "Technologie Cold Extraction", 
                "Technologie Bean Adapt",
                "30 délicieux cafés chauds et froids d'une simple touche"
            ],
            image: "cafe/decouvrir_cafe1_2.avif",
            buttonText: "Achetez maintenant"
        },
        {
            id: 2,
            title: "PrimaDonna Aromatic", 
            subtitle: "Une élégance intemporelle avec son design en métal brossé en titane",
            features: [
                "LatteCrema Hot & Cool Technologies",
                "Technologie Cold Extraction",
                "Technologie Bean Adapt", 
                "Plus de 35 délicieux cafés chauds et froids d'une simple touche"
            ],
            image: "cafe/decouvrir_cafe1_3.avif",
            buttonText: "Achetez maintenant"
        },
        {
            id: 3,
            title: "PrimaDonna Aromatic",
            subtitle: "Une élégance intemporelle avec son design en métal brillant en titane",
            features: [
                "Technologies LatteCrema Hot & Cool",
                "Technologie Cold Extraction",
                "Technologie Bean Adapt",
                "Plus de 35 délicieux cafés chauds et froids d'une simple touche"
            ],
            image: "cafe/decouvrir_cafe1_3.avif", 
            buttonText: "Achetez maintenant"
        }
    ];

    const playerOpts = {
        width: '100%',
        height: '100%',
        playerVars: {
            // Activer la lecture automatique
            autoplay: 1, 
            // Cacher les contrôles utilisateur
            controls: 1, 
            // Cacher les vidéos suggérées à la fin
            rel: 0, 
        },
    };

    return (
        <div className="w-full">

            <div className="bg-white w-full hidden lg:flex justify-between z-10 mt-48 -mb-10 pl-30 pr-30 items-center">
                <div className="flex items-center">
                    <img className="w-20" src="cafe/decouvrir_cafe1_3.avif" alt="" />
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
                videoUrl="cafe/video_cafe10.webm"
                textColor='text-black' 
                btnColor={customBlueButton}
                contentPosition="center"
                taglinecolor='text-gray-500'
                paddingTop='pt-0'

            />

          
            <section className="w-full flex flex-col lg:flex-row bg-black gap-10 lg:gap-30 pt-10 lg:pt-20 text-white px-6 lg:px-0 pb-10 lg:pb-0">
              
               <div className=" w-full lg:w-1/2">
                     <img src="cafe/decouvrir_cafe5.avif" alt="" /> 
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
                     <img src="cafe/decouvrir_cafe5_1.avif" alt="" /> 
               </div>


            </section>

            <section className="w-full relative bg-black aspect-video flex justify-center items-center overflow-hidden"> 
                
                {isPlaying ? (
                    <div className="w-full h-full absolute inset-0">
                        <YouTube 
                            videoId={videoId} 
                            opts={playerOpts} 
                            className="w-full h-full"
                            onEnd={() => setIsPlaying(false)} 
                        />
                    </div>

                ) : (
                    <div 
                        className="w-full h-full absolute inset-0 bg-cover bg-center transition-opacity duration-300 hover:opacity-90 cursor-pointer"
                        style={{ 
                            backgroundImage: `url(${videoCoverImage})`,
                            backgroundColor: '#e7e7e7' 
                        }}

                        onClick={() => setIsPlaying(true)}
                    >
                       
                        <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-12 text-white bg-black bg-opacity-50">
                            
                            <div className="flex justify-between items-start w-full">
                                
                                <div className="flex flex-col gap-1">
                                    <div className="flex items-center text-xs sm:text-sm">
                                        <Link 
                                            href={youtubeChannelUrl} 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="flex items-center hover:text-gray-300 transition-colors mr-3"
                                        >
                                            <FaYoutube className="w-4 h-4 mr-1" />
                                            <span className="font-bold">PrimaDonna Aromatic | Automatic Bean Adapt Technology</span>
                                        </Link>
                                    </div>

                                   
                                </div>
                                
                                <div 
                                    className="flex flex-col items-center justify-center cursor-pointer group p-2" 
                                    onClick={(e) => {
                                        e.stopPropagation(); 
                                        handleCopyLink(youtubeUrl);}}>
                                    <FaRegCopy className="w-6 h-6 text-white group-hover:text-gray-400 transition-colors" />
                                    <span className="text-xs mt-1">Copier le lien</span>
                                </div>
                            </div>

                            <div className="absolute inset-0 flex items-center justify-center">
                                <FaPlayCircle className="w-16 h-16 sm:w-20 sm:h-20 text-white transition duration-300 hover:scale-110" />
                            </div>

                            <div className="self-start text-xs sm:text-sm">
                                <Link 
                                    href={youtubeUrl} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="flex items-center bg-black bg-opacity-70 gap-2 rounded hover:underline"
                                >
                                    <FaPlayCircle className="w-4 h-4 rounded" /> Regarder sur YouTube
                                </Link>
                            </div>

                        </div>
                    </div>
                )}
            </section>

         
            <section className="bg-black py-16 px-4 md:px-8">
                <div className="max-w-7xl mx-auto text-white">
                    
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-center mb-8 lg:mb-12">
                        Votre immersion dans le monde du café commence ici.
                    </h2>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {models.map((model) => (

                            <div key={model.id} className="flex flex-col items-center text-center p-6">
                                <div className="h-88 flex items-center justify-center mb-6">
                                    <img 
                                        src={model.image} 
                                        alt={model.title} 
                                        className="max-h-full w-auto"
                                    />
                                </div>
                                
                                <h3 className="text-xl font-bold mb-2">
                                    {model.title}
                                </h3>
                                <p className="text-white text-sm mb-6 h-10">
                                    {model.subtitle}
                                </p>

                                <div className="w-full">
                                    {model.features.map((feature, index) => (
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
                                    {model.buttonText}
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