import { NextRequest, NextResponse } from 'next/server';
import { Product, ProductCategory } from '@/types/product';

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
    // NEW: PrimaDonna Aromatic products
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
];

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const type = searchParams.get('type') as ProductCategory | null;
  const series = searchParams.get('series');

  let filteredProducts = products;

  if (type) {
    filteredProducts = filteredProducts.filter(p => p.type === type);
  }

  if (series) {
    filteredProducts = filteredProducts.filter(p => p.series === series);
  }

  return NextResponse.json(filteredProducts);
}
