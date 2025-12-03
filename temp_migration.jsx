import React from 'react';
import { ProductSection } from '../components/ProductSection'; 

const initialProducts = [
    { 
        id: 1, 
        name: "Rivelia Jade Green | Couleur exclusive", 
        price: "699,00 €", 
        oldPrice: "799,00 €", 
        rating: 4.7, 
        reviews: 750, 
        status: "EXCLUSIVITÉ WEB", 
        image: "product/machine1.avif",
        category: "Rivelia",
        colors: 5,
        features: [
            "Technologie Cold Brew intégrée",
            "Double système de préparation",
            "Ecran tactile intuitif",
            "Nettoyage automatique"
        ]
    },
    { 
        id: 2, 
        name: "Rivelia - Sand Beige", 
        price: "699,00 €", 
        oldPrice: "799,00 €", 
        rating: 4.7, 
        reviews: 750, 
        status: "En rupture de stock", 
        image: "product/machine.avif",
        category: "Rivelia",
        colors: 5,
        features: [
            "Connectivité Wi-Fi",
            "Contrôle via application",
            "13 recettes personnalisables",
            "Broyeur céramique"
        ]
    },
    { 
        id: 3, 
        name: "Rivelia Onyx Black", 
        price: "699,00 €", 
        oldPrice: "799,00 €", 
        rating: 4.7, 
        reviews: 750, 
        status: "En rupture de stock", 
        image: "product/machine2.avif",
        category: "Rivelia",
        colors: 5,
        features: [
            "Design compact",
            "Système LatteCrema",
            "Chauffe-tasses intégré",
            "Rinçage automatique"
        ]
    },
    { 
        id: 4, 
        name: "Rivelia Arctic White", 
        price: "699,00 €", 
        oldPrice: "799,00 €", 
        rating: 4.7, 
        reviews: 750, 
        status: "PROMO", 
        image: "product/machine1.avif",
        category: "Rivelia",
        colors: 5,
        features: [
            "Double brûleur",
            "Réservoir lait intégré",
            "Ecran couleur HD",
            "Recettes barista"
        ]
    },
    { 
        id: 5, 
        name: "Eletta Explore, Gris sombre", 
        price: "699,00 €", 
        oldPrice: "799,00 €", 
        rating: 4.7, 
        reviews: 750, 
        status: "PROMO", 
        image: "cafe/cafe_machine.jpg",
        category: "Eletta Explore",
        colors: 5,
        features: [
            "Mouture réglable",
            "Programmation horaire",
            "Détartrage facile",
            "Silencieux"
        ]
    },
];


const DecouvrirCafe6 = () => {
    
    const listingProps = {
        products: initialProducts,
        defaultListingTitle: "Les cadeaux Perfetto", 
        title : <>Des cadeaux pour la maison : de <br className="hidden lg:block"/>nombreuses idées pour vous inspirer</>,
        subtitle: <>Vous êtes à la recherche du cadeau idéal? <br className="hidden lg:block"/> Découvrez notre sélection de cadeaux dédiés aux amateurs de café.</>,
        filterOptions: ['Trier par', 'Prix', 'Promotion', 'Couleur', 'Catégorie', 'Série', 'Type de boisson', 'Nettoyage'],
        backgroundImage: "cafe/decouvrir_cafe6_5.avif", 
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
                  Tout au long de l'année, les occasions d'offrir des cadeaux peuvent être nombreuses : pour les fêtes de fin d'année, mais aussi pour les anniversaires ou les pendaisons de crémaillère.
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
                    <img src="cafe/decouvrir_cafe6.avif" alt="Tasses" className="w-full h-auto object-cover" /> 
              </div>

           </section>

           {/* Section 2 : Image Gauche / Texte Droite */}
           <section className="w-full flex flex-col lg:flex-row gap-10 px-6 lg:pl-15 mt-20">
              
              <div className="w-full lg:w-[60%]">
                    <img src="cafe/decouvrir_cafe6_1.avif" alt="Petit déjeuner" className="w-full h-auto object-cover " /> 
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
                    <img src="cafe/decouvrir_cafe6_2.avif" alt="Distinta Titanium" className="w-full h-auto object-cover" /> 
              </div>

           </section>

           {/* Section 4 : Image Gauche / Texte Droite */}
           <section className="w-full flex flex-col lg:flex-row gap-10 px-6 lg:pl-15 mt-20">
              
              <div className="w-full lg:w-[60%]">
                    <img src="cafe/decouvrir_cafe6_3.avif" alt="Machine à café" className="w-full h-auto object-cover" /> 
              </div>

             <div className="flex flex-col justify-center w-full lg:w-[40%] gap-4 lg:pr-6 text-center lg:text-left">
                   <h2 className="font-medium text-2xl lg:text-3xl text-[#0A2342]">
                      Et si le cadeau idéal était une machine à café ?
                   </h2>
                   <p className="text-base lg:text-lg text-gray-600">
                      Une machine à café peut être un cadeau parfait pour la cuisine et la maison. Découvrez nos machines à café automatiques intuitives pour savourer votre boisson préférée d'une simple touche.
                   </p>
              </div>

         </section>

         {/* Texte de fin */}
         <div className="flex flex-col px-6 lg:px-32 items-center text-center py-10 mb-10">
              <p className="text-base lg:text-lg text-gray-700">
                  Quel que soit le cadeau que vous recherchez, nous avons tout ce qu'il vous faut. Explorez notre sélection de cadeaux pour la maison et trouvez le produit qui répond à toutes vos attentes, pour toutes les occasions.
              </p>
         </div>

      </>
    );
};

export default DecouvrirCafe6;