import React from "react";

// Define a union type for main product categories
export type ProductCategory = 
  'expresso-broyeur' | 
  'machine-expresso-manuelle' | 
  'machine-capsule' | 
  'accessoire' | 
  'appareil-confort' | 
  'appareil-cuisine' | 
  'bouilloire-grille-pain' |
  'cafe'; // General category for the main coffee page

export interface KlarnaInfo {
  payment: string;
  interest: string;
  link: string;
}

export interface Product {
  id: number;
  name: string;
  price: string;
  oldPrice?: string;
  rating: number;
  reviews: number;
  status: string;
  image: string;
  images?: string[]; // For ProductDescriptionSection
  
  // NEW: Clearly separated product type and series
  type: ProductCategory; // The main category/type of the product
  series: string;       // The specific product series or line (e.g., "Rivelia", "Magnifica")
  
  colors?: number;
  color?: string; // For ProductDescriptionSection
  features?: string[];
  subtitle?: string; // For ProductDescriptionSection
  reference?: string; // For ProductDescriptionSection
  taxInfo?: string; // For ProductDescriptionSection
  klarna?: KlarnaInfo; // For ProductDescriptionSection
}

export interface ProductSectionProps {
  products: Product[];
  title?: React.ReactNode | null;
  subtitle?: React.ReactNode | null;
  backgroundImage?: string | null;
  defaultListingTitle?: string;
  listingPreTitle?: string;
  filterOptions?: string[];
  productsPerPage?: number;
}

export interface ProductDescriptionSectionProps {
  product: Product;
}
