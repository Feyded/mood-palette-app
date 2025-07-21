"use client";
import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { motion } from "framer-motion";

interface Props {
  hex: string;
}

export default function CopyButton({ hex }: Props) {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(`#${hex}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <motion.button
      aria-label={`Copy #${hex}`}
      onClick={copy}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="absolute bottom-2 right-2 sm:col rounded-full bg-black/40 p-1.5 text-white backdrop-blur-sm"
    >
      {copied ? (
        <Check className="h-4 w-4 text-green-300" />
      ) : (
        <Copy className="h-4 w-4" />
      )}
    </motion.button>
  );
}
