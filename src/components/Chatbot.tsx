import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import { CreateMLCEngine } from '@mlc-ai/web-llm';

// WebLLM AI - runs entirely in the browser with proper model configuration

// WebLLM AI - runs entirely in the browser

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! I'm an AI assistant here to help you learn more about Lord Reinier. Ask me anything about his experience, skills, projects, or background!",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [engine, setEngine] = useState<any>(null);
  const [isModelLoading, setIsModelLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState("Initializing AI...");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Pre-load WebLLM engine immediately when component mounts (for instant chat)
  useEffect(() => {
    const preLoadWebLLM = async () => {
      console.log('🚀 Pre-loading TinyLlama for instant chat access...');

      const modelName = "TinyLlama-1.1B-Chat-v0.4-q4f16_1-MLC"; // Smallest, fastest model

      try {
        console.log(`🔍 Pre-loading: ${modelName} (~700MB)`);

        // Very short timeout for pre-loading (30 seconds for 700MB model)
        const timeoutMs = 30000;
        const timeoutPromise = new Promise((_, reject) =>
          setTimeout(() => reject(new Error(`Pre-load timeout after ${timeoutMs/1000} seconds`)), timeoutMs)
        );

        const loadPromise = CreateMLCEngine(modelName, {
          initProgressCallback: (progress: any) => {
            const percent = Math.round(progress.progress * 100);
            console.log(`📊 Pre-loading ${modelName}: ${percent}% complete`);
            // Silent pre-loading - no UI updates to avoid showing loading to user
          }
        });

        const mlcEngine = await Promise.race([loadPromise, timeoutPromise]);

        // Quick test to ensure it works
        console.log(`🧪 Testing pre-loaded ${modelName}...`);
        const testPromise = (mlcEngine as any).chat.completions.create({
          messages: [{ role: 'user', content: 'Hi' }],
          temperature: 0.1,
          max_tokens: 5
        });

        const testReply = await Promise.race([testPromise, timeoutPromise]);

          if (testReply.choices && testReply.choices[0]) {
            setEngine(mlcEngine as any);
            console.log(`✅ TinyLlama pre-loaded and cached! Chat will be instant!`);
            return; // Success
          } else {
            throw new Error('Pre-load test failed');
          }

      } catch (error: any) {
        console.log(`❌ Pre-loading failed:`, error.message || error);
        console.log('💡 Model will load on-demand when chat is opened');
      }
    };

    // Start pre-loading immediately when component mounts
    preLoadWebLLM();
  }, []);

  // WebLLM AI responses with intelligent fallback

  const generateAIResponse = async (userMessage: string): Promise<string> => {
    // Check if model is pre-loaded (should be instant)
    if (engine) {
      try {
        console.log('⚡ Using pre-loaded TinyLlama (instant!)');

        const systemPrompt = `You are a helpful AI assistant on Lord Reinier V. Schofield's portfolio website. You help visitors learn about Lord Reinier's background, skills, and projects.

Lord Reinier is a Full Stack Developer with 3+ years of experience, specializing in Laravel and Vue.js. He has a Bachelor of Science in Information Systems degree.

His technical skills include:
- Frontend: Vue.js, Vuetify, Vue Router, Vuex
- Backend: Laravel, Node.js, MySQL
- Tools: Git, REST APIs, JavaScript

His key projects include HR management systems, recruitment platforms, and financial modules.

Be friendly and conversational. Help visitors learn about Lord Reinier's background and encourage them to explore his portfolio. Always speak about Lord Reinier in the third person.`;

        const messages = [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userMessage }
        ];

        const reply = await engine.chat.completions.create({
          messages: messages,
          temperature: 0.7,
          max_tokens: 256
        });

        if (reply.choices && reply.choices[0] && reply.choices[0].message) {
          let content = reply.choices[0].message.content?.trim();

          // Clean up the response (remove prompt echo if present)
          if (content && content.includes('Assistant:')) {
            content = content.split('Assistant:').pop()?.trim() || content;
          }

          if (content && content.length > 10) {
            console.log('✅ Instant WebLLM response:', content.substring(0, 100) + '...');
            return content;
          }
        }
        console.log('❌ WebLLM returned empty response');
      } catch (error) {
        console.log('❌ WebLLM failed:', error);
      }
    }

    // If model isn't pre-loaded yet, try on-demand loading (should be rare)
    console.log('📥 Model not pre-loaded, loading on-demand...');
    return loadModelOnDemand(userMessage);
  };

  // Fallback: Load model on-demand if pre-loading failed
  const loadModelOnDemand = async (userMessage: string): Promise<string> => {
    const modelName = "TinyLlama-1.1B-Chat-v0.4-q4f16_1-MLC";

    try {
      setIsModelLoading(true);
      setLoadingMessage(`Loading TinyLlama (~700MB)...`);

      console.log(`🔄 On-demand loading: ${modelName}`);

      const timeoutMs = 45000; // 45 seconds for on-demand
      const timeoutPromise = new Promise((_, reject) =>
        setTimeout(() => reject(new Error(`On-demand timeout`)), timeoutMs)
      );

      const loadPromise = CreateMLCEngine(modelName, {
        initProgressCallback: (progress: any) => {
          const percent = Math.round(progress.progress * 100);
          const timeRemaining = percent > 0 ? Math.round((100 - percent) / percent * 10) : 'unknown';
          setLoadingMessage(`TinyLlama: ${percent}% (~${timeRemaining}s)`);
        }
      });

      const mlcEngine = await Promise.race([loadPromise, timeoutPromise]);

      // Quick test
      const testReply = await (mlcEngine as any).chat.completions.create({
        messages: [{ role: 'user', content: 'Test' }],
        temperature: 0.1,
        max_tokens: 5
      });

      if (testReply.choices && testReply.choices[0]) {
        setEngine(mlcEngine);
        setIsModelLoading(false);
        setLoadingMessage("AI Ready");

        // Now generate the actual response
        return await generateAIResponse(userMessage);
      }
    } catch (error: any) {
      console.log(`❌ On-demand loading failed:`, error.message || error);
      setIsModelLoading(false);
      setLoadingMessage("AI Failed to Load");
    }

    return "⚠️ AI model failed to load. Please refresh the page and try again.";
  };


  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const currentMessage = inputMessage;
    const userMessage: Message = {
      id: messages.length + 1,
      text: currentMessage,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    try {
      const botResponse = await generateAIResponse(currentMessage);
      const botMessage: Message = {
        id: messages.length + 2,
        text: botResponse,
        isBot: true,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error generating response:', error);
      const errorMessage: Message = {
        id: messages.length + 2,
        text: "I'm sorry, I'm having trouble connecting right now. Please try again or check out Lord Reinier's portfolio sections above!",
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <MessageCircle size={24} className="text-white" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-24 right-6 w-96 h-[500px] bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 shadow-2xl z-50 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot size={16} className="text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">AI Portfolio Assistant</h3>
                  <p className="text-white/70 text-sm">
                    {engine ? '🤖 Local AI Ready' : isModelLoading ? `⏳ ${loadingMessage}` : '💡 Intelligent Assistant'} • Ask about Lord Reinier
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-white/70 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex items-start gap-3 ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  {message.isBot && (
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Bot size={16} className="text-white" />
                    </div>
                  )}
                  <div
                    className={`max-w-[70%] p-3 rounded-2xl ${
                      message.isBot
                        ? 'bg-white/10 text-white'
                        : 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                    }`}
                    style={{ padding: '5px', marginRight: '10px', marginBottom: '10px' }}
                  >
                    <p className="text-sm leading-relaxed">{message.text}</p>
                    <span className="text-xs opacity-70 mt-1 block">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                  {!message.isBot && (
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <User size={16} className="text-white" />
                    </div>
                  )}
                </motion.div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Bot size={16} className="text-white" />
                  </div>
                  <div className="bg-white/10 p-3 rounded-2xl">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-white/50 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-white/50 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-white/50 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-white/20">
              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about Lord Reinier's experience, skills, projects..."
                  className="flex-1 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <motion.button
                  onClick={handleSendMessage}
                  disabled={!inputMessage.trim()}
                  className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-full p-2 hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Send size={16} className="text-white" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
