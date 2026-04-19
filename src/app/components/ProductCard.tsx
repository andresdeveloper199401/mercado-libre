import { Link } from "react-router";
import type { Product } from "../context/CartContext";
import { Truck, Star } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      to={`/product/${product.id}`}
      className="bg-white rounded-lg p-4 hover:shadow-xl transition-shadow border border-gray-200"
    >
      <div className="aspect-square mb-3 overflow-hidden rounded-md bg-gray-100">
        <img src={product.image} alt={product.title} />
      </div>

      <div className="text-sm font-semibold mb-2">{product.title}</div>

      {product.originalPrice && (
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs text-gray-500 line-through">
            ${product.originalPrice.toLocaleString()}
          </span>
          <span className="text-xs text-green-600 font-semibold">
            {Math.round((1 - product.price / product.originalPrice) * 100)} %OFF
          </span>
        </div>
      )}

      <div className="text-2xl font-semibold mb-2">
        ${product.price.toLocaleString()}
      </div>

      {product.shipping === "free" && (
        <div className="flex items-center gap-1 text-green-600 text-sm mb-2">
          <Truck className="w-4 h-4" />
          <span>Envio Gratis</span>
        </div>
      )}

      <div className="flex items-center gap-1">
        <div className="flex items-center gap-1">
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          <span className="text-sm">{product.rating}</span>
        </div>
        <span className="text-sm text-gray-500">
          ({product.reviews.toLocaleString()})
        </span>
      </div>
    </Link>
  );
}
