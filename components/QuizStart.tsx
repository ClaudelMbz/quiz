import React from 'react';

interface QuizStartProps {
  onStart: (mode: 'quiz1' | 'quiz2' | 'quiz3' | 'all') => void;
}

const QuizStart: React.FC<QuizStartProps> = ({ onStart }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] p-6 text-center max-w-5xl mx-auto animate-fade-in-up">
      <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 transition-colors duration-200 w-full">
        <div className="mb-6">
          <svg className="w-20 h-20 mx-auto text-blue-600 dark:text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
        </div>
        
        <h1 className="text-3xl font-bold text-slate-800 dark:text-white mb-4">
          Quiz Isolation Thermique
        </h1>
        
        <p className="text-slate-600 dark:text-slate-300 mb-8 text-lg max-w-2xl mx-auto">
          Testez vos connaissances sur la conductivité thermique, les matériaux isolants, les ponts thermiques et les techniques de construction durable.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          {/* Card 1 */}
          <div className="bg-slate-50 dark:bg-slate-700/50 p-6 rounded-xl border border-slate-100 dark:border-slate-600 flex flex-col justify-between hover:border-blue-400 dark:hover:border-blue-500 transition-all group cursor-pointer" onClick={() => onStart('quiz1')}>
             <div>
               <div className="text-2xl mb-2">🏠</div>
               <h3 className="font-bold text-lg text-slate-800 dark:text-white mb-2">Série 1 : Bases</h3>
               <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">Conductivité, R, principes de base et matériaux courants.</p>
             </div>
             <button className="w-full py-2 bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 font-bold rounded-lg border border-slate-200 dark:border-slate-600 group-hover:bg-blue-600 group-hover:text-white dark:group-hover:bg-blue-500 dark:group-hover:text-white transition-colors">
               Lancer (20 Q)
             </button>
          </div>

          {/* Card 2 */}
          <div className="bg-slate-50 dark:bg-slate-700/50 p-6 rounded-xl border border-slate-100 dark:border-slate-600 flex flex-col justify-between hover:border-purple-400 dark:hover:border-purple-500 transition-all group cursor-pointer" onClick={() => onStart('quiz2')}>
             <div>
               <div className="text-2xl mb-2">🔬</div>
               <h3 className="font-bold text-lg text-slate-800 dark:text-white mb-2">Série 2 : Techniques</h3>
               <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">Énergie grise, détails chimiques, acoustique et controverses.</p>
             </div>
             <button className="w-full py-2 bg-white dark:bg-slate-800 text-purple-600 dark:text-purple-400 font-bold rounded-lg border border-slate-200 dark:border-slate-600 group-hover:bg-purple-600 group-hover:text-white dark:group-hover:bg-purple-500 dark:group-hover:text-white transition-colors">
               Lancer (20 Q)
             </button>
          </div>

           {/* Card 3 */}
           <div className="bg-slate-50 dark:bg-slate-700/50 p-6 rounded-xl border border-slate-100 dark:border-slate-600 flex flex-col justify-between hover:border-teal-400 dark:hover:border-teal-500 transition-all group cursor-pointer" onClick={() => onStart('quiz3')}>
             <div>
               <div className="text-2xl mb-2">♻️</div>
               <h3 className="font-bold text-lg text-slate-800 dark:text-white mb-2">Série 3 : Synthèse</h3>
               <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">Critères environnementaux, recyclage et identification.</p>
             </div>
             <button className="w-full py-2 bg-white dark:bg-slate-800 text-teal-600 dark:text-teal-400 font-bold rounded-lg border border-slate-200 dark:border-slate-600 group-hover:bg-teal-600 group-hover:text-white dark:group-hover:bg-teal-500 dark:group-hover:text-white transition-colors">
               Lancer (20 Q)
             </button>
          </div>

          {/* Card 4 - All */}
          <div className="bg-slate-50 dark:bg-slate-700/50 p-6 rounded-xl border border-slate-100 dark:border-slate-600 flex flex-col justify-between hover:border-green-400 dark:hover:border-green-500 transition-all group cursor-pointer" onClick={() => onStart('all')}>
             <div>
               <div className="text-2xl mb-2">🎓</div>
               <h3 className="font-bold text-lg text-slate-800 dark:text-white mb-2">Grand Chelem</h3>
               <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">L'ensemble des 60 questions pour une révision totale.</p>
             </div>
             <button className="w-full py-2 bg-white dark:bg-slate-800 text-green-600 dark:text-green-400 font-bold rounded-lg border border-slate-200 dark:border-slate-600 group-hover:bg-green-600 group-hover:text-white dark:group-hover:bg-green-500 dark:group-hover:text-white transition-colors">
               Lancer (60 Q)
             </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizStart;