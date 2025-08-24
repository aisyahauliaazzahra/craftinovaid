import React from 'react';
import Header from '../components/Header';

const ArticlesPage = ({ setCurrentView, setShowPasswordModal, companyInfo, articles, setSelectedArticle }) => {
  return (
    <div className="min-h-screen bg-white">
      <Header 
        companyInfo={companyInfo} 
        setCurrentView={setCurrentView} 
        setShowPasswordModal={setShowPasswordModal}
        activeView="articles"
      />

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Artikel & Tips Art Therapy</h2>
          <p className="text-xl text-gray-600">Pelajari tips dan manfaat art therapy untuk kesehatan mental dan lingkungan</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <div 
              key={article.id} 
              className="bg-white rounded-xl shadow-sm border hover:shadow-md transition-all cursor-pointer"
              onClick={() => setSelectedArticle(article)}
            >
              <div className="p-6">
                <div className="text-4xl mb-4">{article.image}</div>
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <span>{article.date}</span>
                  <span className="mx-2">•</span>
                  <span>{article.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{article.title}</h3>
                <p className="text-gray-600">{article.excerpt}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default ArticlesPage;