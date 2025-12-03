'use client';

import React, { useState } from 'react';
import { IoIosAdd, IoIosClose } from 'react-icons/io'; 
import Hero from '@/components/Hero';
import Link from 'next/link';
import Image from 'next/image';

// Composant FAQItem (Déjà responsive grâce au flexbox, pas de changement majeur nécessaire)
interface FAQItemProps {
    question: string;
    answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-300 w-full">
            <button 
                className="flex justify-between items-center w-full py-4 text-left focus:outline-none group"
                onClick={() => setIsOpen(!isOpen)}>
                <span className="text-base md:text-lg font-normal text-gray-800 cursor-pointer hover:text-[#0A2342] transition-colors pr-4">{question}</span>
                {isOpen ? (
                    <IoIosClose className="text-2xl md:text-3xl text-gray-600 flex-shrink-0 cursor-pointer " />
                ) : (
                    <IoIosAdd className="text-2xl md:text-3xl text-gray-600 flex-shrink-0 cursor-pointer " />
                )}
            </button>
            {isOpen && (
                <div className="pb-4 text-sm md:text-base text-gray-600 transition-all duration-300 animate-in fade-in slide-in-from-top-1">
                    <p>{answer}</p>
                </div>
            )}
        </div>
    );
};

export default function DecouvrirCafe3() {

    // const customBlueButton = 'bg-[#266BBF] text-white hover:bg-[#8bb1e0]';
    const whiteButtonWithGrayText = 'bg-white text-gray-700 hover:bg-gray-300';
   
    const btn = 'lg:w-120 md:w-auto'; // Responsive button width

    const faqQuestions = [
        {
            question: "Comment la Technologie Bean Adapt fonctionne-t-elle sur ma Eletta Explore ?",
            answer: "La technologie Bean Adapt vous permet de personnaliser les réglages de mouture, la dose de café et la température d'infusion en fonction du type de grain que vous utilisez, afin d'assurer l'extraction parfaite des arômes de votre café."
        },
        {
            question: "Eletta Explore : qu'est-ce que la Technologie Cold Extraction ?",
            answer: "La Technologie Cold Extraction est un processus innovant qui utilise une basse pression et une température d'eau ambiante pour préparer un Cold Brew authentique en moins de 5 minutes, révélant les notes sucrées et florales des grains de café."
        },
        {
            question: "Combien de temps faut-il pour préparer une boisson Cold Brew avec Eletta Explore ?",
            answer: "Grâce à la technologie Cold Extraction, vous pouvez préparer une boisson Cold Brew Perfetto en moins de 5 minutes."
        },
        {
            question: "Quelle est la différence entre extraction à froid (Cold Brew) et café glacé (Iced Coffee) ?",
            answer: "L'extraction à froid (Cold Brew) est préparée à l'aide d'eau froide ou ambiante sur une longue période (ici accélérée par la technologie de la machine) pour obtenir un goût doux et naturellement sucré. Le café glacé (Iced Coffee) est généralement un espresso ou un café chaud versé sur de la glace, ce qui peut donner un goût plus amer ou dilué."
        },
        {
            question: "Où puis-je trouver des recettes créatives pour préparer des boissons Cold Brew ?",
            answer: "Vous pouvez trouver des recettes créatives et personnalisées directement sur l'écran intuitif de l'Eletta Explore, ou via l'application associée (si disponible)."
        },
    ];



    return (
        <div className="w-full overflow-x-hidden">
            <Hero 
                tagline="ELETTA EXPLORE"
                title={<>Votre univers café, prêt <br className="hidden md:block" /> à être exploré.</>}
                subtitle={<>Ce n&apos;est pas seulement parfait. C&apos;est Perfetto. <br className="hidden lg:block"/>Eletta Explore est votre passeport pour une variété illimitée d&apos;expériences café. <br className="hidden lg:block" /> Maîtrisez plus de 40 recettes chaudes, froides et révolutionnaires de Cold <br className="hidden lg:block" />Brew, d&apos;une simple pression sur un bouton. Votre grand voyage au cœur du <br className="hidden lg:block" />café en grain commence chez vous.</>}
                ctaText="Plongez dans un voyage au cœur des arômes"
                videoUrl="/cafe/video_cafe1.webm"
                textColor='text-white' 
                btnColor={whiteButtonWithGrayText}
                btnWidth={btn}
                border = "border border-gray-100"
            />

          {/* SECTION 1: LATTECREMA */}
          <section className="w-full mt-10 bg-gray-100 py-12 md:py-20">
             <div className="flex flex-col items-center px-4 lg:px-0">
                <span className="text-gray-500 font-medium tracking-wider text-xs md:text-sm text-center uppercase mb-4">
                   TECHNOLOGIES LATTECREMA HOT AND COOL
                </span>
                  <h2 className="font-medium text-2xl md:text-4xl text-center max-w-4xl mb-6 text-[#0A2342]">
                      LatteCrema Hot and Cool : une perfection crémeuse, quelle que soit la température.
                  </h2>
                  
                  <div className="w-full max-w-4xl mt-5 mb-8 px-4 md:px-0">
                    <video autoPlay loop muted playsInline className="w-full">
                        <source src="/cafe/video_cafe4.webm" type="video/webm" /> 
                    </video>
                  </div>

                  <p className="text-base md:text-lg pb-5 text-center px-4 lg:px-40 text-gray-600 leading-relaxed max-w-5xl">
                      Notre technologie pionnière LatteCrema Hot & Cool est tout simplement magique. Elle produit automatiquement une mousse riche, dense et veloutée à la température idéale, chaude ou froide, pour votre boisson. Savourez une mousse crémeuse et parfaite sur toutes vos boissons lactées préférées, y compris les alternatives végétales*.
                  </p>
             </div>
          </section>

          {/* SECTION 2: COLD EXTRACTION */}
          <section className="w-full py-12 md:py-20">
             <div className="flex flex-col items-center px-4 lg:px-0">
                <span className="text-gray-500 font-medium tracking-wider text-xs md:text-sm text-center uppercase mb-4">
                   TECHNOLOGIE COLD EXTRACTION                
                </span>
                  <h2 className="font-medium text-2xl md:text-4xl text-center max-w-4xl mb-6 text-[#0A2342]">
                      Votre Cold Brew Perfetto en moins de 5 minutes.
                  </h2>
                  
                  <div className="w-full max-w-4xl mt-5 mb-8 px-4 md:px-0">
                    <video autoPlay loop muted playsInline className="w-full">
                        <source src="/cafe/video_cafe5.webm" type="video/webm" /> 
                    </video>
                  </div>

                  <p className="text-base md:text-lg pb-5 text-center px-4 lg:px-40 text-gray-600 leading-relaxed max-w-5xl">
                      Découvrez un nouvel univers d&apos;arômes. Révélez toutes les notes sucrées et florales de vos grains et créez un Cold Brew authentiquement doux et rafraîchissant grâce à notre technologie Cold Extraction exclusive, qui utilise un processus doux à basse pression. C&apos;est une révélation gustative, prête en quelques minutes, pas en plusieurs heures.
                  </p>
             </div>
          </section>

          
          {/* SECTION 3: ECRAN COULEUR */}
          <section className="w-full bg-gray-100 py-12 md:py-20">
             <div className="flex flex-col items-center px-4 lg:px-0">
                <span className="text-gray-500 font-medium tracking-wider text-xs md:text-sm text-center uppercase mb-4">
                   AFFICHAGE COULEUR INTUITIF
                </span>
                  <h2 className="font-medium text-2xl md:text-4xl text-center mb-6 text-[#0A2342]">
                      Profitez de l&apos;expérience
                  </h2>
                  
                  <div className="w-full max-w-4xl mt-5 mb-8 px-4 md:px-0">
                    <video autoPlay loop muted playsInline className="w-full">
                        <source src="/cafe/video_cafe6.webm" type="video/webm" /> 
                    </video>
                  </div>

                  <p className="text-base md:text-lg pb-8 text-center px-4 lg:px-40 text-gray-600 leading-relaxed max-w-5xl">
                      Explorez facilement et intuitivement le menu et sélectionnez votre prochaine boisson grâce à l&apos;écran couleur de 3,5 pouces doté de commandes tactiles.
                  </p>

                  <button className="border border-[#0A2342] font-bold rounded-full px-8 py-3 hover:bg-[#0A2342] cursor-pointer hover:text-white transition duration-300 bg-white">
                      Trouvez votre Eletta Explore
                  </button>
             </div>
          </section>
          

            {/* SECTION 4: TEXTE INTRODUCTION GRILLE */}
            <div className="flex flex-col px-6 lg:px-32 items-center text-center py-12 md:py-20">
                  <h2 className="font-medium text-2xl md:text-3xl uppercase text-[#0A2342]">
                      Votre café Perfetto nécessite une machine Perfetto.
                  </h2>
                  <p className="text-base md:text-lg pt-4 md:pt-8 text-gray-600">
                      Découvrez l&apos;expérience Eletta Explore.
                  </p>
            </div>

            {/* SECTION 5: GRILLE 4 COLONNES */}
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-6 lg:px-24 gap-8 mb-12">

                <div className="flex flex-col gap-4 text-center lg:text-left">
                    <Image src="/cafe/decouvrir_cafe3.avif" alt="Bean Adapt" width={400} height={300} className="w-full h-auto object-cover" />
                    <h3 className="font-medium text-xl text-[#0A2342]">
                        Savourez votre café Perfetto, du grain à la tasse
                    </h3>
                    <p className="text-sm text-gray-600">
                        Assurez-vous d&apos;extraire parfaitement tous les arômes de vos cafés préférés grâce à la technologie Bean Adjust. 
                        Vous pouvez facilement adapter les réglages pour préserver et révéler tous les arômes, quelle que soit votre variété de café préférée.
                    </p>
                </div>

                <div className="flex flex-col gap-4 text-center lg:text-left">
                    <Image src="/cafe/decouvrir_cafe3_1.avif" alt="To Go" width={400} height={300} className="w-full h-auto object-cover" />
                    <h3 className="font-medium text-xl text-[#0A2342]">
                       Préparez votre café à emporter
                    </h3>
                    <p className="text-sm text-gray-600">
                        Emportez votre boisson partout avec vous en choisissant parmi trois tailles de café (jusqu&apos;à 47 cl) : 
                        la fonction To-Go avec plateau ajustable est conçue pour remplir parfaitement votre tasse de voyage préférée.
                    </p>
                </div>

                <div className="flex flex-col gap-4 text-center lg:text-left">
                    <Image src="/cafe/decouvrir_cafe3_2.avif" alt="Vegetal" width={400} height={300} className="w-full h-auto object-cover" />
                    <h3 className="font-medium text-xl text-[#0A2342]">
                       Savourez des boissons végétales parfaites
                    </h3>
                    <p className="text-sm text-gray-600">
                        Dégustez une mousse riche et crémeuse, y compris pour des boissons végétales*. Que vous souhaitiez une boisson 
                        chaude ou froide, Eletta Explore permet d&apos;obtenir un goût et une texture exceptionnels, à chaque fois.
                    </p>
                </div>

                <div className="flex flex-col gap-4 text-center lg:text-left">
                    <Image src="/cafe/decouvrir_cafe3_3.avif" alt="Clean" width={400} height={300} className="w-full h-auto object-cover" />
                    <h3 className="font-medium text-xl text-[#0A2342]">
                        Une machine propre sans effort
                    </h3>
                    <p className="text-sm text-gray-600">
                       La grille égouttoir et la carafe à lait étant amovibles et compatibles avec le lave-vaisselle, il est très 
                       simple de garder votre Eletta Explore parfaitement propre.
                    </p>
                </div>

            </section>
           
            {/* SECTION 6: FAQ */}
            <section className="bg-gray-100 py-12 md:py-20 mt-10 px-4 md:px-8">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 uppercase text-[#0A2342]">
                        FAQ
                    </h2>
                    <div className="w-full px-4 md:px-8 py-2">
                        {faqQuestions.map((item, index) => (
                            <FAQItem 
                                key={index} 
                                question={item.question} 
                                answer={item.answer} 
                            />
                        ))}
                    </div>
                </div>
            </section>
            
            {/* SECTION 7: CTA FINAL */}
            <section className="w-full mt-16 mb-20 px-6 lg:px-32">
             <div className="flex flex-col items-center text-center">
                <span className="text-gray-500 font-medium tracking-wider text-sm uppercase">
                   VOTRE CHOIX PERFETTO
                </span>
                  <h2 className="font-medium text-3xl md:text-5xl lg:text-6xl text-center pt-6 pb-6 text-[#0A2342] leading-tight">
                      Découvrez la gamme complète des expresso broyeurs automatiques
                  </h2>
                  <p className="text-lg pb-8 text-center px-4 lg:px-24 text-gray-600">
                      Un large éventail d&apos;options pour tous les goûts en matière de café
                  </p>

                  <button className="font-bold rounded-full px-8 py-3 bg-[#0A2342] hover:bg-white cursor-pointer hover:text-[#0A2342] border-2 text-white transition duration-300 transform hover:-translate-y-1">
                      Découvrez le vôtre
                  </button>
             </div>
          </section>


        </div>
    );
}
