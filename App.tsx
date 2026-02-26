import React, { useState, useEffect } from 'react';
import { QUIZ_AI_1, QUIZ_AI_2, QUIZ_AI_3, ALL_AI_QUESTIONS } from './constants';
import { QuizState, Question } from './types';
import QuizStart from './components/QuizStart';
import QuestionCard from './components/QuestionCard';
import QuizSummary from './components/QuizSummary';

const App: React.FC = () => {
  const [quizState, setQuizState] = useState<QuizState>(QuizState.INTRO);
  const [activeQuestions, setActiveQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<(number | null)[]>([]);
  const [score, setScore] = useState(0);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleStart = (mode: 'quiz1' | 'quiz2' | 'quiz3' | 'all') => {
    let selectedQuestions: Question[] = [];

    switch (mode) {
      case 'quiz1':
        selectedQuestions = QUIZ_AI_1;
        break;
      case 'quiz2':
        selectedQuestions = QUIZ_AI_2;
        break;
      case 'quiz3':
        selectedQuestions = QUIZ_AI_3;
        break;
      case 'all':
        selectedQuestions = ALL_AI_QUESTIONS;
        break;
      default:
        selectedQuestions = QUIZ_AI_1;
    }

    setActiveQuestions(selectedQuestions);
    setScore(0);
    setCurrentQuestionIndex(0);
    setUserAnswers(new Array(selectedQuestions.length).fill(null));
    setQuizState(QuizState.PLAYING);
    window.scrollTo(0, 0);
  };

  const handleRestart = () => {
    setQuizState(QuizState.INTRO);
    window.scrollTo(0, 0);
  };

  const handleOptionSelect = (optionIndex: number) => {
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestionIndex] = optionIndex;
    setUserAnswers(newAnswers);

    if (optionIndex === activeQuestions[currentQuestionIndex].correctAnswerIndex) {
      setScore(prev => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < activeQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      window.scrollTo(0, 0);
    } else {
      setQuizState(QuizState.FINISHED);
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-950 flex flex-col font-sans transition-colors duration-200">
      <header className="bg-white dark:bg-slate-900 shadow-sm border-b dark:border-slate-800 sticky top-0 z-10 transition-colors duration-200">
        <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={handleRestart}>
            <span className="text-2xl">🤖</span>
            <span className="font-bold text-slate-800 dark:text-white text-lg hidden sm:block">ML & Deep Learning Quiz</span>
          </div>

          <div className="flex items-center gap-4">
            {quizState === QuizState.PLAYING && (
              <div className="text-sm font-medium text-slate-500 dark:text-slate-400">
                Score: <span className="text-blue-600 dark:text-blue-400 font-bold">{score}</span>
              </div>
            )}

            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors"
              title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {darkMode ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
              )}
            </button>
          </div>
        </div>
      </header>

      <main className="flex-grow py-8 px-2 md:px-0">
        {quizState === QuizState.INTRO && (
          <QuizStart onStart={handleStart} />
        )}

        {quizState === QuizState.PLAYING && activeQuestions.length > 0 && (
          <QuestionCard
            question={activeQuestions[currentQuestionIndex]}
            currentQuestionIndex={currentQuestionIndex}
            totalQuestions={activeQuestions.length}
            selectedOptionIndex={userAnswers[currentQuestionIndex]}
            onOptionSelect={handleOptionSelect}
            onNext={handleNextQuestion}
          />
        )}

        {quizState === QuizState.FINISHED && (
          <QuizSummary
            score={score}
            totalQuestions={activeQuestions.length}
            userAnswers={userAnswers}
            questions={activeQuestions}
            onRestart={handleRestart}
          />
        )}
      </main>

      <footer className="text-center py-6 text-slate-400 dark:text-slate-600 text-sm">
        <p>© 2024 ML & Deep Learning Quiz - Designed for learning</p>
      </footer>
    </div>
  );
};

export default App;
