import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, ExternalLink, Mail, Menu, X } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { image } from "framer-motion/client";

const professionalProjects = [
  {
    slug: "killer-klowns-from-outer-space",
    title: "Killer Klowns From Outer Space: The Game",
    image: "/images/killerklowns.png",
    studioLine: "Teravision Games, IllFonic",
    cardMeta: "Teravision Games, IllFonic · 2024",
    platforms: "Xbox Series X/S, PlayStation 5, Steam",
    engine: "Unreal Engine",
    engineicon: "/icons/unrealengine.svg",
    genre: "Asymmetrical horror, 7v3 PvP, Multiplayer",
    category: "Professional Project",
    year: "2024",
    shortDescription:
      "Asymmetrical horror game built around 7v3 PvP multiplayer, gameplay systems, GAS, audio integration, AI, and network optimization.",
    overview:
      "Killer Klowns from Outer Space: The Game is an asymmetrical multiplayer horror based on the iconic ‘80s film. In the battle between Killer Klowns and citizens of Crescent Cove.",
    tech: "Unreal Engine, C++, GAS, Multiplayer, FMOD, AI, Network Optimization, Gameplay",
    video: "https://www.youtube.com/watch?v=1LQxnkXpm-A",
    role: "Unreal Programmer, Senior Gameplay Programmer",
    learnings: [
      "Learned how multiplayer features work in Unreal Engine and how to implement them in production systems.",
      "Built GAS systems from scratch to create different character abilities.",
      "Implemented game sounds using FMOD and created a dynamic music system.",
    ],
    secondaryTitle: "Developed by",
    secondaryType: "companies",
    secondaryItems: ["Teravision Games", "IllFonic"],
    galleryCount: 4,
    gallerySrc: "images/",
    fileExtensions: ["jpg", "jpg"],
    tags: ["Unreal Engine", "C++", "GAS", "Multiplayer", "FMOD", "AI"],
  },
  {
    slug: "orcs-must-die-by-the-blade",
    title: "Orcs Must Die: By the Blade",
    image: "/images/orcs.png",
    studioLine: "Teravision Games, Robot Entertainment, Meta",
    cardMeta: "Teravision Games, Robot Entertainment, Meta · 2026",
    platforms: "Meta Quest 2/3/3S",
    engine: "Unreal Engine",
    engineicon: "/icons/unrealengine.svg",
    genre: "Adventure • Role playing • Action • Co-op • VR",
    category: "Professional Project",
    year: "2026",
    shortDescription:
      "VR action and trap-based defense project focused on gameplay, AI decision-making, multiplayer, and CPU/GPU/network optimization.",
    overview:
      "Orcs Must Die: By The Blade reimagines the franchise’s signature blend of action, strategy, and trap-based defense through an immersive virtual reality experience. The game brings players closer to the chaos of battle, combining fast-paced combat with tactical defense mechanics in a VR format.",
    tech: "Unreal Engine, C++, GAS, Multiplayer, AI, GPU, CPU and Network Optimization, Gameplay",
    video: "https://www.youtube.com/embed/QqQwSTV-674",
    role: "Senior Gameplay and AI Programmer",
    learnings: [
      "Prototyped and developed AI decision-making systems to create believable and dynamic character behaviors.",
      "Collaborated with designers and gameplay programmers to ensure AI integrated seamlessly into core mechanics.",
      "Drove performance optimization of AI and gameplay systems, including replication improvements, latency management, and trace analysis.",
      "Mentored teammates by sharing best practices in Unreal Engine and C++, performing code reviews, and supporting maintainable codebases.",
    ],
    secondaryTitle: "Developed by",
    secondaryType: "companies",
    secondaryItems: ["Teravision Games", "Robot Entertainment", "Meta"],
    galleryCount: 4,
    gallerySrc: "images/",
    fileExtensions: ["jpg", "jpg"],
    tags: ["Unreal Engine", "C++", "GAS", "Multiplayer", "AI", "Optimization"],
  },
];

