import React from 'react';

interface QuizStartProps {
  onStart: () => void;
  totalQuestions: number;
}

const QuizStart: React.FC<QuizStartProps> = ({ onStart, totalQuestions }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] p-6 text-center max-w-2xl mx-auto">
      <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 transition-colors duration-200">
        <div className="mb-6">
          <svg className="w-20 h-20 mx-auto text-blue-600 dark:text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
        </div>
        
        <h1 className="text-3xl font-bold text-slate-800 dark:text-white mb-4">
          Quiz Isolation Thermique
        </h1>
        
        <p className="text-slate-600 dark:text-slate-300 mb-8 text-lg">
          Testez vos connaissances sur la conductivité thermique, les matériaux isolants, les ponts thermiques et les techniques de construction durable.
        </p>
        
        <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg mb-8 border border-blue-100 dark:border-blue-800">
          <p className="font-semibold text-blue-800 dark:text-blue-200">
            {totalQuestions} Questions • Choix Multiples • Résultat Immédiat
          </p>
        </div>

        <button 
          onClick={onStart}
          className="w-full sm:w-auto px-8 py-4 bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600 text-white font-bold rounded-xl transition-all transform hover:scale-105 shadow-lg shadow-blue-500/30 dark:shadow-blue-900/30"
        >
          Commencer le Quiz
        </button>
      </div>
    </div>
  );
};

export default QuizStart;