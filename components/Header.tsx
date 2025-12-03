'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaRegHeart, FaAngleDown, FaChevronRight, FaBars, FaTimes, FaPlus, FaMinus } from 'react-icons/fa';
import { BsPerson } from "react-icons/bs"; 
import { AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai';
import { LiaHeadsetSolid } from "react-icons/lia";

const Header = () => {
  // State (Desktop + Mobile)
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileSubMenu, setActiveMobileSubMenu] = useState<string | null>(null);

  // HANDLERS 
  const handleMenuClick = (menuId: string) => {
    setActiveMenu(activeMenu === menuId ? null : menuId);
  };

   const closeDesktopMenu = () => {
      setActiveMenu(null);
  }

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  
  const toggleMobileSubMenu = (menuId: string) => {
    setActiveMobileSubMenu(activeMobileSubMenu === menuId ? null : menuId);
  };

  const handleMobileLinkClick = () => {
        setIsMobileMenuOpen(false);
        setActiveMobileSubMenu(null);
    };

  // Bloquer le scroll sur mobile
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  return (
    <header className="w-full fixed z-50 top-0 left-0 font-sans">
      
    

      {/* Barre supérieure */}
      <div className="bg-[#0A2342] text-white text-center py-4 text-sm">
         {/* hidden/block pour gérer l'affichage mobile/desktop du texte */}
        <div className="hidden lg:block">
            <span className="px-4 border-r border-opacity-25">Livraison offerte à partir de 39€</span>
            <span className="px-4 border-r border-opacity-25">Retour gratuit</span>
            <span className="px-4">Payer en 3x sans frais avec Klarna</span>
        </div>
        <div className="lg:hidden text-xs">
            <span>Livraison offerte dès 39€ & Retours gratuits</span>
        </div>
      </div>

      <div className="bg-white border-b border-gray-200" onMouseLeave={() => setActiveMenu(null)}>
      {/* Barre inférieure */}
          <nav className="flex justify-between items-center px-6 h-16 lg:h-auto">
            
            {/* bouton Hamburger  */}
            <div className="lg:hidden flex items-center gap-6">
                <button onClick={toggleMobileMenu} className="text-[#0A2342] p-2 -ml-2">
                    <FaBars size={24} />
                </button>
            </div>

            {/* Logo */}
            <Link href="/" className="lg:px-10">
              <Image src="/delonghi_logo.png" alt="De'Longhi Logo" width={200} height={80} className="h-10 lg:h-32" />
            </Link>

            {/* Menu de navigation caché sur mobile */}
            <ul className="hidden lg:flex justify-center px-2  text-[#0A2342] text-lg bg-white lg:text-base md:text-sm" onMouseLeave={closeDesktopMenu}>
                <NavLinkItem title="Machines à Café" id="cafe" activeMenu={activeMenu} onMenuClick={handleMenuClick} onLinkClick={closeDesktopMenu}>
                  <section>
                      <div className="flex bg-white justify-center">
                          <p className="text-xs font-normal">
                                  Découvrir
                          </p>
                      </div>
      
                      <div className="bg-white w-full py-8 px-30 p-8 flex gap-10">
                        {/* Partie gauche*/}
                        <div className="flex flex-col">
                            <div className="col-span-6 grid grid-cols-3 gap-6">
                              <Link href="/expresso_broyeurs" onClick={closeDesktopMenu} className="border shadow-md border-gray-50 rounded-lg hover:cursor-pointer transition flex flex-col justify-between">
                                <p className="text-lg font-medium text-start pl-4">Expresso broyeurs</p>
                                <Image src="/cafe/cafe.jpg" alt="Expresso broyeurs" width={80} height={80} className="mt-2 w-20 h-20 object-contain self-end mr-4" />
                              </Link>

                              <Link href="/machines_expresso" onClick={closeDesktopMenu} className="border shadow-md border-gray-50 rounded-lg pt-2 hover:cursor-pointer transition flex flex-col justify-between">
                                <p className="text-lg font-medium text-start pl-4">Machines expresso</p>
                                <Image src="/cafe/cafe1.jpg" alt="Machines expresso" width={80} height={80} className="mt-2 w-20 h-20 object-contain self-end mr-4" />
                              </Link>

                              <Link href="/machines_capsules" onClick={closeDesktopMenu}  className="border shadow-md border-gray-50 rounded-lg pt-2 hover:cursor-pointer transition flex flex-col justify-between">
                                <p className="text-lg font-medium text-start pl-4">Machines à café à capsules</p>
                                <Image src="/cafe/cafe2.jpg" alt="Machines à café à capsules" width={80} height={80} className="w-20 h-20 object-contain self-end mr-4" />
                              </Link>

                              <Link href="/choose" onClick={closeDesktopMenu} className="border shadow-md border-gray-50 rounded-lg pt-2 hover:cursor-pointer transition flex flex-col justify-between ">
                                <p className="text-lg font-medium text-start pl-4">Aide au choix</p>
                                <Image src="/cafe/cafe3.jpg" alt="Aide au choix" width={80} height={80} className="w-20 h-20 object-contain self-end mr-4" />
                              </Link>

                            </div>

                                <Link href="/cafe" onClick={closeDesktopMenu} className="flex items-center pt-8 font-medium bg-white"> Tout voir <FaChevronRight size={14} className="mt-1" /> </Link>

                        </div>

                        {/* Partie droite*/}
                        
                        <div className="col-span-6 grid grid-cols-3 gap-6">
                              
                          <Link href="/decouvrir_cafe1" onClick={closeDesktopMenu} className="relative h-36 rounded-lg overflow-hidden block">
                            <Image src="/cafe/homme.jpg" alt="Une saveur parfaite" layout="fill" className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-black opacity-20"></div>
                            <p className="absolute bottom-2 let-2 right-2 text-white text-center text-xs font-medium drop-shadow-md">
                              Une saveur parfaite. Un moment Perfetto.
                            </p>
                          </Link>

                          <Link href="/decouvrir_cafe2" onClick={closeDesktopMenu}  className="relative h-36 rounded-lg overflow-hidden block">
                            <Image src="/cafe/grain.jpg" alt="Tournez, changez, dégustez" layout="fill" className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-black opacity-20"></div>
                            <p className="absolute bottom-2 left-0 right-0 text-white text-center  text-xs font-medium drop-shadow-md">
                              Tournez. Changez. Dégustez.
                            </p>
                          </Link>

                          <Link href="/decouvrir_cafe3" onClick={closeDesktopMenu}  className="relative h-36 rounded-lg overflow-hidden block">
                            <Image src="/cafe/machine1.jpg" alt="Versez des glaçons" layout="fill" className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-black opacity-20"></div>
                            <p className="absolute bottom-2 left-0 right-0 text-white text-center text-xs font-medium drop-shadow-md">
                              Versez des glaçons. En une seule touche. Refroidissez.
                            </p>
                          </Link>

                          <Link href="/decouvrir_cafe4" onClick={closeDesktopMenu}  className="relative h-36 rounded-lg overflow-hidden block">
                            <Image src="/cafe/machine.jpg" alt="Les cadeaux Perfetto" layout="fill" className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-black opacity-20"></div>
                            <p className="absolute bottom-2 left-0 right-0 text-white text-center text-xs font-medium drop-shadow-md">
                              Votre guide pas à pas pour un café Perfetto chez soi.
                            </p>
                          </Link>

                          <Link href="/decouvrir_cafe5" onClick={closeDesktopMenu} className="relative h-36  rounded-lg overflow-hidden block">
                            <Image src="/cafe/tasse_cafe.webp" alt="Les cadeaux Perfetto" layout="fill" className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-black opacity-20"></div>
                            <p className="absolute bottom-2 left-0 right-0 text-white text-center text-xs font-medium drop-shadow-md">
                              Savoureux. Velouté. Équilibré
                            </p>
                          </Link>

                          <Link href="/decouvrir_cafe6" onClick={closeDesktopMenu}  className="relative h-36 rounded-lg overflow-hidden block">
                            <Image src="/cafe/cadeau.jpg" alt="Les cadeaux Perfetto" layout="fill" className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-black opacity-20"></div>
                            <p className="absolute bottom-2 left-0 right-0 text-white text-center text-xs font-medium drop-shadow-md">
                              Les cadeaux Perfetto
                            </p>
                          </Link>

                        </div>
                      </div>
                  </section>
                </NavLinkItem>

                 <NavLinkItem title="Accessoires" id="accessoires" activeMenu={activeMenu} onMenuClick={handleMenuClick}  onLinkClick={closeDesktopMenu}>
                      <section> 
                          <div className="flex justify-center ml-10">
                            <p className="text-xs font-normal">
                                    Découvrir
                            </p>
                          </div>
                      
                          <div className="bg-white w-full py-8 px-30 p-8 flex gap-10 justify-center">
                          <div className="flex flex-col">

                            {/* Partie gauche*/}
                            <div className="col-span-6 grid grid-cols-3 gap-6">
                              <Link href="/accessoires_tasse" onClick={closeDesktopMenu} className="border shadow-md border-gray-50 rounded-lg pt-2 hover:cursor-pointer transition flex flex-col justify-between">
                                <p className="text-lg font-medium text-start pl-4">Tasse et verres à café</p>
                                <Image src="/accessoires/accessoires1.jpg" alt="Expresso broyeurs" width={80} height={80} className="mt-2 w-20 h-20 object-contain self-end mr-4" />
                              </Link>

                              <Link href="/accessoires_mug" onClick={closeDesktopMenu} className="border shadow-md border-gray-50 rounded-lg pt-2 hover:cursor-pointer transition flex flex-col justify-between">
                                <p className="text-lg font-medium text-start pl-4">Mugs de voyage</p>
                                <Image src="/accessoires/accessoires1.jpg" alt="Machines expresso" width={80} height={80} className="mt-2 w-20 h-20 object-contain self-end mr-4" />
                              </Link>

                              <Link href="/accessoires_detartrant" onClick={closeDesktopMenu}  className="border shadow-md border-gray-50 rounded-lg pt-2 hover:cursor-pointer transition flex flex-col justify-between">
                                <p className="text-lg font-medium text-start pl-4">Détartrants et filtre à eau</p>
                                <Image src="/accessoires/accessoires.jpg" alt="Machines à café à capsules" width={80} height={80} className="w-20 h-20 object-contain self-end mr-4" />
                              </Link>

                              <Link href="/accessoires_grain" onClick={closeDesktopMenu} className="border shadow-md border-gray-50 rounded-lg pt-2 hover:cursor-pointer transition flex flex-col justify-between ">
                                <p className="text-lg font-medium text-start  pl-4">Grain de café</p>
                                <Image src="/accessoires/accessoires2.jpg" alt="Aide au choix" width={80} height={80} className="w-20 h-20 object-contain self-end mr-4" />
                              </Link>

                              <Link href="/accessoires_cafe" onClick={closeDesktopMenu} className="border shadow-md border-gray-50 rounded-lg pt-2 hover:cursor-pointer transition flex flex-col justify-between ">
                                <p className="text-lg font-medium text-start pl-4">Accessoires à café</p>
                                <Image src="/accessoires/accessoires3.jpg" alt="Aide au choix" width={80} height={80} className="w-20 h-20 object-contain self-end mr-4" />
                              </Link>

                              <Link href="/accessoires_simple" onClick={closeDesktopMenu} className="border shadow-md border-gray-50 rounded-lg pt-2 hover:cursor-pointer transition flex flex-col justify-between ">
                                <p className="text-lg font-medium text-start pl-4">Accessoires</p>
                                <Image src="/accessoires/accessoires4.jpg" alt="Aide au choix" width={80} height={80} className="w-20 h-20 object-contain self-end mr-4" />
                              </Link>

                            </div>
                                <Link href="/accessoires" onClick={closeDesktopMenu} className="flex pt-10 items-center font-medium"> Voir tous les accessoires <FaChevronRight size={14} className="mt-1" /> </Link>

                            </div>
                            {/* Partie droite*/}
                            
                            <div className="col-span-4 grid grid-cols-3 gap-6">
                                  
                              <Link href="/decouvrir_accessoires1" onClick={closeDesktopMenu} className="relative h-36 rounded-lg overflow-hidden block">
                                <Image src="/accessoires/access2.png" alt="Une saveur parfaite" layout="fill" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-black opacity-30"></div>
                                <p className="absolute bottom-2 left-0 right-0 text-white text-center text-xs font-medium drop-shadow-md">
                                  Kit LatteCrema Cool.
                                </p>
                              </Link>

                              <Link href="/decouvrir_accessoires2" onClick={closeDesktopMenu}  className="relative mt h-36 rounded-lg overflow-hidden block">
                                <Image src="/accessoires/accessoires7.jpg" alt="Tournez, changez, dégustez" layout="fill" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-black opacity-30"></div>
                                <p className="absolute bottom-2 left-0 right-0 text-white text-center text-xs font-medium drop-shadow-md">
                                  Carafe à lait.
                                </p>
                              </Link>

                              <Link href="/decouvrir_accessoires3" onClick={closeDesktopMenu} className="relative h-36  rounded-lg overflow-hidden block">
                                <Image src="/accessoires/accessoires8.png" alt="Versez des glaçons" layout="fill" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-black opacity-30"></div>
                                <p className="absolute bottom-2 left-0 right-0 text-white text-center text-xs font-medium drop-shadow-md">
                                  Mousseur à lait.
                                </p>
                              </Link>

                              <Link href="/decouvrir_accessoires4"onClick={closeDesktopMenu}   className="relative h-36 rounded-lg overflow-hidden block">
                                <Image src="/accessoires/accessoires6.jpg" alt="Les cadeaux Perfetto" layout="fill" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-black opacity-30"></div>
                                <p className="absolute bottom-2 left-0 right-0 text-white text-center text-xs font-medium drop-shadow-md">
                                  Bac à grain de Rivelia.
                                </p>
                              </Link>

                              <Link href="/decouvrir_accessoires5" onClick={closeDesktopMenu}  className="relative h-36  rounded-lg overflow-hidden block">
                                <Image src="/accessoires/access.png" alt="Les cadeaux Perfetto" layout="fill" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-black opacity-30"></div>
                                <p className="absolute bottom-2 left-0 right-0 text-white text-center text-xs font-medium drop-shadow-md">
                                  Moulin à café
                                </p>
                              </Link>

                              <Link href="/decouvrir_accessoires6" onClick={closeDesktopMenu}  className="relative h-36 rounded-lg overflow-hidden block">
                                <Image src="/accessoires/access1.png" alt="Les cadeaux Perfetto" layout="fill" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-black opacity-30"></div>
                                <p className="absolute bottom-2 left-0 right-0 text-white text-center text-xs font-medium drop-shadow-md">
                                  Porte filtre bottomless
                                </p>
                              </Link>

                            </div>
                          </div>
                          
                      </section>
                  </NavLinkItem>

                  <NavLinkItem title="Plus d'Appareils" id="appareils" activeMenu={activeMenu} onMenuClick={handleMenuClick}  onLinkClick={closeDesktopMenu}>
                      <section>
                        <div className="bg-white w-full py-8 px-30 justify-center p-8 flex gap-10">
                    <div className="grid grid-cols-12 gap-8">

                        {/* 1ere Partie*/}
                        <div className="col-span-4 flex flex-col space-y-4">
                            <div className="flex items-center pb-2">
                                <p className="text-xl font-medium text-gray-800">Confort</p>
                                <Link href="/appareils_confort" onClick={closeDesktopMenu} className="text-base font-semibold text-blue-800 hover:text-blue-600 pl-4  underline">Tout voir </Link>
                            </div>

                            {/* Liste des sous categories la 1ere Partie */}
                            <div className="grid grid-cols-2 gap-4">
                                <MenuItem title="Climatiseurs mobiles" onLinkClick={closeDesktopMenu} image="/appareils/appa7.jpg" to="/appareils_confort" />
                                <MenuItem title="Déshumidificateurs" onLinkClick={closeDesktopMenu} image="/appareils/appa.jpg"  to="/deshumi" />
                                <MenuItem title="Chauffage mobile"  onLinkClick={closeDesktopMenu} image="/appareils/appa6.jpg" to="/chauffage" />
                            </div>
                        </div>
                            {/* 2ème Partie : Autres Appareils de cuisson */}
                        <div className="col-span-4 flex flex-col space-y-4">
                            <div className="flex items-center pb-2">
                                <p className="text-xl font-medium text-gray-800">Bouilloires et grile-pains</p>
                                <Link href="/appareils_bouilloire" onClick={closeDesktopMenu} className="text-base font-semibold text-blue-800 hover:text-blue-600 pl-4  underline"> Tout voir</Link>
                            </div>

                            {/* Liste des sous-catégories pour la 2ème Partie */}
                            <div className="grid grid-cols-2 gap-4">
                                <MenuItem title="Bouilloires" onLinkClick={closeDesktopMenu} image="/appareils/appa1.jpg" to="/bouilloire"/>
                                <MenuItem title="Grille-pain" onLinkClick={closeDesktopMenu} image="/appareils/appa2.jpg" to="/grille_pain"/>
                            </div>
                        </div>

                            {/* 3ème Partie */}
                            <div className="col-span-4 flex flex-col space-y-4">
                                <div className="flex items-center pb-2">
                                    <p className="text-xl font-medium text-gray-800">Cuisine</p>
                                    <Link href="/cuisine" onClick={closeDesktopMenu} className="text-base font-semibold text-blue-800 hover:text-blue-600 pl-4 underline">Tout voir</Link>
                                </div>
                                 {/* Liste des sous categories 3eme partie */}
                                <div className="grid grid-cols-2 gap-4">
                                    <MenuItem title="Fours électriques" onLinkClick={closeDesktopMenu} image="/appareils/appa3.jpg" to="/fours"/>
                                    <MenuItem title="Friteuses" onLinkClick={closeDesktopMenu} image="/appareils/appa4.jpg"to="/friteuse" />
                                    <MenuItem title="Friteuses sans huile" onLinkClick={closeDesktopMenu} image="/appareils/appa5.jpg" to="/friteuse_huile" />

                                </div>
                           </div>
                    </div>
                          </div>
                      </section>
                  </NavLinkItem>

                  
                  <NavLinkItem title="Promotions"  id="promotions" activeMenu={activeMenu} onMenuClick={handleMenuClick}  onLinkClick={closeDesktopMenu}>
                        <section>
                          <div className="bg-white w-full py-8 px-4 p-8 flex gap-10 justify-center">

                          <div className="flex flex-col">
                              
                              <div className="col-span-6 grid grid-cols-4 gap-6 pt-4">
                                      
                                  <Link href="/promo_hallo" onClick={closeDesktopMenu} className="relative h-36 rounded-lg overflow-hidden block">
                                  <Image src="/cafe/homme.jpg" alt="Une saveur parfaite" layout="fill" className="w-full h-full object-cover" />
                                  <div className="absolute inset-0 bg-black opacity-30"></div>
                                  <p className="absolute bottom-2 let-2 right-2 text-white text-center text-lg font-medium drop-shadow-md">
                                      De'Longhi Days: accès anticipé avec jusqu'à -30% 
                                  </p>
                                  </Link>

                                  <Link href="/perfetto_challenge" onClick={closeDesktopMenu}  className="relative h-36 rounded-lg overflow-hidden block">
                                  <Image src="/cafe/grain.jpg" alt="Tournez, changez, dégustez" layout="fill" className="w-full h-full object-cover" />
                                  <div className="absolute inset-0 bg-black opacity-30"></div>
                                  <p className="absolute bottom-2 left-0 right-0 text-white text-center  text-lg font-medium drop-shadow-md">
                                      Jouer au défi, obtenez votre avantage !
                                  </p>
                                  </Link>

                                  <Link href="/coffee_club" onClick={closeDesktopMenu}  className="relative h-36  rounded-lg overflow-hidden block">
                                  <Image src="/cafe/machine1.jpg" alt="Versez des glaçons" layout="fill" className="w-full h-full object-cover" />
                                  <div className="absolute inset-0 bg-black opacity-30"></div>
                                  <p className="absolute bottom-2 left-0 right-0 text-white text-center text-lg font-medium drop-shadow-md">
                                      Découvrez le café Perfetto et notre kit exclusi offert
                                  </p>
                                  </Link>

                                  <Link href="/promotion4" onClick={closeDesktopMenu} className="relative h-36 rounded-lg overflow-hidden block">
                                  <Image src="/cafe/machine.jpg" alt="Les cadeaux Perfetto" layout="fill" className="w-full h-full object-cover" />
                                  <div className="absolute inset-0 bg-black opacity-30"></div>
                                  <p className="absolute bottom-2 left-0 right-0 text-white text-center text-lg font-medium drop-shadow-md">
                                      -30% sur le nouveau mousseur de lait froid avec la Dedica Duo
                                  </p>
                                  </Link>

                                  <Link href="/promotion5" onClick={closeDesktopMenu}  className="relative h-36  rounded-lg overflow-hidden block">
                                    <Image src="/cafe/tasse_cafe.webp" alt="Les cadeaux Perfetto" layout="fill" className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-black opacity-30"></div>
                                    <p className="absolute bottom-2 left-0 right-0 text-white text-center text-lg font-medium drop-shadow-md">
                                        Offre étudiante
                                    </p>
                                  </Link>

                                  <Link href="/outlet" onClick={closeDesktopMenu}  className="relative h-36 rounded-lg overflow-hidden block">
                                  <Image src="/cafe/cadeau.jpg" alt="Les cadeaux Perfetto" layout="fill" className="w-full h-full object-cover" />
                                  <div className="absolute inset-0 bg-black opacity-30"></div>
                                  <p className="absolute bottom-2 left-0 right-0 text-white text-center text-lg font-medium drop-shadow-md">
                                      Offre Outlet
                                  </p>
                                  </Link>

                                  <Link href="/reconditionne" onClick={closeDesktopMenu}  className="relative h-36 rounded-lg overflow-hidden block">
                                  <Image src="/cafe/cadeau.jpg" alt="Les cadeaux Perfetto" layout="fill" className="w-full h-full object-cover" />
                                  <div className="absolute inset-0 bg-black opacity-30"></div>
                                  <p className="absolute bottom-2 left-0 right-0 text-white text-center text-lg font-medium drop-shadow-md">
                                      Renova: Produits Réconditionnés
                                  </p>
                                  </Link>

                              </div>

                          </div>
                          </div>
                        </section>
                  </NavLinkItem> 
            </ul>

            {/* Icones droite */}
            <div className="flex px-15 space-x-4">
              <a href="#" className="text-gray-500 hover:text-dark-blue text-sm pt-2 hover:underline hidden xl:block">Support</a>
              <a href="#" className="text-gray-500 hover:text-dark-blue text-sm pt-2 hover:underline hidden xl:block">Enregistrement du produit</a>
             
              <a href="#" className="text-gray-500 hover:text-dark-blue hidden lg:block">
                    <FaRegHeart className="w-6 h-6 lg:w-8 lg:h-8" />
                    <span className="sr-only">Wishlist</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-dark-blue">
                    <BsPerson className="w-6 h-6 lg:w-8 lg:h-8" />
                    <span className="sr-only">Account</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-dark-blue">
                    <AiOutlineShoppingCart  className="w-6 h-6 lg:w-8 lg:h-8" />
                    <span className="sr-only">Cart</span>
              </a>
            </div>
          </nav>
      </div>

      {/* menu mobile */}
      
      
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
           <div className="absolute inset-0 bg-black bg-opacity-60 transition-opacity" onClick={toggleMobileMenu}></div>
           
           <div className="absolute left-0 top-0 bottom-0 w-[90%] max-w-[400px] bg-white shadow-2xl flex flex-col overflow-y-auto animate-in slide-in-from-left duration-300">
              
              <div className="flex justify-between items-center p-5 border-b border-gray-100 bg-white sticky top-0 z-10">
                 <Image src="/delonghi_logo.png" alt="Logo" width={120} height={32} className="h-8" />
                 <button onClick={toggleMobileMenu} className="p-2 bg-gray-50 rounded-full">
                    <FaTimes size={22} className="text-[#0A2342]" />
                 </button>
              </div>

              <div className="flex-1 bg-white">
                 
                 {/* MOBILE: MACHINES À CAFÉ  */}
                 <div className="border-b border-gray-100">
                    <button 
                        onClick={() => toggleMobileSubMenu('cafe')} 
                        className={`w-full flex justify-between items-center p-5 text-left ${activeMobileSubMenu === 'cafe' ? 'bg-gray-50 font-bold text-blue-900' : 'text-[#0A2342] font-medium'}`}>
                        <span className="text-lg">Machines à Café</span>
                        {activeMobileSubMenu === 'cafe' ? <FaMinus size={14} /> : <FaPlus size={14} />}
                    </button>
                    
                    {activeMobileSubMenu === 'cafe' && (
                        <div className="px-4 pb-6 bg-gray-50">
                            <Link href="/cafe" onClick={handleMobileLinkClick} className="block w-full bg-[#0A2342] text-white text-center py-3 rounded font-bold text-sm mb-6 mt-2">
                                Tout voir
                            </Link>

                            {/* Grille Cartes Principales */}
                            <div className="grid grid-cols-1 gap-3 mb-6">
                                <MobileCategoryCard title="Expresso broyeurs" img="/cafe/cafe.jpg" to="/expresso_broyeurs" onLinkClick={handleMobileLinkClick} />
                                <MobileCategoryCard title="Machines expresso" img="/cafe/cafe1.jpg" to="/machines_expresso" onLinkClick={handleMobileLinkClick} />
                                <MobileCategoryCard title="Machines à capsules" img="/cafe/cafe2.jpg" to="/machines_capsules" onLinkClick={handleMobileLinkClick} />
                                <MobileCategoryCard title="Aide au choix" img="/cafe/cafe3.jpg" to="/choose" isGuide onLinkClick={handleMobileLinkClick} />

                            </div>

                            {/* Section Découvrir */}
                            <div className="space-y-4">
                                <p className="text-xs font-extrabold tracking-widest text-gray-400 uppercase mb-2">Découvrir</p>
                                <MobileDiscoveryCard title="Une saveur parfaite" img="/cafe/homme.jpg" to="/decouvrir_cafe1" onLinkClick={handleMobileLinkClick} />
                                <MobileDiscoveryCard title="Tournez. Changez." img="/cafe/grain.jpg" to="/decouvrir_cafe2" onLinkClick={handleMobileLinkClick} />
                                <MobileDiscoveryCard title="Versez des glaçons" img="/cafe/machine1.jpg" to="/decouvrir_cafe3" onLinkClick={handleMobileLinkClick} />
                                <MobileDiscoveryCard title="Guide pas à pas" img="/cafe/machine.jpg" to="/decouvrir_cafe4" onLinkClick={handleMobileLinkClick} />
                                <MobileDiscoveryCard title="Savoureux. Velouté." img="/cafe/tasse_cafe.webp" to="/decouvrir_cafe5" onLinkClick={handleMobileLinkClick} />
                                <MobileDiscoveryCard title="Les cadeaux Perfetto" img="/cafe/cadeau.jpg" to="/decouvrir_cafe6" onLinkClick={handleMobileLinkClick} />
                           </div>
                        </div>
                    )}
                 </div>

                 {/* accessoires mobile*/}
                 <div className="border-b border-gray-100">
                    <button 
                        onClick={() => toggleMobileSubMenu('accessoires')} 
                        className={`w-full flex justify-between items-center p-5 text-left ${activeMobileSubMenu === 'accessoires' ? 'bg-gray-50 font-bold text-blue-900' : 'text-[#0A2342] font-medium'}`}>
                        <span className="text-lg">Accessoires</span>
                        {activeMobileSubMenu === 'accessoires' ? <FaMinus size={14} /> : <FaPlus size={14} />}
                    </button>

                    {activeMobileSubMenu === 'accessoires' && (
                        <div className="px-4 pb-6 bg-gray-50">
                            <Link href="/accessoires" onClick={handleMobileLinkClick} className="block w-full bg-[#0A2342] text-white text-center py-3 rounded font-bold text-sm mb-6 mt-2">
                                Voir tous les accessoires
                            </Link>

                            <div className="grid grid-cols-2 gap-3 mb-6">
                                <MobileSmallCard title="Tasses et verres" img="/accessoires/accessoires1.jpg" to="/accessoires_tasse" onLinkClick={handleMobileLinkClick} />
                                <MobileSmallCard title="Mugs de voyage" img="/accessoires/accessoires1.jpg" to="/accessoires_mug" onLinkClick={handleMobileLinkClick} />
                                <MobileSmallCard title="Détartrants" img="/accessoires/accessoires.jpg" to="/accessoires_detartrant" onLinkClick={handleMobileLinkClick} />
                                <MobileSmallCard title="Grain de café" img="/accessoires/accessoires2.jpg" to="/accessoires_grain" onLinkClick={handleMobileLinkClick} />
                                <MobileSmallCard title="Accessoires café" img="/accessoires/accessoires3.jpg" to="/accessoires_cafe" onLinkClick={handleMobileLinkClick} />
                                <MobileSmallCard title="Autres" img="/accessoires/accessoires4.jpg" to="/accessoires_simple" onLinkClick={handleMobileLinkClick} />
                            </div>

                            <div className="space-y-4">
                                <p className="text-xs font-extrabold tracking-widest text-gray-400 uppercase mb-2">Découvrir</p>
                                <MobileDiscoveryCard title="Kit LatteCrema Cool" img="/accessoires/access2.png" to="/decouvrir_accessoires1" onLinkClick={handleMobileLinkClick} />
                                <MobileDiscoveryCard title="Carafe à lait" img="/accessoires/accessoires7.jpg" to="/decouvrir_accessoires2" onLinkClick={handleMobileLinkClick} />
                                <MobileDiscoveryCard title="Mousseur à lait" img="/accessoires/accessoires8.png" to="/decouvrir_accessoires3" onLinkClick={handleMobileLinkClick} />
                                <MobileDiscoveryCard title="Bac à grain Rivelia" img="/accessoires/accessoires6.jpg" to="/decouvrir_accessoires4" onLinkClick={handleMobileLinkClick} />
                                <MobileDiscoveryCard title="Moulin à café" img="/accessoires/access.png" to="/decouvrir_accessoires5" onLinkClick={handleMobileLinkClick} />
                                <MobileDiscoveryCard title="Porte filtre bottomless" img="/accessoires/access1.png" to="/decouvrir_accessoires6" onLinkClick={handleMobileLinkClick} />

                            </div>
                        </div>
                    )}
                 </div>

                 {/* appareil mobile*/}
                 <div className="border-b border-gray-100">
                    <button 
                        onClick={() => toggleMobileSubMenu('appareils')} 
                        className={`w-full flex justify-between items-center p-5 text-left ${activeMobileSubMenu === 'appareils' ? 'bg-gray-50 font-bold text-blue-900' : 'text-[#0A2342] font-medium'}`}>
                        <span className="text-lg">Plus d'Appareils</span>
                        {activeMobileSubMenu === 'appareils' ? <FaMinus size={14} /> : <FaPlus size={14} />}
                    </button>

                    {activeMobileSubMenu === 'appareils' && (
                        <div className="px-4 pb-6 bg-gray-50">
                            
                            {/* Confort */}
                            <div className="mb-6">
                                <div className="flex justify-between items-center mb-3 mt-2">
                                    <span className="font-bold text-[#0A2342]">Confort</span>
                                    <Link href="/appareils_confort" onClick={handleMobileLinkClick} className="text-xs font-bold text-blue-600 underline">Tout voir</Link>
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                    <MobileSmallCard title="Climatiseurs mobiles" img="/appareils/appa7.jpg" to="/appareils_confort" onLinkClick={handleMobileLinkClick} />
                                    <MobileSmallCard title="Déshumidificateurs" img="/appareils/appa.jpg" to="/deshumi" onLinkClick={handleMobileLinkClick} />
                                    <MobileSmallCard title="Chauffage mobile" img="/appareils/appa6.jpg" to="/chauffage" onLinkClick={handleMobileLinkClick} />
                                </div>
                            </div>

                             {/* Bouilloires et grille pain */}
                             <div className="mb-6">
                                <div className="flex justify-between items-center mb-3 mt-2">
                                    <span className="font-bold text-[#0A2342]">Bouilloires et grille-pains </span>
                                    <Link href="/appareils_bouilloire" onClick={handleMobileLinkClick} className="text-xs font-bold text-blue-600 underline">Tout voir</Link>
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                  <MobileSmallCard title="Bouilloires" img="/appareils/appa1.jpg" to="/bouilloire" onLinkClick={handleMobileLinkClick} />
                                  <MobileSmallCard title="Grille-pain" img="/appareils/appa2.jpg" to="/grille_pain" onLinkClick={handleMobileLinkClick} />
                                </div>
                            </div>

                             {/* Cuisine */}
                             <div className="mb-6">
                                <div className="flex justify-between items-center mb-3">
                                    <span className="font-bold text-[#0A2342]">Cuisine</span>
                                    <Link href="/cuisine" onClick={handleMobileLinkClick} className="text-xs font-bold text-blue-600 underline">Tout voir</Link>
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                    <MobileSmallCard title="Fours" img="/appareils/appa3.jpg" to="/fours" onLinkClick={handleMobileLinkClick} />
                                    <MobileSmallCard title="Friteuses" img="/appareils/appa4.jpg" to="/friteuse" onLinkClick={handleMobileLinkClick} />
                                    <MobileSmallCard title="Sans huile" img="/appareils/appa5.jpg" to="/friteuse_huile" onLinkClick={handleMobileLinkClick} />
                                  
                                </div>
                            </div>

                        </div>
                    )}
                 </div>

                 {/* promotions mobiles */}
                 <div className="border-b border-gray-100">
                    <button 
                        onClick={() => toggleMobileSubMenu('promotions')} 
                        className={`w-full flex justify-between items-center p-5 text-left ${activeMobileSubMenu === 'promotions' ? 'bg-gray-50 font-bold text-blue-900' : 'text-[#0A2342] font-medium'}`}>
                        <span className="text-lg">Promotions</span>
                        {activeMobileSubMenu === 'promotions' ? <FaMinus size={14} /> : <FaPlus size={14} />}
                    </button>

                    {activeMobileSubMenu === 'promotions' && (
                        <div className="px-4 pb-6 bg-gray-50">
                             <Link href="/promotions" onClick={handleMobileLinkClick} className="block w-full bg-[#0A2342] text-white text-center py-3 rounded font-bold text-sm mb-6 mt-2">
                                Voir toutes les promotions
                            </Link>

                            <div className="space-y-4">
                                <MobilePromoCard title="De'Longhi Days" text="-30%" img="/cafe/homme.jpg" isDark to="/promo_hallo" onLinkClick={handleMobileLinkClick} />
                                <MobilePromoCard title="Le Défi Perfetto" text="Jouer !" img="/cafe/grain.jpg" isDark to="/perfetto_challenge" onLinkClick={handleMobileLinkClick} />
                                <MobilePromoCard title="Coffee Club" text="Kit Offert" img="/cafe/machine1.jpg" to="/coffee_club" onLinkClick={handleMobileLinkClick} />
                                <MobilePromoCard title="-30% Mousseur" text="Avec Dedica" img="/cafe/machine.jpg" to="/promotion4" onLinkClick={handleMobileLinkClick} />
                                <MobilePromoCard title="Offre Étudiante" text="Réductions" img="/cafe/tasse_cafe.webp" to="/promotion5" onLinkClick={handleMobileLinkClick} />
                                <MobilePromoCard title="Renova: Produits reconditiionnés" text="Réductions" img="/cafe/promo4.avif" to="/reconditionne" onLinkClick={handleMobileLinkClick} />
                                <MobilePromoCard title="Outlet" text="Prix réduits" img="/cafe/cadeau.jpg" to="/outlet" onLinkClick={handleMobileLinkClick} />
                            </div>
                        </div>
                    )}
                 </div>
              </div>

              {/* Footer Mobile */}
              <div className="bg-white border-t border-gray-100 p-5 space-y-4 pb-8">
                 <Link href="#" className="flex items-center space-x-3 text-[#0A2342] font-medium">
                    <div className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center text-blue-900">
                        <FaRegHeart size={14} />
                    </div>
                    <span>Liste d'envies</span>
                 </Link>
                 <Link href="#" className="flex items-center space-x-3 text-[#0A2342] font-medium">
                    <div className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center text-blue-900">
                        <LiaHeadsetSolid size={14} />
                    </div>
                    <span>Support</span>
                 </Link>
              </div>

           </div>
        </div>
      )}

    </header>
  );
};

