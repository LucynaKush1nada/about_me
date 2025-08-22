import { motion } from "framer-motion";

export function HeaderSection({ glitchText, typedText }: { glitchText: string; typedText: string }) {
  return (
    <>
      <style>{`
        @keyframes glitch { 0% { transform: translate(0); } 20% { transform: translate(-2px, 2px); } 40% { transform: translate(-2px, -2px); } 60% { transform: translate(2px, 2px); } 80% { transform: translate(2px, -2px); } 100% { transform: translate(0); } }
        .glitch:hover { animation: glitch 0.5s infinite linear alternate-reverse; }
      `}</style>
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="mb-10"
      >
        <h1 className={`${glitchText}`}>Andrey Nekrasov / frontend.dev</h1>
        <p className="text-sm text-gray-400 mt-1 font-mono min-h-[1rem]">{typedText}</p>
      </motion.header>
    </>
  );
}

export default HeaderSection;
