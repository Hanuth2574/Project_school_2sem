"use client";
import React, { useEffect, useRef } from 'react';
import Lottie from 'lottie-react';
import animationData from "./lottie.json";

function Convo({ conversations }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [conversations]);

  return (
    <div className='pb-36 border-t border-white/40'>
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
      <div
        ref={containerRef}
        className='mt-5 max-h-[500px] overflow-y-auto scrollbar-hide'
      >
        {conversations.length > 0 ? (
          conversations.map((conversation, index) => (
            <div key={index} className='mb-4 p-2'>
              <div className='ml-5 font-bold inline-block p-4 bg-gradient-to-r from-slate-300 to-gray-600 border-4 rounded-full border-white/40 bg-clip-text text-transparent'>
                <span>&#8226;</span> {conversation.question}
              </div>
              <div className='p-5 flex'>
                <span className='mr-2'>
                  <Lottie className='h-10 w-10' animationData={animationData}/>
                </span>
                <div>
                  {conversation.response}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
}

export default Convo;
