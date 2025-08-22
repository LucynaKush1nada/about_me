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
  const base = (import.meta as any).env?.BASE_URL ?? "/";
  const entries = [
    {
      company: "MORIZO-DIGITAL",
      role: "Frontend Developer",
      dates: "Sep 2022 — Sep 2025",
      logo: `${base}logos/morizo.png`,
      tags: ["React", "Next.js", "Maps", "XSS", "Tests"],
      bullets: [
        "Built data clustering algorithm — 3× faster map loading.",
        "Implemented heatmap rendering algorithm attracting new stakeholders.",
        "Developed custom maps API enabling unique project modules.",
        "Authored a lightweight state manager on React Context, reducing bundle size.",
        "Implemented XSS protections (Sanitizer, CSP, safe HTML, blocked inline events, security headers).",
        "Wrote 400+ unit/integration tests, +26% coverage during refactor.",
        "Stack: React, Next.js, TanStack Query, Overpass Turbo, 2GIS, Canvas/SVG API, MUI, MobX, Node.js, ArcGIS, Context API, Jira, Confluence, Bitbucket, GitLab, Docker, MinIO, Postgres, Jest, Keycloak.",
      ],
    },
    {
      company: "Exact Pro",
      role: "Frontend Developer",
      dates: "Sep 2020 — Aug 2022",
      logo: `${base}logos/exactpro.png`,
      tags: ["Microfrontends", "FSD", "MUI", "Tests"],
      bullets: [
        "Split monolith into React microfrontends — improved scalability.",
        "Introduced Feature-Sliced Design architecture — reduced coupling.",
        "Created UI Kit on top of MUI — faster reuse of components/widgets.",
        "Wrote 200+ unit/integration tests, +15% coverage during refactor.",
        "Stack: React, MobX, MUI, Node.js, Postgres, Jest, Jira, Confluence, GitLab, Keycloak.",
      ],
    },
    {
      company: "MMTR Technologies",
      role: "Fullstack Developer",
      dates: "Jun 2018 — Jun 2020",
      logo: `${base}logos/mmt.png`,
      tags: ["React", ".NET", "Razor", "Postgres"],
      bullets: [
        "Built the complete frontend: main site, e‑commerce, and admin panel.",
        "Developed user geolocation algorithm — 99% location accuracy.",
        "300+ unit/integration tests across frontend and backend.",
        "Stack: React, Vanilla JS, .NET Core, Razor Pages, Postgres, Jira, Confluence, GitLab, Google OAuth, Facebook OAuth.",
      ],
    },
  ];
  return (
    <Card id="experience" className="bg-gray-900 border border-purple-500/20 shadow shadow-purple-500/10 lg:col-span-2">
      <CardContent className="p-6">
        <h2 className="text-purple-400 text-xl font-mono mb-4 flex items-center gap-2"><Briefcase className="w-4 h-4" /> Experience</h2>
        <ol className="relative border-s border-purple-500/30 pl-6 space-y-6">
          {entries.map((e) => (
            <li key={e.company} className="relative">
              <div className="absolute -left-3 top-0 size-6 rounded-full border border-purple-400/50 bg-gray-900 grid place-items-center overflow-hidden">
                <img src={e.logo} alt={e.company} className="size-5 object-contain" />
              </div>
              <div className="text-gray-300 text-sm">
                <div className="font-semibold">{e.role} — {e.company}</div>
                <div className="text-gray-400 text-xs mb-1">{e.dates}</div>
                <div className="flex flex-wrap gap-1 mt-1 mb-2">
                  {e.tags.map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded-full text-xs bg-purple-500/10 text-purple-300 border border-purple-500/30">{t}</span>
                  ))}
                </div>
                <ul className="list-disc list-inside space-y-1">
                  {e.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
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

// New: Timeline
export function TimelineCard() {
  return null;
}

// New: Achievements
export function AchievementsCard() {
  const items = [
    { k: "3×", v: "Faster map loading (data clustering)" },
    { k: "+26%", v: "Test coverage increase (400+ tests)" },
    { k: "+15%", v: "Coverage increase (200+ tests)" },
    { k: "99%", v: "Location accuracy (geolocation algorithm)" },
  ];
  return (
    <Card id="achievements" className="bg-gray-900 border border-green-500/20 shadow shadow-green-500/10">
      <CardContent className="p-6">
        <h2 className="text-green-400 text-xl font-mono mb-4">Achievements</h2>
        <ul className="text-gray-300 text-sm space-y-2">
          {items.map((i) => (
            <li key={i.k} className="flex items-baseline gap-3">
              <span className="text-2xl font-mono text-green-400 shrink-0">{i.k}</span>
              <span>{i.v}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

// New: Skills Matrix
export function SkillsMatrixCard() {
  const groups: { title: string; skills: string[] }[] = [
    { title: "Core", skills: ["React", "TypeScript", "JavaScript"] },
    { title: "State/Data", skills: ["React Context", "MobX", "TanStack Query"] },
    { title: "UI/UX", skills: ["Material‑UI", "Shadcn UI", "Tailwind", "Framer Motion", "Storybook", "Figma"] },
    { title: "Maps/Geo", skills: ["Overpass Turbo", "2GIS", "ArcGIS", "Canvas API", "SVG API"] },
    { title: "Backend/Infra", skills: ["Node.js", "Docker", "MinIO", "Postgres"] },
    { title: "Auth/Security", skills: ["Keycloak", "CSP", "Sanitizer", "Security headers"] },
    { title: "Tooling", skills: ["Jest", "Jira", "Confluence", "GitLab", "Bitbucket", "CI/CD"] },
  ];
  return (
    <Card id="skills" className="bg-gray-900 border border-cyan-500/20 shadow shadow-cyan-500/10">
      <CardContent className="p-6">
        <h2 className="text-cyan-400 text-xl font-mono mb-4">Skills Matrix</h2>
        <div className="grid gap-4">
          {groups.map((g) => (
            <div key={g.title}>
              <div className="text-gray-200 font-semibold mb-2">{g.title}</div>
              <div className="flex flex-wrap gap-2">
                {g.skills.map((s) => (
                  <span key={s} className="px-2 py-0.5 rounded-full text-xs bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
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
      <TimelineCard />
      <AchievementsCard />
      <SkillsMatrixCard />
      <ExperienceCard />
      <EducationCard />
      <ActivitiesCard />
    </main>
  );
}
