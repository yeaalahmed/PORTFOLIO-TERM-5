import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Cpu, Terminal } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'SYSTEM READY. I am Alex\'s AI Twin. Ask me about my projects or skills.' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const responseText = await sendMessageToGemini(userMsg.text);
      const botMsg: ChatMessage = { role: 'model', text: responseText || "No response received." };
      setMessages(prev => [...prev, botMsg]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: 'CONNECTION ERROR: Could not reach AI core.', isError: true }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="fixed bottom-6 right-6 z-[90] font-mono">
      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[90vw] md:w-[400px] bg-vintage-black border-4 border-retro-orange shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col h-[500px] animate-in slide-in-from-bottom-10 duration-300">
          
          {/* Header */}
          <div className="bg-retro-orange p-3 border-b-4 border-black flex justify-between items-center text-vintage-black">
             <div className="flex items-center gap-2 font-bold uppercase tracking-wider">
                <Terminal className="w-5 h-5" />
                <span>TERMINAL_V1.0</span>
             </div>
             <button onClick={() => setIsOpen(false)} className="hover:bg-white border-2 border-transparent hover:border-black p-1 transition-all">
                <X className="w-5 h-5" />
             </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-vintage-black text-green-400 font-mono text-sm">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[85%] p-3 border-2 ${
                    msg.role === 'user' 
                      ? 'border-green-400 text-green-400 text-right' 
                      : 'border-retro-orange text-retro-orange bg-retro-orange/10'
                  }`}
                >
                  <span className="text-xs opacity-50 block mb-1">
                    {msg.role === 'user' ? '> USER' : '> SYSTEM'}
                  </span>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="text-retro-orange animate-pulse">
                > PROCESSING DATA...
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-3 bg-vintage-black border-t-4 border-retro-orange flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Query protocol..."
              className="flex-1 bg-transparent border-2 border-green-700 text-green-400 p-2 focus:outline-none focus:border-green-400 placeholder-green-800 font-bold"
              autoFocus
            />
            <button 
              onClick={handleSend}
              disabled={isLoading}
              className="bg-green-700 text-black p-2 border-2 border-green-500 hover:bg-green-400 transition-colors disabled:opacity-50"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 bg-retro-orange border-4 border-black shadow-retro rounded-full flex items-center justify-center hover:scale-110 transition-transform ${isOpen ? 'bg-retro-yellow' : ''}`}
      >
        {isOpen ? <Cpu className="w-8 h-8 text-black" /> : <MessageSquare className="w-8 h-8 text-black" />}
      </button>
    </div>
  );
};

export default ChatWidget;