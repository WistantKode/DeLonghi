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
  category: string;
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
