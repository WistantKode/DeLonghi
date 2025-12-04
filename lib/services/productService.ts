import { Product } from '@/types/product';
import { products } from '@/lib/data/products';

/**
 * Filters pour la recherche de produits
 */
export interface ProductFilters {
  type?: string;
  series?: string;
  status?: string;
}

/**
 * Service Layer pour la gestion des produits
 * Centralise toute la logique métier liée aux produits
 */
export class ProductService {
  /**
   * Récupère les produits filtrés selon les critères
   */
  static getProducts(filters?: ProductFilters): Product[] {
    let filtered = products;

    if (filters?.type) {
      filtered = filtered.filter(p => p.type === filters.type);
    }

    if (filters?.series) {
      filtered = filtered.filter(p => p.series === filters.series);
    }

    if (filters?.status) {
      filtered = filtered.filter(p => p.status === filters.status);
    }

    return filtered;
  }

  /**
   * Récupère un produit par son ID
   */
  static getProductById(id: number): Product | undefined {
    return products.find(p => p.id === id);
  }

  /**
   * Récupère tous les produits sans filtre
   */
  static getAllProducts(): Product[] {
    return products;
  }
}
