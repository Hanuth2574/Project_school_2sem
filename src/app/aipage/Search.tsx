"use client";
import React, { useState } from 'react';

export default function Search({ onSendComplete }) {
  const [input, setInput] = useState("");

  async function Output(input, addConversation) {
    setInput("");
    const response = await fetch("https://5520-34-69-206-213.ngrok-free.app/generate", {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify({ input_sequence: input }),
    });

    if (response.ok) {
      const res = await response.json();
      const output = res["output"].split("assistant")[1]?.trim() || "";
      addConversation({ question: input, response: output });
    }
  }

  return (
    <section className='fixed bottom-0 left-0 md:left-1/2 md:-translate-x-1/2 w-full p-4 backdrop-blur-md'>
      <div className='flex justify-center'>
        <textarea
          onChange={(e) => setInput(e.target.value)}
          value={input}
          className='w-full pl-5 md:w-[60vw] p-2 border border-gray-300/20 bg-black/70 text-white rounded-full'
          placeholder='Search'
        />
        <button 
          onClick={() => Output(input, onSendComplete)} 
          className='ml-2 p-2 bg-gradient-to-l from-gray-400 to-gray-600 text-white rounded-full'
        >
          Submit
        </button>
      </div>
    </section>
  );
}