const personalProjects = [
  {
    slug: "cannon-spike-like",
    title: "Cannon Spike Like",
    studioLine: "Solo Project",
    cardMeta: "Solo Project · 2026",
    platforms: "PC",
    engine: "Unreal Engine",
    engineicon: "/icons/unrealengine.svg",
    genre: "Singleplayer, Multiplayer, Co-op, PvE, Multi-directional shooter",
    category: "Personal Project",
    year: "2026",
    shortDescription:
      "Modern reinterpretation of Cannon Spike built in Unreal Engine with AngelScript, multiplayer support, AI, and dynamic camera systems.",
    overview:
      "A modern reinterpretation of Cannon Spike, developed in Unreal Engine using the AngelScript framework, combining the fast-paced spirit of the original with updated gameplay mechanics.",
    tech: "Unreal Engine, AngelScript, Multiplayer, AI",
    video: null,
    role: "Game Developer - Game Designer",
    learnings: [
      "Accelerated gameplay mechanic development using AngelScript.",
      "Implemented multiplayer functionality to support competitive gameplay.",
      "Designed and developed a dynamic camera system to enhance combat readability and player movement.",
      "Usage of AngelScript plugin that allows to use scripted classes to create and implemente features in Unreal Engine"
    ],
    secondaryTitle: "Systems",
    secondaryType: "list",
    secondaryItems: ["Dynamic camera system", "Multiplayer connection"],
    galleryCount: 4,
    gallerySrc: "images/",
    fileExtensions: ["jpg", "jpg"],
    tags: ["Unreal Engine", "AngelScript", "AI", "Multiplayer"],
  },
  {
    slug: "blaster-multiplayer",
    title: "Blaster Multiplayer",
    studioLine: "Solo Project",
    cardMeta: "Solo Project · 2024",
    platforms: "PC",
    engine: "Unreal Engine",
    engineicon: "/icons/unrealengine.svg",
    genre: "Multiplayer, TPS, PvP",
    category: "Personal Project",
    year: "2024",
    shortDescription:
      "Third-person multiplayer shooter focused on weapon pickups, online sessions, matchmaking, and replication systems.",
    overview:
      "A third-person shooter centered on weapon variety and pickups, where players can find and use different firearms distributed throughout the map. The main objective is to eliminate opposing players before time runs out, delivering a fast-paced and competitive gameplay experience.",
    tech: "Unreal Engine, Networking, Multiplayer",
    video: null,
    role: "Game Developer - Game Designer",
    learnings: [
      "Created my own subsystem to manage online sessions.",
      "Programmed multiplayer matchmaking in Unreal Engine.",
      "Optimized network code by minimizing bandwidth and maximizing performance.",
      "Created a plugin to convert Unreal Engine projects to multiplayer.",
      "Applied lag compensation techniques including client-side prediction and server-side rewind.",
      "Learned the Unreal Engine Online Subsystem to support multiplayer using different online services.",
    ],
    secondaryTitle: "Systems",
    secondaryType: "list",
    secondaryItems: ["Multiplayer character movement and gunplay", "Match control system", "Pickup system"],
    galleryCount: 4,
    gallerySrc: "images/",
    fileExtensions: ["jpg", "jpg"],
    tags: ["Unreal Engine", "Networking", "Multiplayer", "TPS", "PvP"],
  },
  {
    slug: "box-shooter-roller-madness",
    title: "Box Shooter / Roller Madness",
    studioLine: "Bootcamp",
    cardMeta: "Bootcamp · 2021",
    subtitle:
      "Game Developer bootcamp project set developed in Colombia, centered on prototyping simple but engaging gameplay mechanics.",
    platforms: "PC",
    engine: "Unity",
    engineicon: "/icons/unity.svg",
    genre: "Singleplayer",
    category: "Personal Project",
    year: "2021",
    shortDescription:
      "Arcade-style bootcamp projects focused on quick prototyping, gameplay polish, AI behavior, and player feedback.",
    overview:
      "Arcade-style games built around simple, fast-paced objectives. The first focuses on shooting boxes of different colors to gain buffs and debuffs while aiming for the highest possible score. The second centers on collecting coins as quickly as possible while avoiding hostile cubes, encouraging speedrun-style gameplay.",
    tech: "Unity, C#",
    video: null,
    role: "Game Developer - Game Designer",
    learnings: [
      "Gained initial experience working with AI behavior systems in Unity.",
      "Designed simple but engaging gameplay mechanics under short development timelines.",
      "Improved the overall look and feel of games through polish, iteration, and player-focused refinement.",
    ],
    secondaryTitle: "Systems",
    secondaryType: "list",
    secondaryItems: ["AI behavior", "Gunplay", "Character movement", "Pickup system"],
    galleryCount: 4,
    gallerySrc: "images/",
    fileExtensions: ["jpg", "jpg"],
    tags: ["Unity", "C#", "Arcade", "AI", "Prototype"],
  },
  {
    slug: "project-mfg",
    title: "Project W.E.S.T.",
    studioLine: "Solo Project",
    cardMeta: "Solo Project · 2020",
    platforms: "PC",
    engine: "Unreal Engine",
    engineicon: "/icons/unrealengine.svg",
    genre: "Singleplayer, TPS",
    category: "Personal Project",
    year: "2020",
    shortDescription:
      "First Unreal Engine project centered on gameplay mechanics, AI, UI, animation, audio, and multidisciplinary development.",
    overview:
      "First project developed in Unreal Engine, centered on gameplay mechanics and built through a multidisciplinary approach across key areas of the engine, including AI, UI, animation, audio, and gameplay systems, while combining C++ implementation with game design principles.",
    tech: "Unreal Engine, C++",
    video: null,
    role: "Game Developer - Game Designer",
    learnings: [
      "Continued learning Unreal Engine with an initial exploration of the shooter genre.",
      "Created and implemented core gameplay mechanics.",
      "Received guidance and mentorship from experienced game industry professionals to develop mechanics aligned with current industry standards.",
    ],
    secondaryTitle: "Systems",
    secondaryType: "list",
    secondaryItems: ["Weapons", "Mission system", "Save system", "Enemies AI and behavior", "Audio and UI"],
    galleryCount: 4,
    gallerySrc: "images/",
    fileExtensions: ["jpg", "jpg"],
    tags: ["Unreal Engine", "C++", "TPS", "Gameplay"],
  },
  {
    slug: "urban-warzone",
    title: "Urban Warzone",
    image: "/images/urbanwarzone.png",
    studioLine: "Solo Project",
    cardMeta: "Solo Project · 2020",
    platforms: "PC",
    engine: "Unity",
    engineicon: "/icons/unity.svg",
    genre: "Multiplayer, FPS, PvP",
    category: "Personal Project",
    year: "2020",
    shortDescription:
      "Unity FPS multiplayer project using Photon, with lobby creation and a simple PvP networking experience.",
    overview:
      "Unity project focused on first-person shooter development using Photon, featuring lobby creation and a simple multiplayer experience.",
    tech: "Unity, C#",
    video: null,
    role: "Game Developer - Game Designer",
    learnings: [
      "Built my first multiplayer game in Unity using Photon.",
      "Developed foundational knowledge of networking inside a first-person shooter project.",
      "Designed and implemented lobby systems to support a simple multiplayer experience.",
    ],
    secondaryTitle: "Systems",
    secondaryType: "list",
    secondaryItems: ["Lobby system", "FPS character and weapons", "Multiplayer replication functionality"],
    galleryCount: 4,
    gallerySrc: "images/",
    fileExtensions: ["jpg", "jpg"],
    tags: ["Unity", "C#", "Photon", "FPS", "Multiplayer"],
  },
  {
    slug: "new-moon",
    title: "New Moon",
    image: "/images/NewMoon/newmoon.png",
    studioLine: "Solo Project",
    cardMeta: "Solo Project · 2019",
    platforms: "PC",
    engine: "Unity",
    engineicon: "/icons/unity.svg",
    genre: "Singleplayer, RPG, Turn-based combat",
    category: "Personal Project",
    year: "2019",
    shortDescription:
      "Early RPG project focused on learning turn-based combat, inventory, movement, UI, and fundamental game programming systems.",
    overview:
      "First project I worked on in videogames, focused on learning the basics of game programming by creating systems like turn-based combat, inventory, character movement, UI, and core components.",
    tech: "Unity, C#, Photoshop",
    video: "videos/GameplayNewMoon.mp4",
    role: "Game Developer - Game Designer",
    learnings: [
      "Developed a game from the ground up, covering its concept, structure, and execution.",
      "Built a strong foundation in programming logic for game development.",
      "Understood how core gameplay systems are designed and implemented.",
    ],
    secondaryTitle: "Systems",
    secondaryType: "list",
    secondaryItems: ["Combat systems", "Gameplay flow", "Player progression", "NPC Dialogue interactions", "Quest progression"],
    galleryCount: 4,
    gallerySrc: "images/NewMoon/",
    fileExtensions: ["gif", "gif", "gif", "gif"],
    tags: ["Unity", "C#", "RPG", "Turn-based", "UI"],
  },
];

function getProjectFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get("project");
}

function setProjectInUrl(slug, setCurrentProjectSlug, options = {}) {
  const { scrollToTop = true } = options;
  const url = new URL(window.location.href);

  if (slug) {
    url.searchParams.set("project", slug);
  } else {
    url.searchParams.delete("project");
    url.hash = "";
  }

  window.history.pushState({}, "", `${url.pathname}${url.search}${url.hash}`);
  setCurrentProjectSlug(slug);

  if (scrollToTop) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

function ProjectCard({ project, index, onOpen }) {
  return (
    <motion.button
      type="button"
      onClick={() => onOpen(project.slug)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay: index * 0.05 }}
      className="group block w-full text-left"
    >
      <div className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-700 hover:shadow-2xl hover:shadow-black/30">
        <img src={project.image} alt="project" className="aspect-[16/9] w-full bg-gradient-to-br" />
        <div className="p-6 pb-4 relative">
          <div className="mb-4 flex items-start justify-between gap-3">
            <div>
              <p className="mb-2 text-xs uppercase tracking-[0.22em] text-zinc-500">
                {project.cardMeta || `${project.category} · ${project.year}`}
              </p>
              <h3 className="text-xl font-semibold tracking-tight text-white">
                {project.title}
              </h3>
            </div>
            <ArrowUpRight className="h-5 w-5 shrink-0 text-zinc-500 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white" />
          </div>
          <p className="mb-5 text-sm leading-6 text-zinc-400">{project.shortDescription}</p>

          <img src={project.engineicon} alt="engine" className="absolute bottom-4 right-4 w-7 h-7 opacity-70 hover:opacity-100 transition" />

          <div className="flex flex-wrap gap-2">
            {project.genre
              .split(/,|•/)
              .map((item) => item.trim())
              .filter(Boolean)
              .map((item) => (
                <span
                  key={`${project.slug}-${item}`}
                  className="rounded-full border border-zinc-800 px-3 py-1 text-xs text-zinc-400"
                >
                  {item}
                </span>
              ))}
          </div>
        </div>
      </div>
    </motion.button>
  );
}

