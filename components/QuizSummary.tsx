import React, { useState } from 'react';
import { Question } from '../types';

interface QuizSummaryProps {
  score: number;
  totalQuestions: number;
  userAnswers: (number | null)[];
  questions: Question[];
  onRestart: () => void;
}

const QuizSummary: React.FC<QuizSummaryProps> = ({ 
  score, 
  totalQuestions, 
  userAnswers, 
  questions, 
  onRestart 
}) => {
  const [showReview, setShowReview] = useState(false);
  const percentage = Math.round((score / totalQuestions) * 100);

  let message = "";
  let colorClass = "";
  
  if (percentage >= 80) {
    message = "Excellent travail ! Vous êtes un expert en isolation.";
    colorClass = "text-green-600 dark:text-green-400";
  } else if (percentage >= 50) {
    message = "Pas mal ! Encore quelques efforts pour maîtriser le sujet.";
    colorClass = "text-yellow-600 dark:text-yellow-400";
  } else {
    message = "Oups... Il faudrait relire le cours sur l'isolation.";
    colorClass = "text-red-600 dark:text-red-400";
  }

  return (
    <div className="max-w-4xl mx-auto w-full px-4 pb-12">
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden mb-8 border border-transparent dark:border-slate-700 transition-colors duration-200">
        <div className="p-8 text-center bg-slate-50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-700">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">Quiz Terminé !</h2>
          <div className="my-6">
            <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-white dark:bg-slate-800 border-4 border-blue-100 dark:border-blue-900 shadow-inner">
              <span className={`text-4xl font-extrabold ${colorClass}`}>
                {score}/{totalQuestions}
              </span>
            </div>
          </div>
          <p className={`text-lg font-medium mb-6 ${colorClass}`}>{message}</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <button 
              onClick={() => setShowReview(!showReview)}
              className="px-6 py-3 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-semibold rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
            >
              {showReview ? "Masquer les détails" : "Voir mes erreurs"}
            </button>
            <button 
              onClick={onRestart}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-bold rounded-xl shadow-md shadow-blue-500/30 dark:shadow-blue-900/30 transition-transform transform hover:scale-105"
            >
              Recommencer le Quiz
            </button>
          </div>
        </div>
      </div>

      {showReview && (
        <div className="space-y-6 animate-fade-in-up">
          <h3 className="text-xl font-bold text-slate-800 dark:text-white ml-2">Revue détaillée</h3>
          {questions.map((q, index) => {
            const userAnswer = userAnswers[index];
            const isCorrect = userAnswer === q.correctAnswerIndex;
            
            return (
              <div 
                key={q.id} 
                className={`bg-white dark:bg-slate-800 rounded-xl shadow-sm border-l-4 p-6 transition-colors duration-200 ${
                  isCorrect ? 'border-green-500' : 'border-red-500'
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <h4 className="font-semibold text-slate-900 dark:text-white pr-4">
                    <span className="text-slate-400 dark:text-slate-500 mr-2">{index + 1}.</span>
                    {q.question}
                  </h4>
                  {isCorrect ? (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300">
                      Correct
                    </span>
                  ) : (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300">
                      Incorrect
                    </span>
                  )}
                </div>

                <div className="space-y-2 text-sm">
                  {!isCorrect && userAnswer !== null && (
                    <div className="flex items-center text-red-600 dark:text-red-300 bg-red-50 dark:bg-red-900/20 p-2 rounded">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"></path></svg>
                      <span className="font-medium mr-2">Votre réponse :</span>
                      <span>{q.options[userAnswer]}</span>
                    </div>
                  )}
                  <div className="flex items-center text-green-700 dark:text-green-300 bg-green-50 dark:bg-green-900/20 p-2 rounded">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path></svg>
                    <span className="font-medium mr-2">Bonne réponse :</span>
                    <span>{q.options[q.correctAnswerIndex]}</span>
                  </div>
                  <div className="mt-3 text-slate-600 dark:text-slate-400 italic border-t pt-2 border-slate-100 dark:border-slate-700">
                    ℹ️ {q.explanation}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default QuizSummary;