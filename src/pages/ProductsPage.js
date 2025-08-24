import React from "react";
import { ShoppingBag, CheckCircle, Package, Star } from "lucide-react";

const ProductsPage = ({ companyInfo, product, setCurrentView, setShowPasswordModal }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <div className="text-5xl">{companyInfo.logo}</div>
          <div>
            <h1 className="text-3xl font-bold text-gray-800">{companyInfo.name}</h1>
            <p className="text-gray-500">{companyInfo.tagline}</p>
          </div>
        </div>

        {/* Product Info */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Image / Icon */}
          <div className="flex-1 flex justify-center items-center bg-purple-50 rounded-xl p-6">
            <span className="text-8xl">{product.image}</span>
          </div>

          {/* Details */}
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">{product.name}</h2>
            <p className="text-gray-600 mb-4">{product.description}</p>

            {/* Price */}
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl font-bold text-pink-600">{product.price}</span>
              <span className="text-gray-400 line-through">{product.originalPrice}</span>
            </div>

            {/* Shopee Button */}
            <a
              href={product.shopeeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-pink-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-700 transition-all"
            >
              <ShoppingBag className="w-5 h-5" />
              Beli di Shopee
            </a>
          </div>
        </div>

        {/* Kit Contents */}
        <div className="mt-10">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Package className="w-5 h-5 text-purple-600" />
            Isi Kit
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {product.kitContents.map((item, index) => (
              <li key={index} className="flex items-center gap-2 text-gray-700">
                <CheckCircle className="w-4 h-4 text-green-500" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Features */}
        <div className="mt-10">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Star className="w-5 h-5 text-yellow-500" />
            Keunggulan
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {product.features.map((item, index) => (
              <li key={index} className="flex items-center gap-2 text-gray-700">
                <CheckCircle className="w-4 h-4 text-green-500" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Benefits */}
        <div className="mt-10">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Star className="w-5 h-5 text-pink-500" />
            Manfaat
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {product.benefits.map((item, index) => (
              <li key={index} className="flex items-center gap-2 text-gray-700">
                <CheckCircle className="w-4 h-4 text-green-500" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Guarantee */}
        <div className="mt-12 p-6 bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl text-center">
          <h3 className="text-lg font-bold text-gray-800 mb-2">✨ Jaminan Kepuasan ✨</h3>
          <p className="text-gray-600">
            Craftinova percaya bahwa setiap orang bisa menemukan ketenangan lewat kreativitas. 
            Jika kamu merasa kit ini tidak membantu, hubungi kami untuk solusi terbaik 💜
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