function CompanyTile({ name }) {
  return (
    <img src={`images/${name}.png`} alt={`${name}`} className="aspect-[16/9] h-full w-full object-cover" />
  );
}

function GalleryTile({ projectTitle, index, projectSlug, gallerySrc, fileExtension }) {
  return (
    <div className="overflow-hidden rounded-[1.5rem] border border-zinc-800 bg-black">
      <div className="w-full">
        <img src={`${gallerySrc}${projectSlug}${index + 1}.${fileExtension}`} alt={`${projectTitle} shot ${index + 1}`} className="h-full w-full object-cover" />
      </div>
      <div className="border-t border-zinc-800 px-4 py-3 text-xs uppercase tracking-[0.18em] text-zinc-500">
        {projectTitle} · Shot {index + 1}
      </div>
    </div>
  );
}

function HomePage({ openProject, menuOpen, setMenuOpen }) {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="sticky top-0 z-50 border-b border-zinc-800 bg-black/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <a href="#home" className="text-sm font-semibold tracking-[0.18em] uppercase">
            Mauricio Spitta
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            <a href="#projects" className="text-sm text-zinc-400 transition hover:text-white">
              Projects
            </a>
            <a href="#about" className="text-sm text-zinc-400 transition hover:text-white">
              About
            </a>
            <a href="#contact" className="text-sm text-zinc-400 transition hover:text-white">
              Contact
            </a>
          </nav>

          <button
            className="inline-flex md:hidden"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-zinc-800 px-6 py-4 md:hidden">
            <div className="flex flex-col gap-4">
              <a href="#projects" onClick={() => setMenuOpen(false)} className="text-sm text-zinc-400">
                Projects
              </a>
              <a href="#about" onClick={() => setMenuOpen(false)} className="text-sm text-zinc-400">
                About
              </a>
              <a href="#contact" onClick={() => setMenuOpen(false)} className="text-sm text-zinc-400">
                Contact
              </a>
            </div>
          </div>
        )}
      </header>

      <main>
        <section id="home" className="mx-auto max-w-7xl px-6 pb-20 pt-20 lg:px-10 lg:pb-28 lg:pt-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="grid gap-10 lg:grid-cols-[1.45fr_0.85fr] lg:items-end"
          >
            <div>
              <p className="mb-5 text-xs uppercase tracking-[0.28em] text-zinc-500">
                Game Developer · Gameplay · AI
              </p>
              <h1 className="max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
                MAURICIO SPITTA
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-400">
                I want to keep telling stories and creating fun and great experiences. <br/><br/>
                I care about making games that players can connect with, whether through the way they play, the worlds they explore, or the emotions they leave behind. For me, game development is about shaping interactive experiences that stay with people.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#projects" className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3 text-sm font-medium text-black transition hover:opacity-90">
                  See projects
                </a>
                <a href="#contact" className="inline-flex items-center justify-center rounded-2xl border border-zinc-700 px-6 py-3 text-sm font-medium text-white transition hover:bg-zinc-900">
                  Get in touch
                </a>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {[
                ["2", "Shipped videogames"],
                ["Gameplay and AI", "Driven systems"],
                ["Unreal Engine, C++, AngelScript", "Core stack"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-3xl border border-zinc-800 bg-zinc-950 p-5"
                >
                  <p className="text-2xl font-semibold text-white">{value}</p>
                  <p className="mt-2 text-sm leading-6 text-zinc-400">{label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        <section id="projects" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="mb-10">
            <p className="mb-3 text-xs uppercase tracking-[0.28em] text-zinc-500">Selected work</p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Professional projects</h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-zinc-400">
              Projects developed with multiple interdisciplinary teams, focused on Co-op and PvP multiplayer, mentorship, network, CPU and GPU optimization.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-2">
            {professionalProjects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} onOpen={openProject} />
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="mb-10">
            <p className="mb-3 text-xs uppercase tracking-[0.28em] text-zinc-500">Independent work</p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Personal projects</h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-zinc-400">
              Personal projects where I explored gameplay, multiplayer, AI, progression systems, and rapid prototyping through different engines and genres.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {personalProjects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} onOpen={openProject} />
            ))}
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.28em] text-zinc-500">About</p>
              <div className="overflow-hidden rounded-[2rem] border border-zinc-800 bg-zinc-950">
               <img src="/images/me.jpg" alt="Profile" className="aspect-[4/5] w-full object-cover" />
              </div>
            </div>

            <div className="flex h-full items-center">
              <div className="space-y-5 text-base leading-8 text-zinc-400">
                <p>
                I'm a Senior AI Programmer specialized in Unreal Engine and C++, focused on gameplay systems and artificial intelligence for video games. I have worked on multiple titles, developing AI systems, multiplayer mechanics, and optimization tools.
              </p>
              <p>
                I am driven by creating innovative player experiences and solving complex technical challenges. My career goal is to continue growing in the industry and contribute to building dynamic, impactful games.
              </p>
              </div>
            </div>
          </div>
        </section>

 <section id="contact" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="rounded-[2rem] border border-zinc-800 bg-zinc-950 p-8 sm:p-10">
            <p className="mb-3 text-xs uppercase tracking-[0.28em] text-zinc-500">Contact</p>
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
              <div className="flex h-full flex-col justify-center text-left">
                <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Let’s build something memorable.
                </h2>
                <p className="mt-4 text-base leading-7 text-zinc-400">
                  Open to gameplay, AI, multiplayer, and technical design opportunities in games.
                </p>
              </div>

              <div className="grid gap-3 text-sm">
                <a href="mailto:jkm9538@hotmail.com" className="flex items-center gap-3 rounded-2xl border border-zinc-800 px-4 py-3 transition hover:bg-black">
                  <Mail className="h-4 w-4" /> jkm9538@hotmail.com
                </a>
                <a href="https://www.linkedin.com/in/mauricio-spitta/" className="flex items-center gap-3 rounded-2xl border border-zinc-800 px-4 py-3 transition hover:bg-black">
                  <FaLinkedinIn className="h-4 w-4" /> LinkedIn
                </a>
                <a href="https://github.com/hardguns" className="flex items-center gap-3 rounded-2xl border border-zinc-800 px-4 py-3 transition hover:bg-black">
                  <FaGithub className="h-4 w-4" /> GitHub
                </a>
                <a href="/files/CV - Mauricio Spitta.pdf" className="flex items-center gap-3 rounded-2xl border border-zinc-800 px-4 py-3 transition hover:bg-black" download>
                  <ExternalLink className="h-4 w-4" /> Download CV
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-10 text-sm text-zinc-500 lg:flex-row lg:items-center lg:justify-between lg:px-10">
        <p>© 2026 · Mauricio Spitta</p>
        <div className="flex items-center gap-4">
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#about" className="hover:text-white">About</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
      </footer>
    </div>
  );
}

