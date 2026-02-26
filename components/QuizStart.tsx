import React from 'react';

interface QuizStartProps {
  onStart: (mode: 'quiz1' | 'quiz2' | 'quiz3' | 'all') => void;
}

const QuizStart: React.FC<QuizStartProps> = ({ onStart }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] p-6 text-center max-w-5xl mx-auto animate-fade-in-up">
      <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 transition-colors duration-200 w-full">
        <div className="mb-6">
          <svg className="w-20 h-20 mx-auto text-blue-600 dark:text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>

        <h1 className="text-3xl font-bold text-slate-800 dark:text-white mb-4">
          ML & Deep Learning Quiz
        </h1>

        <p className="text-slate-600 dark:text-slate-300 mb-8 text-lg max-w-2xl mx-auto">
          Test your knowledge on Machine Learning fundamentals, problem types, performance metrics, and Deep Learning characteristics.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          {/* Card 1 */}
          <div className="bg-slate-50 dark:bg-slate-700/50 p-6 rounded-xl border border-slate-100 dark:border-slate-600 flex flex-col justify-between hover:border-blue-400 dark:hover:border-blue-500 transition-all group cursor-pointer" onClick={() => onStart('quiz1')}>
            <div>
              <div className="text-2xl mb-2">🧠</div>
              <h3 className="font-bold text-lg text-slate-800 dark:text-white mb-2">Series 1: Fundamentals</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">ML definition, Deep Learning, overfitting, gradient descent, and problem types.</p>
            </div>
            <button className="w-full py-2 bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 font-bold rounded-lg border border-slate-200 dark:border-slate-600 group-hover:bg-blue-600 group-hover:text-white dark:group-hover:bg-blue-500 dark:group-hover:text-white transition-colors">
              Start (10 Q)
            </button>
          </div>

          {/* Card 2 */}
          <div className="bg-slate-50 dark:bg-slate-700/50 p-6 rounded-xl border border-slate-100 dark:border-slate-600 flex flex-col justify-between hover:border-purple-400 dark:hover:border-purple-500 transition-all group cursor-pointer" onClick={() => onStart('quiz2')}>
            <div>
              <div className="text-2xl mb-2">📊</div>
              <h3 className="font-bold text-lg text-slate-800 dark:text-white mb-2">Series 2: Metrics</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">Precision, MAE, RMSE, ROC curve, confusion matrix, and accuracy.</p>
            </div>
            <button className="w-full py-2 bg-white dark:bg-slate-800 text-purple-600 dark:text-purple-400 font-bold rounded-lg border border-slate-200 dark:border-slate-600 group-hover:bg-purple-600 group-hover:text-white dark:group-hover:bg-purple-500 dark:group-hover:text-white transition-colors">
              Start (10 Q)
            </button>
          </div>

          {/* Card 3 */}
          <div className="bg-slate-50 dark:bg-slate-700/50 p-6 rounded-xl border border-slate-100 dark:border-slate-600 flex flex-col justify-between hover:border-teal-400 dark:hover:border-teal-500 transition-all group cursor-pointer" onClick={() => onStart('quiz3')}>
            <div>
              <div className="text-2xl mb-2">⚙️</div>
              <h3 className="font-bold text-lg text-slate-800 dark:text-white mb-2">Series 3: Deep Learning</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">True/False on DL properties: bias, black box, cost, generalization, hyperparameters.</p>
            </div>
            <button className="w-full py-2 bg-white dark:bg-slate-800 text-teal-600 dark:text-teal-400 font-bold rounded-lg border border-slate-200 dark:border-slate-600 group-hover:bg-teal-600 group-hover:text-white dark:group-hover:bg-teal-500 dark:group-hover:text-white transition-colors">
              Start (7 Q)
            </button>
          </div>

          {/* Card 4 - All */}
          <div className="bg-slate-50 dark:bg-slate-700/50 p-6 rounded-xl border border-slate-100 dark:border-slate-600 flex flex-col justify-between hover:border-green-400 dark:hover:border-green-500 transition-all group cursor-pointer" onClick={() => onStart('all')}>
            <div>
              <div className="text-2xl mb-2">🎓</div>
              <h3 className="font-bold text-lg text-slate-800 dark:text-white mb-2">Grand Slam</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">All 27 questions for a complete review of ML & Deep Learning.</p>
            </div>
            <button className="w-full py-2 bg-white dark:bg-slate-800 text-green-600 dark:text-green-400 font-bold rounded-lg border border-slate-200 dark:border-slate-600 group-hover:bg-green-600 group-hover:text-white dark:group-hover:bg-green-500 dark:group-hover:text-white transition-colors">
              Start (27 Q)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizStart;
