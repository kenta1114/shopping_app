import React from 'react';
import { ProductCard } from '../components/ProductCard';
import { Product } from '../types';

const SAMPLE_PRODUCTS: Product[] = [
  {
    id: '1',
    name: '有機野菜セット',
    price: 2980,
    description: '新鮮な旬の有機野菜の詰め合わせ',
    image: 'https://images.unsplash.com/photo-1610348725531-843dff563e2c?auto=format&fit=crop&q=80',
    category: '野菜',
  },
  {
    id: '2',
    name: '天然マグロ刺身',
    price: 3980,
    description: '脂のりの良い天然マグロの刺身',
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&q=80',
    category: '魚介類',
  },
  {
    id: '3',
    name: '国産牛ステーキ',
    price: 5980,
    description: 'ジューシーな国産牛のステーキ',
    image: 'https://images.unsplash.com/photo-1603048297172-c92544798d5a?auto=format&fit=crop&q=80',
    category: '肉',
  },
];

export const ProductList: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">商品一覧</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SAMPLE_PRODUCTS.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};