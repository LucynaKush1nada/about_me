import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import {
  Terminal,
  FileDown,
  Send,
  X,
  Mail,
  MapPin,
  Linkedin,
  Github,
  Briefcase,
  GraduationCap,
  Activity
} from "lucide-react";
import Assistant from "@/components/Assistant";

const glitchText = `before:absolute before:inset-0 before:animate-glitch before:bg-cyan-500/30 before:mix-blend-screen relative text-cyan-300 font-mono font-bold text-4xl`;

export function CyberpunkPortfolio() {
  const [typedText, setTypedText] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const fullText = "Senior Frontend Developer — React / TypeScript / Next.js";

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
        backgroundImage: `url('/background.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center 20%',
        backgroundAttachment: 'fixed',
        backgroundColor: '#121212',
        backgroundBlendMode: 'overlay'
      }}
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.12),rgba(0,0,0,0.28))] backdrop-blur-[1.5px] z-0" />
      <div className="relative z-10">
        <style>{`
          @keyframes glitch {
            0% { transform: translate(0); }
            20% { transform: translate(-2px, 2px); }
            40% { transform: translate(-2px, -2px); }
            60% { transform: translate(2px, 2px); }
            80% { transform: translate(2px, -2px); }
            100% { transform: translate(0); }
          }
          .glitch:hover {
            animation: glitch 0.5s infinite linear alternate-reverse;
          }
        `}</style>

        <motion.header
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="mb-10"
        >
          <h1 className={`${glitchText}`}>Andrey Nekrasov / frontend.dev</h1>
          <p className="text-sm text-gray-400 mt-1 font-mono min-h-[1rem]">
            {typedText}
          </p>
        </motion.header>

        <main className="grid gap-6 lg:grid-cols-2">
          <Card id="about" className="bg-gray-900 border border-pink-500/20 shadow shadow-pink-500/10">
            <CardContent className="p-6">
              <h2 className="text-pink-400 text-xl font-mono mb-4">About me</h2>
              <p className="text-gray-300 text-sm">
                Senior Frontend developer with 6+ years of experience. Expert in React, TypeScript, and JavaScript with end-to-end product experience across startups and fintech.
              </p>
            </CardContent>
          </Card>

          {/* Contacts */}
          <Card id="contacts" className="bg-gray-900 border border-blue-500/20 shadow shadow-blue-500/10">
            <CardContent className="p-6">
              <h2 className="text-blue-400 text-xl font-mono mb-4">Contacts</h2>
              <ul className="text-sm text-gray-300 space-y-2">
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-blue-400" />
                  Moscow, Russia
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-blue-400" />
                  <a href="mailto:a.s.nekrassov@gmail.com" className="underline hover:text-blue-300">a.s.nekrassov@gmail.com</a>
                </li>
                <li className="flex items-center gap-2">
                  <Linkedin className="w-4 h-4 text-blue-400" />
                  <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="underline hover:text-blue-300">linkedin.com</a>
                </li>
                <li className="flex items-center gap-2">
                  <Github className="w-4 h-4 text-blue-400" />
                  <a href="https://github.com" target="_blank" rel="noreferrer" className="underline hover:text-blue-300">github.com</a>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card id="tech" className="bg-gray-900 border border-yellow-500/20 shadow shadow-yellow-500/10 lg:col-span-2">
            <CardContent className="p-6">
              <h2 className="text-yellow-300 text-xl font-mono mb-4">Tech stack</h2>
              <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                <li>React, Next.js, TypeScript, JavaScript (ESNext)</li>
                <li>State/Data: React Context, MobX, TanStack Query</li>
                <li>Maps/Geo: Overpass Turbo, 2GIS, ArcGIS</li>
                <li>Rendering: Canvas API, SVG API</li>
                <li>UI/UX: Material-UI, Shadcn UI, Tailwind, Framer Motion, Figma, Storybook</li>
                <li>Backend/Infra: Node.js, Docker, MinIO, Postgres</li>
                <li>Auth/Security: Keycloak, CSP, Sanitizer, security headers</li>
                <li>Tooling: Jest, Jira, Confluence, GitLab/Bitbucket, CI/CD</li>
              </ul>
            </CardContent>
          </Card>

          {/* Experience (merged) */}
          <Card id="experience" className="bg-gray-900 border border-purple-500/20 shadow shadow-purple-500/10 lg:col-span-2">
            <CardContent className="p-6">
              <h2 className="text-purple-400 text-xl font-mono mb-4 flex items-center gap-2"><Briefcase className="w-4 h-4" /> Experience</h2>
              <div className="grid gap-6 text-gray-300 text-sm">
                <section>
                  <div className="mb-2 font-semibold">Frontend Developer — MORIZO-DIGITAL • Sep 2022 — Present</div>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Built data clustering algorithm — 3× faster map loading.</li>
                    <li>Implemented heatmap rendering algorithm attracting new stakeholders.</li>
                    <li>Developed custom maps API enabling unique project modules.</li>
                    <li>Authored a lightweight state manager on React Context, reducing bundle size.</li>
                    <li>Implemented XSS protections (Sanitizer, CSP, safe HTML, blocked inline events, security headers).</li>
                    <li>Wrote 400+ unit/integration tests, +26% coverage during refactor.</li>
                    <li className="opacity-80">Stack: React, Next.js, TanStack Query, Overpass Turbo, 2GIS, Canvas/SVG API, MUI, MobX, Node.js, ArcGIS, Context API, Jira, Confluence, Bitbucket, GitLab, Docker, MinIO, Postgres, Jest, Keycloak.</li>
                  </ul>
                </section>
                <section>
                  <div className="mb-2 font-semibold">Frontend Developer — Exact Pro • Sep 2020 — Aug 2022</div>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Split monolith into React microfrontends — improved scalability.</li>
                    <li>Introduced Feature-Sliced Design architecture — reduced coupling.</li>
                    <li>Created UI Kit on top of MUI — faster reuse of components/widgets.</li>
                    <li>Wrote 200+ unit/integration tests, +15% coverage during refactor.</li>
                    <li className="opacity-80">Stack: React, MobX, MUI, Node.js, Postgres, Jest, Jira, Confluence, GitLab, Keycloak.</li>
                  </ul>
                </section>
                <section>
                  <div className="mb-2 font-semibold">Fullstack Developer — MMT R-Technologies • Jun 2018 — Jun 2020</div>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Built the complete frontend: main site, e‑commerce, and admin panel.</li>
                    <li>Developed user geolocation algorithm — 99% location accuracy.</li>
                    <li>300+ unit/integration tests across frontend and backend.</li>
                    <li className="opacity-80">Stack: React, Vanilla JS, .NET Core, Razor Pages, Postgres, Jira, Confluence, GitLab, Google OAuth, Facebook OAuth.</li>
                  </ul>
                </section>
              </div>
            </CardContent>
          </Card>

          {/* Education */}
          <Card id="education" className="bg-gray-900 border border-amber-500/20 shadow shadow-amber-500/10">
            <CardContent className="p-6">
              <h2 className="text-amber-400 text-xl font-mono mb-2 flex items-center gap-2"><GraduationCap className="w-4 h-4" /> Education</h2>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>
                  <div className="font-semibold">MSc — Information Systems and Technologies</div>
                  <div>Kostroma State University, 2018 — 2020</div>
                </li>
                <li>
                  <div className="font-semibold">BSc — Information Systems and Technologies</div>
                  <div>Kostroma State University, 2014 — 2018</div>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Activities */}
          <Card id="activities" className="bg-gray-900 border border-cyan-500/20 shadow shadow-cyan-500/10">
            <CardContent className="p-6">
              <h2 className="text-cyan-400 text-xl font-mono mb-2 flex items-center gap-2"><Activity className="w-4 h-4" /> Activities</h2>
              <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                <li>Mentored new engineers to accelerate onboarding.</li>
                <li>Conducted R&D with cross‑functional experts for new directions.</li>
                <li>Participated in architectural decisions and code reviews.</li>
                <li>Interviewed 20+ candidates.</li>
                <li>Hackathons participant — team placed 2nd three times (LCT).</li>
              </ul>
            </CardContent>
          </Card>
        </main>

        {/* Modal */}
        <AnimatePresence>
          {showModal && (
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
                  <button onClick={() => setShowModal(false)} className="text-gray-400 hover:text-white">
                    <X className="w-5 h-5" />
                  </button>
                </div>
                {submitted ? (
                  <p className="text-green-400 font-mono">Message sent! Thank you ✨</p>
                ) : (
                  <form
                    action="https://formspree.io/f/mwkgenzy"
                    method="POST"
                    onSubmit={() => setSubmitted(true)}
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
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.footer
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center space-y-4"
        >
          <div className="flex flex-col items-center gap-4">
            <Button
              variant="outline"
              onClick={() => setShowModal(true)}
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
              <a href="/resume.pdf" download>
                <FileDown className="w-4 h-4" />
                Download resume (PDF)
              </a>
            </Button>
          </div>
        </motion.footer>
      </div>
    </div>
  );
}

function RootWithAssistant() {
  return (
    <>
      <CyberpunkPortfolio />
      <Assistant avatarSrc="/lucy.png" />
    </>
  );
}

export default RootWithAssistant;
