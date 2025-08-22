import { Button } from "@/components/ui/button";
import { Terminal, FileDown } from "lucide-react";

export function FooterSection({ onOpenModal, resumeHref }: { onOpenModal: () => void; resumeHref: string }) {
  return (
    <footer className="mt-16 text-center space-y-4">
      <div className="flex flex-col items-center gap-4">
        <Button
          variant="outline"
          onClick={onOpenModal}
          className="text-cyan-400 hover:text-cyan-400 border-cyan-400 hover:bg-cyan-500/10 no-underline"
        >
          <Terminal className="w-4 h-4" />
          Contact me
        </Button>

        <Button
          asChild
          variant="outline"
          className="text-cyan-400 hover:text-cyan-400 border-cyan-400 hover:bg-cyan-500/10 no-underline"
        >
          <a href={resumeHref} download>
            <FileDown className="w-4 h-4" />
            Download resume (PDF)
          </a>
        </Button>
      </div>
    </footer>
  );
}

export default FooterSection;
