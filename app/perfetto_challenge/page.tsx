'use client';

import React, { useState } from 'react';
import { IoIosArrowForward,IoIosAdd, IoIosClose } from 'react-icons/io'; 
import Hero from '@/components/Hero';
import Link from 'next/link';
import Image from 'next/image';

// Composant FAQItem 
const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-300 w-full">
            <button 
                className="flex justify-between items-center w-full py-4 text-left focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}>
                <span className="text-lg font-normal text-gray-800">{question}</span>
                {isOpen ? (
                    <IoIosClose className="text-3xl text-gray-600 transition-transform duration-300" />
                ) : (
                    <IoIosAdd className="text-3xl text-gray-600 transition-transform duration-300" />
                )}
            </button>
            {isOpen && (
                <div className="pb-4 text-gray-600 transition-all duration-300">
                    <p>{answer}</p>
                </div>
            )}
        </div>
    );
};

export default function PerfettoChallenge() {

    // const customBlueButton = 'bg-[#266BBF] text-white hover:bg-[#8bb1e0]';
    // const whiteButtonWithGrayText = 'bg-white text-gray-700 hover:bg-gray-300';


    return (
        <div className="w-full overflow-x-hidden">
            <Hero 
                tagline="LE DÉFI PERFETTO !"
                title={<>Brad a réussi. Vous  <br /> pouvez clairement y  <br /> arriver.</>}
                subtitle={<> Brad Pitt a réussi à parler italien. A votre tour de jouer.</>}
                videoUrl="cafe/video_cafe1.webm"
                textColor='text-white' 
                font= "bold"
            />

            {/* SECTION 1 : IMAGE GAUCHE / TEXTE DROITE */}
            <section className="w-full flex flex-col lg:flex-row gap-10 lg:gap-20 mt-10 lg:px-20">
                        
                <div className="w-full lg:w-1/2">
                    <img src="cafe/perfetto_challenge1.avif" alt="Défi Brad Pitt" className="w-full h-auto object-cover" /> 
                </div>

                <div className="flex flex-col justify-center w-full lg:w-1/2 gap-6 text-center lg:text-left">
                
                    <h2 className="font-medium text-2xl lg:text-3xl text-[#0A2342]">
                       Vous pensez pouvoir égaler la performance de Brad ? Faites de votre mieux.
                    </h2>
                    <p className="text-base lg:text-lg text-gray-600">
                      Montrez-nous vos compétences en italien. Vous avez 3 essais. Peu importe votre accent italien, vous aurez une chance de remporter jusqu’à -30% de remise sur votre prochaine machine à café De’Longhi.
                    </p>
                    <div>
                        <button className="border border-[#0A2342] font-bold rounded-full px-8 py-3 bg-white hover:bg-[#0A2342] cursor-pointer hover:text-white transition-colors">
                            Jouer dès maintenant
                        </button>
                   </div>

                </div>

            </section>

            {/* SECTION 2 : TEXTE GAUCHE / IMAGE DROITE (Fond Gris) */}
            <section className="w-full flex flex-col lg:flex-row gap-10 lg:gap-20 mt-10 lg:px-20 bg-gray-100 py-10 lg:py-20 mb-10">
                
                <div className="flex flex-col justify-center w-full lg:w-1/2 gap-6 text-center lg:text-left">
                    <span className="text-gray-500 font-medium uppercase tracking-wider">
                       VOICI COMMENT JOUER
                    </span>
                    <h2 className="font-medium text-2xl lg:text-3xl text-[#0A2342]">
                       Accent Perfetto. Récompenses Perfetto
                    </h2>
                    
                    <div className="space-y-4 text-base lg:text-lg text-gray-600">
                        <p>
                          Écoutez le guide audio et appuyez sur Enregistrer ! Répétez une des phrases suivantes avec votre meilleur accent italien. N’oubliez pas de parler avec les mains, à l’italienne !
                        </p>

                        <p className="italic font-medium text-gray-800">
                          Mamma mia, che caffè al bacio ! (Mamma mia, quel bon café !)
                        </p>

                        <p className="italic font-medium text-gray-800">
                          Mmmm... questo è un caffè perfetto ! (Mmmm... quel café parfait !)
                        </p>

                        <p className="italic font-medium text-gray-800">
                          È ora di una bella pausa caffè ! (C’est l’heure du café !)
                        </p>

                        <p>
                           Savourez cette récompense. Si vous avez de la chance, vous pourriez profiter d’une remise allant jusqu’à 30 %* sur votre prochaine commande De’Longhi.
                        </p>

                        <p>
                           N’oubliez pas de partager le plaisir et de parler de ce défi à vos amis !
                        </p>
                    </div>

                    <div className="pt-4 flex justify-center lg:justify-start">
                        <button className="border  font-bold rounded-full px-8 py-3 hover:bg-[#0A2342] cursor-pointer hover:text-white transition-colors bg-white">
                            Participer au défi Perfetto
                        </button>
                    </div>
                </div>

                <div className="w-full lg:w-1/2 flex items-center justify-center">
                    <img src="cafe/perfetto_challenge2.avif" alt="Comment jouer" className="w-full h-auto object-cover" /> 
                </div>
            </section>

            {/* FOOTER LINKS */}
            <section className="px-4 lg:px-32 pb-10 text-center lg:text-left">
                <Link href="/terms_challenge" className="underline text-[#0A2342] hover:text-blue-800 block mb-2" target="_blank" rel="noopener noreferrer">
                    Des conditions générales s&apos;appliquent 
                </Link>
                <p className="text-sm text-gray-500">
                    Chaque joueur n’a droit qu’à une seule récompense, qui peut aller de 10 à 30 % de remise, utilisable pour une seule commande. Il est permis aux joueurs de participer plusieurs fois (jusqu’à 10 tentatives), mais leur récompense ne changera pas.
                </p>
            </section>

        </div>
    );
};
