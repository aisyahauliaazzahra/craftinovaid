import React, { useState, useEffect } from 'react';
import { Home, Plus, Edit3, Trash2, Save, Users } from 'lucide-react';
import { initialQuestions, postTestQuestions } from '../data/appData';
import { supabaseService } from '../services/supabaseService';

const AdminPanel = ({ questions, setQuestions, setIsAdmin, setCurrentView }) => {
  const [newQuestion, setNewQuestion] = useState({ question: '', options: ['', '', '', ''] });
  const [editingQuestion, setEditingQuestion] = useState(null);
  const [userAnswers, setUserAnswers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserAnswers = async () => {
      setLoading(true);
      try {
        const data = await supabaseService.getAllUserAnswers();
        console.log('Fetched user answers:', data); // Debug log
        setUserAnswers(data);
      } catch (error) {
        console.error('Failed to fetch user answers from Supabase:', error);
        const localData = JSON.parse(localStorage.getItem('userAnswers') || '[]');
        setUserAnswers(localData);
      } finally {
        setLoading(false);
      }
    };
    fetchUserAnswers();
  }, []);

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
            className="bg-teal-600 text-white py-1 px-3 rounded flex items-center space-x-1 hover:bg-teal-700"
          >
            <Save className="w-4 h-4" />
            <span>Simpan</span>
          </button>
          <button
            onClick={onCancel}
            className="bg-gray-600 text-white py-1 px-3 rounded hover:bg-gray-700"
          >
            Batal
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-teal-50">
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-teal-800">Admin Dashboard</h1>
            <div className="space-x-4">
              <button
                onClick={() => {setIsAdmin(false); setCurrentView('home');}}
                className="text-teal-600 hover:text-teal-800"
              >
                <Home className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>

        <div className="bg-white rounded-xl shadow-sm p-6 m-6">
          <h2 className="text-xl font-bold text-teal-800 mb-4 flex items-center space-x-2">
            <Users className="w-5 h-5 text-teal-600" />
            <span>Jawaban User</span>
          </h2>
          
          {loading ? (
            <p className="text-teal-500">Loading user answers...</p>
          ) : userAnswers.length === 0 ? (
            <p className="text-teal-500">Belum ada jawaban user.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full table-auto border-collapse border border-teal-200">
                <thead>
                  <tr className="bg-teal-100">
                    <th className="border border-teal-200 px-4 py-2 text-left text-teal-800">Timestamp</th>
                    <th className="border border-teal-200 px-4 py-2 text-left text-teal-800">Nama</th>
                    <th className="border border-teal-200 px-4 py-2 text-left text-teal-800">Usia</th>
                    <th className="border border-teal-200 px-4 py-2 text-left text-teal-800">Pekerjaan</th>
                    <th className="border border-teal-200 px-4 py-2 text-left text-teal-800">Asal</th>
                    <th className="border border-teal-200 px-4 py-2 text-left text-teal-800">Tingkat Stress</th>
                    <th className="border border-teal-200 px-4 py-2 text-center text-teal-800">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {userAnswers.map((user, index) => (
                    <tr key={user.id || index} className="hover:bg-teal-50">
                      <td className="border border-teal-200 px-4 py-2 text-sm text-teal-600">
                        {new Date(user.timestamp || user.created_at).toLocaleString()}
                      </td>
                      <td className="border border-teal-200 px-4 py-2 text-sm text-teal-600">
                        {user.user_info?.nama || '-'}
                      </td>
                      <td className="border border-teal-200 px-4 py-2 text-sm text-teal-600">
                        {user.user_info?.usia || '-'}
                      </td>
                      <td className="border border-teal-200 px-4 py-2 text-sm text-teal-600">
                        {user.user_info?.pekerjaan || '-'}
                      </td>
                      <td className="border border-teal-200 px-4 py-2 text-sm text-teal-600">
                        {user.user_info?.asal || '-'}
                      </td>
                      <td className="border border-teal-200 px-4 py-2 text-sm">
                        <span className={`font-medium ${user.stress_level?.color || 'text-gray-500'}`}>
                          {user.stress_level?.level || 'N/A'}
                        </span>
                      </td>
                      <td className="border border-teal-200 px-4 py-2 text-center">
                        <button
                          onClick={() => setSelectedUser(user)}
                          className="bg-teal-600 text-white px-3 py-1 rounded hover:bg-teal-700 text-sm"
                        >
                          View Detail
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Detail Modal */}
        {selectedUser && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-6 z-50">
            <div className="bg-white rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-teal-800">Detail Jawaban User</h3>
                <button
                  onClick={() => setSelectedUser(null)}
                  className="text-teal-600 hover:text-teal-800 text-2xl"
                >
                  ×
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-semibold text-teal-700 mb-2">Informasi User</h4>
                  <div className="space-y-2 text-sm">
                    <p><span className="font-medium">Nama:</span> {selectedUser.user_info?.nama || '-'}</p>
                    <p><span className="font-medium">Usia:</span> {selectedUser.user_info?.usia || '-'} tahun</p>
                    <p><span className="font-medium">Pekerjaan:</span> {selectedUser.user_info?.pekerjaan || '-'}</p>
                    <p><span className="font-medium">Asal:</span> {selectedUser.user_info?.asal || '-'}</p>
                    <p><span className="font-medium">Tingkat Stress:</span> <span className={`font-medium ${selectedUser.stress_level?.color || 'text-gray-500'}`}>{selectedUser.stress_level?.level || 'N/A'}</span></p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-teal-700 mb-3">Pre-Test Answers</h4>
                  <div className="space-y-2">
                    {(selectedUser.pre_test_answers || []).map((answer, i) => {
                      const question = initialQuestions[i];
                      const optionText = question && question.options[answer - 1];
                      return (
                        <div key={i} className="border border-teal-200 rounded p-3 bg-teal-50">
                          <p className="font-medium text-teal-800 mb-1">{question ? question.question : `Pertanyaan ${i + 1}`}</p>
                          <p className="text-teal-600">{optionText || answer}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-teal-700 mb-3">Post-Test Answers</h4>
                  <div className="space-y-2">
                    {(selectedUser.post_test_answers || []).map((answer, i) => {
                      const question = postTestQuestions[i];
                      const optionText = question && question.options[answer - 1];
                      return (
                        <div key={i} className="border border-teal-200 rounded p-3 bg-teal-50">
                          <p className="font-medium text-teal-800 mb-1">{question ? question.question : `Pertanyaan ${i + 1}`}</p>
                          <p className="text-teal-600">{optionText || answer}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
  );
};

export default AdminPanel;