'use client';

import React, { useState } from 'react';
import YouTube from 'react-youtube'; 
import { FaPlayCircle, FaRegCopy, FaYoutube} from "react-icons/fa";
import Hero from '@/components/Hero';
import Link from 'next/link';
import Image from 'next/image';

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

interface MachineCardProps {
    img: string;
    title: string;
    description: string;
    ctaText: string;
    buttonClass?: string;
}

const MachineCard: React.FC<MachineCardProps> = ({ img, title, description, ctaText }) => {
    return (
        <div className="flex flex-col items-center p-4 h-full">
            <div className="mb-4 w-full max-w-[200px] sm:max-w-[250px] mx-auto">
                <img src={img} alt={`Machine à café ${title}`} className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300" />
            </div>
            
            <div className="flex flex-col flex-grow items-center gap-4 w-full">
                <h3 className="font-bold text-xl text-[#0A2342] min-h-[30px] flex items-center justify-center text-center">
                    {title}
                </h3>
                
                <p className="text-center text-sm text-gray-600 flex-grow mb-4">
                    {description}
                </p>
                
                <button className="w-full max-w-[240px] py-2 flex justify-center items-center text-white rounded-full cursor-pointer transition duration-300 shadow-md hover:shadow-lg bg-[#0A2342] hover:bg-white hover:text-[#0A2342]">
                    {ctaText}
                </button>
            </div>
        </div>
    );
};

