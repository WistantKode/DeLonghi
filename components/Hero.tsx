'use client';

import React from 'react';
import Link from 'next/link';

interface HeroProps {
    title?: React.ReactNode;
    subtitle?: React.ReactNode | string | null;
    ctaText?: string;
    ctaLink?: string;
    tagline?: string;
    font?: string;
    imageUrl?: string;
    videoUrl?: string;
    btnWidth?: string;
    textColor?: string;
    btnColor?: string;
    contentPosition?: 'left' | 'center' | 'right';
    overlayOpacity?: string;
    titleMarginTop?: string;
    taglinecolor?: string;
    border?: string;
    paddingTop?: string;
}

const Hero: React.FC<HeroProps> = ({ 
    title, 
    subtitle, 
    ctaText, 
    ctaLink = '#',
    tagline, 
    font,
    imageUrl,
    videoUrl,
    btnWidth,
    textColor = "text-gray-900",
    btnColor = 'bg-[#266BBF] text-black hover:bg-[#9fb9de] ',
    contentPosition = "left",
    overlayOpacity = 'opacity-0',
    titleMarginTop = 'mt-0',
    taglinecolor,
    border,
    paddingTop = 'pt-30'
}) => {
    
    const isVideoBackground = !!videoUrl;
    const isImageBackground = !!imageUrl;

    // 1. Configuration du style de l'image (séparé du conteneur principal)
    const mediaStyle = isImageBackground ? {
        backgroundImage: `url('${imageUrl}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    } : {};

    // 2. Classes de positionnement du contenu (Desktop uniquement)
    // Sur mobile, on force le centrage et l'alignement gauche par défaut via le flux normal
    const contentClasses = contentPosition === 'right'
        ? 'lg:ml-auto lg:items-end lg:text-right lg:pr-20' 
        : contentPosition === 'center'
        ? 'lg:mx-auto lg:items-center lg:text-center'
        : 'lg:items-start lg:text-left'; // Default left

    // 3. Gestion des marges desktop
    const responsiveTitleMargin = titleMarginTop.includes('-mt') 
        ? `mt-0 lg:${titleMarginTop}` 
        : titleMarginTop;

    const responsivePaddingTop = paddingTop === 'pt-30' 
        ? 'pt-0 lg:pt-30' // Pas de padding top énorme sur mobile car on est sous l'image
        : paddingTop;

    // 4. Gestion de la couleur du texte (Mobile = Noir car fond blanc, Desktop = textColor prop)
    // On extrait la couleur demandée pour l'appliquer seulement sur LG
    const responsiveTextColor = `text-gray-900 lg:${textColor.replace('text-', '')}`;

    return (
        // CONTENEUR PRINCIPAL
        // Mobile: Flex Column (vertical). Desktop: Block (pour permettre l'absolute positioning des enfants)
        <div className="relative w-full flex flex-col lg:block overflow-hidden min-h-[auto] lg:min-h-screen mt-15">

            {/* === BLOC MEDIA (IMAGE/VIDEO) === */}
            {/* Mobile: Hauteur fixe (ex: 400px). Desktop: Absolute inset-0 (couvre tout) */}
            <div 
                className="w-full h-[400px] lg:absolute lg:inset-0 lg:h-full z-0 bg-gray-200"
                style={!isVideoBackground ? mediaStyle : {}}
            >
                {isVideoBackground && (
                    <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                        <source src={videoUrl} type="video/webm" /> 
                    </video>
                )}
                
                {/* Overlay noir uniquement sur Desktop (sur mobile le texte est sur fond blanc) */}
                <div className={`hidden lg:block absolute inset-0 bg-black ${overlayOpacity}`}></div>
            </div>

            {/* === BLOC CONTENU (TEXTE) === */}
            {/* Mobile: Fond blanc, position relative. Desktop: Fond transparent, position relative (z-index) */}
            <div className={`w-full  relative z-10 lg:mt-10 lg:bg-transparent px-6 py-10 lg:p-0 lg:h-full flex flex-col justify-center ${contentClasses}`}>

                <div className={`flex flex-col w-full lg:w-auto lg:pl-15 ${responsivePaddingTop}`}>
                    
                    {tagline && (
                        <p className={`text-xs md:text-sm tracking-widest uppercase font-semibold mb-2 md:mb-4 text-white lg:${taglinecolor ? taglinecolor.replace('text-', '') : 'text-gray-900'}`}>
                            {tagline}
                        </p>
                    )}
                    
                    {/* Titre responsive */}
                    <h1 className={`text-3xl text-white  bg-w md:text-5xl lg:text-6xl font-serif leading-tight mb-4 ${responsiveTitleMargin} ${responsiveTextColor} ${font}`}> 
                        {title}
                    </h1>
                    
                    {/* Sous-titre responsive */}
                    {subtitle && (
                        <p className={`text-base text-white md:text-lg mb-6 md:mb-8 ${responsiveTextColor} ${font}`}>
                            {subtitle}
                        </p>
                    )}

                    {ctaText && (
                        <Link href={ctaLink} className="w-full lg:w-auto"> 
                           <button className={`py-3 px-5 mb-5 text-base lg:w-70 font-bold transition duration-300 cursor-pointer rounded-full  bg-white text-[#0A2342] hover:bg-[#0A2342] hover:text-white ${btnWidth} ${border} ${font}`}>
                                {ctaText}
                            </button>
                        </Link>
                    )}

                </div>
            </div>
        </div>
    );
};

export default Hero;
