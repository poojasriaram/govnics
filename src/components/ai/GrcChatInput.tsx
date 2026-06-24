import React, { useState, useRef, useEffect } from "react";
import { Send } from "lucide-react";

interface GrcChatInputProps {
  onSend: (message: string) => void;
  disabled?: boolean;
}

export const GrcChatInput = ({ onSend, disabled }: GrcChatInputProps) => {
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (input.trim() && !disabled) {
      onSend(input.trim());
      setInput("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  // Focus input automatically on mount
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <form onSubmit={handleSubmit} className="relative w-full">
      <div className="relative flex items-center gap-2 bg-slate-50 border border-slate-200/80 rounded-full p-1 focus-within:bg-white focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-500/5 transition-all duration-300">
        <input
          ref={inputRef}
          id="grc-chat-input"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Search Acts, compliance data, checklists..."
          disabled={disabled}
          className="w-full bg-transparent border-none focus:ring-0 focus:outline-none py-2 px-4 text-xs text-slate-700 placeholder:text-slate-400 outline-none"
        />
        <button
          type="submit"
          disabled={!input.trim() || disabled}
          className="w-9 h-9 rounded-full bg-blue-600 hover:bg-blue-700 text-white disabled:bg-slate-200 disabled:text-slate-400 transition-all flex items-center justify-center shrink-0 hover:scale-105 active:scale-95 shadow-md shadow-blue-500/10"
        >
          <Send className="w-4 h-4" />
        </button>
      </div>
    </form>
  );
};
