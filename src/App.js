import React, { useState } from 'react';
import { BarChart3 } from 'lucide-react';
import { supabaseService } from './services/supabaseService';

// Import all pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticlesPage from './pages/ArticlesPage';
import ProductsPage from './pages/ProductsPage';
import AdminPanel from './pages/AdminPanel';
import Gallery from './pages/Gallery';

// Import quiz components
import Quiz from './components/Quiz';
import VideoTutorial from './components/VideoTutorial';
import PostTest from './components/PostTest';
import Result from './components/Result';

// Import modals
import PasswordModal from './components/PasswordModal';
import ArticleDetailModal from './components/ArticleDetailModal';
import UserInfoModal from './components/UserInfoModal';

// Import data
import { companyInfo, articles, products, initialQuestions, postTestQuestions } from './data/appData';

const StressLevelWebsite = () => {
  // State management
  const [currentView, setCurrentView] = useState('home');
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminPassword, setAdminPassword] = useState('');
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [showUserInfoModal, setShowUserInfoModal] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  
  // Quiz and assessment states
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showVideo, setShowVideo] = useState(false);
  const [postTestAnswers, setPostTestAnswers] = useState([]);
  const [stressLevel, setStressLevel] = useState(null);
  const [currentPostTestIndex, setCurrentPostTestIndex] = useState(0);
  
  // Admin states
  const [questions, setQuestions] = useState(initialQuestions);
  const [selectedArticle, setSelectedArticle] = useState(null);

  // Calculate stress level - FIXED LOGIC