function ProjectDetailPage({ project, goBack }) {
  if (!project) {
    return (
      <div className="min-h-screen bg-black px-6 py-20 text-white lg:px-10">
        <div className="mx-auto max-w-4xl">
          <button
            type="button"
            onClick={goBack}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-zinc-700 px-4 py-2 text-sm transition hover:bg-zinc-900"
          >
            <ArrowLeft className="h-4 w-4" /> Back to projects
          </button>
          <h1 className="text-4xl font-semibold tracking-tight">Project not found</h1>
          <p className="mt-4 text-zinc-400">This project page does not exist yet.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="border-b border-zinc-800 bg-black/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <button
            type="button"
            onClick={goBack}
            className="inline-flex items-center gap-2 text-sm text-zinc-400 transition hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" /> Back
          </button>
          <span className="text-sm font-semibold tracking-[0.18em] uppercase">{project.category}</span>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start"
        >
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.28em] text-zinc-500">
              {project.year} · {project.category}
            </p>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              {project.title}
            </h1>
            <p className="mt-4 text-sm text-zinc-400">{project.studioLine}</p>
            {project.subtitle ? <p className="mt-3 text-sm text-zinc-500">{project.subtitle}</p> : null}
            <p className="mt-6 max-w-3xl text-base leading-8 text-zinc-400">{project.overview}</p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-4">
                <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">Platforms</p>
                <p className="mt-2 text-sm leading-7 text-zinc-300">{project.platforms}</p>
              </div>
              <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-4">
                <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">Genre</p>
                <p className="mt-2 text-sm leading-7 text-zinc-300">{project.genre}</p>
              </div>
            </div>

            <div className="mt-4 rounded-2xl border border-zinc-800 bg-zinc-950 p-4">
              <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">Tech</p>
              <p className="mt-2 text-sm leading-7 text-zinc-300">{project.tech}</p>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-zinc-800 bg-zinc-950">
            {project.video ? (
              <div className="aspect-video w-full">
                <iframe
                  className="h-full w-full"
                  src={project.video}
                  title={`${project.title} video`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            ) : (
              <div className="aspect-video w-full bg-gradient-to-br from-zinc-900 via-zinc-950 to-black" />
            )}
            <div className="flex items-center justify-between border-t border-zinc-800 px-5 py-4 text-sm text-zinc-400">
              <span>Project video</span>
              <span>{project.video ? "Embedded" : "Placeholder"}</span>
            </div>
          </div>
        </motion.div>

        <section className="mt-16 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] border border-zinc-800 bg-zinc-950 p-8">
            <div className="space-y-8">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">Role</p>
                <p className="mt-2 text-sm leading-7 text-zinc-300">{project.role}</p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">Key Learnings</p>
                <div className="mt-3 space-y-3 text-sm leading-7 text-zinc-300">
                  {project.learnings.map((item) => (
                    <p key={item}>• {item}</p>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">{project.secondaryTitle}</p>
                {project.secondaryType === "companies" ? (
                  <div className={`mt-4 grid gap-4 ${project.secondaryItems.length === 2 ? "sm:grid-cols-2" : "sm:grid-cols-3"}`}>
                    {project.secondaryItems.map((item) => (
                      <CompanyTile key={item} name={item} />
                    ))}
                  </div>
                ) : (
                  <div className="mt-3 space-y-3 text-sm leading-7 text-zinc-300">
                    {project.secondaryItems.map((item) => (
                      <p key={item}>• {item}</p>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-zinc-800 bg-zinc-950 p-8">
            <div className="mb-6 flex items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-zinc-500">Project gallery</p>
                <p className="mt-2 text-sm leading-7 text-zinc-400">
                  Replace these placeholders with screenshots, captures, diagrams, or production visuals for the project.
                </p>
              </div>
              <span className="text-xs uppercase tracking-[0.22em] text-zinc-500">{project.galleryCount} images</span>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {Array.from({ length: project.galleryCount }).map((_, index) => (
                <GalleryTile key={`${project.slug}-${index}`} projectTitle={project.title} index={index} projectSlug={project.slug} gallerySrc={project.gallerySrc} fileExtension={project.fileExtensions[index]} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default function PortfolioInspiredSite() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentProjectSlug, setCurrentProjectSlug] = useState(getProjectFromUrl());
  const [homeScrollY, setHomeScrollY] = useState(0);

  const allProjects = useMemo(() => [...professionalProjects, ...personalProjects], []);

  useEffect(() => {
    const handlePopState = () => setCurrentProjectSlug(getProjectFromUrl());
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const openProject = (slug) => {
    setHomeScrollY(window.scrollY);
    setProjectInUrl(slug, setCurrentProjectSlug);
    setMenuOpen(false);
  };

  const goBackHome = () => {
    setProjectInUrl(null, setCurrentProjectSlug, { scrollToTop: false });
    setMenuOpen(false);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        window.scrollTo({ top: homeScrollY, behavior: "auto" });
      });
    });
  };

  const activeProject = currentProjectSlug
    ? allProjects.find((project) => currentProjectSlug === project.slug) || null
    : null;

  if (currentProjectSlug) {
    return (
      <div className="dark">
        <ProjectDetailPage project={activeProject} goBack={goBackHome} />
      </div>
    );
  }

  return (
    <div className="dark">
      <HomePage
        openProject={openProject}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
    </div>
  );
}
