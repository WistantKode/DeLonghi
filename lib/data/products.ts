import { Product } from '@/types/product';

const products: Product[] = [
    { 
        id: 1, 
        name: "Rivelia Jade Green | Couleur exclusive", 
        price: "699,00 €", 
        oldPrice: "799,00 €", 
        rating: 4.7, 
        reviews: 750, 
        status: "EXCLUSIVITÉ WEB", 
        image: "/product/machine1.avif",
        type: "expresso-broyeur", 
        series: "Rivelia",       
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
        image: "/product/machine.avif",
        type: "expresso-broyeur",
        series: "Rivelia",
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
        image: "/product/machine2.avif",
        type: "expresso-broyeur",
        series: "Rivelia",
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
        image: "/product/machine1.avif",
        type: "expresso-broyeur",
        series: "Rivelia",
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
        image: "/cafe/cafe_machine.jpg",
        type: "expresso-broyeur",
        series: "Eletta Explore",
        colors: 5,
        features: [
            "Mouture réglable",
            "Programmation horaire",
            "Détartrage facile",
            "Silencieux"
        ]
    },
    // PrimaDonna Aromatic products
    {
        id: 6,
        name: "PrimaDonna Aromatic, Argent brossé",
        price: "1299,00 €",
        oldPrice: "1499,00 €",
        rating: 4.8,
        reviews: 920,
        status: "DISPONIBLE",
        image: "/cafe/decouvrir_cafe1_2.avif",
        type: "expresso-broyeur",
        series: "PrimaDonna Aromatic",
        colors: 3,
        features: [
            "Technologie LatteCrema Hot",
            "Technologie Cold Extraction",
            "Technologie Bean Adapt",
            "30 délicieux cafés chauds et froids d'une simple touche"
        ],
        subtitle: "Une élégance intemporelle avec son design en métal brossé argenté"
    },
    {
        id: 7,
        name: "PrimaDonna Aromatic, Titane brossé",
        price: "1399,00 €",
        oldPrice: "1599,00 €",
        rating: 4.8,
        reviews: 920,
        status: "DISPONIBLE",
        image: "/cafe/decouvrir_cafe1_3.avif",
        type: "expresso-broyeur",
        series: "PrimaDonna Aromatic",
        colors: 3,
        features: [
            "LatteCrema Hot & Cool Technologies",
            "Technologie Cold Extraction",
            "Technologie Bean Adapt",
            "Plus de 35 délicieux cafés chauds et froids d'une simple touche"
        ],
        subtitle: "Une élégance intemporelle avec son design en métal brossé en titane"
    },
    {
        id: 8,
        name: "PrimaDonna Aromatic, Titane brillant",
        price: "1499,00 €",
        oldPrice: "1699,00 €",
        rating: 4.9,
        reviews: 1050,
        status: "NOUVEAUTÉ",
        image: "/cafe/decouvrir_cafe1_3.avif", // Re-using image for now, ideally unique
        type: "expresso-broyeur",
        series: "PrimaDonna Aromatic",
        colors: 3,
        features: [
            "Technologies LatteCrema Hot & Cool",
            "Technologie Cold Extraction",
            "Technologie Bean Adapt",
            "Plus de 35 délicieux cafés chauds et froids d'une simple touche"
        ],
        subtitle: "Une élégance intemporelle avec son design en métal brillant en titane"
    },
    // Accessoires products
    {
        id: 9,
        name: "Kit LatteCrema Cool upgrade Set",
        price: "99,90 €",
        oldPrice: null,
        rating: 4.8,
        reviews: 72,
        status: "DISPONIBLE",
        image: "/accessoires/decouvrir1.avif",
        type: "accessoire",
        series: "LatteCrema Cool",
        colors: 1,
        features: [
            "Carafe LatteCrema Cool",
            "2 verres double parois de 400 ml",
            "2 verres double parois de 480 ml",
            "Livre de recettes"
        ],
        subtitle: "Pichets à lait automatiques",
        reference: "DLSC032",
        taxInfo: "TVA incluse",
        klarna: { payment: "33,30", interest: "0 %", link: "#" }
    },
    {
        id: 10,
        name: "Porte-filtre sans fond",
        price: "64,90 €",
        oldPrice: null,
        rating: 4.8,
        reviews: 72,
        status: "DISPONIBLE",
        image: "/accessoires/decouvrir6.avif",
        type: "accessoire",
        series: "La Specialista",
        colors: 1,
        features: [
            "Acier inoxydable haute qualité (AISI304)",
            "Poignée en bois de rose",
            "Porte-filtre 51 mm avec panier double",
            "Compatible avec tous les modèles La Specialista"
        ],
        subtitle: "Accessoires à café",
        reference: "DLSC085",
        taxInfo: "TVA incluse"
    },
    {
        id: 11,
        name: "Accessoire à café 1",
        price: "19,90 €",
        oldPrice: null,
        rating: 4.5,
        reviews: 120,
        status: "DISPONIBLE",
        image: "/accessoires/accessoires3.jpg",
        type: "accessoire-cafe",
        series: "Générique",
        colors: 1,
        features: ["Description de l'accessoire 1"]
    },
    {
        id: 12,
        name: "Accessoire à café 2",
        price: "29,90 €",
        oldPrice: null,
        rating: 4.2,
        reviews: 80,
        status: "DISPONIBLE",
        image: "/accessoires/accessoires4.jpg",
        type: "accessoire-cafe",
        series: "Générique",
        colors: 1,
        features: ["Description de l'accessoire 2"]
    },
    // Appareils Confort products
    {
        id: 13,
        name: "Climatiseur Mobile Pinguino PAC EL98 ECO Real Feel",
        price: "699,00 €",
        oldPrice: "799,00 €",
        rating: 4.5,
        reviews: 300,
        status: "DISPONIBLE",
        image: "/appareils/appa7.jpg",
        type: "appareil-confort",
        series: "Pinguino",
        colors: 1,
        features: [
            "Technologie Real Feel",
            "Classe énergétique A++",
            "Fonction déshumidification",
            "Télécommande"
        ],
        subtitle: "Idéal pour rafraîchir votre intérieur"
    },
    {
        id: 14,
        name: "Déshumidificateur Tasciugo AriaDry Multi DEX216F",
        price: "249,00 €",
        oldPrice: "299,00 €",
        rating: 4.7,
        reviews: 500,
        status: "PROMO",
        image: "/appareils/appa.jpg",
        type: "appareil-confort",
        series: "Tasciugo AriaDry",
        colors: 1,
        features: [
            "Capacité 16L/24h",
            "Fonction séchage linge",
            "Filtre anti-poussière",
            "Silencieux"
        ],
        subtitle: "Combat l'humidité efficacement"
    },
    // Accessoire Moulin à café
    {
        id: 15,
        name: "Moulin à café Dedica Grinder KG 521.M",
        price: "199,00 €",
        oldPrice: "229,00 €",
        rating: 4.6,
        reviews: 150,
        status: "DISPONIBLE",
        image: "/accessoires/access.png",
        type: "accessoire",
        series: "Moulin à café",
        colors: 1,
        features: [
            "18 niveaux de mouture",
            "Écran LCD",
            "Réservoir à grains 350g",
            "Compatible expresso et filtre"
        ],
        subtitle: "Pour une mouture parfaite"
    },
    // Appareils Cuisine products
    {
        id: 16,
        name: "Four électrique Sfornatutto EO 1256",
        price: "129,00 €",
        oldPrice: "149,00 €",
        rating: 4.4,
        reviews: 200,
        status: "DISPONIBLE",
        image: "/appareils/appa3.jpg",
        type: "appareil-cuisine",
        series: "Sfornatutto",
        colors: 1,
        features: [
            "Capacité 12.5L",
            "Fonction grill",
            "Minuteur 120 min",
            "Thermostat réglable"
        ],
        subtitle: "Compact et polyvalent"
    },
    {
        id: 17,
        name: "Friteuse F28311 Roto Fry",
        price: "99,00 €",
        oldPrice: "119,00 €",
        rating: 4.3,
        reviews: 180,
        status: "PROMO",
        image: "/appareils/appa4.jpg",
        type: "appareil-cuisine",
        series: "Roto Fry",
        colors: 1,
        features: [
            "Système de friture rotatif",
            "Capacité 1 kg",
            "Filtre anti-odeur",
            "Thermostat réglable"
        ],
        subtitle: "Pour des frites croustillantes"
    },
    {
        id: 18,
        name: "Friteuse sans huile MultiFry FH1394",
        price: "249,00 €",
        oldPrice: "299,00 €",
        rating: 4.6,
        reviews: 250,
        status: "DISPONIBLE",
        image: "/appareils/appa5.jpg",
        type: "appareil-cuisine",
        series: "MultiFry",
        colors: 1,
        features: [
            "Technologie SHS Double",
            "Capacité 1.7 kg",
            "7 programmes de cuisson",
            "Application dédiée"
        ],
        subtitle: "Cuisinez sainement et rapidement"
    },
    // Bouilloire products
    {
        id: 19,
        name: "Bouilloire Icona Capitals KBOC2001.BL",
        price: "79,90 €",
        oldPrice: "89,90 €",
        rating: 4.4,
        reviews: 120,
        status: "DISPONIBLE",
        image: "/appareils/appa1.jpg",
        type: "bouilloire-grille-pain",
        series: "Icona Capitals",
        colors: 4,
        features: [
            "Capacité 1.7L",
            "Filtre anti-calcaire amovible",
            "Arrêt automatique",
            "Indicateur de niveau d'eau"
        ],
        subtitle: "Design élégant pour votre cuisine"
    },
    // Grille-pain products
    {
        id: 20,
        name: "Grille-pain Icona Capitals CTOC2103.BL",
        price: "79,90 €",
        oldPrice: "89,90 €",
        rating: 4.3,
        reviews: 100,
        status: "DISPONIBLE",
        image: "/appareils/appa2.jpg",
        type: "bouilloire-grille-pain",
        series: "Icona Capitals",
        colors: 4,
        features: [
            "2 fentes extra-larges",
            "Fonction décongélation",
            "Fonction réchauffage",
            "Tiroir ramasse-miettes"
        ],
        subtitle: "Pour des toasts parfaits"
    },
    // Promotion products (for promo_hallo)
    {
        id: 21,
        name: "Machine à café Rivelia - Promo Halloween",
        price: "599,00 €",
        oldPrice: "699,00 €",
        rating: 4.7,
        reviews: 700,
        status: "PROMO", // Important for filtering
        image: "/product/machine1.avif",
        type: "expresso-broyeur",
        series: "Rivelia",
        colors: 5,
        features: [
            "Technologie Cold Brew intégrée",
            "Double système de préparation",
            "Ecran tactile intuitif",
            "Nettoyage automatique"
        ],
        subtitle: "Offre spéciale Halloween"
    },
    {
        id: 22,
        name: "Déshumidificateur - Promo Halloween",
        price: "199,00 €",
        oldPrice: "249,00 €",
        rating: 4.6,
        reviews: 450,
        status: "PROMO", // Important for filtering
        image: "/appareils/appa.jpg",
        type: "appareil-confort",
        series: "Tasciugo AriaDry",
        colors: 1,
        features: [
            "Capacité 16L/24h",
            "Fonction séchage linge",
            "Filtre anti-poussière",
            "Silencieux"
        ],
        subtitle: "Offre spéciale Halloween"
    },
    // Accessoires Détartrant et Filtre
    {
        id: 23,
        name: "Détartrant EcoDecalk DLSC500",
        price: "14,90 €",
        oldPrice: null,
        rating: 4.9,
        reviews: 1200,
        status: "DISPONIBLE",
        image: "/accessoires/accessoires.jpg",
        type: "accessoire",
        series: "Détartrant et filtre",
        colors: 1,
        features: [
            "Formule écologique",
            "Prolonge la durée de vie de la machine",
            "Améliore le goût du café"
        ],
        subtitle: "Pour un entretien optimal"
    },
    {
        id: 24,
        name: "Filtre à eau adoucisseur DLSC002",
        price: "12,90 €",
        oldPrice: null,
        rating: 4.7,
        reviews: 800,
        status: "DISPONIBLE",
        image: "/accessoires/accessoires2.jpg", // Example image
        type: "accessoire",
        series: "Détartrant et filtre",
        colors: 1,
        features: [
            "Réduit le calcaire",
            "Améliore la qualité de l'eau",
            "Facile à installer"
        ],
        subtitle: "Pour une eau pure et un café savoureux"
    },
    // Accessoires Tasse et Verre
    {
        id: 25,
        name: "Lot de 2 tasses à expresso",
        price: "19,90 €",
        oldPrice: null,
        rating: 4.6,
        reviews: 300,
        status: "DISPONIBLE",
        image: "/accessoires/accessoires1.jpg", // Example image
        type: "accessoire",
        series: "Tasse et verre",
        colors: 1,
        features: [
            "Verre double paroi",
            "Maintient la chaleur",
            "Design élégant"
        ],
        subtitle: "Pour une dégustation parfaite"
    },
    {
        id: 26,
        name: "Lot de 2 verres à latte macchiato",
        price: "29,90 €",
        oldPrice: null,
        rating: 4.7,
        reviews: 250,
        status: "DISPONIBLE",
        image: "/accessoires/accessoires1.jpg", // Example image
        type: "accessoire",
        series: "Tasse et verre",
        colors: 1,
        features: [
            "Verre double paroi",
            "Grande capacité",
            "Idéal pour les boissons lactées"
        ],
        subtitle: "Sublimez vos créations"
    },
    // Machines à capsules
    {
        id: 27,
        name: "Machine à capsules Nespresso Essenza Mini",
        price: "99,00 €",
        oldPrice: "119,00 €",
        rating: 4.5,
        reviews: 600,
        status: "DISPONIBLE",
        image: "/cafe/cafe2.jpg", // Example image
        type: "machine-capsule",
        series: "Nespresso Essenza",
        colors: 3,
        features: [
            "Ultra-compacte",
            "Pression 19 bars",
            "Mode économie d'énergie",
            "Arrêt automatique"
        ],
        subtitle: "Simplicité et rapidité"
    },
    {
        id: 28,
        name: "Machine à capsules Nespresso Vertuo Next",
        price: "149,00 €",
        oldPrice: "179,00 €",
        rating: 4.6,
        reviews: 400,
        status: "PROMO",
        image: "/cafe/cafe2.jpg", // Example image
        type: "machine-capsule",
        series: "Nespresso Vertuo",
        colors: 4,
        features: [
            "Technologie Centrifusion",
            "5 tailles de tasse",
            "Connectivité Bluetooth",
            "Fabriquée à partir de matériaux recyclés"
        ],
        subtitle: "Une expérience café unique"
    },
    // Appareils Confort - Chauffage
    {
        id: 29,
        name: "Chauffage mobile céramique HFX30C15",
        price: "79,90 €",
        oldPrice: "99,90 €",
        rating: 4.2,
        reviews: 150,
        status: "DISPONIBLE",
        image: "/appareils/appa6.jpg",
        type: "appareil-confort",
        series: "Chauffage mobile",
        colors: 1,
        features: [
            "Technologie céramique",
            "2 niveaux de puissance",
            "Fonction anti-gel",
            "Design compact"
        ],
        subtitle: "Chaleur rapide et confortable"
    },
    // Accessoires Mug de voyage
    {
        id: 30,
        name: "Mug de voyage isotherme 350ml",
        price: "24,90 €",
        oldPrice: null,
        rating: 4.5,
        reviews: 180,
        status: "DISPONIBLE",
        image: "/accessoires/accessoires1.jpg", // Example image
        type: "accessoire",
        series: "Mug de voyage",
        colors: 3,
        features: [
            "Double paroi isolante",
            "Acier inoxydable",
            "Compatible porte-gobelet voiture",
            "Facile à nettoyer"
        ],
        subtitle: "Gardez votre boisson au chaud ou au froid"
    },
    {
        id: 31,
        name: "Mug de voyage compact 200ml",
        price: "19,90 €",
        oldPrice: null,
        rating: 4.3,
        reviews: 100,
        status: "DISPONIBLE",
        image: "/accessoires/accessoires1.jpg", // Example image
        type: "accessoire",
        series: "Mug de voyage",
        colors: 2,
        features: [
            "Design ergonomique",
            "Léger et robuste",
            "Idéal pour expresso à emporter"
        ],
        subtitle: "Votre café partout avec vous"
    },
    // Appareils Confort - Déshumidificateurs
    {
        id: 32,
        name: "Déshumidificateur Tasciugo AriaDry Multi DEX216F",
        price: "249,00 €",
        oldPrice: "299,00 €",
        rating: 4.7,
        reviews: 500,
        status: "PROMO",
        image: "/appareils/appa.jpg",
        type: "appareil-confort",
        series: "Tasciugo AriaDry",
        colors: 1,
        features: [
            "Capacité 16L/24h",
            "Fonction séchage linge",
            "Filtre anti-poussière",
            "Silencieux"
        ],
        subtitle: "Combat l'humidité efficacement"
    },
    {
        id: 33,
        name: "Déshumidificateur Tasciugo AriaDry Light DEX10",
        price: "199,00 €",
        oldPrice: "229,00 €",
        rating: 4.5,
        reviews: 350,
        status: "DISPONIBLE",
        image: "/appareils/appa.jpg", // Re-using image
        type: "appareil-confort",
        series: "Tasciugo AriaDry",
        colors: 1,
        features: [
            "Capacité 10L/24h",
            "Design compact",
            "Très silencieux"
        ],
        subtitle: "Léger et efficace"
    },
    // Appareils Cuisine - Fours électriques
    {
        id: 34,
        name: "Four électrique Sfornatutto EO 1256",
        price: "129,00 €",
        oldPrice: "149,00 €",
        rating: 4.4,
        reviews: 200,
        status: "DISPONIBLE",
        image: "/appareils/appa3.jpg",
        type: "appareil-cuisine",
        series: "Sfornatutto",
        colors: 1,
        features: [
            "Capacité 12.5L",
            "Fonction grill",
            "Minuteur 120 min",
            "Thermostat réglable"
        ],
        subtitle: "Compact et polyvalent"
    },
    {
        id: 35,
        name: "Four électrique Sfornatutto EO 2079",
        price: "189,00 €",
        oldPrice: "219,00 €",
        rating: 4.6,
        reviews: 180,
        status: "DISPONIBLE",
        image: "/appareils/appa3.jpg", // Re-using image
        type: "appareil-cuisine",
        series: "Sfornatutto",
        colors: 1,
        features: [
            "Capacité 20L",
            "Double vitrage",
            "Fonction convection",
            "Lumière intérieure"
        ],
        subtitle: "Plus grand et plus performant"
    },
    // Accessoires Grain de café
    {
        id: 36,
        name: "Café en grains De'Longhi Kimbo Classic",
        price: "14,90 €",
        oldPrice: null,
        rating: 4.5,
        reviews: 500,
        status: "DISPONIBLE",
        image: "/cafe/cafe_machine.jpg", // Example image
        type: "accessoire",
        series: "Grain de café",
        colors: 1,
        features: [
            "Mélange 70% Arabica, 30% Robusta",
            "Notes de chocolat et caramel",
            "Intensité 8/10"
        ],
        subtitle: "Un classique italien"
    },
    {
        id: 37,
        name: "Café en grains De'Longhi Kimbo Prestige",
        price: "16,90 €",
        oldPrice: null,
        rating: 4.7,
        reviews: 400,
        status: "DISPONIBLE",
        image: "/cafe/cafe_machine.jpg", // Example image
        type: "accessoire",
        series: "Grain de café",
        colors: 1,
        features: [
            "Mélange 100% Arabica",
            "Notes fruitées et florales",
            "Intensité 7/10"
        ],
    },
];

export { products };