const calculateStressLevel = (answers) => {
  const total = answers.reduce((sum, answer) => sum + answer, 0);
  const maxScore = postTestQuestions.length * 4;
  const percentage = (total / maxScore) * 100;

  // Logika yang benar: semakin tinggi skor, semakin membantu
  if (percentage >= 75) {
    return {
      level: "Sangat Membantu",
      color: "text-green-600",
      description: "Craftinova sangat membantu mengurangi stress Anda.",
      result: "Sangat Membantu",
    };
  } else if (percentage >= 50) {
    return {
      level: "Cukup Membantu",
      color: "text-yellow-600",
      description: "Craftinova cukup membantu mengurangi stress Anda.",
      result: "Cukup Membantu",
    };
  } else if (percentage >= 25) {
    return {
      level: "Tidak Membantu",
      color: "text-orange-600",
      description: "Craftinova tidak membantu mengurangi stress Anda. Cobalah pendekatan lain untuk relaksasi.",
      result: "Tidak Membantu",
    };
  } else {
    return {
      level: "Tidak Membantu",
      color: "text-red-600",
      description:
        "Craftinova tidak membantu mengurangi stress Anda. Cobalah pendekatan lain untuk relaksasi.",
      result: "Tidak Membantu",
    };
  }
};

  // Admin login
  const handleAdminLogin = () => {
    if (adminPassword === 'admin123') {
      setIsAdmin(true);
      setCurrentView('admin');
      setShowPasswordModal(false);
      setAdminPassword('');
    } else {
      alert('Password salah!');
    }
  };

  // Customer journey functions
  const handleScan = () => {
    setShowUserInfoModal(true);
  };

  const handleUserInfoSubmit = (info) => {
    setUserInfo(info);
    setShowUserInfoModal(false);
    setCurrentView('quiz');
    setCurrentQuestionIndex(0);
    setAnswers([]);
  };

  const handleQuizAnswer = (answerIndex) => {
    const newAnswers = [...answers, answerIndex + 1];
    setAnswers(newAnswers);
    
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowVideo(true);
      setCurrentView('video');
    }
  };

  const handleVideoComplete = () => {
    setCurrentView('posttest');
    setCurrentPostTestIndex(0);
    setPostTestAnswers([]);
  };

  const handlePostTestAnswer = async (answerIndex) => {
    const newAnswers = [...postTestAnswers, answerIndex + 1];
    setPostTestAnswers(newAnswers);

    if (currentPostTestIndex < postTestQuestions.length - 1) {
      setCurrentPostTestIndex(currentPostTestIndex + 1);
    } else {
      const result = calculateStressLevel(newAnswers);
      setStressLevel(result);
      setCurrentView('result');

      // FIXED: Save user answers to Supabase with correct data structure
      const userData = {
        user_info: userInfo, // Changed from userInfo to user_info to match schema
        pre_test_answers: answers, // Changed from preTestAnswers to pre_test_answers
        post_test_answers: newAnswers, // Changed from postTestAnswers to post_test_answers
        stress_level: result, // Changed from stressLevel to stress_level
        timestamp: new Date().toISOString()
      };

      try {
        console.log('Saving user data:', userData); // Debug log
        
        // Test connection first
        const connectionTest = await supabaseService.testConnection();
        console.log('Connection test result:', connectionTest);
        
        if (!connectionTest) {
          throw new Error('Cannot connect to Supabase');
        }
        
        const savedData = await supabaseService.saveUserAnswers(userData);
        console.log('Data saved successfully to Supabase:', savedData);
        
        // Show success message
        console.log('✅ Data berhasil disimpan ke server!');
        
      } catch (error) {
        console.error('Failed to save to Supabase:', error);
        console.error('Error details:', {
          name: error.name,
          message: error.message,
          code: error.code,
          details: error.details
        });
        
        alert(`Gagal menyimpan jawaban ke server. Error: ${error.message}. Jawaban akan disimpan secara lokal.`);
        
        // Fallback to localStorage
        try {
          const existingData = JSON.parse(localStorage.getItem('userAnswers') || '[]');
          existingData.push(userData);
          localStorage.setItem('userAnswers', JSON.stringify(existingData));
          console.log('Data saved to localStorage as fallback');
        } catch (localError) {
          console.error('Even localStorage failed:', localError);
        }
      }
    }
  };

  const resetCustomerJourney = () => {
    setCurrentView('home');
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setShowVideo(false);
    setPostTestAnswers([]);
    setStressLevel(null);
    setCurrentPostTestIndex(0);
    setUserInfo(null);
  };

  // Props object for easier passing
  const commonProps = {
    setCurrentView,
    setShowPasswordModal,
    companyInfo,
    handleScan
  };

  const quizProps = {
    questions,
    currentQuestionIndex,
    handleQuizAnswer
  };

  const postTestProps = {
    postTestQuestions,
    currentPostTestIndex,
    handlePostTestAnswer
  };

  return (
    <div>
      {currentView === 'home' && <HomePage {...commonProps} />}
      {currentView === 'about' && <AboutPage {...commonProps} />}
      {currentView === 'articles' && <ArticlesPage {...commonProps} articles={articles} setSelectedArticle={setSelectedArticle} />}
      {currentView === 'products' && <ProductsPage {...commonProps} products={products} />}
      {currentView === 'quiz' && <Quiz {...quizProps} />}
      {currentView === 'gallery' && <Gallery {...commonProps} />}

      {currentView === 'video' && <VideoTutorial handleVideoComplete={handleVideoComplete} />}
      {currentView === 'posttest' && <PostTest {...postTestProps} />}
      {currentView === 'result' && <Result stressLevel={stressLevel} resetCustomerJourney={resetCustomerJourney} />}
      {currentView === 'admin' && <AdminPanel questions={questions} setQuestions={setQuestions} setIsAdmin={setIsAdmin} setCurrentView={setCurrentView} />}
      {showPasswordModal && <PasswordModal adminPassword={adminPassword} setAdminPassword={setAdminPassword} handleAdminLogin={handleAdminLogin} setShowPasswordModal={setShowPasswordModal} />}
      {showUserInfoModal && <UserInfoModal show={showUserInfoModal} onClose={() => setShowUserInfoModal(false)} onSave={handleUserInfoSubmit} />}
      {selectedArticle && <ArticleDetailModal article={selectedArticle} onClose={() => setSelectedArticle(null)} />}
    </div>
  );
};

export default StressLevelWebsite;