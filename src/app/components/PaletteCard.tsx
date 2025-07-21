"use client";
import { motion, AnimatePresence } from "framer-motion";
import CopyButton from "./CopyButton";

interface Props {
  colors: string[];
  onSelect: (color: string) => void;
}

export default function PaletteCard({ colors, onSelect }: Props) {
  const imageUrl = `https://source.unsplash.com/800x400/?nature,${colors[0]}`;

  return (
    <AnimatePresence>
      {colors.length > 0 && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="mt-10 w-full max-w-3xl"
        >
          <div
            style={{ backgroundImage: `url(${imageUrl})` }}
            className=" bg-red-500 w-full rounded-t-xl bg-cover bg-center"
          />

          <div className="md:flex ">
            {colors.map((hex, idx) => (
              <motion.div
                whileHover={{ y: -20 }}
                onClick={() => onSelect(hex)}
                key={idx}
                style={{ backgroundColor: `#${hex}` }}
                className="relative h-28 flex-1 cursor-pointer
first:rounded-tl-xl last:rounded-br-xl last:rounded-bl-xl first:rounded-tr-xl md:first:rounded-tr-none
md:first:rounded-bl-xl md:last:rounded-br-xl md:first:rounded-tl-xl md:last:rounded-tr-xl
 md:last:rounded-bl-none"
              >
                <CopyButton hex={hex} />
              </motion.div>
            ))}
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}
