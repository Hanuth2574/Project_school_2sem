"use client";
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import React from 'react';
import Aheader from './Aheader';
import Sidebar from './Sidebar';
import Search from './Search';
import Navbar from './Navbar';
import Ahero from './Ahero';
import Features from './Features';
import Faqs from './Faqs';
import Convo from './Convo';

function Page() {
  const [First, setFirst] = useState(true);
  const [conversations, setConversations] = useState([]);

  const addConversation = (conversation) => {
    setConversations((prev) => [...prev, conversation]);
  };

  return (
    <>
      <Aheader />
      <Navbar />
      <AnimatePresence>
        {First ? (
          <>
            <motion.div
              key="content"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5 }}
            >
              <Ahero />
              <Features />
              <Faqs />
            </motion.div>
          </>
        ) : (
          <motion.div
            key="convo"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
          >
            <Convo conversations={conversations} />
          </motion.div>
        )}
      </AnimatePresence>
      <div onClick={() => setFirst(false)}>
        <Search onSendComplete={addConversation} />
      </div>
    </>
  );
}

export default Page;
