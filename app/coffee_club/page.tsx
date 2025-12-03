'use client';

import React from 'react';
import Hero from '@/components/Hero';
import Link from 'next/link';
import Image from 'next/image';

export default function CoffeeClub() {

    // const customBlueButton = 'bg-[#266BBF] text-white hover:bg-[#8bb1e0]';
    const whiteButtonWithGrayText = 'bg-white text-gray-700 hover:bg-gray-300';
    // const coffeeMachineStyle = {
    //     backgroundImage: 'url("bg1.jpg")', 
    //     backgroundSize: 'cover',
    //     backgroundPosition: 'center',
    // };

    return (
        <div className="w-full overflow-x-hidden font-sans">
            <Hero 
                title={<>Profitez d&apos;un cadeau <br className="hidden md:block"/> exclusif d&apos;une valeur de <br className="hidden md:block"/> 70€</>}
                subtitle={<>pour l&apos;achat d&apos;une machine à café parmi notre sélection sur notre site internet. <br/>Le kit sera automatiquement ajouté à votre panier.<br/>Offre valable du 05 septembre au 08 janvier 2026</>}
                ctaText="Profitez de l'offre maintenant"
                imageUrl="/cafe/1.png"
                textColor='text-white' 
                font="font-bold"
                btnColor={whiteButtonWithGrayText}
                border = "border border-gray-200"
            />

            {/* SECTION 1 : IMAGE GAUCHE / TEXTE DROITE */}
            <section className="w-full flex flex-col lg:flex-row gap-10 lg:gap-20 mt-10 lg:mt-16 mb-10 lg:px-20">
               
               <div className="w-full lg:w-1/2">
                  <Image src="/promotions/promotion3.avif" alt="Promotion" width={800} height={600} className="w-full h-auto object-cover" /> 
               </div>
               
               <div className="flex flex-col justify-center w-full lg:w-1/2 gap-4">
                
                  <h2 className="font-medium text-2xl lg:text-3xl text-[#0A2342]">
                      Avez-vous acheté votre machine De&apos;Longhi chez un revendeur éligible ?
                  </h2>
                  <p className="text-base lg:text-lg underline text-gray-600 font-medium">
                     Promotion valable sur les produits achetés entre le 01.11.2025 et le 02.01.2026, Fin de participation au 09.01.2026
                  </p> 

                   <ul className="list-disc pl-5 text-gray-700 text-base lg:text-lg space-y-3">
                       <li>
                           <strong>Vérifiez l&apos;éligibilité de votre produit</strong> parmi la liste de produits ci-dessous et lisez l&apos;intégralité des 
                           <Link href="/coffee_clubkit" className="underline px-1 text-[#266BBF] hover:text-[#8bb1e0]"> 
                                Conditions Générales 
                           </Link> 
                           pour savoir si votre achat est éligible. 
                       </li>
                       <li><strong>Enregistrez votre produit</strong> et fournissez la preuve d&apos;achat ainsi qu&apos;un numéro de série valide lors de l&apos;inscription, sous peine de voir votre demande rejetée.</li>
                       <li><strong>Après avoir enregistré votre produit,</strong> vous accéderez à un formulaire supplémentaire pour fournir les détails nécessaires afin de finaliser votre demande.*</li>
                       <li><strong>Votre demande sera examinée dans un délai de 6 semaines,</strong> et vous serez informé(e) du résultat. </li>
                   </ul>

                   <div className="flex justify-center lg:justify-start mt-6">
                        <Link href="">
                            <button className="w-full sm:w-auto border bg-white border-gray-200 text-black text-base py-3 px-8 rounded-full font-semibold hover:bg-[#266BBF] hover:text-white hover:border-[#266BBF] transition-all cursor-pointer">
                                Recevoir mon cadeau maintenant
                            </button>
                        </Link>
                   </div>
               </div>
            </section>

            {/* PETITE NOTE */}
            <p className="px-4 lg:px-20 text-sm text-gray-500 italic mb-12">
                *Si vous ne voyez pas ce formulaire ou que vous n&apos;y avez pas accès au moment de l&apos;enregistrement de votre produit, vous recevrez un e-mail de rappel avec un lien vers ce formulaire dans les heures qui suivent.
            </p>

            {/* SECTION 2 : VIDEO GAUCHE / TEXTE DROITE */}
            <section className="w-full flex flex-col lg:flex-row gap-10 lg:gap-20 mb-20 lg:px-20">
               
               <div className="w-full lg:w-1/2">
                  <video autoPlay loop muted playsInline className="w-full h-auto" >
                     <source src="/cafe/video_cafe11.webm" type="video/webm" /> 
                  </video>
               </div>

               <div className="flex flex-col justify-center w-full lg:w-1/2 gap-6">
                  <h2 className="font-medium text-2xl lg:text-3xl text-[#0A2342]">
                    Votre cadeau: d&apos;une valeur de 70€ pour maîtriser l&apos;art du café Perfetto
                  </h2>
                  <p className="text-base lg:text-lg text-gray-700">
                    Votre cadeau exclusif n&apos;est pas seulement un coffret de produits, c&apos;est votre kit de démarrage pour maîtriser l&apos;art du café Perfetto. À l&apos;intérieur, vous trouverez:
                  </p>
                   <ul className="list-disc pl-5 text-gray-700 space-y-2 text-base lg:text-lg">
                       <li> <strong> Deux tasses à expresso et cappuccino raffinées:</strong> parce qu&apos;un café Perfetto mérite d&apos;être mis en valeur.  </li>
                       <li><strong>Deux paquets de 250 g de café De&apos;Longhi Crema 100% Arabica:</strong> une onctuosité si riche que cela en devient presque un secret.</li>
                       <li><strong>Deux paquets de 250 g de café De&apos;Longhi Selezione:</strong>  un mélange si audacieux qu&apos;il mérite toute votre attention.</li>
                   </ul>
               </div>
            </section>


            {/* SECTION 3 : GRILLE D'IMAGES */}
            <section className="w-full lg:px-20 mb-20">
               <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-center mb-12 text-[#0A2342]">
                   Choisissez votre machine à café, et demandez votre cadeau.
               </h1>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                   <div className="flex justify-center">
                      <Image src="/cafe/coffeeclub1.png" alt="Machine à café 1" width={600} height={400} className="max-w-full h-auto hover:scale-105 transition-transform duration-300" />
                   </div>

                   <div className="flex justify-center">
                       <Image src="/cafe/coffeeclub2.png" alt="Machine à café 2" width={600} height={400} className="max-w-full h-auto hover:scale-105 transition-transform duration-300" /> 
                   </div>
               </div>

                <div className="flex justify-center">
                    <Link href="">
                        <button className="w-full border sm:w-auto bg-[#0A2342] text-white text-lg py-3 px-10 rounded-full font-bold hover:bg-white hover:text-[#0A2342] transition-colors cursor-pointer transform active:scale-95">
                             Bénéficiez de l&apos;offre dès maintenant
                        </button>
                    </Link>
                </div>
            </section>

        </div>
    );
};