// Types pour les props des composants
interface MenuItemProps {
  title: string;
  image: string;
  to: string;
  onLinkClick: () => void;
}

interface NavLinkItemProps {
  title: string;
  id: string;
  activeMenu: string | null;
  onMenuClick: (id: string) => void;
  onLinkClick: () => void;
  children: React.ReactNode;
}

interface MobileCategoryCardProps {
  title: string;
  img: string;
  to: string;
  isGuide?: boolean;
  onLinkClick: () => void;
}

interface MobileSmallCardProps {
  title: string;
  img: string;
  to: string;
  onLinkClick: () => void;
}

interface MobileDiscoveryCardProps {
  title: string;
  img: string;
  to: string;
  onLinkClick: () => void;
}

interface MobilePromoCardProps {
  title: string;
  text: string;
  img: string;
  isDark?: boolean;
  to: string;
  onLinkClick: () => void;
}

const MenuItem = ({ title, image, to, onLinkClick  }: MenuItemProps) => {
  return (
      <Link href={to} onClick={onLinkClick} className="border shadow-md border-gray-100 rounded-lg pt-2 hover:shadow-lg transition flex flex-col justify-between h-32 hover:cursor-pointer">
          <p className="text-base font-medium px-4">{title}</p>
          <Image src={image} alt={title} width={64} height={64} className="mt-2 w-16 h-16 object-contain self-end mr-4" />
      </Link>
  );
};

