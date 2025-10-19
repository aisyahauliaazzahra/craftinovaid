import React, { useState } from "react";
import Header from '../components/Header';
import { ShoppingBag } from "lucide-react";

const ProductsPage = () => {
  const [currentView, setCurrentView] = useState("products");
  const [showPasswordModal, setShowPasswordModal] = useState(false);

  const companyInfo = {
    name: "Craftinova",
    tagline: "Temukan ketenangan lewat kreativitas",
  };

  const products = {
    training: [
      {
        name: "Training Kit 1",
        description: "Apa aja.",
        link: "https://shopee.co.id/CRAFTINOVA-Kit-DIY-sewing-kit-Kit-Menjahit-Kain-Upcycle-Kit-Jahit-Pemula-Lengkap-Kerajinan-Tangan-Hadiah-kreatif-i.1598487836.41366419757",
      },
      {
        name: "Training Kit 2",
        description: "Berisi alat dan bahan sederhana untuk relaksasi lewat seni.",
        link: "https://shopee.co.id/CRAFTINOVA-Kit-DIY-sewing-kit-Kit-Menjahit-Kain-Upcycle-Kit-Jahit-Pemula-Lengkap-Kerajinan-Tangan-Hadiah-kreatif-i.1598487836.41366419757",
      },
      {
        name: "Training Kit 3",
        description: "Kit dasar untuk eksplorasi kreativitas dan ketenangan diri.",
        link: "https://shopee.co.id/CRAFTINOVA-Kit-DIY-sewing-kit-Kit-Menjahit-Kain-Upcycle-Kit-Jahit-Pemula-Lengkap-Kerajinan-Tangan-Hadiah-kreatif-i.1598487836.41366419757",
      },
    ],
    middle: [
      {
        name: "Middle Level Kit",
        description: "Untuk kamu yang sudah terbiasa berkreasi dan ingin tantangan baru.",
        link: "https://shopee.co.id/CRAFTINOVA-Kit-DIY-sewing-kit-Kit-Menjahit-Kain-Upcycle-Kit-Jahit-Pemula-Lengkap-Kerajinan-Tangan-Hadiah-kreatif-i.1598487836.41366419757",
      },
    ],
    advance: [
      {
        name: "Advance Kit",
        description: "Paket lengkap dengan bahan premium dan teknik lanjutan.",
        link: "https://shopee.co.id/CRAFTINOVA-Kit-DIY-sewing-kit-Kit-Menjahit-Kain-Upcycle-Kit-Jahit-Pemula-Lengkap-Kerajinan-Tangan-Hadiah-kreatif-i.1598487836.41366419757",
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-teal-50 to-cyan-100">
      {/* ✅ Header tetap di atas */}
      <Header
        companyInfo={companyInfo}
        setCurrentView={setCurrentView}
        setShowPasswordModal={setShowPasswordModal}
        activeView={currentView}
      />

      {/* Konten Produk */}
      <main className="flex-grow p-6 mt-6">
        <div className="max-w-6xl mx-auto">
          {/* Training Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-teal-700 mb-6 text-center">
              🌱 Training Kit
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.training.map((item, i) => (
                <a
                  key={i}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all p-5 flex flex-col items-center text-center group"
                >
                  <img
                    src="/bookmarksss.png"
                    alt={item.name}
                    className="w-32 h-32 object-contain mb-4 transition-transform duration-300 group-hover:scale-105"
                  />
                  <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                  <p className="text-gray-500 text-sm mt-2">{item.description}</p>
                  <div className="mt-4 inline-flex items-center gap-2 bg-gradient-to-r from-teal-500 to-cyan-600 text-white py-2 px-4 rounded-xl font-medium hover:from-teal-600 hover:to-cyan-700 transition-all">
                    <ShoppingBag className="w-4 h-4" />
                    Beli Sekarang
                  </div>
                </a>
              ))}
            </div>
          </section>

          {/* Middle Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-teal-700 mb-6 text-center">
              💎 Middle Kit
            </h2>
            <div className="flex justify-center">
              {products.middle.map((item, i) => (
                <a
                  key={i}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all p-6 w-full sm:w-3/4 lg:w-2/3 flex flex-col items-center text-center group"
                >
                  <img
                    src="/cablestrap.png"
                    alt={item.name}
                    className="w-40 h-40 object-contain mb-4 transition-transform duration-300 group-hover:scale-105"
                  />
                  <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
                  <p className="text-gray-500 text-sm mt-2 mb-4">{item.description}</p>
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500 to-cyan-600 text-white py-2 px-5 rounded-xl font-medium hover:from-teal-600 hover:to-cyan-700 transition-all">
                    <ShoppingBag className="w-4 h-4" />
                    Lihat Produk
                  </div>
                </a>
              ))}
            </div>
          </section>

          {/* Advance Section */}
          <section>
            <h2 className="text-2xl font-bold text-teal-700 mb-6 text-center">
              🚀 Advance Kit
            </h2>
            <div className="flex justify-center">
              {products.advance.map((item, i) => (
                <a
                  key={i}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all p-6 w-full sm:w-3/4 lg:w-2/3 flex flex-col items-center text-center group"
                >
                  <img
                    src="/minipouch.png"
                    alt={item.name}
                    className="w-40 h-40 object-contain mb-4 transition-transform duration-300 group-hover:scale-105"
                  />
                  <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
                  <p className="text-gray-500 text-sm mt-2 mb-4">{item.description}</p>
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500 to-cyan-600 text-white py-2 px-5 rounded-xl font-medium hover:from-teal-600 hover:to-cyan-700 transition-all">
                    <ShoppingBag className="w-4 h-4" />
                    Lihat Produk
                  </div>
                </a>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default ProductsPage;
