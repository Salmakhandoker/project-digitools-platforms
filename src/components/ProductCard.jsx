

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 relative hover:shadow-xl transition">
      
      {/* Tag */}
      <span className={`absolute top-3 right-3 text-xs px-2 py-1 rounded-full
        ${product.tagType === "best" ? "bg-yellow-400" :
          product.tagType === "popular" ? "bg-blue-400" :
          "bg-green-400"} text-white`}>
        {product.tag}
      </span>

      {/* Icon */}
      <div className="text-3xl mb-3">{product.icon}</div>

      {/* Name */}
      <h2 className="text-xl font-bold">{product.name}</h2>

      {/* Description */}
      <p className="text-gray-500 text-sm mt-2">{product.description}</p>

      {/* Price */}
      <p className="mt-4 text-2xl font-bold text-purple-600">
        ${product.price}
        <span className="text-sm text-gray-400">/{product.period}</span>
      </p>

      {/* Features */}
      <ul className="mt-3 text-sm space-y-1">
        {product.features.map((f, i) => (
          <li key={i}>✔ {f}</li>
        ))}
      </ul>

      {/* Button */}
      <button
        onClick={() => addToCart(product)}
        className="btn btn-primary w-full mt-5"
      >
        Buy Now
      </button>
    </div>
  );
};

export default ProductCard;