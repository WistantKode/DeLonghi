'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaAngleDown, FaChevronRight } from 'react-icons/fa';
import MenuItem from './MenuItem';

interface NavLinkItemProps {
    title: string;
    id: string;
    activeMenu: string | null;
    onMenuClick: (id: string) => void;
    onLinkClick: () => void;
    children: React.ReactNode;
}

const NavLinkItem = ({ title, id, activeMenu, onMenuClick, children }: NavLinkItemProps) => {
    const isActive = activeMenu === id;
  
    return (
        <li className="relative">
            <span className={`cursor-pointer flex items-center p-4 transition duration-200 hover:font-medium ${isActive ? 'font-medium' : 'font-normal'}`} onClick={() => onMenuClick(id)}>
                {title} 
                <FaAngleDown size={18} className={`ml-1 transition duration-200 ${isActive ? 'rotate-180' : 'rotate-0'}`} />
            </span>
  
            {isActive && (
                <div className="fixed top-[128px] z-20 shadow-xl border-t border-gray-200 pt-4 bg-white" style={{ width: '100vw', left: 0, right: 0 }}>
                    {children}
                </div>
            )}
        </li>
    );
};

const DesktopNav = () => {
    const [activeMenu, setActiveMenu] = useState<string | null>(null);

    const handleMenuClick = (menuId: string) => {
        setActiveMenu(activeMenu === menuId ? null : menuId);
    };

    const closeDesktopMenu = () => {
        setActiveMenu(null);
    }

    return (
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
    );
};

export default DesktopNav;
