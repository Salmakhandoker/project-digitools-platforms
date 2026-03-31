

import ProductCard from './ProductCard';

const Products = ({ products, addToCart }) => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">Premium Digital Tools</h2>
        <p className="text-gray-600 mt-3">Choose from our curated collection</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;