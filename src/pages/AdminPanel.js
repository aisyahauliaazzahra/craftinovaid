import React, { useState } from 'react';
import { Home, Plus, Edit3, Trash2, Save } from 'lucide-react';

const AdminPanel = ({ questions, setQuestions, setIsAdmin, setCurrentView }) => {
  const [newQuestion, setNewQuestion] = useState({ question: '', options: ['', '', '', ''] });
  const [editingQuestion, setEditingQuestion] = useState(null);

  // Admin functions
  const addQuestion = () => {
    if (newQuestion.question && newQuestion.options.every(opt => opt.trim())) {
      setQuestions([...questions, { ...newQuestion, id: Date.now() }]);
      setNewQuestion({ question: '', options: ['', '', '', ''] });
    }
  };

  const updateQuestion = (id, updatedQuestion) => {
    setQuestions(questions.map(q => q.id === id ? { ...updatedQuestion, id } : q));
    setEditingQuestion(null);
  };

  const deleteQuestion = (id) => {
    setQuestions(questions.filter(q => q.id !== id));
  };

  const EditQuestionForm = ({ question, onSave, onCancel }) => {
    const [editedQuestion, setEditedQuestion] = useState(question);

    return (
      <div className="space-y-3">
        <input
          type="text"
          value={editedQuestion.question}
          onChange={(e) => setEditedQuestion({...editedQuestion, question: e.target.value})}
          className="w-full p-2 border rounded"
        />
        {editedQuestion.options.map((option, index) => (
          <input
            key={index}
            type="text"
            value={option}
            onChange={(e) => {
              const newOptions = [...editedQuestion.options];
              newOptions[index] = e.target.value;
              setEditedQuestion({...editedQuestion, options: newOptions});
            }}
            className="w-full p-2 border rounded"
          />
        ))}
        <div className="flex space-x-2">
          <button
            onClick={() => onSave(editedQuestion)}
            className="bg-green-600 text-white py-1 px-3 rounded flex items-center space-x-1"
          >
            <Save className="w-4 h-4" />
            <span>Simpan</span>
          </button>
          <button
            onClick={onCancel}
            className="bg-gray-600 text-white py-1 px-3 rounded"
          >
            Batal
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
            <div className="space-x-4">
              <button
                onClick={() => {setIsAdmin(false); setCurrentView('home');}}
                className="text-gray-600 hover:text-gray-800"
              >
                <Home className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Tambah Pertanyaan Baru</h2>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Pertanyaan"
              value={newQuestion.question}
              onChange={(e) => setNewQuestion({...newQuestion, question: e.target.value})}
              className="w-full p-3 border rounded-lg"
            />
            {newQuestion.options.map((option, index) => (
              <input
                key={index}
                type="text"
                placeholder={`Opsi ${index + 1}`}
                value={option}
                onChange={(e) => {
                  const newOptions = [...newQuestion.options];
                  newOptions[index] = e.target.value;
                  setNewQuestion({...newQuestion, options: newOptions});
                }}
                className="w-full p-3 border rounded-lg"
              />
            ))}
            <button
              onClick={addQuestion}
              className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 flex items-center space-x-2"
            >
              <Plus className="w-4 h-4" />
              <span>Tambah Pertanyaan</span>
            </button>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Daftar Pertanyaan</h2>
          <div className="space-y-4">
            {questions.map((question) => (
              <div key={question.id} className="border rounded-lg p-4">
                {editingQuestion === question.id ? (
                  <EditQuestionForm
                    question={question}
                    onSave={(updatedQuestion) => updateQuestion(question.id, updatedQuestion)}
                    onCancel={() => setEditingQuestion(null)}
                  />
                ) : (
                  <div>
                    <h3 className="font-semibold mb-2">{question.question}</h3>
                    <ul className="text-sm text-gray-600 mb-3">
                      {question.options.map((option, index) => (
                        <li key={index}>• {option}</li>
                      ))}
                    </ul>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => setEditingQuestion(question.id)}
                        className="text-blue-600 hover:text-blue-800 flex items-center space-x-1"
                      >
                        <Edit3 className="w-4 h-4" />
                        <span>Edit</span>
                      </button>
                      <button
                        onClick={() => deleteQuestion(question.id)}
                        className="text-red-600 hover:text-red-800 flex items-center space-x-1"
                      >
                        <Trash2 className="w-4 h-4" />
                        <span>Hapus</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;