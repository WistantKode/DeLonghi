'use client';

import React, { useState } from 'react';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'; 
import Hero from '@/components/Hero';
import Link from 'next/link';
import Image from 'next/image';

const DecouvrirCafe4 = () => {

    const customBlueButton = 'bg-[#266BBF] text-white hover:bg-[#8bb1e0]';
    // const whiteButtonWithGrayText = 'bg-white text-gray-700 hover:bg-gray-300';
   
    type TabName = 'Mouture' | 'Tassage' | 'Extraction' | 'Mousse' | 'Dégustation';
    const [activeTab, setActiveTab] = useState<TabName>('Mouture');

    interface TabData {
        tagline: string;
        title: string;
        subtitle: string;
        imageSrc: string;
    }

    const tabsData: Record<TabName, TabData> = {
        Mouture: {
            tagline: "MOUTURE",
            title: "Une mouture précise et intelligente",
            subtitle: "La Specialista Touch comprend un moulin à café intégré qui permet d'obtenir une mouture parfaite selon le type de grain grâce aux 15 finesses de mouture et au guidage intuitif.",
            imageSrc: "/cafe/decouvrir_cafe4_2.avif" 
        },
        Tassage: {
            tagline: "TASSAGE",
            title: "Un tassage uniforme, sans désordre",
            subtitle: "Obtenez un tassage parfait sans effort ni résidu. La station de tassage intelligente Smart Tamping garantit un tassage uniforme et une pression idéale pour une extraction optimale.",
            imageSrc: "/cafe/decouvrir_cafe4_6.avif" 
        },
        Extraction: {
            tagline: "EXTRACTION",
            title: "Le contrôle absolu de l'extraction",
            subtitle: "Grâce au contrôle dynamique de la pré-infusion et au manomètre, vous avez le contrôle total du processus d'extraction pour révéler tous les arômes de votre espresso. Le guide visuel sur l'écran vous assure le résultat Perfetto.",
            imageSrc: "/cafe/decouvrir_cafe4_3.avif" 
        },
        Mousse: {
            tagline: "MOUSSE",
            title: "L'art du Latte Art en toute simplicité",
            subtitle: "La buse vapeur Auto LatteArt produit automatiquement une texture de lait soyeuse et parfaite, essentielle pour le Latte Art. Il suffit de sélectionner le niveau de mousse et de température souhaité.",
            imageSrc: "/cafe/decouvrir_cafe4_4.avif" 
        },
        Dégustation: {
            tagline: "DÉGUSTATION",
            title: "Le café Perfetto, chaud ou froid",
            subtitle: "Savourez votre création, qu'elle soit chaude ou froide. La Specialista Touch vous offre un menu complet pour satisfaire toutes les envies, du simple espresso au Cold Brew rafraîchissant.",
            imageSrc: "/cafe/decouvrir_cafe4_5.avif" 
        },
    };

    const currentData = tabsData[activeTab];

    const tabOrder: TabName[] = ['Mouture', 'Tassage', 'Extraction', 'Mousse', 'Dégustation'];

    const nextTab = () => {
        const currentIndex = tabOrder.indexOf(activeTab);
        const nextIndex = (currentIndex + 1) % tabOrder.length;
        setActiveTab(tabOrder[nextIndex]);
    };

    const prevTab = () => {
        const currentIndex = tabOrder.indexOf(activeTab);
        const prevIndex = (currentIndex - 1 + tabOrder.length) % tabOrder.length;
        setActiveTab(tabOrder[prevIndex]);
    };

    return (
        <div className="w-full overflow-x-hidden">
            <Hero 
                tagline="LA SPECIALISTA TOUCH"
                title={<>Bienvenue dans le <br /> meilleur café de la ville. <br /> Le vôtre.</>}
                subtitle={<>Il n’est pas seulement parfait. Il est Perfetto. La Specialista Touch est votre  <br className="hidden lg:block"/> guide expert qui transformera votre cuisine en un véritable café artisanal. <br className="hidden lg:block"/> Maîtrisez le savoir-faire authentique grâce à des instructions intuitives à l’écran  <br className="hidden lg:block"/> et préparez un menu complet de boissons de qualité barista, que vous aurez  <br className="hidden lg:block"/> vous-même préparées à la perfection.</>}
                ctaText="L'expérience café à la maison"
                videoUrl="/cafe/video_cafe1.webm"
                textColor='text-black' 
                btnColor={customBlueButton}
                taglinecolor='text-gray-500'
            />

          
            {/* SECTION 1 : IMAGE GAUCHE / TEXTE DROITE */}
            <section className="w-full flex flex-col lg:flex-row gap-10 lg:gap-30 mt-10 px-4 lg:px-0">
              
               <div className="w-full lg:w-[60%]">
                     <Image src="/cafe/decouvrir_cafe4.avif" alt="Boissons chaudes et froides" width={800} height={600} className="w-full h-auto object-cover" /> 
               </div>

              <div className="flex flex-col justify-center w-full lg:w-[40%] gap-4 lg:pr-6 text-center lg:text-left">
                    <span className="text-gray-500 font-medium tracking-widest text-xs uppercase">
                       BOISSONS CHAUDES ET FROIDES
                    </span>
                    <h2 className="font-medium text-2xl lg:text-3xl text-[#0A2342]">
                       Votre menu complet de cafés : Chaud, froid et Perfetto.
                    </h2>
                    <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
                       Servez jusqu’à 10 boissons chaudes et froides délicieuses, d’une simple touche. D’un cappuccino classique qui réchauffe le cœur à un cold brew rafraîchissant. Vous pouvez satisfaire n’importe quelle envie, à n’importe quel moment de la journée. Votre café est toujours ouvert et chaque commande est Perfetto.
                    </p>
               </div>

            </section>

            <Hero 
                tagline="ÉCRAN TACTILE INTUITIF"
                title={<>Tout le savoir-faire, sans <br /> hésitation.</>}
                subtitle={<>Grâce à son écran tactile intuitif de 3,5 pouces, la tasse parfaite est à portée de  <br className="hidden lg:block"/> main. Il simplifie chaque décision, vous guidant dans la sélection de la mouture,  <br className="hidden lg:block"/> du dosage et de l’extraction. Obtenez des résultats exceptionnels grâce à un  <br className="hidden lg:block"/> processus pratique et satisfaisant, à la fois authentique et simple. </>}
                ctaText="Achetez La Specialista Touch"
                videoUrl="/cafe/video_cafe7.webm"
                textColor='text-black' 
                btnColor={customBlueButton}
                taglinecolor='text-gray-500'
                paddingTop ='pt-0'
            />

            <section className="bg-gray-50 py-12 lg:py-20">
               
               {/* BLOC 1 : VIDEO GAUCHE / TEXTE DROITE */}
               <div className="w-full flex flex-col lg:flex-row px-4 lg:pl-10 mb-20 gap-10 lg:gap-30">
                    <div className="w-full lg:w-[60%]">
                        <video autoPlay loop muted playsInline className="w-full h-auto" >
                            <source src="/cafe/video_cafe8.webm" type="video/webm" /> 
                        </video>
                    </div>
                    <div className="flex flex-col justify-center w-full lg:w-[40%] gap-4 lg:pr-20 text-center lg:text-left">
                        <span className="text-gray-500 font-medium tracking-widest text-xs uppercase">
                          TECHNOLOGIE BEAN ADAPT
                        </span>
                        <h2 className="font-medium text-2xl lg:text-3xl text-[#0A2342]">
                           Des arômes parfaits, dévoilés par votre instinct.
                        </h2>
                        <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
                           Notre technologie Bean Adapt exclusive recommande de façon intelligente les réglages idéaux pour le café en grains que vous utilisez. Elle garantit une extraction Perfetto qui fait ressortir chaque note et chaque arôme nuancés, pour un café d’une qualité exceptionnelle à chaque tasse.
                        </p>
                    </div>
               </div>

               {/* BLOC 2 : TEXTE GAUCHE / VIDEO DROITE (Inversé sur Desktop) */}
               <div className="w-full flex flex-col-reverse lg:flex-row px-4 lg:pl-10 gap-10 lg:gap-30">
                    
                    <div className="flex flex-col justify-center w-full lg:w-[40%] gap-4 lg:pl-20 text-center lg:text-left">
                        <span className="text-gray-500 font-medium tracking-widest text-xs uppercase">
                           AUTO LATTEART
                        </span>
                        <h2 className="font-medium text-2xl lg:text-3xl text-[#0A2342]">
                           L’art de la mousse soyeuse, en toute simplicité.
                        </h2>
                        <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
                           Que ce soit pour préparer un flat white ou un cappuccino, il est essentiel que le lait soit soyeux. La buse vapeur Auto LatteArt produit automatiquement une texture de lait parfaite à chaque fois. Choisissez simplement la température et le niveau de mousse sur l’écran et créez votre finition Perfetto.
                        </p>
                    </div>

                    <div className="w-full lg:w-[60%]">
                        <video autoPlay loop muted playsInline className="w-full h-auto" >
                            <source src="/cafe/video_cafe9.webm" type="video/webm" /> 
                        </video>
                    </div>
               </div>
            </section>

            {/* SECTION DESIGN */}
            <section className="w-full flex flex-col lg:flex-row gap-10 lg:gap-30 mt-10 px-4 lg:px-0 pb-10">
              
              <div className="w-full lg:w-[60%]">
                    <Image src="/cafe/decouvrir_cafe4_1.avif" alt="Design La Specialista" width={800} height={600} className="w-full h-auto object-cover " /> 
              </div>

             <div className="flex flex-col justify-center w-full lg:w-[40%] gap-4 lg:pr-6 text-center lg:text-left">
                   <span className="text-gray-500 font-medium tracking-widest text-xs uppercase">
                      DESIGN
                   </span>
                   <h2 className="font-medium text-2xl lg:text-3xl text-[#0A2342]">
                      Le savoir-faire italien rencontre la simplicité intuitive
                   </h2>
                   <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
                     Inspirée par les expresso broyeurs authentiques des meilleurs cafés italiens, La Specialista Touch associe parfaitement un design iconique et ergonomique à la fonctionnalité exceptionnelle d’un écran intégré, pour une expérience de barista facile et sans effort.
                   </p>

                   <button className="border border-[#0A2342] font-bold rounded-full px-6 py-3 bg-white hover:bg-[#0A2342] cursor-pointer hover:text-white transition duration-300 w-fit mx-auto lg:mx-0">
                      Achetez La Specialista Touch
                    </button>
             </div>

           </section>
           
           {/* SECTION SLIDER INTERACTIF */}
           <section className="bg-white mt-10 lg:mt-20">
                {/* Hauteur adaptative : moins haut sur mobile, plus haut sur desktop */}
                <div className="relative w-full h-[600px] lg:h-[800px] overflow-hidden">
                    <div 
                        className="absolute inset-0 bg-cover bg-center transition-all duration-500"
                        style={{ 
                            backgroundImage: `url(${currentData.imageSrc})`,
                        }}
                    >
                         <div className="absolute inset-0 bg-black opacity-40"></div> 
                    </div>

                    {/* Flèche Gauche - Ajustée pour mobile (plus proche du bord) */}
                    <button onClick={prevTab} className="absolute left-4 lg:left-20 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 lg:p-3 transition-all duration-300 cursor-pointer z-20">
                        <IoIosArrowBack className="text-xl lg:text-2xl text-gray-700" />
                    </button>

                    {/* Flèche Droite - Ajustée pour mobile */}
                    <button onClick={nextTab} className="absolute right-4 lg:right-20 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 lg:p-3 transition-all duration-300 cursor-pointer z-20">
                        <IoIosArrowForward className="text-xl lg:text-2xl text-gray-700" />
                    </button>

                    {/* Contenu Central */}
                    <div className="relative h-full w-full max-w-7xl mx-auto px-6 md:px-8 flex flex-col items-center justify-center text-white z-10 pb-20 lg:pb-0">
                        <div className="flex flex-col items-center justify-center text-center mb-4 lg:mb-12 animate-in fade-in zoom-in duration-300 key={activeTab}">
                            <span className="font-medium text-xs lg:text-sm tracking-widest uppercase mb-2 lg:mb-4 text-gray-200">
                                {currentData.tagline}
                            </span>
                            <h2 className="font-medium text-3xl lg:text-5xl mb-4 lg:mb-6">
                                {currentData.title}
                            </h2>
                            <p className="text-base lg:text-xl max-w-3xl leading-relaxed px-4 lg:px-0">
                                {currentData.subtitle}
                            </p>
                        </div>

                        {/* Onglets de navigation (Bas) */}
                        <div className="absolute bottom-4 lg:bottom-10 left-0 right-0 w-full">
                            {/* Sur mobile, on autorise le scroll horizontal (overflow-x-auto) pour que tous les onglets soient accessibles */}
                            <div className="flex overflow-x-auto lg:flex-wrap justify-start lg:justify-center gap-2 lg:gap-4 p-4 w-full no-scrollbar snap-x">
                                {tabOrder.map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`flex-shrink-0 snap-center py-2 px-4 lg:py-3 lg:px-6 text-sm lg:text-base font-medium transition-all duration-300 whitespace-nowrap cursor-pointer rounded-full lg:rounded-none
                                            ${activeTab === tab 
                                                ? 'bg-white/20 lg:bg-transparent lg:underline font-bold' 
                                                : 'hover:bg-white/10 lg:hover:bg-transparent'
                                            }`}
                                    >
                                        {tab}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default DecouvrirCafe4;
