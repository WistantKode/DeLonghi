import { NextRequest, NextResponse } from 'next/server';
import { ProductService } from '@/lib/services/productService';

/**
 * API Route pour récupérer les produits
 * GET /api/products?type=x&series=y&status=z
 */
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  
  const filters = {
    type: searchParams.get('type') || undefined,
    series: searchParams.get('series') || undefined,
    status: searchParams.get('status') || undefined,
  };

  const products = ProductService.getProducts(filters);
  
  return NextResponse.json(products);
}
