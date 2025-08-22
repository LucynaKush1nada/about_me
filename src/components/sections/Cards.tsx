import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Linkedin, Github, Briefcase, GraduationCap, Activity } from "lucide-react";

export function AboutCard() {
  return (
    <Card id="about" className="bg-gray-900 border border-pink-500/20 shadow shadow-pink-500/10">
      <CardContent className="p-6">
        <h2 className="text-pink-400 text-xl font-mono mb-4">About me</h2>
        <p className="text-gray-300 text-sm">
          Senior Frontend developer with 6+ years of experience. Expert in React, TypeScript, and JavaScript with end-to-end product experience across startups and fintech.
        </p>
      </CardContent>
    </Card>
  );
}

export function ContactsCard() {
  return (
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
  );
}

export function TechCard() {
  return (
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
  );
}

export function ExperienceCard() {
  return (
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
  );
}

export function EducationCard() {
  return (
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
  );
}

export function ActivitiesCard() {
  return (
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
  );
}

export default function CardsGrid() {
  return (
    <main className="grid gap-6 lg:grid-cols-2">
      <AboutCard />
      <ContactsCard />
      <TechCard />
      <ExperienceCard />
      <EducationCard />
      <ActivitiesCard />
    </main>
  );
}
