import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

type TourStep = {
  id: string;
  title: string;
  description: string;
};

const HIGHLIGHT_CLASS =
  "ring ring-cyan-400 ring-offset-2 ring-offset-gray-900 rounded-xl animate-pulse";

export function Assistant({ avatarSrc = "/lucy.png" }: { avatarSrc?: string }) {
  const [open, setOpen] = useState(false);
  const [stepIndex, setStepIndex] = useState(0);
  const previousHighlightedId = useRef<string | null>(null);

  const steps: TourStep[] = useMemo(
    () => [
      { id: "about", title: "About", description: "Summary about me and my focus areas." },
      { id: "contacts", title: "Contacts", description: "Reach out via email, LinkedIn or GitHub." },
      { id: "tech", title: "Tech stack", description: "Core technologies and tools used." },
      { id: "experience", title: "Experience", description: "Career highlights and responsibilities." },
      { id: "education", title: "Education", description: "Degrees and universities." },
      { id: "activities", title: "Activities", description: "Mentoring, R&D, hackathons, and more." },
    ],
    []
  );

  useEffect(() => {
    if (!open) {
      if (previousHighlightedId.current) {
        const prev = document.getElementById(previousHighlightedId.current);
        prev?.classList.remove(...HIGHLIGHT_CLASS.split(" "));
        previousHighlightedId.current = null;
      }
      return;
    }

    const current = steps[stepIndex]?.id;
    if (!current) return;

    const el = document.getElementById(current);
    if (el) {
      // Remove previous
      if (previousHighlightedId.current && previousHighlightedId.current !== current) {
        const prev = document.getElementById(previousHighlightedId.current);
        prev?.classList.remove(...HIGHLIGHT_CLASS.split(" "));
      }
      el.classList.add(...HIGHLIGHT_CLASS.split(" "));
      previousHighlightedId.current = current;
      el.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
    }

    return () => {
      if (previousHighlightedId.current) {
        const prev = document.getElementById(previousHighlightedId.current);
        prev?.classList.remove(...HIGHLIGHT_CLASS.split(" "));
      }
      previousHighlightedId.current = null;
    };
  }, [open, stepIndex, steps]);

  const next = () => setStepIndex((i) => Math.min(i + 1, steps.length - 1));
  const prev = () => setStepIndex((i) => Math.max(i - 1, 0));

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-2">
      <AnimatePresence>
        {open && (
          <motion.div
            key="panel"
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.18 }}
            className="w-[320px] max-w-[90vw] rounded-xl border border-cyan-500/30 bg-gray-900/95 backdrop-blur p-3 shadow-lg shadow-cyan-500/10"
          >
            <div className="flex items-start gap-3">
              <div className="shrink-0">
                {/* Avatar */}
                <div className="relative size-12 rounded-full overflow-hidden border border-cyan-400/50 shadow shadow-cyan-500/20">
                  {/* Fallback to initials if image not found */}
                  <img
                    src={avatarSrc}
                    alt="Assistant avatar"
                    className="size-full object-cover"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.display = "none";
                    }}
                  />
                </div>
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between">
                  <div className="text-cyan-300 font-mono text-sm">Kushinado — Guide</div>
                  <button
                    onClick={() => setOpen(false)}
                    className="text-cyan-200/70 hover:text-white"
                    aria-label="Close assistant"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
                <div className="mt-2">
                  <div className="text-white font-semibold text-sm leading-tight">
                    {steps[stepIndex]?.title}
                  </div>
                  <div className="text-gray-300 text-xs mt-1">
                    {steps[stepIndex]?.description}
                  </div>
                </div>
                <div className="mt-3 flex items-center justify-between gap-2">
                  <div className="text-xs text-cyan-200/70 font-mono">
                    Step {stepIndex + 1} / {steps.length}
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={prev}
                      disabled={stepIndex === 0}
                      className="h-8 px-2 text-cyan-300 border-cyan-400 hover:bg-cyan-500/10"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={next}
                      disabled={stepIndex === steps.length - 1}
                      className="h-8 px-2 text-cyan-300 border-cyan-400 hover:bg-cyan-500/10"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Button
        variant="outline"
        onClick={() => setOpen((v) => !v)}
        className="border-cyan-400 text-cyan-300 hover:bg-cyan-500/10"
        aria-expanded={open}
        aria-controls="assistant-panel"
      >
        <HelpCircle className="w-4 h-4" />
        {open ? "Close guide" : "Open guide"}
      </Button>
    </div>
  );
}

export default Assistant;
