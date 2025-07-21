"use client";
import { useState } from "react";
import MoodSelector from "./components/MoodSelector";
import PaletteCard from "./components/PaletteCard";
import StackModal from "./components/StackModal";

export default function Home() {
  const [palette, setPalette] = useState<string[]>([]);
  const [currentColor, setCurrentColor] = useState<string | null>(null);
  const [modalClosed, setModalClosed] = useState(false);

  const shufflePalette = () =>
    setPalette((prev) => [...prev].sort(() => Math.random() - 0.5));
  return (
    <main
      style={{ backgroundColor: `#${currentColor}` }}
      className="flex  min-h-screen flex-col items-center justify-center px-4 py-10"
    >
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Mood Palette Generator
        </h1>
        <p className="mt-3 ">
          Pick a mood and select to change the background color
        </p>
      </div>
      <MoodSelector
        onSelect={setPalette}
        onShuffle={shufflePalette}
        palette={palette}
      />
      <PaletteCard colors={palette} onSelect={setCurrentColor} />
      {!modalClosed && <StackModal onClose={() => setModalClosed(true)} />}
    </main>
  );
}
