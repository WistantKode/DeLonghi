import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {FaRegHeart} from 'react-icons/fa';
import {BsPerson} from "react-icons/bs";
import {AiOutlineShoppingCart} from 'react-icons/ai';
import DesktopNav from './layout/header/DesktopNav';
import MobileNav from './layout/header/MobileNav';

const Header = () => {
    return (
        <header className="w-full fixed z-50 top-0 left-0 font-sans">

            {/* Barre supérieure */}
            <div className="bg-[#0A2342] text-white text-center py-4 text-sm">
                <div className="hidden lg:block">
                    <span className="px-4 border-r border-opacity-25">Livraison offerte à partir de 39€</span>
                    <span className="px-4 border-r border-opacity-25">Retour gratuit</span>
                    <span className="px-4">Payer en 3x sans frais avec Klarna</span>
                </div>
                <div className="lg:hidden text-xs">
                    <span>Livraison offerte dès 39€ & Retours gratuits</span>
                </div>
            </div>

            <div className="bg-white border-b border-gray-200">
                <nav className="flex justify-between items-center px-6 h-16 lg:h-auto">

                    <MobileNav/>

                    {/* Logo */}
                    <Link href="/" className="lg:px-10">
                        <Image src="/delonghi_logo.png" alt="De'Longhi Logo" width={200} height={80}
                               className="h-10 lg:h-32"/>
                    </Link>

                    <DesktopNav/>

                    {/* Icon droite */}
                    <div className="flex px-15 space-x-4">
                        <a href="#"
                           className="text-gray-500 hover:text-dark-blue text-sm pt-2 hover:underline hidden xl:block">Support</a>
                        <a href="#"
                           className="text-gray-500 hover:text-dark-blue text-sm pt-2 hover:underline hidden xl:block">Enregistrement
                            du produit</a>

                        <a href="#" className="text-gray-500 hover:text-dark-blue hidden lg:block">
                            <FaRegHeart className="w-6 h-6 lg:w-8 lg:h-8"/>
                            <span className="sr-only">Wishlist</span>
                        </a>
                        <a href="#" className="text-gray-500 hover:text-dark-blue">
                            <BsPerson className="w-6 h-6 lg:w-8 lg:h-8"/>
                            <span className="sr-only">Account</span>
                        </a>
                        <a href="#" className="text-gray-500 hover:text-dark-blue">
                            <AiOutlineShoppingCart className="w-6 h-6 lg:w-8 lg:h-8"/>
                            <span className="sr-only">Cart</span>
                        </a>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