export default function DecouvrirCafe1() {

    const customBlueButton = 'bg-[#266BBF] text-white hover:bg-[#8bb1e0]';
    const youtubeUrl = "https://youtu.be/Hb6H3Ms70PU"; 
    const videoId = "Hb6H3Ms70PU"; 
    const youtubeChannelUrl = "https://www.youtube.com/@delonghifrance"; 
    
    const [isPlaying, setIsPlaying] = useState(false);

    const getThumbnailUrl = (id: string) => `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;
    const videoCoverImage = getThumbnailUrl(videoId);

    const machines = [
        {
            img: "cafe/decouvrir_cafe1.avif",
            title: "Rivelia",
            description: "Tournez, changez, dégustez ! Découvrez tout un monde de saveurs à chaque tasse.",
            ctaText: "Découvrez le vôtre",
        },
        {
            img: "cafe/decouvrir_cafe1_2.avif",
            title: "Eletta Explore",
            description: "Une variété infinie, en toute simplicité. De l'expresso au latte en passant par le cold brew, le tout préparé exactement comme vous l'aimez !",
            ctaText: "Découvrez-en plus",
        },
        {
            img: "cafe/decouvrir_cafe1_3.avif",
            title: "PrimaDonna Aromatic",
            description: "Le parfum de votre moment Perfetto. Laissez-vous tenter par des boissons lactées soyeuses et onctueuses, en toute simplicité.",
            ctaText: "Savourez-les dès maintenant",
        },
        {
            img: "cafe/decouvrir_cafe1_4.avif",
            title: "La Specialista Touch",
            description: "Ensemble, créons votre café Perfetto. Une précision et un contrôle absolus pour une tasse sur mesure.",
            ctaText: "Créez la vôtre",
        },
    ];

     const playerOpts = {
        width: '100%',
        height: '100%',
        playerVars: {
            autoplay: 1, 
            controls: 1, 
            rel: 0, 
        },
    };


    return (
        <div className="w-full overflow-x-hidden">
            
            {/* Hero Section */}
            <Hero 
                title={<>Ce n&apos;est pas seulement <br className="hidden sm:block"/> parfait. C&apos;est Perfetto.</>}
                subtitle={<>La perfection, c&apos;est le souci du moindre détail. Le grain. La température. <br className="hidden lg:block"/> La mousse soyeuse. Perfetto, c&apos;est le plaisir de prendre le temps, avec les rayons <br className="hidden lg:block"/> du soleil sur le visage et une vue inoubliable.</>}
                ctaText="Choisissez votre De'Longhi"
                imageUrl="cafe/homme1.jpg"
                textColor='text-black' 
                btnColor={customBlueButton}
            />

            {/* Section Vidéo + Texte 1 */}
            <section className="w-full flex flex-col lg:flex-row items-center justify-center py-12 lg:py-20 px-4 lg:px-20 gap-10">
                <div className="w-full lg:w-1/2 max-w-3xl shadow-xl overflow-hidden">
                   <video autoPlay loop muted playsInline className="w-full h-auto" >
                      <source src="cafe/video_cafe.webm" type="video/webm" /> 
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
                        {machines.map((machine) => (
                            <MachineCard 
                                key={machine.title}
                                img={machine.img}
                                title={machine.title}
                                description={machine.description}
                                ctaText={machine.ctaText}
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
                      <source src="cafe/video_cafe1.webm" type="video/webm" /> 
                  </video>
               </div>
            </section>
            
            {/* Section Vidéo Gauche / Texte Droite */}
            <section className="w-full flex flex-col lg:flex-row py-12 lg:py-20 px-4 lg:px-0 gap-10 lg:gap-0">
                <div className="w-full lg:w-1/2 px-4 lg:pl-20 lg:pr-10">
                   <div className="shadow-xl overflow-hidden">
                       <video autoPlay loop muted playsInline className="w-full h-auto" >
                          <source src="cafe/video_cafe2.webm" type="video/webm" /> 
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
                        className="w-full h-full absolute inset-0 bg-cover bg-center transition-opacity duration-300 hover:opacity-90 cursor-pointer group"
                        style={{ 
                            backgroundImage: `url(${videoCoverImage})`,
                            backgroundColor: '#e7e7e7' 
                        }}

                        onClick={() => setIsPlaying(true)}
                    >
                        {/* Overlay sombre */}
                        <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300"></div>

                        <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-12 text-white z-10">
                            
                            {/* Header Vidéo */}
                            <div className="flex justify-between items-start w-full">
                                <div className="flex flex-col gap-2">
                                    <div className="flex items-center text-xs sm:text-sm bg-black/50 rounded-full px-3 py-1 backdrop-blur-sm w-fit">
                                        <Link 
                                            href={youtubeChannelUrl} 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="flex items-center hover:text-gray-300 transition-colors"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <FaYoutube className="w-4 h-4 mr-2 text-red-600" />
                                            <span className="font-bold">De&apos;Longhi France</span>
                                        </Link>
                                    </div>
                                </div>
                                
                                <button 
                                    className="flex flex-col items-center justify-center cursor-pointer group/btn p-2 hover:bg-white/10 rounded-lg transition" 
                                    onClick={(e) => {
                                        e.stopPropagation(); 
                                        handleCopyLink(youtubeUrl);
                                    }}
                                    title="Copier le lien"
                                >
                                    <FaRegCopy className="w-5 h-5 text-white group-hover/btn:text-gray-200 transition-colors" />
                                    <span className="text-[10px] mt-1 opacity-0 group-hover/btn:opacity-100 transition-opacity">Copier</span>
                                </button>
                            </div>

                            {/* Bouton Play Central */}
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                <FaPlayCircle className="w-16 h-16 sm:w-24 sm:h-24 text-white/90 group-hover:scale-110 transition-transform duration-300 drop-shadow-xl" />
                            </div>

                            {/* Footer Vidéo */}
                            <div className="self-start">
                                <Link 
                                    href={youtubeUrl} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="flex items-center text-xs sm:text-sm bg-black/60 hover:bg-red-600 px-4 py-2 rounded-full transition-colors backdrop-blur-md"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <FaPlayCircle className="w-4 h-4 mr-2" /> Regarder sur YouTube
                                </Link>
                            </div>

                        </div>
                    </div>
                )}
            </section>
        </div>
    );
}
