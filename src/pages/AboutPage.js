import React from 'react';
import Header from '../components/Header';

const AboutPage = ({ setCurrentView, setShowPasswordModal, companyInfo }) => {
  return (
    <div className="min-h-screen bg-white">
      <Header 
        companyInfo={companyInfo} 
        setCurrentView={setCurrentView} 
        setShowPasswordModal={setShowPasswordModal}
        activeView="about"
      />

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Tentang {companyInfo.name}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{companyInfo.description}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">🎯 Visi Kami</h3>
            <p className="text-gray-700">{companyInfo.vision}</p>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">🚀 Misi Kami</h3>
            <ul className="space-y-2">
              {companyInfo.mission.map((item, index) => (
                <li key={index} className="text-gray-700 flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Mengapa Art Therapy Penting?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🧠</div>
              <h4 className="font-semibold text-gray-800 mb-2">Kesehatan Mental</h4>
              <p className="text-gray-600">Aktivitas kreatif membantu mengurangi stress dan meningkatkan mood positif</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🌱</div>
              <h4 className="font-semibold text-gray-800 mb-2">Ramah Lingkungan</h4>
              <p className="text-gray-600">Menggunakan limbah tekstil membantu mengurangi sampah dan mencintai bumi</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🎨</div>
              <h4 className="font-semibold text-gray-800 mb-2">Kreativitas</h4>
              <p className="text-gray-600">Mengembangkan kemampuan kreatif sambil merasakan terapi yang menenangkan</p>
            </div>
                    <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Ingin Mencoba Kit Craftinova?</h3>
          <p className="text-gray-600 mb-6">Dapatkan kit DIY art therapy dan rasakan manfaatnya langsung</p>
          <button
            onClick={() => window.open('https://id.shp.ee/VYS4ps1', '_blank')}
            className="bg-green-500 text-white py-3 px-6 rounded-xl font-semibold hover:bg-green-600 transition-all"
          >
            Kunjungi Toko Kami
          </button>
        </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;