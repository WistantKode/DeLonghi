import { IoIosArrowForward } from 'react-icons/io'; 
import Hero from '@/components/Hero';
import ProductCarousel from '@/components/ProductCarousel';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "De'Longhi France | Machines à café, Expresso broyeurs, Appareils",
  description: "Découvrez les machines à café De'Longhi : expresso broyeurs, machines expresso, climatiseurs et plus. Offres exclusives jusqu'à -30%. Livraison gratuite dès 39€.",
};

export default function Home() {

    const customBlueButton = 'bg-[#266BBF] text-white hover:bg-[#8bb1e0]';
    const whiteButtonWithGrayText = 'bg-white text-gray-700 hover:bg-gray-300';
    const coffeeMachineStyle = {
        backgroundImage: 'url("/bg1.jpg")', 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    return (
        <div className="w-full">
            
            <Hero 
                tagline="DE'LONGHI DAYS"
                title={<>Accès anticipé à des <br className="hidden md:block"/>ventes exceptionnelles</>}
                subtitle="Profitez d'offres exclusives avec jusqu'à 30% de réduction"
                ctaText="Acheter maintenant"
                ctaLink="/promo_hallo"
                videoUrl="/video/people.webm"
                paddingTop='pt-50'
                textColor='text-white' 
                btnColor={whiteButtonWithGrayText}
            />
            
            <section className="py-12 max-w-7xl mx-auto px-4 text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Quels produits recherchez-vous?</h2>
                <ProductCarousel /> 
            </section>

            <Hero 
                title={<>Ce n'est pas seulement <br/>PARFAIT c'est<br/>PERFETTO.</>}
                ctaText="Découvrir Perfetto"
                videoUrl="/video/people.webm" 
                titleMarginTop="-mt-40" 
                ctaLink="/decouvrir_cafe1"
                textColor='text-black' 
                btnColor={customBlueButton} 
            />

            {/* SECTION CADEAU : Flex-col sur mobile, Row sur Desktop */}
            <section className="w-full my-6 overflow-hidden">
                <div className="flex flex-col-reverse lg:flex-row">
                    
                    <div className="w-full lg:w-1/2 flex flex-col justify-center p-8 lg:pl-20 lg:pr-8 bg-orange-50 text-center lg:text-left">
                        
                        <h1 className="text-3xl text-[#0A2342] md:text-6xl font-serif leading-tight mb-4 md:mb-6 ">
                            Un cadeau exclusif d'une valeur de 70€
                        </h1>
                        
                        <p className="text-base md:text-lg mb-6 md:mb-8 text-[#0A2342] ">
                            Avec le code <strong className="font-bold">COFFEECLUB</strong>, recevez un kit exclusif pour l'achat d'une machine à café de notre sélection.
                        </p>

                        <Link href="/coffee_club" className="self-center lg:self-start"> 
                            <button className="py-2 px-8 text-white font-semibold cursor-pointer rounded-full bg-[#0A2342] hover:bg-white border-2 border-[#0A2342] hover:text-[#0A2342] transition duration-300 w-fit">
                                Bénéficier de l'offre
                            </button>
                        </Link>
                    </div>
                    
                    <div className="w-full lg:w-1/2 relative bg-gray-200 flex items-center justify-center h-64 lg:h-auto">
                        <Image src="/accessoires/access1.png" alt="" layout="fill" className="w-full h-full object-cover"/>
                    </div>
                </div>
            </section>

            {/* SECTION RIVELIA : Ajustement padding et text align */}
            <section className="relative w-full overflow-hidden py-16 lg:p-25 mb-10" style={coffeeMachineStyle}>
                <div className="absolute inset-0 bg-orange-100 opacity-20"></div>
                
                    <div className="relative flex flex-col justify-center">
                        <div className="px-6 text-white lg:pl-20 lg:pr-8  text-center lg:text-left"> 
                            
                            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif leading-tight mb-4 md:mb-6">
                                Machine à café en grain <br className="hidden md:block"/>automatique
                            </h2>
                            
                            <p className="text-base md:text-lg mb-6 md:mb-8">
                                Offrez-vous une expérience café Perfetto
                            </p>
                            <Link href="/rivelia"> 
                                <button className={`py-2 px-8 font-semibold cursor-pointer rounded-full w-fit bg-white text-[#0A2342] hover:bg-[#0A2342] hover:text-white transition-all`}>
                                    Acheter maintenant
                                </button> 
                            </Link>
                       </div>
                   </div>
            </section>

            {/* SECTION PRIMA DONNA : Ajustement padding et text align (Même logique) */}
            <section className="relative w-full overflow-hidden py-16 lg:p-25 mb-10" style={coffeeMachineStyle}>
                <div className="absolute inset-0 bg-orange-100 opacity-20"></div>
                
                    <div className="relative flex flex-col justify-center">
                        <div className="px-6 lg:pl-20 lg:pr-8 text-white text-center lg:text-left"> 
                            
                            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif leading-tight mb-4 md:mb-6">
                                Machine à café en grain <br className="hidden md:block"/>automatique
                            </h2>
                            
                            <p className="text-base md:text-lg mb-6 md:mb-8">
                                Offrez-vous une expérience café Perfetto
                            </p>
                            <Link href="/prima_donna"> 
                                <button className={`py-2 px-8 font-semibold cursor-pointer rounded-full w-fit bg-white text-[#0A2342] hover:bg-[#0A2342] hover:text-white transition-all  `}>
                                    Acheter maintenant
                                </button> 
                            </Link>
                       </div>
                   </div>
            </section>


            {/* SECTION GRILLES (Images avec texte) : 1 colonne mobile, 2 desktop */}
            <section className="w-full mb-10">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    
                    <div className="relative h-[400px] lg:h-[550px] flex flex-col justify-end p-8 text-white overflow-hidden">
                        <div className="absolute inset-0">
                            <Image src="/cafe/cafe_machine.jpg" alt="" layout="fill" className="w-full h-full object-cover"/>
                        </div>
                        <div className="absolute inset-0 bg-black opacity-30 z-1"></div>
                        
                        <div className="relative z-2">
                            <h3 className="text-lg font-semibold mb-2 text-center">
                                Mamma mia, quel défi !
                            </h3>
                            <Link href="/perfetto_challenge" className="flex items-center justify-center text-sm font-semibold mt-4 w-full group">
                                Commencer le test d'italien
                                <IoIosArrowForward className="ml-2 bg-white rounded-full text-black w-6 h-6 transition-transform duration-300 group-hover:translate-x-1" />
                            </Link>
                        </div>
                    </div>

                    <div className="relative h-[400px] lg:h-[550px] flex flex-col justify-end p-8 text-white overflow-hidden">
                        <div className="absolute inset-0">
                            <Image src="/cafe/tasse_cafe.webp" alt="" layout="fill" className="w-full h-full object-cover"/>
                        </div>
                        <div className="absolute inset-0 bg-black opacity-30 z-1"></div>

                        <div className="relative z-2">
                            <p className="text-lg font-semibold mb-2 text-center">
                                Offrez-vous une expérience <br/>rafraîchissante
                            </p>
                            <Link href="/decouvrir_accessoires1" className="flex items-center justify-center text-sm font-semibold mt-4 w-full group">
                                En savoir plus
                                <IoIosArrowForward className="ml-2 bg-white rounded-full text-black w-6 h-6 transition-transform duration-300 group-hover:translate-x-1" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* DERNIERE SECTION : 1 colonne mobile, 2 desktop */}
            <section className="w-full mb-6">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    
                    <div className="relative h-[400px] lg:h-[550px] flex flex-col justify-end p-8 text-white overflow-hidden">
                        <div className="absolute inset-0">
                            <Image src="/accessoires/access2.png" alt="" layout="fill" className="w-full h-full object-cover"/>
                        </div>
                        <div className="absolute inset-0 bg-black opacity-30 z-1"></div>
                        
                        <div className="relative z-2">
                            <h3 className="text-lg font-semibold mb-2 text-center">
                                De'Longhi renova: <br/> Economisez jusqu'à 45%
                            </h3>
                            <Link href="/refurbished" className="flex items-center justify-center text-sm font-semibold mt-4 w-full group">
                                En savoir plus
                                <IoIosArrowForward className="ml-2 bg-white rounded-full text-black w-6 h-6 transition-transform duration-300 group-hover:translate-x-1" />
                            </Link>
                        </div>
                    </div>

                    <div className="relative h-[400px] lg:h-[550px] flex flex-col justify-end p-8 text-white overflow-hidden">
                        <div className="absolute inset-0">
                            <Image src="/cafe/machine1.jpg" alt="" layout="fill" className="w-full h-full object-cover"/>
                        </div>
                        <div className="absolute inset-0 bg-black opacity-30 z-1"></div>

                        <div className="relative z-2">
                            <p className="text-lg font-semibold mb-2 text-center">
                                Découvrez les meilleures <br/> offre De'Longhi une expérience
                            </p>
                            <Link href="/promotion_page" className="flex items-center justify-center text-sm font-semibold mt-4 w-full group">
                                Voir toutes les promotions en cours
                                <IoIosArrowForward className="ml-2 bg-white rounded-full text-black w-6 h-6 transition-transform duration-300 group-hover:translate-x-1" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
