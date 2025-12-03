import React from 'react';
import { IoIosArrowForward } from 'react-icons/io'; 
import Hero from '@/components/Hero';
import Link from 'next/link';
import Image from 'next/image';
import FAQItem from '@/components/shared/FAQItem'; // Import the new Client Component

export default async function PerfettoChallenge() { // Made async for potential future server-side data fetching

    // const customBlueButton = 'bg-[#266BBF] text-white hover:bg-[#8bb1e0]';
    // const whiteButtonWithGrayText = 'bg-white text-gray-700 hover:bg-gray-300';

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
                tagline="LE DÉFI PERFETTO !"
                title={<>Brad a réussi. Vous  <br /> pouvez clairement y  <br /> arriver.</>}
                subtitle={<> Brad Pitt a réussi à parler italien. A votre tour de jouer.</>}
                videoUrl="/cafe/video_cafe1.webm"
                textColor='text-white' 
                font= "bold"
            />

            {/* SECTION 1 : IMAGE GAUCHE / TEXTE DROITE */}
            <section className="w-full flex flex-col lg:flex-row gap-10 lg:gap-20 mt-10 lg:px-20">
                        
                <div className="w-full lg:w-1/2">
                    <Image src="/cafe/perfetto_challenge1.avif" alt="Défi Brad Pitt" width={800} height={600} className="w-full h-auto object-cover" /> 
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
                    <Image src="/cafe/perfetto_challenge2.avif" alt="Comment jouer" width={800} height={600} className="w-full h-auto object-cover" /> 
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

            {/* FAQ Section */}
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

        </div>
    );
};
