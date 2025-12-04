import React from 'react';
import Image from 'next/image';
import ProductSection from '@/components/ProductSection'; 
import { getProducts } from '@/lib/getProducts';


export default async function DecouvrirCafe6() {
    const products = await getProducts();
    
    const listingProps = {
        products: products,
        defaultListingTitle: "Les cadeaux Perfetto", 
        title : <>Des cadeaux pour la maison : de <br className="hidden lg:block"/>nombreuses idées pour vous inspirer</>,
        subtitle: <>Vous êtes à la recherche du cadeau idéal? <br className="hidden lg:block"/> Découvrez notre sélection de cadeaux dédiés aux amateurs de café.</>,
        filterOptions: ['Trier par', 'Prix', 'Promotion', 'Couleur', 'Catégorie', 'Série', 'Type de boisson', 'Nettoyage'],
        backgroundImage: "/cafe/decouvrir_cafe6_5.avif", 
        productsPerPage: 4,
    };

   return (
      <>
        <div className="font-sans antialiased">
            <ProductSection {...listingProps} />
        </div>

        {/* Texte Introductif */}
        <div className="flex flex-col px-6 lg:px-32 items-center text-center py-10 lg:py-5">
              <p className="text-base lg:text-lg text-gray-700">
                  Tout au long de l&apos;année, les occasions d&apos;offrir des cadeaux peuvent être nombreuses : pour les fêtes de fin d&apos;année, mais aussi pour les anniversaires ou les pendaisons de crémaillère.
              </p>
         </div>

         {/* Section 1 : Texte Gauche / Image Droite */}
         <section className="w-full flex flex-col lg:flex-row gap-10 mt-10 px-6 lg:pl-15">
              
             <div className="flex flex-col justify-center w-full lg:w-[40%] gap-4 lg:pr-6 text-center lg:text-left">
                   <h2 className="font-medium text-2xl lg:text-3xl text-[#0A2342]">
                     Tasses à café, verres et bien plus encore
                   </h2>
                   <p className="text-base lg:text-lg text-gray-600">
                      Les tasses à café sont un cadeau parfait pour savourer une pause à tout moment de la journée. Expresso, cappuccino, americano : profitez pleinement de votre boisson préférée en vous détendant devant une série ou un bon livre.Découvrez également nos sets de verres, pour tous les types de boissons.
                   </p>
              </div>

              <div className="w-full lg:w-[60%]">
                    <Image src="/cafe/decouvrir_cafe6.avif" alt="Tasses" width={800} height={600} className="w-full h-auto object-cover" /> 
              </div>

           </section>

           {/* Section 2 : Image Gauche / Texte Droite */}
           <section className="w-full flex flex-col lg:flex-row gap-10 px-6 lg:pl-15 mt-20">
              
              <div className="w-full lg:w-[60%]">
                    <Image src="/cafe/decouvrir_cafe6_1.avif" alt="Petit déjeuner" width={800} height={600} className="w-full h-auto object-cover " /> 
              </div>

             <div className="flex flex-col justify-center w-full lg:w-[40%] gap-4 lg:pr-6 text-center lg:text-left">
                   <h2 className="font-medium text-2xl lg:text-3xl text-[#0A2342]">
                      Des ensembles bouilloire et grille-pain pour un petit déjeuner réussi
                   </h2>
                   <p className="text-base lg:text-lg text-gray-600">
                      Nos bouilloires et grille-pain électriques sont des cadeaux parfaits pour la cuisine. La collection Eclettica combine une esthétique moderne avec un charme fantaisiste, rendant votre petit-déjeuner encore plus agréable...
                   </p>
              </div>

           </section>

           {/* Section 3 : Texte Gauche / Image Droite */}
           <section className="w-full flex flex-col-reverse lg:flex-row gap-10 px-6 lg:pl-15 mt-20">
              
             <div className="flex flex-col justify-center w-full lg:w-[40%] gap-4 lg:pr-6 text-center lg:text-left">
                   <h2 className="font-medium text-2xl lg:text-3xl text-[#0A2342]">
                      Distinta Titanium
                   </h2>
                   <p className="text-base lg:text-lg text-gray-600">
                     Les ensembles bouilloire et grille-pain de la collection Distinta Titanium sont le choix idéal si vous recherchez un style alliant design italien et fonctionnalité immédiate.
                   </p>
              </div>

              <div className="w-full lg:w-[60%]">
                    <Image src="/cafe/decouvrir_cafe6_2.avif" alt="Distinta Titanium" width={800} height={600} className="w-full h-auto object-cover" /> 
              </div>

           </section>

           {/* Section 4 : Image Gauche / Texte Droite */}
           <section className="w-full flex flex-col lg:flex-row gap-10 px-6 lg:pl-15 mt-20">
              
              <div className="w-full lg:w-[60%]">
                    <Image src="/cafe/decouvrir_cafe6_3.avif" alt="Machine à café" width={800} height={600} className="w-full h-auto object-cover" /> 
              </div>

             <div className="flex flex-col justify-center w-full lg:w-[40%] gap-4 lg:pr-6 text-center lg:text-left">
                   <h2 className="font-medium text-2xl lg:text-3xl text-[#0A2342]">
                      Et si le cadeau idéal était une machine à café ?
                   </h2>
                   <p className="text-base lg:text-lg text-gray-600">
                      Une machine à café peut être un cadeau parfait pour la cuisine et la maison. Découvrez nos machines à café automatiques intuitives pour savourer votre boisson préférée d&apos;une simple touche.
                   </p>
              </div>

         </section>

         {/* Texte de fin */}
         <div className="flex flex-col px-6 lg:px-32 items-center text-center py-10 mb-10">
              <p className="text-base lg:text-lg text-gray-700">
                  Quel que soit le cadeau que vous recherchez, nous avons tout ce qu&apos;il vous faut. Explorez notre sélection de cadeaux pour la maison et trouvez le produit qui répond à toutes vos attentes, pour toutes les occasions.
              </p>
         </div>

      </>
    );
}
