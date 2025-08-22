import { AnimatePresence, motion } from "framer-motion";
import { X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContactModal({ open, onClose, onSubmitted }: { open: boolean; onClose: () => void; onSubmitted: () => void }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-900 p-6 rounded-lg border border-blue-500/30 w-full max-w-md"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-blue-400 text-lg font-mono">Contact me</h2>
              <button onClick={onClose} className="text-gray-400 hover:text-white" aria-label="Close">
                <X className="w-5 h-5" />
              </button>
            </div>
            <form
              action="https://formspree.io/f/mwkgenzy"
              method="POST"
              onSubmit={onSubmitted}
              className="grid gap-4"
            >
              <input
                type="text"
                name="name"
                required
                placeholder="Name"
                className="bg-gray-800 text-white border border-gray-600 px-4 py-2 rounded"
              />
              <input
                type="email"
                name="email"
                required
                placeholder="Email"
                className="bg-gray-800 text-white border border-gray-600 px-4 py-2 rounded"
              />
              <textarea
                name="message"
                required
                placeholder="Message..."
                rows={4}
                className="bg-gray-800 text-white border border-gray-600 px-4 py-2 rounded"
              />
              <Button type="submit" className="bg-blue-600 hover:bg-blue-500 text-white w-fit">
                <Send className="w-4 h-4 mr-2" /> Send
              </Button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ContactModal;
