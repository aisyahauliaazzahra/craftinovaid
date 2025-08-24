import React from 'react';
import { BarChart3 } from 'lucide-react';

const Header = ({ companyInfo, setCurrentView, setShowPasswordModal, activeView }) => {
  const navItems = [
    { key: 'home', label: 'Home' },
    { key: 'about', label: 'Tentang Kami' },
    { key: 'articles', label: 'Artikel' },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
              <BarChart3 className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">{companyInfo.name}</h1>
              <p className="text-xs text-gray-600">{companyInfo.tagline}</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => setCurrentView(item.key)}
                className={`${
                  activeView === item.key
                    ? 'text-blue-600 font-semibold'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;