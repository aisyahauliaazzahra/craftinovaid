
import React from 'react';
import { Camera, BarChart3, Play, Users } from 'lucide-react';
import Header from '../components/Header';

const HomePage = ({ setCurrentView, setShowPasswordModal, companyInfo, handleScan }) => {
  return (
    <div className="min-h-screen bg-white">
      <Header 
        companyInfo={companyInfo} 
        setCurrentView={setCurrentView} 
        setShowPasswordModal={setShowPasswordModal}
        activeView="home"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h2 className="text-5xl font-bold text-gray-800 mb-6">
              Temukan Ketenangan Melalui<br/>
              <span className="text-blue-600">Seni & Kreativitas</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Kit DIY art therapy berbasis limbah tekstil yang membantu mengurangi stress 
              sambil berkontribusi untuk lingkungan yang lebih baik.
            </p>
            <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
              <button
                onClick={handleScan}
                className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-4 px-8 rounded-xl font-semibold flex items-center justify-center space-x-3 hover:from-blue-600 hover:to-indigo-700 transform hover:scale-105 transition-all"
              >
                <Camera className="w-6 h-6" />
                <span>Cek Tingkat Stress Gratis</span>
              </button>
              <button
                onClick={() => setCurrentView('products')}
                className="w-full sm:w-auto bg-white text-blue-600 py-4 px-8 rounded-xl font-semibold border-2 border-blue-600 hover:bg-blue-50 transition-all"
              >
                Lihat Kit Craftinova
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Mengapa Memilih Craftinova?</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Solusi art therapy ramah lingkungan yang membantu mengurangi stress dengan cara yang menyenangkan
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎨</span>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">Art Therapy Terbukti</h4>
              <p className="text-gray-600">Metode art therapy yang telah terbukti secara ilmiah dapat mengurangi stress dan kecemasan</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">♻️</span>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">Ramah Lingkungan</h4>
              <p className="text-gray-600">Memanfaatkan limbah tekstil berkualitas untuk menciptakan produk yang sustainable</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🧵</span>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">DIY Kit Lengkap</h4>
              <p className="text-gray-600">Semua yang Anda butuhkan untuk memulai art therapy tersedia dalam satu paket</p>
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Mulai Perjalanan Kreatif & Tenang Anda
          </h3>
          <p className="text-blue-100 mb-8 text-lg">
            Rasakan manfaat art therapy dengan kit DIY ramah lingkungan dari Craftinova
          </p>
          <button
            onClick={handleScan}
            className="bg-white text-blue-600 py-4 px-8 rounded-xl font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all"
          >
            Mulai Assessment Sekarang
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;