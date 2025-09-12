import React from 'react';

const ArticleDetailModal = ({ article, onClose }) => {
  if (!article) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-6 z-50">
      <div className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-96 overflow-y-auto">
        <div className="flex justify-between items-start mb-6">
          <div>
            <div className="text-3xl mb-2">{article.image}</div>
            <h2 className="text-2xl font-bold text-teal-800">{article.title}</h2>
            <div className="flex items-center text-sm text-teal-600 mt-2">
              <span>{article.date}</span>
              <span className="mx-2">•</span>
              <span>{article.readTime}</span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-teal-400 hover:text-teal-600"
          >
            <span className="text-2xl">×</span>
          </button>
        </div>
        <div className="text-teal-700 leading-relaxed">
          {article.content}
        </div>
      </div>
    </div>
  );
};

export default ArticleDetailModal;