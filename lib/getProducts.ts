import { ProductService, ProductFilters } from '@/lib/services/productService';
import { Product } from '@/types/product';

/**
 * Server-side helper pour récupérer les produits
 * Utilise directement le ProductService - pas de fausse requête HTTP
 * 
 * @example
 * const products = await getProducts({ type: 'expresso-broyeur' });
 * const allProducts = await getProducts();
 */
export async function getProducts(filters?: ProductFilters): Promise<Product[]> {
  return ProductService.getProducts(filters);
}

/**
 * Récupère un produit par son ID
 */
export async function getProductById(id: number): Promise<Product | undefined> {
  return ProductService.getProductById(id);
}
