'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaBars, FaTimes, FaPlus, FaMinus, FaRegHeart } from 'react-icons/fa';
import { LiaHeadsetSolid } from 'react-icons/lia';
import MobileCategoryCard from './MobileCategoryCard';
import MobileSmallCard from './MobileSmallCard';
import MobileDiscoveryCard from './MobileDiscoveryCard';
import MobilePromoCard from './MobilePromoCard';

const MobileNav = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeMobileSubMenu, setActiveMobileSubMenu] = useState<string | null>(null);

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  
    const toggleMobileSubMenu = (menuId: string) => {
        setActiveMobileSubMenu(activeMobileSubMenu === menuId ? null : menuId);
    };

    const handleMobileLinkClick = () => {
        setIsMobileMenuOpen(false);
        setActiveMobileSubMenu(null);
    };

    return (
        <>
            <div className="lg:hidden flex items-center gap-6">
                <button onClick={toggleMobileMenu} className="text-[#0A2342] p-2 -ml-2">
                    <FaBars size={24} />
                </button>
            </div>

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
        </>
    );
};

export default MobileNav;
