"use client";
import { motion } from "framer-motion";
import { Smile, Frown, Zap, Droplets, Wind } from "lucide-react";
import { Shuffle } from "lucide-react";
import { useState } from "react";

const moods = [
  {
    label: "Happy",
    icon: Smile,
    colors: ["fde047", "facc15", "fb923c", "f87171", "4ade80"],
  },
  {
    label: "Calm",
    icon: Wind,
    colors: ["a78bfa", "818cf8", "93c5fd", "bae6fd", "e0e7ff"],
  },
  {
    label: "Energetic",
    icon: Zap,
    colors: ["f97316", "ef4444", "ec4899", "d946ef", "8b5cf6"],
  },
  {
    label: "Sad",
    icon: Frown,
    colors: ["64748b", "475569", "334155", "1e293b", "0f172a"],
  },
  {
    label: "Rainy",
    icon: Droplets,
    colors: ["0ea5e9", "0284c7", "0369a1", "075985", "0c4a6e"],
  },
];

type Props = {
  onSelect: (colors: string[]) => void;
  onShuffle: () => void;
  palette: string[];
};

export default function MoodSelector({ onSelect, onShuffle, palette }: Props) {
  const [mood, setMood] = useState<string | null>(null);

  const handleClick = (label: string, colors: string[]) => {
    setMood(label);
    onSelect(colors);
  };
  
  return (
    <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-6">
      {moods.map(({ label, icon: Icon, colors }) => (
        <motion.button
          key={label}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleClick(label, colors)}
          className={`flex flex-col items-center gap-2 rounded-xl  px-5 py-3 text-sm font-medium transition hover:bg-slate-700 ${
            mood === label ? "bg-slate-700 scale-105" : "bg-slate-800"
          }`}
        >
          <Icon className="h-6 w-6 text-slate-300" />
          <span>{label}</span>
        </motion.button>
      ))}
      {palette.length > 0 && (
        <motion.button
          key="shuffle"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onShuffle()}
          className="flex flex-col items-center gap-2 rounded-xl bg-slate-800 px-5 py-3 text-sm font-medium transition hover:bg-slate-700"
        >
          <Shuffle className="h-6 w-6 text-slate-300" />
          <span>Shuffle</span>
        </motion.button>
      )}
    </div>
  );
}
