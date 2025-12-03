import React from 'react';
import { Question } from '../types';

interface QuestionCardProps {
  question: Question;
  currentQuestionIndex: number;
  totalQuestions: number;
  selectedOptionIndex: number | null;
  onOptionSelect: (index: number) => void;
  onNext: () => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  currentQuestionIndex,
  totalQuestions,
  selectedOptionIndex,
  onOptionSelect,
  onNext,
}) => {
  const isAnswered = selectedOptionIndex !== null;

  const getButtonClass = (index: number) => {
    const baseClass = "w-full text-left p-4 rounded-lg border-2 transition-all duration-200 font-medium relative overflow-hidden ";
    
    if (!isAnswered) {
      return baseClass + "bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200";
    }

    if (index === question.correctAnswerIndex) {
      return baseClass + "bg-green-50 dark:bg-green-900/20 border-green-500 dark:border-green-500 text-green-800 dark:text-green-300";
    }

    if (index === selectedOptionIndex && selectedOptionIndex !== question.correctAnswerIndex) {
      return baseClass + "bg-red-50 dark:bg-red-900/20 border-red-500 dark:border-red-500 text-red-800 dark:text-red-300";
    }

    return baseClass + "bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-400 dark:text-slate-600 opacity-60";
  };

  return (
    <div className="max-w-3xl mx-auto w-full px-4">
      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex justify-between text-sm font-semibold text-slate-500 dark:text-slate-400 mb-2">
          <span>Question {currentQuestionIndex + 1}/{totalQuestions}</span>
          <span>{Math.round(((currentQuestionIndex) / totalQuestions) * 100)}% complété</span>
        </div>
        <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5 overflow-hidden">
          <div 
            className="bg-blue-600 dark:bg-blue-500 h-2.5 rounded-full transition-all duration-500 ease-out" 
            style={{ width: `${((currentQuestionIndex) / totalQuestions) * 100}%` }}
          ></div>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg overflow-hidden transition-colors duration-200 border border-transparent dark:border-slate-700">
        {/* Question Header */}
        <div className="p-6 md:p-8">
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white leading-tight">
            {question.question}
          </h2>
        </div>

        {/* Options List */}
        <div className="p-6 md:p-8 pt-0 space-y-3">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => !isAnswered && onOptionSelect(index)}
              disabled={isAnswered}
              className={getButtonClass(index)}
            >
              <div className="flex items-center">
                <span className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full mr-3 text-sm font-bold border ${
                   isAnswered && index === question.correctAnswerIndex ? 'bg-green-500 text-white border-green-500' :
                   isAnswered && index === selectedOptionIndex ? 'bg-red-500 text-white border-red-500' :
                   'bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400 border-slate-300 dark:border-slate-600'
                }`}>
                  {String.fromCharCode(65 + index)}
                </span>
                <span className="flex-1">{option}</span>
                
                {isAnswered && index === question.correctAnswerIndex && (
                  <svg className="w-6 h-6 text-green-600 dark:text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path></svg>
                )}
                {isAnswered && index === selectedOptionIndex && index !== question.correctAnswerIndex && (
                  <svg className="w-6 h-6 text-red-600 dark:text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"></path></svg>
                )}
              </div>
            </button>
          ))}
        </div>

        {/* Explanation Footer (Shows after answer) */}
        {isAnswered && (
          <div className="bg-slate-50 dark:bg-slate-900/50 p-6 md:p-8 border-t border-slate-200 dark:border-slate-700 animate-fade-in">
            <div className={`p-4 rounded-lg mb-6 ${
              selectedOptionIndex === question.correctAnswerIndex 
                ? 'bg-green-100 dark:bg-green-900/20 border border-green-200 dark:border-green-800' 
                : 'bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800'
            }`}>
              <div className="flex gap-3">
                <div className="flex-shrink-0 mt-0.5">
                   {selectedOptionIndex === question.correctAnswerIndex 
                      ? <svg className="w-5 h-5 text-green-700 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                      : <svg className="w-5 h-5 text-red-700 dark:text-red-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path></svg>
                   }
                </div>
                <div>
                  <h3 className={`font-bold ${
                    selectedOptionIndex === question.correctAnswerIndex ? 'text-green-800 dark:text-green-300' : 'text-red-800 dark:text-red-300'
                  }`}>
                    {selectedOptionIndex === question.correctAnswerIndex ? 'Correct !' : 'Incorrect'}
                  </h3>
                  <p className="text-slate-700 dark:text-slate-300 mt-1 text-sm leading-relaxed">
                    <span className="font-semibold">Explication :</span> {question.explanation}
                  </p>
                </div>
              </div>
            </div>
            
            <button 
              onClick={onNext}
              className="w-full py-4 bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 text-white text-lg font-bold rounded-xl shadow-lg transition-transform transform hover:scale-[1.02] active:scale-[0.98]"
            >
              {currentQuestionIndex < totalQuestions - 1 ? "Question Suivante →" : "Voir les Résultats"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuestionCard;