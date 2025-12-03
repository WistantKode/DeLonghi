'use client';

import React from 'react'; 
import ProductDescriptionSection from '@/components/ProductDescriptionSection'; 
import { Product } from '@/types/product';

const productData: Product = {
    id: 1,
    name: "LatteCrema Cool upgrade Set",
    subtitle: "Pichets à lait automatiques",
    rating: 4.8,
    reviews: 72,
    reference: "DLSC032",
    color: "Non spécifié",
    price: "99,90",
    taxInfo: "TVA incluse",
    klarna: {
        payment: "33,30",
        interest: "0 %",
        link: "#"
    },
    
    images: [
        "/accessoires/decouvrir1.avif",
        "/accessoires/decouvrir1_1.avif",
        "/accessoires/decouvrir1_2.avif",
        "/accessoires/decouvrir1_3.avif",
        "/accessoires/decouvrir1_4.avif",
        "/accessoires/decouvrir1_4.avif",
        "/accessoires/decouvrir1_5.avif",
    ]
};

export default function DecouvrirAccessoires1() {
    
    return (
        <div className="font-sans antialiased text-gray-800 bg-white mt-24 lg:mt-40 overflow-x-hidden">
            
            <ProductDescriptionSection product={productData} />

            {/* SECTION 1 : TEXTE GAUCHE / IMAGE DROITE */}
            <section className="w-full flex flex-col lg:flex-row gap-10 lg:gap-24 mt-12 lg:mt-20 px-4 lg:px-24">
              
              <div className="flex flex-col justify-center w-full lg:w-[40%] gap-6">
            
                  <p className="text-base lg:text-lg leading-relaxed text-gray-700">
                    Si vous possédez déjà un expresso broyeur automatique De’Longhi avec technologie LatteCrema Hot, votre expérience café s&apos;apprête à devenir plus rafraîchissante.
                    Découvrez le LatteCrema Cool Upgrade Set en exclusivité. Il vous permet de débloquer automatiquement 6 recettes uniques de boissons froides pour votre expresso broyeur automatique. Il vous suffit de placer la carafe à lait sur votre machine Rivelia pour débloquer 6 nouvelles recettes froides: Cappuccino, Latte Macchiato, Caffelatte, Cappuccino Mix, Flat White et Lait froid.
                    Et pour assurer une dégustation optimale, la carafe est accompagnée de quatre verres à double parois, parfaits pour garder vos boissons fraîches, ainsi qu&apos;un livre de recettes inspirantes.
                  </p>


                  <ul className="list-disc pl-5 space-y-2 text-base lg:text-lg text-gray-700 font-medium">
                    <li> Carafe LatteCrema Cool </li>
                    <li> 2 verres double parois de 400 m </li>
                    <li> 2 verres double parois de 480 ml </li>
                    <li>  Livre de recettes</li>
                    <li> Compatible avec les modèles EXAM440.55 et ECAM630.55</li>
                  </ul>

               </div>

               <div className="w-full lg:w-[60%]">
                     <img src="/accessoires/decouvrir1_4.avif" alt="Accessoires" className="w-full h-auto object-cover" /> 
               </div>


           </section>

           {/* SECTION 2 : IMAGE GAUCHE / TEXTE DROITE */}
           <section className="w-full flex flex-col-reverse lg:flex-row gap-10 lg:gap-24 mt-16 lg:mt-24 px-4 lg:px-24 mb-16 lg:mb-24">

                <div className="w-full lg:w-[60%]">
                    <img src="/accessoires/decouvrir1_5.avif" alt="Technologie Cool" className="w-full h-auto object-cover" /> 
               </div>

              
              <div className="flex flex-col justify-center w-full lg:w-[40%] gap-4">

                  <h2 className="font-medium text-2xl lg:text-3xl text-[#0A2342]"> Technologie LatteCrema Cool </h2>
            
                  <p className="text-base lg:text-lg leading-relaxed text-gray-700">
                        Grâce aux commandes électroniques de haute précision,la technologie LatteCrema Cool offre automatiquement une mousse riche,crémeuse et 
                        durable,à la température parfaite,jusqu’à la dernière goutte. Dégustez toutes vos boissons à base de lait préférées à base de lait de vache 
                        ou de boisson végétale* d’une simple pression sur un bouton.
                  </p>

               </div>

           </section>

           {/* TITRE FEATURES */}
            <h2 className="font-medium text-2xl lg:text-3xl uppercase text-center px-4">
                 Principales caractéristiques
            </h2>
            
            {/* GRILLE FEATURES */}
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-6 lg:px-24 gap-8 lg:gap-12 mt-10 lg:mt-16 mb-20">

                <div className="flex flex-col gap-4 items-center lg:items-start text-center lg:text-left">
                    <img src="/accessoires/decouvrir1_6.avif" alt="Bean Adjust" className="w-full h-auto object-cover" />
                    <h3 className="font-medium text-xl text-[#0A2342]">
                        Savourez votre café Perfetto, du grain à la tasse
                    </h3>
                    <p className="text-sm text-gray-600">
                        Assurez-vous d&apos;extraire parfaitement tous les arômes de vos cafés préférés grâce à la technologie Bean Adjust. 
                        Vous pouvez facilement adapter les réglages pour préserver et révéler tous les arômes, quelle que soit votre variété de café préférée.
                    </p>
                </div>

                <div className="flex flex-col gap-4 items-center lg:items-start text-center lg:text-left">
                    <img src="/accessoires/decouvrir1_7.avif" alt="To Go" className="w-full h-auto object-cover" />
                    <h3 className="font-medium text-xl text-[#0A2342]">
                       Préparez votre café à emporter
                    </h3>
                    <p className="text-sm text-gray-600">
                        Emportez votre boisson partout avec vous en choisissant parmi trois tailles de café (jusqu&apos;à 47 cl) : 
                        la fonction To-Go avec plateau ajustable est conçue pour remplir parfaitement votre tasse de voyage préférée.
                    </p>
                </div>

                <div className="flex flex-col gap-4 items-center lg:items-start text-center lg:text-left">
                    <img src="/accessoires/decouvrir1_8.avif" alt="Boissons végétales" className="w-full h-auto object-cover" />
                    <h3 className="font-medium text-xl text-[#0A2342]">
                       Savourez des boissons végétales parfaites
                    </h3>
                    <p className="text-sm text-gray-600">
                        Dégustez une mousse riche et crémeuse, y compris pour des boissons végétales*. Que vous souhaitiez une boisson 
                        chaude ou froide, Eletta Explore permet d’obtenir un goût et une texture exceptionnels, à chaque fois.
                    </p>
                </div>

                <div className="flex flex-col gap-4 items-center lg:items-start text-center lg:text-left">
                    <img src="/accessoires/decouvrir1_9.avif" alt="Nettoyage" className="w-full h-auto object-cover" />
                    <h3 className="font-medium text-xl text-[#0A2342]">
                        Une machine propre sans effort
                    </h3>
                    <p className="text-sm text-gray-600">
                       La grille égouttoir et la carafe à lait étant amovibles et compatibles avec le lave-vaisselle, il est très 
                       simple de garder votre Eletta Explore parfaitement propre.
                    </p>
                </div>

            </section>            


        </div>
    );
};
