export interface Product {
  id: number;
  name: string;
  price: string;
  oldPrice?: string;
  rating: number;
  reviews: number;
  status: string;
  image: string;
  category: string;
  colors?: number;
  features: string[];
}

export interface ProductSectionProps {
  products: Product[];
  title?: string | null;
  subtitle?: string | null;
  backgroundImage?: string | null;
  defaultListingTitle?: string;
  filterOptions?: string[];
  productsPerPage?: number;
}