const NavLinkItem = ({ title, id, activeMenu, onMenuClick, onLinkClick, children }: NavLinkItemProps) => {
  const isActive = activeMenu === id;

  return (
      <li className="relative">
          <span className={`cursor-pointer flex items-center p-4 transition duration-200 hover:font-medium ${isActive ? 'font-medium' : 'font-normal'}`} onClick={() => onMenuClick(id)}>
              {title} 
              <FaAngleDown size={18} className={`ml-1 transition duration-200 ${isActive ? 'rotate-180' : 'rotate-0'}`} />
          </span>

          {isActive && (
              <div className="fixed top-[hauteur_barre_nav] z-20 shadow-xl border-t border-gray-200 pt-4" style={{ width: '100vw', left: 0, right: 0 }}>
                  {children}
              </div>
          )}
      </li>
  );
};

// mobile

const MobileCategoryCard = ({ title, img, to, isGuide, onLinkClick }: MobileCategoryCardProps) => (
    <Link href={to || "#"} onClick={onLinkClick}  className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm border border-gray-100">
        <span className="font-bold text-[#0A2342] text-sm w-2/3">{title}</span>
        {isGuide ? (
             <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                 <Image src={img} alt={title} width={24} height={24} className="w-6 h-6 object-contain" />
             </div>
        ) : (
             <Image src={img} alt={title} width={56} height={56} className="w-14 h-14 object-contain" />
        )}
    </Link>
);

