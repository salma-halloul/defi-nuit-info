'use client';

import { useState, useEffect, useRef } from 'react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [shouldFloat, setShouldFloat] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Utiliser les routes API Next.js comme proxy
  const API_SESSION_URL = '/api/chat/session';
  const API_MESSAGE_URL = '/api/chat/message';

  // Créer une nouvelle session au montage du composant
  useEffect(() => {
    createNewSession();
    
    // Arrêter l'animation après 6 secondes
    const timer = setTimeout(() => {
      setShouldFloat(false);
    }, 6000);
    
    return () => clearTimeout(timer);
  }, []);

  // Auto-scroll vers le bas quand de nouveaux messages arrivent
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Créer une nouvelle session
  const createNewSession = async () => {
    try {
      const response = await fetch(API_SESSION_URL);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setSessionId(data.session_id);
      console.log('Session créée:', data.session_id);
    } catch (error) {
      console.error('Erreur lors de la création de la session:', error);
      // Créer une session factice pour permettre l'utilisation en mode dégradé
      setSessionId('fallback-session-' + Date.now());
    }
  };

  // Envoyer un message
  const sendMessage = async () => {
    if (!inputMessage.trim() || !sessionId || isLoading) return;

    const userMessage: Message = {
      role: 'user',
      content: inputMessage,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const response = await fetch(API_MESSAGE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          session_id: sessionId,
          message: inputMessage,
        }),
      });

      const data = await response.json();

      const assistantMessage: Message = {
        role: 'assistant',
        content: data.answer,
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Erreur lors de l\'envoi du message:', error);
      const errorMessage: Message = {
        role: 'assistant',
        content: 'Désolé, une erreur s\'est produite. Veuillez réessayer.',
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  // Gérer l'appui sur Entrée
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  // Formater le texte inline (gras, liens, etc.)
  const formatInlineText = (text: string): React.ReactNode => {
    const elements: React.ReactNode[] = [];
    let lastIndex = 0;
    
    // Regex combiné pour détecter gras et liens
    const combinedRegex = /(\*\*(.+?)\*\*|\[(.+?)\]\((.+?)\))/g;
    let match;
    
    while ((match = combinedRegex.exec(text)) !== null) {
      // Ajouter le texte avant le match
      if (match.index > lastIndex) {
        elements.push(
          <span key={`text-${lastIndex}`}>
            {text.substring(lastIndex, match.index)}
          </span>
        );
      }
      
      // Vérifier si c'est du gras ou un lien
      if (match[0].startsWith('**')) {
        // Texte en gras
        elements.push(
          <strong key={`bold-${match.index}`} className="font-semibold text-gray-900">
            {match[2]}
          </strong>
        );
      } else if (match[0].startsWith('[')) {
        // Lien
        elements.push(
          <a
            key={`link-${match.index}`}
            href={match[4]}
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-600 hover:underline"
          >
            {match[3]}
          </a>
        );
      }
      
      lastIndex = match.index + match[0].length;
    }
    
    // Ajouter le texte restant
    if (lastIndex < text.length) {
      elements.push(
        <span key={`text-${lastIndex}`}>
          {text.substring(lastIndex)}
        </span>
      );
    }
    
    // Si aucun élément formaté, retourner le texte brut
    return elements.length > 0 ? elements : text;
  };

  // Formater le message de l'assistant avec un meilleur rendu
  const formatAssistantMessage = (content: string) => {
    // Diviser le contenu en paragraphes
    const paragraphs = content.split('\n\n');
    
    return paragraphs.map((paragraph, pIndex) => {
      // Détecter les listes (lignes commençant par -, *, ou des numéros)
      const lines = paragraph.split('\n');
      const hasListItems = lines.some(line => 
        line.trim().match(/^[-•]\s/) || line.trim().match(/^\d+\.\s/)
      );
      
      if (hasListItems && lines.length > 1) {
        return (
          <div key={pIndex} className="space-y-1">
            {lines.map((line, lIndex) => {
              const trimmedLine = line.trim();
              
              // Liste à puce ou numérotée
              if (trimmedLine.match(/^[-•]\s/) || trimmedLine.match(/^\d+\.\s/)) {
                const cleanLine = trimmedLine.replace(/^[-•]\s/, '').replace(/^\d+\.\s/, '');
                return (
                  <div key={lIndex} className="flex items-start ml-4">
                    <span className="text-amber-600 mr-2">•</span>
                    <span className="text-gray-700 flex-1">{formatInlineText(cleanLine)}</span>
                  </div>
                );
              }
              
              // Ligne normale avant ou après la liste
              if (trimmedLine) {
                return (
                  <p key={lIndex} className="text-gray-700 leading-relaxed mb-1">
                    {formatInlineText(trimmedLine)}
                  </p>
                );
              }
              
              return null;
            })}
          </div>
        );
      }
      
      // Détecter les citations (lignes commençant par >)
      if (paragraph.trim().startsWith('>')) {
        const cleanText = paragraph.replace(/^>\s*/, '');
        return (
          <blockquote key={pIndex} className="border-l-4 border-amber-500 pl-4 py-2 bg-amber-50 rounded-r italic text-gray-700">
            {formatInlineText(cleanText)}
          </blockquote>
        );
      }
      
      // Détecter les titres (lignes commençant par # ou tout en gras)
      if (paragraph.startsWith('#')) {
        const cleanText = paragraph.replace(/^#+\s*/, '');
        return (
          <h4 key={pIndex} className="font-semibold text-gray-900 mb-1 mt-2">
            {formatInlineText(cleanText)}
          </h4>
        );
      }

      // Paragraphe normal
      return (
        <p key={pIndex} className="text-gray-700 leading-relaxed">
          {formatInlineText(paragraph)}
        </p>
      );
    });
  };

  return (
    <>
      {/* Bulle du chatbot */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 z-50"
        aria-label="Ouvrir le chatbot"
        style={{
          animation: shouldFloat ? 'float 3s ease-in-out infinite' : 'none'
        }}
      >
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
            />
          </svg>
        )}
      </button>

      {/* Fenêtre du chatbot */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 max-w-[calc(100vw-3rem)] h-[500px] max-h-[70vh] md:w-96 md:max-w-96 bg-white rounded-lg shadow-2xl flex flex-col z-50 border border-gray-200">
          {/* En-tête */}
          <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white p-4 rounded-t-lg flex items-center justify-between">
            <h3 className="font-semibold text-lg">Rafiq-AI Assistant</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-orange-700/30 rounded-full p-1"
              aria-label="Fermer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Corps du chatbot - Messages */}
          <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
            {messages.length === 0 ? (
              <div className="flex items-center justify-center h-full text-gray-400">
                <div className="text-center">
                  <p className="mb-2">👋 Bonjour !</p>
                  <p className="text-sm">Posez-moi vos questions sur le projet NIRD</p>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${
                      message.role === 'user' ? 'justify-end' : 'justify-start'
                    }`}
                  >
                    {message.role === 'assistant' && (
                      <div className="flex-shrink-0 mr-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full flex items-center justify-center">
                          <svg
                            className="w-5 h-5 text-amber-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                      </div>
                    )}
                    <div
                      className={`max-w-[80%] px-4 py-3 rounded-lg shadow-sm ${
                        message.role === 'user'
                          ? 'bg-gradient-to-br from-amber-600 to-orange-600 text-white rounded-br-none'
                          : 'bg-white text-gray-800 border border-gray-200 rounded-bl-none'
                      }`}
                    >
                      {message.role === 'assistant' ? (
                        <div className="text-sm space-y-2">
                          {formatAssistantMessage(message.content)}
                        </div>
                      ) : (
                        <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                      )}
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-white text-gray-800 border border-gray-200 px-4 py-2 rounded-lg">
                      <div className="flex space-x-2">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            )}
          </div>

          {/* Zone de saisie */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Écrivez votre message..."
                disabled={isLoading || !sessionId}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 disabled:bg-gray-100"
              />
              <button
                onClick={sendMessage}
                disabled={isLoading || !sessionId || !inputMessage.trim()}
                className="bg-gradient-to-br from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-4 py-2 rounded-lg transition-all disabled:bg-gray-300 disabled:cursor-not-allowed disabled:from-gray-300 disabled:to-gray-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
