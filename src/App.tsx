import { useState, useEffect } from "react";
//
import HeaderSection from "@/components/sections/Header";
import CardsGrid from "@/components/sections/Cards";
import ContactModal from "@/components/sections/Modal";
import FooterSection from "@/components/sections/Footer";
import { motion } from "framer-motion";
import Assistant from "@/components/Assistant";

const glitchText = `before:absolute before:inset-0 before:animate-glitch before:bg-cyan-500/30 before:mix-blend-screen relative text-cyan-300 font-mono font-bold text-4xl`;

export function CyberpunkPortfolio() {
  const [typedText, setTypedText] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [, setSubmitted] = useState(false);
  const fullText = "Senior Frontend Developer — React / TypeScript / Next.js";
  const baseUrl = import.meta.env.BASE_URL;

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 35);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="min-h-screen text-white font-sans p-6 cursor-glitch relative"
      style={{
        backgroundImage: `url('${baseUrl}background.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center 20%',
        backgroundAttachment: 'fixed',
        backgroundColor: '#121212',
        backgroundBlendMode: 'overlay'
      }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.12),rgba(0,0,0,0.28))] backdrop-blur-[1.5px] z-0" />
      <div className="relative z-10">
        <HeaderSection glitchText={glitchText} typedText={typedText} />
        <CardsGrid />
      </div>

        <ContactModal
          open={showModal}
          onClose={() => setShowModal(false)}
          onSubmitted={() => setSubmitted(true)}
        />

        <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }} className="relative z-10">
          <FooterSection onOpenModal={() => setShowModal(true)} resumeHref="/resume.pdf" />
        </motion.div>
    </div>
  );
}

function RootWithAssistant() {
  return (
    <>
      <CyberpunkPortfolio />
      <Assistant />
    </>
  );
}

export default RootWithAssistant;
