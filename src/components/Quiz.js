import React from 'react';

const Quiz = ({ questions, currentQuestionIndex, handleQuizAnswer }) => {
  const currentQuestion = questions[currentQuestionIndex];
  
  if (!currentQuestion) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-cyan-100 flex items-center justify-center p-6">
      <div className="max-w-lg w-full bg-white rounded-2xl shadow-xl p-8">
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm font-semibold text-teal-600">
              Pertanyaan {currentQuestionIndex + 1} dari {questions.length}
            </span>
            <div className="w-24 bg-gray-200 rounded-full h-2">
              <div
                className="bg-teal-600 h-2 rounded-full transition-all"
                style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
              ></div>
            </div>
          </div>
          <h2 className="text-xl font-bold text-gray-800 mb-6">{currentQuestion.question}</h2>
        </div>
        
        <div className="space-y-3">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleQuizAnswer(index)}
              className="w-full text-left p-4 bg-gray-50 hover:bg-teal-50 border-2 border-transparent hover:border-teal-200 rounded-xl transition-all"
            >
              <span className="font-medium text-gray-700">{option}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Quiz;