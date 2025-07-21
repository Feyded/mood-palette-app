'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function StackModal({ onClose }: { onClose: () => void }) {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white p-6 rounded-xl shadow-lg max-w-md w-full text-center"
          >
            <h2 className="text-2xl font-bold mb-4 text-[#0f172b]">Tech Stack</h2>
            <ul className="space-y-2 text-gray-700">
              <li>🚀 Next.js (App Router)</li>
              <li>🎨 Tailwind CSS</li>
              <li>🎞️ Framer Motion</li>
            </ul>
            <button
              onClick={handleClose}
              className="mt-6 bg-[#0f172b] text-white px-4 py-2 rounded-full hover:bg-[#314158] transition"
            >
              Got it, show me the project
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
