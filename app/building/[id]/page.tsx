"use client";
import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { buildingsData, quizQuestions } from "@/app/data/buildings";

export default function BuildingPage() {
  const params = useParams();
  const buildingId = params.id as string;
  
  const building = buildingsData[buildingId];
  const questions = quizQuestions[buildingId];
  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);

  useEffect(() => {
    // Vérifier si le bâtiment est déjà complété
    const saved = localStorage.getItem("nird-progress");
    if (saved) {
      const progress = JSON.parse(saved);
      if (progress.includes(buildingId)) {
        setIsCompleted(true);
      }
    }
  }, [buildingId]);

  if (!building || !questions) {
    return (
      <div className="min-h-screen bg-red-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-red-600 mb-4">🚫 Bâtiment non trouvé</h1>
          <Link href="/village" className="text-blue-600 hover:underline">
            Retour au village
          </Link>
        </div>
      </div>
    );
  }

  const handleAnswerSelect = (answerIndex: number) => {
    if (showExplanation) return;
    setSelectedAnswer(answerIndex);
  };

  const handleValidate = () => {
    if (selectedAnswer === null) return;
    
    const isCorrect = selectedAnswer === questions[currentQuestion].correctAnswer;
    if (isCorrect) {
      setScore(prevScore => prevScore + 1);
    }
    setShowExplanation(true);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      // Quiz terminé - passer à l'écran des résultats
      setShowResults(true);
      
      // Calculer le score final correctement
      const currentQuestionCorrect = selectedAnswer === questions[currentQuestion].correctAnswer;
      const finalScore = score + (currentQuestionCorrect ? 1 : 0);
      const passed = finalScore >= questions.length * 0.6;
      
      if (passed && !isCompleted) {
        // Sauvegarder la progression
        const saved = localStorage.getItem("nird-progress");
        const progress = saved ? JSON.parse(saved) : [];
        if (!progress.includes(buildingId)) {
          progress.push(buildingId);
          localStorage.setItem("nird-progress", JSON.stringify(progress));
        }
        setIsCompleted(true);
      }
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setShowResults(false);
    setQuizStarted(true);
  };

  const currentQ = questions[currentQuestion];
  // Calculer le score final en ajoutant 1 si la réponse actuelle est correcte ET qu'on a cliqué sur valider
  const finalScore = showExplanation && selectedAnswer === currentQ.correctAnswer 
    ? score
    : score;
  const isPassed = finalScore >= questions.length * 0.6;
  const isLastQuestion = currentQuestion === questions.length - 1;

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-yellow-50">
      {/* Header */}
      <header className="bg-amber-900 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Link href="/village" className="hover:text-amber-200 transition">
              ← Retour au village
            </Link>
            <div className="flex-1 text-center">
              <h1 className="text-2xl font-bold flex items-center justify-center gap-2">
                <span className="text-4xl">{building.icon}</span>
                {building.name}
              </h1>
            </div>
            {isCompleted && (
              <div className="text-2xl animate-pulse">✅</div>
            )}
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        {!quizStarted ? (
          /* Page d'introduction du bâtiment */
          <div className="space-y-6">
            {/* Description */}
            <div className="bg-white rounded-lg shadow-xl p-8 border-4 border-amber-600">
              <div className="text-center mb-6">
                <div className="text-8xl mb-4">{building.icon}</div>
                <h2 className="text-3xl font-bold text-amber-900 mb-4">
                  {building.name}
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {building.description}
                </p>
              </div>

              {isCompleted && (
                <div className="bg-green-50 border-2 border-green-500 rounded-lg p-4 mb-6 text-center">
                  <p className="text-green-800 font-semibold text-lg">
                    ✅ Tu as déjà obtenu la clé de ce bâtiment !
                  </p>
                  <p className="text-green-700 mt-2">
                    Tu peux refaire le quiz pour améliorer tes connaissances.
                  </p>
                </div>
              )}
            </div>

            {/* Faits intéressants */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-bold text-amber-900 mb-4">
                💡 Le savais-tu ?
              </h3>
              <div className="space-y-3">
                {building.facts.map((fact, index) => (
                  <div 
                    key={index}
                    className="flex gap-3 p-4 bg-amber-50 rounded-lg border-l-4 border-amber-500"
                  >
                    <span className="text-2xl flex-shrink-0">🔸</span>
                    <p className="text-gray-700">{fact}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Challenge */}
            <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg shadow-xl p-8 text-white text-center">
              <h3 className="text-3xl font-bold mb-4">
                🎯 {building.challenge}
              </h3>
              <p className="text-lg mb-6">
                Réponds correctement à au moins {Math.ceil(questions.length * 0.6)} questions sur {questions.length} pour obtenir la clé de résistance !
              </p>
              <button
                onClick={() => setQuizStarted(true)}
                className="bg-white text-amber-900 px-8 py-4 rounded-full font-bold text-xl hover:bg-amber-100 transition shadow-lg hover:shadow-2xl hover:scale-105"
              >
                🚀 Commencer le défi
              </button>
            </div>
          </div>
        ) : !showResults ? (
          /* Quiz en cours */
          <div className="space-y-6">
            {/* Progression */}
            <div className="bg-white rounded-lg shadow-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold text-gray-700">
                  Question {currentQuestion + 1}/{questions.length}
                </span>
                <span className="font-semibold text-amber-600">
                  Score: {score}/{questions.length}
                </span>
              </div>
              <div className="bg-gray-200 rounded-full h-3 overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-amber-500 to-orange-500 h-full transition-all duration-300"
                  style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                />
              </div>
            </div>

            {/* Question */}
            <div className="bg-white rounded-lg shadow-xl p-8 border-4 border-amber-600">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                {currentQ.question}
              </h3>

              {/* Options */}
              <div className="space-y-3 mb-6">
                {currentQ.options.map((option, index) => {
                  const isSelected = selectedAnswer === index;
                  const isCorrect = index === currentQ.correctAnswer;
                  const showCorrectness = showExplanation;

                  return (
                    <button
                      key={index}
                      onClick={() => handleAnswerSelect(index)}
                      disabled={showExplanation}
                      className={`
                        w-full p-4 text-left rounded-lg border-2 transition-all
                        ${!showCorrectness && isSelected ? 'border-amber-500 bg-amber-50' : ''}
                        ${!showCorrectness && !isSelected ? 'border-gray-300 bg-white hover:bg-gray-50' : ''}
                        ${showCorrectness && isCorrect ? 'border-green-500 bg-green-50' : ''}
                        ${showCorrectness && isSelected && !isCorrect ? 'border-red-500 bg-red-50' : ''}
                        ${showCorrectness && !isSelected && !isCorrect ? 'border-gray-200 bg-gray-50 opacity-50' : ''}
                        ${showExplanation ? 'cursor-not-allowed' : 'cursor-pointer'}
                      `}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xl font-bold text-gray-600">
                          {String.fromCharCode(65 + index)}.
                        </span>
                        <span className="flex-1">{option}</span>
                        {showCorrectness && isCorrect && <span className="text-2xl">✅</span>}
                        {showCorrectness && isSelected && !isCorrect && <span className="text-2xl">❌</span>}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Explication */}
              {showExplanation && (
                <div className={`p-4 rounded-lg border-l-4 ${
                  selectedAnswer === currentQ.correctAnswer
                    ? 'bg-green-50 border-green-500'
                    : 'bg-blue-50 border-blue-500'
                }`}>
                  <p className="font-semibold mb-2">
                    {selectedAnswer === currentQ.correctAnswer ? '✅ Correct !' : 'ℹ️ Explication :'}
                  </p>
                  <p className="text-gray-700">{currentQ.explanation}</p>
                </div>
              )}

              {/* Boutons */}
              <div className="mt-6 flex gap-4 justify-end">
                {!showExplanation ? (
                  <button
                    onClick={handleValidate}
                    disabled={selectedAnswer === null}
                    className={`px-6 py-3 rounded-lg font-bold transition ${
                      selectedAnswer === null
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        : 'bg-amber-500 text-white hover:bg-amber-600'
                    }`}
                  >
                    Valider ma réponse
                  </button>
                ) : (
                  <button
                    onClick={handleNext}
                    className="px-6 py-3 rounded-lg font-bold bg-amber-500 text-white hover:bg-amber-600 transition"
                  >
                    {isLastQuestion ? 'Voir les résultats' : 'Question suivante →'}
                  </button>
                )}
              </div>
            </div>
          </div>
        ) : (
          /* Résultats finaux */
          <div className="space-y-6">
            <div className={`rounded-lg shadow-xl p-8 text-center ${
              isPassed ? 'bg-gradient-to-r from-green-400 to-emerald-500' : 'bg-gradient-to-r from-orange-400 to-red-500'
            } text-white`}>
              <div className="text-8xl mb-4">{isPassed ? '🎉' : '😅'}</div>
              <h2 className="text-4xl font-bold mb-4">
                {isPassed ? 'Félicitations !' : 'Pas mal !'}
              </h2>
              <p className="text-2xl mb-2">
                Score final : {finalScore}/{questions.length}
              </p>
              <p className="text-xl opacity-90">
                {isPassed 
                  ? `Tu as obtenu la clé ${building.icon} de résistance !`
                  : `Il te faut au moins ${Math.ceil(questions.length * 0.6)} bonnes réponses pour obtenir la clé.`
                }
              </p>
            </div>

            {isPassed && !isCompleted && (
              <div className="bg-yellow-50 border-2 border-yellow-500 rounded-lg p-6 text-center">
                <p className="text-xl font-semibold text-yellow-900 mb-2">
                  🔑 Nouvelle clé obtenue !
                </p>
                <p className="text-yellow-800">
                  Ta progression a été sauvegardée. Continue d'explorer le village !
                </p>
              </div>
            )}

            <div className="flex gap-4 justify-center">
              {!isPassed && (
                <button
                  onClick={resetQuiz}
                  className="px-8 py-4 bg-amber-500 text-white rounded-full font-bold hover:bg-amber-600 transition"
                >
                  🔄 Réessayer
                </button>
              )}
              <Link
                href="/village"
                className="px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-full font-bold hover:from-amber-700 hover:to-orange-700 transition inline-block"
              >
                🏰 Retour au village
              </Link>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
