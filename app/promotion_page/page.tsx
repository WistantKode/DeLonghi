'use client';

import React from 'react';
import Hero from '@/components/Hero';
import Link from 'next/link';
import Image from 'next/image';

export default function PromotionPage() {

    // const customBlueButton = 'bg-[#266BBF] text-white hover:bg-[#8bb1e0]';
    // const whiteButtonWithGrayText = 'bg-white text-gray-700 hover:bg-gray-300';
    

    return (
        <div className="w-full overflow-x-hidden font-sans antialiased">
            <Hero 
                title={<>Offres et<br /> promotionsDe&apos;Longhi </>}
                subtitle={<>Découvrez les offres sur les machines à café et plus encore</>}
                imageUrl="/cafe/promo1.avif"
                textColor='text-black' 
            />
          
            {/* TEXTE CENTRÉ 1 */}
            <div className="flex flex-col px-6 lg:px-32 items-center text-center py-12 lg:py-20">
                
                  <h2 className="font-medium text-2xl lg:text-3xl text-[#0A2342]">
                      Offres spéciales De&apos;Longhi ?
                  </h2>
                  <p className="text-base lg:text-lg pt-4 lg:pt-8 max-w-4xl text-gray-700">
                      Profitez de promotions sur les machines à café, les climatiseurs et autres produits De&apos;Longhi. <br /> Préparez-vous à économiser sur de nombreux produits.
                  </p>
            </div>

            {/* TEXTE CENTRÉ 2 */}
            <div className="flex flex-col px-6 lg:px-32 items-center text-center pb-10">
                  <h2 className="font-medium text-2xl lg:text-3xl text-[#0A2342]">
                      Découvrez les meilleures offres De&apos;Longhi
                  </h2>
               
            </div>

            
            {/* SECTION 1: HALLOWEEN (Texte Gauche, Image Droite) */}
            <section className="w-full flex flex-col lg:flex-row gap-8 lg:gap-16 mt-16 lg:px-20">

                <div className="flex flex-col justify-center w-full lg:w-1/2 gap-4 lg:pr-6">
                    <span className="text-gray-500 font-medium uppercase tracking-wider text-sm">
                       DE&apos;LONGHI PROMOTIONS D&apos;HALLOWEEN
                    </span>
                    <h2 className="font-medium text-2xl lg:text-3xl text-[#0A2342]">
                        Ne manquez pas les offres d&apos;Halloween !
                    </h2>
                    <p className="text-base lg:text-lg text-gray-700">
                        Votre maison mérite un coup de boost pour Halloween ! Profitez de -15 % sur une sélection de produits. Découvrez des offres exclusives et trouvez les produits parfaits pour une routine ensorcelante. Utilisez le code SCARYSALES au moment du paiement.
                    </p>

                    <button className="border border-gray-400 font-bold rounded-full w-40 p-2 bg-white hover:bg-[#266BBF] cursor-pointer hover:text-white transition-colors">
                        Shop now
                    </button>

                </div>

                <div className="w-full lg:w-1/2 flex items-center justify-center">
                    <img src="cafe/promo2.avif" alt="Promotion Halloween" className="w-full h-auto object-cover" /> 
                </div>


            </section>

            {/* SECTION 2: COFFEE CLUB (Image Gauche, Texte Droite) - Inversion pour zig-zag */}
            <section className="w-full flex flex-col-reverse lg:flex-row gap-8 lg:gap-16 mt-16 lg:px-20">

                <div className="w-full lg:w-1/2 flex items-center justify-center">
                    <img src="cafe/promo3.avif" alt="Promotion Coffee Club" className="w-full h-auto object-cover" /> 
                </div>

                <div className="flex flex-col justify-center w-full lg:w-1/2 gap-4 lg:pr-6">
                    <span className="text-gray-500 font-medium uppercase tracking-wider text-sm">
                    AFFICHAGE COULEUR INTUITIF
                    </span>
                    <h2 className="font-medium text-2xl lg:text-3xl text-[#0A2342]">
                    Découvrez le café Perfetto. Rejoignez le club & recevez un cadeau exclusif
                    </h2>
                    <p className="text-base lg:text-lg text-gray-700">
                    En achetant une des machines à café de notre sélection de produits, vous recevrez un cadeau exclusif
                    </p>

                    <button className="border border-gray-400 font-bold rounded-full w-48 p-2 bg-white hover:bg-[#266BBF] cursor-pointer hover:text-white transition-colors">
                         Bénéficier de l&apos;offre
                    </button>

                </div>


            </section>

            {/* SECTION 3: RENOVA (Texte Gauche, Image Droite) */}
            <section className="w-full flex flex-col lg:flex-row gap-8 lg:gap-16 mt-16 lg:px-20">

                <div className="flex flex-col justify-center w-full lg:w-1/2 gap-4 lg:pr-6">
                    <span className="text-gray-500 font-medium uppercase tracking-wider text-sm">
                        DE&apos;LONGHI RENOVA
                    </span>
                    <h2 className="font-medium text-2xl lg:text-3xl text-[#0A2342]">
                        Réduire les déchets et économiser jusqu&apos;à 30%
                    </h2>
                    <p className="text-base lg:text-lg text-gray-700">
                        Vous cherchez des offres De&apos;Longhi ? Changez de point de vue et découvrez notre sélection de produits reconditionnés. Faisons ensemble un pas vers un avenir meilleur.
                    </p>
                    <button className="border border-gray-400 font-bold rounded-full w-40 p-2 bg-white hover:bg-[#266BBF] cursor-pointer hover:text-white transition-colors">
                        Découvrez plus
                    </button>
                </div>

                <div className="w-full lg:w-1/2 flex items-center justify-center">
                    <img src="cafe/promo4.avif" alt="Produits reconditionnés" className="w-full h-auto object-cover" /> 
                </div>


            </section>

            {/* SECTION 4: OUTLET (Image Gauche, Texte Droite) - Inversion pour zig-zag */}
            <section className="w-full flex flex-col-reverse lg:flex-row gap-8 lg:gap-16 mt-16 lg:px-20 pb-20">
                
                <div className="w-full lg:w-1/2 flex items-center justify-center">
                    <img src="cafe/promo5.avif" alt="Outlet De'Longhi" className="w-full h-auto object-cover" /> 
                </div>

                <div className="flex flex-col justify-center w-full lg:w-1/2 gap-4 lg:pr-6">
                    <span className="text-gray-500 font-medium uppercase tracking-wider text-sm">
                        Outlet De&apos;Longhi
                    </span>
                    <h2 className="font-medium text-2xl lg:text-3xl text-[#0A2342]">
                        Explorez et combinez les meilleures offres, à tout moment
                    </h2>
                    <p className="text-base lg:text-lg text-gray-700">
                        Découvrez l&apos;Oulet De&apos;Longhi : des offres sur les machines à café, bouilloires, grille-pains et bien plus encore. Trouvez le produit idéal pour vous, à tout moment.
                    </p>
                    <button className="border border-gray-400 font-bold rounded-full w-32 p-2 bg-white hover:bg-[#266BBF] cursor-pointer hover:text-white transition-colors">
                        Sortie
                    </button>
                </div>

            </section>

        </div>
    );
};