const MobileSmallCard = ({ title, img, to, onLinkClick  }: MobileSmallCardProps) => (
    <Link href={to || "#"} onClick={onLinkClick}  className="flex flex-col items-center justify-center p-2 bg-white rounded-lg shadow-sm border border-gray-100 text-center h-28">
        <Image src={img} alt={title} width={48} height={48} className="w-12 h-12 object-contain mb-2" />
        <span className="font-medium text-[#0A2342] text-xs leading-tight">{title}</span>
    </Link>
);

const MobileDiscoveryCard = ({ title, img, to, onLinkClick  }: MobileDiscoveryCardProps) => (
    <Link href={to || "#"} onClick={onLinkClick}  className="block relative rounded-xl overflow-hidden h-32 w-full shadow-md group">
        <Image src={img} alt={title} layout="fill" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center p-4">
            <span className="text-white font-bold text-sm text-center drop-shadow-md">{title}</span>
        </div>
    </Link>
);

const MobilePromoCard = ({ title, text, img, isDark, to, onLinkClick  }: MobilePromoCardProps) => (
    <Link href={to || "#"} onClick={onLinkClick}  className="block relative rounded-xl overflow-hidden h-28 w-full shadow-md">
        <Image src={img} alt={title} layout="fill" className="w-full h-full object-cover" />
        <div className={`absolute inset-0 flex flex-col justify-center p-4 ${isDark ? 'bg-black/50' : 'bg-black/30'}`}>
            <span className="text-white font-extrabold text-lg leading-none mb-1">{title}</span>
            <span className="text-white text-xs font-medium">{text}</span>
        </div>
    </Link>
);

export default Header;
