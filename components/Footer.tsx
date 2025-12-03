'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FaShippingFast, FaRedo, FaLock, FaCreditCard, FaApple, FaGooglePlay, FaAngleDown, FaYoutube } from 'react-icons/fa'; 
import { BsQuestionCircle } from "react-icons/bs";
import { FaBookOpenReader, FaFacebookF, FaInstagram } from "react-icons/fa6";
import { LiaHeadsetSolid } from "react-icons/lia";
import { PiMapPinAreaLight } from "react-icons/pi";

const Footer = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <footer className="w-full">
      {/* section services */}
      <section className=" bg-[#0A2342] text-white"> 
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6"> 
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 px-4 sm:px-6 lg:px-8"> 
            <div className="flex flex-col items-center p-4 text-center">
              <div className="mb-4">
                <FaShippingFast className="w-8 h-8 " />
              </div>
              <p className="text-sm md:text-base font-semibold mb-1 "> Livraison standard gratuite pour tout achat supérieur à 39€ </p> 
              <span className="text-xs md:text-sm "> Livraison dans les 2-4 jours ouvrés </span> 
            </div>

            <div className="flex flex-col items-center text-center p-4">
              <div className="mb-4">
                <FaRedo className="w-8 h-8 " /> 
              </div>
              <p className="text-sm md:text-base font-semibold mb-1 "> Retours Gratuits </p> 
              <span className="text-xs md:text-sm "> 30 jours pour retours simples et efficaces </span> 
            </div>

            <div className="flex flex-col items-center text-center p-4">
              <div className="mb-4">
                <FaLock className="w-8 h-8 " /> 
              </div>
              <p className="text-sm md:text-base font-semibold mb-1 "> Sécurisés </p> 
              <span className="text-xs md:text-sm "> FINANCEMENT - Paiement jusqu'à 3 fois </span> 
            </div>

            <div className="flex flex-col items-center text-left p-4">
              <div className="mb-4">
                <FaCreditCard className="w-8 h-8 " /> 
              </div>
              <p className="text-sm md:text-base font-semibold mb-1 "> Klarna </p> 
              <span className="text-xs md:text-sm "> Payez jusqu'à 3 fois sans frais </span> 
            </div>
          </div>
        </div> 
      </section>

      {/* section news */}
      <section className=" text-[#0A2342] p-2 py-8"> 
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> 
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center"> 
            <div className="flex flex-col justify-center p-4 text-center md:text-left">
              <h1 className="text-xl md:text-2xl font-bold"> Soyez inspiré & restez à jour ! </h1> 
              <p className="text-base md:text-xl  font-normal mt-2"> Inscrivez-vous à notre newsletter et bénéficiez de 10% de réduction sur votre prochain achat! </p> 
            </div>

            <div className="flex flex-col items-center p-4 text-center mt-0 md:mt-6">
             <Link href="">
                <button className="py-3 px-8 md:px-12 space-x-4 rounded-full bg-[#0A2342] text-white cursor-pointer hover:bg-white hover:text-[#0A2342] border-2 border-[#0A2342] transition text-sm md:text-base">
                  S'abonner à la newsletter
                </button>  
              </Link>
            </div>
          </div>
        </div>
      </section>
 
      {/* section links */}
      <section className="bg-[#0A2342] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 md:pt-12 pb-6">
          <div className="text-white"> 
            {/* Section supérieure avec 4 colonnes - Desktop uniquement */}
            <div className=" max-w-7xl mx-auto">
              <div className="grid grid-cols-2 lg:grid-cols-4">
                <div className="flex flex-col items-center py-4 border-b border-r  border-gray-600 lg:border-b-0 lg:border-r">
                  <BsQuestionCircle className="w-8 h-8" />
                  <p className="text-sm lg:text-lg font-light mt-2">Foire aux questions</p> 
                </div>

                <div className="flex flex-col items-center py-4 border-b border-gray-600 lg:border-b-0 lg:border-r">
                  <PiMapPinAreaLight className="w-8 h-8" />
                  <p className="text-sm lg:text-lg font-light mt-2">Service localisateur</p> 
                </div>

                <div className="flex flex-col items-center py-4 border-r border-gray-600 lg:border-b-0 lg:border-r">
                  <LiaHeadsetSolid className="w-8 h-8" />
                  <p className="text-sm lg:text-lg font-light mt-2">Besoin d'aide? nous contacter</p> 
                </div>

                <div className="flex flex-col items-center py-4">
                  <FaBookOpenReader className="w-8 h-8" />
                  <p className="text-sm lg:text-lg font-light mt-2">Manuels d'instructions</p> 
                </div>
              </div>

              {/* Ligne de séparation */}
              <div className="border-t border-gray-700 my-8"></div>
            </div>

            {/* Sections accordéon - Mobile/Tablet (xl:hidden) */}
            <div className="xl:hidden space-y-4">
              {/* Boutique */}
              <div className="border-b border-gray-600">
                <button
                  onClick={() => toggleSection('boutique')}
                  className="w-full flex justify-between items-center py-4 text-left"
                >
                  <span className="text-lg font-semibold">Boutique</span>
                  <FaAngleDown className={`transition-transform ${openSection === 'boutique' ? 'rotate-180' : ''}`} />
                </button>
                {openSection === 'boutique' && (
                  <div className="pb-4 space-y-3 pl-4">
                    <Link href="#" className="block text-gray-300 hover:text-white transition-colors">Machines à café</Link>
                    <Link href="#" className="block text-gray-300 hover:text-white transition-colors">Expresso broyeurs</Link>
                    <Link href="#" className="block text-gray-300 hover:text-white transition-colors">Machines expresso manuelles</Link>
                    <Link href="#" className="block text-gray-300 hover:text-white transition-colors">Climatiseurs mobiles Pinguino</Link>
                    <Link href="#" className="block text-gray-300 hover:text-white transition-colors">Déshumidificateurs</Link>
                  </div>
                )}
              </div>

              {/* Être Inspiré */}
              <div className="border-b border-gray-600">
                <button
                  onClick={() => toggleSection('inspire')}
                  className="w-full flex justify-between items-center py-4 text-left"
                >
                  <span className="text-lg font-semibold">Être Inspiré</span>
                  <FaAngleDown className={`transition-transform ${openSection === 'inspire' ? 'rotate-180' : ''}`} />
                </button>
                {openSection === 'inspire' && (
                  <div className="pb-4 space-y-3 pl-4">
                    <Link href="#" className="block text-gray-300 hover:text-white transition-colors">Aide au Choix</Link>
                    <Link href="#" className="block text-gray-300 hover:text-white transition-colors">Recettes</Link>
                    <Link href="#" className="block text-gray-300 hover:text-white transition-colors">Coffee Lounge</Link>
                  </div>
                )}
              </div>

              {/* Assistance */}
              <div className="border-b border-gray-600">
                <button
                  onClick={() => toggleSection('assistance')}
                  className="w-full flex justify-between items-center py-4 text-left"
                >
                  <span className="text-lg font-semibold">Assistance</span>
                  <FaAngleDown className={`transition-transform ${openSection === 'assistance' ? 'rotate-180' : ''}`} />
                </button>
                {openSection === 'assistance' && (
                  <div className="pb-4 space-y-3 pl-4">
                    <Link href="#" className="block text-gray-300 hover:text-white transition-colors">Nous contacter</Link>
                    <Link href="#" className="block text-gray-300 hover:text-white transition-colors">Notices</Link>
                    <Link href="#" className="block text-gray-300 hover:text-white transition-colors">FAQ</Link>
                    <Link href="#" className="block text-gray-300 hover:text-white transition-colors">Qualités et caractéristiques environnementales</Link>
                    <Link href="#" className="block text-gray-300 hover:text-white transition-colors">Centre de service agréé</Link>
                    <Link href="#" className="block text-gray-300 hover:text-white transition-colors">Livraisons et retours</Link>
                    <Link href="#" className="block text-gray-300 hover:text-white transition-colors">Regulatory Compliance</Link>
                  </div>
                )}
              </div>

              {/* À Propos Du Groupe De'Longhi */}
              <div className="border-b border-gray-600">
                <button
                  onClick={() => toggleSection('apropos')}
                  className="w-full flex justify-between items-center py-4 text-left"
                >
                  <span className="text-lg font-semibold">À Propos Du Groupe De'Longhi</span>
                  <FaAngleDown className={`transition-transform ${openSection === 'apropos' ? 'rotate-180' : ''}`} />
                </button>
                {openSection === 'apropos' && (
                  <div className="pb-4 space-y-3 pl-4">
                    <Link href="#" className="block text-gray-300 hover:text-white transition-colors">Groupe De'Longhi</Link>
                    <Link href="#" className="block text-gray-300 hover:text-white transition-colors">Carrières</Link>
                  </div>
                )}
              </div>
            </div>

            {/* Section liens avec 5 colonnes - Desktop uniquement */}
            <div className="hidden xl:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 xl:mb-0">
              <div className="flex flex-col space-y-3">
                <h3 className="font-semibold text-lg mb-3">Boutique</h3>
                <Link href="/cafe" className="text-gray-300 hover:text-white transition-colors">Machines à café</Link>
                <Link href="/expresso_broyeurs" className="text-gray-300 hover:text-white transition-colors">Expresso broyeurs</Link>
                <Link href="/machines_expresso" className="text-gray-300 hover:text-white transition-colors">Machines expresso manuelles</Link>
                <Link href="/appareils_confort" className="text-gray-300 hover:text-white transition-colors">Climatiseurs mobiles Pinguino</Link>
                <Link href="/deshumi" className="text-gray-300 hover:text-white transition-colors">Déshumidificateurs</Link>
              </div>

              <div className="flex flex-col space-y-3">
                <h3 className="font-semibold text-lg mb-3">Être Inspiré</h3>
                <Link href="/choose" className="text-gray-300 hover:text-white transition-colors">Aide au Choix</Link>
                <Link href="/coffee_club" className="text-gray-300 hover:text-white transition-colors">Coffee Lounge</Link>
              </div>

              <div className="flex flex-col space-y-3">
                <h3 className="font-semibold text-lg mb-3">Assistance</h3>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">Nous contacter</Link>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">Notices</Link>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">FAQ</Link>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">Qualités et caractéristiques environnementales</Link>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">Centre de service agréé</Link>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">Livraisons et retours</Link>
              </div>

              <div className="flex flex-col space-y-3">
                <h3 className="font-semibold text-lg mb-3">À Propos Du Groupe De'Longhi</h3>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">Groupe De'Longhi</Link>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">Carrières</Link>
              </div>
            </div>

            {/* Ligne de séparation */}
            <div className="xl:border-t border-gray-700 my-6 xl:my-8"></div>

            {/* Section inférieure */}
            <div className="max-w-7xl mx-auto">
              {/* Première ligne */}
              <div className="flex flex-col lg:flex-row justify-between items-center mb-6 gap-4">
                {/* Gauche : Logo et drapeau */}
                <div className="flex flex-col md:flex-row items-center gap-4 w-full lg:w-auto">
                  <img src="delonghi_blanc.png" alt="De'Longhi" className="h-16 md:h-20 bg-white px-2" />
                  <div className="flex items-center gap-2 bg-gray-800 px-3 py-1 rounded border border-gray-600">
                    <span className="text-sm">fr</span>
                    <FaAngleDown className="" />
                  </div>

                  <div className="text-xs text-gray-400 text-center md:text-left">
                    <span>©De'Longhi Appliances S.r.l. VAT 321618768287</span>
                  </div>
                </div>

                {/* Droite : Téléchargement d'apps */}
                <div className="flex flex-col md:flex-row items-center gap-4">
                  <div className="flex gap-4">
                    <Link href="#" className="hover:cursor-pointer"><FaFacebookF className="w-5 h-5 md:w-6 md:h-6" /></Link>
                    <Link href="#" className="hover:cursor-pointer"><FaInstagram className="w-5 h-5 md:w-6 md:h-6" /></Link>
                    <Link href="#" className="hover:cursor-pointer"><FaYoutube className="w-5 h-5 md:w-6 md:h-6" /></Link> 
                  </div>
                  
                  <div className="flex gap-2"> 
                    <div className="flex items-center gap-1 bg-black text-white px-2 md:px-3 py-2 rounded-lg text-xs font-semibold cursor-pointer hover:bg-gray-800 transition-colors">
                      <FaApple className="text-base md:text-lg" />
                      <div className="flex flex-col leading-tight">
                        <span className="text-[10px]">Download on the</span>
                        <span className="text-xs md:text-sm">App Store</span>
                      </div>
                    </div>
                      
                    <div className="flex items-center gap-1 bg-black text-white px-2 md:px-3 py-2 rounded-lg text-xs font-semibold cursor-pointer hover:bg-gray-800 transition-colors">
                      <FaGooglePlay className="text-base md:text-lg" />
                      <div className="flex flex-col leading-tight">
                        <span className="text-[10px]">GET IT ON</span>
                        <span className="text-xs md:text-sm">Google Play</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Deuxième ligne */}
              <div className="flex flex-col lg:flex-row justify-between items-center mb-6 gap-4">
                {/* payements*/}
                <div className="flex flex-wrap justify-center gap-2 text-xs text-gray-400">
                  <img src="paiement/apple-pay.svg" alt="Apple Pay" className="h-6"/>
                  <img src="paiement/american-express.svg" alt="American Express" className="h-6"/>
                  <img src="paiement/mastercard.svg" alt="Mastercard" className="h-6"/>
                  <img src="paiement/paypal.svg" alt="PayPal" className="h-6"/>
                  <img src="paiement/klarna.svg" alt="Klarna" className="h-6"/>
                  <img src="paiement/visa.svg" alt="Visa" className="h-6"/>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-4">
                  {/* Liens légaux */}
                  <div className="flex flex-wrap justify-center gap-x-0 text-xs text-gray-400">
                    <Link href="#" className="hover:text-white transition-colors whitespace-nowrap px-2 border-r border-gray-600 ">Politique de confidentialité</Link>
                    <Link href="#" className="hover:text-white transition-colors whitespace-nowrap px-2 border-r border-gray-600 ">Politique en matière de cookies</Link>
                    <Link href="#" className="hover:text-white transition-colors whitespace-nowrap px-2 border-r border-gray-600 ">Conditions de vente</Link>
                    <Link href="#" className="hover:text-white transition-colors whitespace-nowrap px-2 border-r border-gray-600 ">Conditions Générales</Link>
                    <Link href="#" className="hover:text-white transition-colors whitespace-nowrap px-2 border-r border-gray-600 hidden md:inline">Déclaration d'accessibilité</Link>
                    <Link href="#" className="hover:text-white transition-colors whitespace-nowrap px-2">Préférences de cookies</Link>
                  </div>
                </div>
              </div>
            </div>
          </div> 
        </div> 
      </section>
    </footer>
  );
};

export default Footer;
