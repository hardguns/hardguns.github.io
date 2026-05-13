import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, ExternalLink, Mail, Menu, X, ChevronLeft, ChevronRight } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { image } from "framer-motion/client";

const professionalProjects = [
  {
    slug: "killer-klowns-from-outer-space",
    title: "Killer Klowns From Outer Space: The Game",
    image: "/images/killerklowns.png",
    studioLine: "Teravision Games, IllFonic",
    cardMeta: "Teravision Games, IllFonic · 2024",
    platforms: [
      {
        platformName: "Xbox Series X/S", 
        platformLink: "https://www.xbox.com/es-CO/games/store/killer-klowns-from-outer-space-the-game/9nvhcv80zzmh"
      }, 
      {
        platformName: "PlayStation 5", 
        platformLink: "https://store.playstation.com/es-mx/concept/10009210"
      },
      {
        platformName: "Steam", 
        platformLink: "https://store.steampowered.com/app/1556100/Killer_Klowns_From_Outer_Space_The_Game/"
      }],
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
    video: "https://www.youtube.com/embed/AMfZz60EBuk?si=9Z5vdmFgs9mSqL1W",
    role: "Unreal Programmer, AI Programmer, Senior Gameplay Programmer,",
    learnings: [
      "Learned how multiplayer features work in Unreal Engine and how to implement them in production systems.",
      "Built GAS systems from scratch to create different character abilities.",
      "Implemented game sounds using FMOD and created a dynamic music system.",
    ],
    secondaryTitle: "Systems (I've worked in the project)",
    secondaryType: "list",
    secondaryItems: ["AI state behavior (humans, lackeys, balloon dog)", "Escape system", "Klown and human abilities (using GAS)", "Inventory system", "Throw system", "Resurrection system", "CPU Optimization", "Network Optimization"],
    developerText: "Developed by",
    developerType: "companies",
    developerItems: ["Teravision Games", "IllFonic"],
    galleryCount: 6,
    gallerySrc: "images/KillerKlowns/",
    fileExtensions: ["jpg", "png", "jpg", "jpg", "png", "jpg"],
    tags: ["Unreal Engine", "C++", "GAS", "Multiplayer", "FMOD", "AI"],
  },
  {
    slug: "orcs-must-die-by-the-blade",
    title: "Orcs Must Die: By the Blade",
    image: "/images/orcs.png",
    studioLine: "Teravision Games, Robot Entertainment, Meta",
    cardMeta: "Teravision Games, Robot Entertainment, Meta · 2026",
    platforms: [
      {
        platformName: "Meta Quest 2 / 3 / 3S", 
        platformLink: "https://www.meta.com/experiences/orcs-must-die-by-the-blade/6035302119914455/?srsltid=AfmBOoqjPwUJaNJe4UL48svWwHYoAmB0CBFEI06evsLf6b6J-ISUrkxV"
      },
    ],
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
    secondaryTitle: "Systems",
    secondaryType: "list",
    secondaryItems: ["Save system", "Throw system", "AI state driven system for enemies", "Progression, unlock and upgrade system", "Multiplayer replication using push model", "Network optimization", "CPU and GPU optimization systems"],
    developerText: "Developed by",
    developerType: "companies",
    developerItems: ["Teravision Games", "Robot Entertainment", "Meta"],
    galleryCount: 5,
    gallerySrc: "images/OrcsMustDie/",
    fileExtensions: ["png", "png", "jpg", "png", "png"],
    tags: ["Unreal Engine", "C++", "GAS", "Multiplayer", "AI", "Optimization"],
  },
];

const personalProjects = [
  {
    slug: "cannon-spike-like",
    title: "Cannon Spike Like (WIP)",
    studioLine: "Solo Project",
    cardMeta: "Solo Project · 2026",
    platforms: [
      {
        platformName: "PC", 
        platformLink: ""
      },
    ],
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
    secondaryItems: ["Dynamic camera system", "Multiplayer connection", "Gunplay", "Character movement"],
    developerText: "",
    developerType: "",
    developerItems: [],
    galleryCount: 4,
    gallerySrc: "images/",
    fileExtensions: ["jpg", "jpg"],
    tags: ["Unreal Engine", "AngelScript", "AI", "Multiplayer"],
  },
  {
    slug: "blaster-multiplayer",
    title: "Blaster Multiplayer",
    image: "/images/blastercover.png",
    studioLine: "Course - Project",
    cardMeta: "Course - Project · 2024",
    platforms: [
      {
        platformName: "PC", 
        platformLink: ""
      }
    ],
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
    video: "videos/BlasterGameplay.mp4",
    role: "Game Developer - Game Designer",
    learnings: [
      "Created my own subsystem to manage online sessions.",
      "Programmed multiplayer matchmaking in Unreal Engine.",
      "Optimized network code by minimizing bandwidth and maximizing performance.",
      "Created a plugin to convert Unreal Engine projects to multiplayer.",
      "Applied lag compensation techniques including client-side prediction and server-side rewind.",
      "Learned the Unreal Engine Online Subsystem to support multiplayer using different online services.",
      "Created gameplay focused in multiplayer matches",
      "Acknoledged new Unreal Engine 5 tools for gameplay and animation features",
    ],
    secondaryTitle: "Systems",
    secondaryType: "list",
    secondaryItems: ["Multiplayer character movement and gunplay", "Match control system", "Pickup system"],
    developerText: "",
    developerType: "",
    developerItems: [],
    galleryCount: 8,
    gallerySrc: "images/Blaster/",
    fileExtensions: ["png", "png", "png", "png", "png", "png", "png", "png", "png", "png"],
    tags: ["Unreal Engine", "Networking", "Multiplayer", "TPS", "PvP"],
  },
  {
    slug: "box-shooter-roller-madness",
    title: "Box Shooter / Roller Madness",
    image: "/images/unitybootcamp.png",
    studioLine: "Bootcamp",
    cardMeta: "Bootcamp · 2021",
    subtitle:
      "Game Developer bootcamp project set developed in Colombia, centered on prototyping simple but engaging gameplay mechanics.",
    platforms: [
      {
        platformName: "PC", 
        platformLink: ""
      }
    ],
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
    video: "videos/BootcampGameplay.mp4",
    role: "Game Developer - Game Designer",
    learnings: [
      "Gained initial experience working with AI behavior systems in Unity.",
      "Designed simple but engaging gameplay mechanics under short development timelines.",
      "Improved the overall look and feel of games through polish, iteration, and player-focused refinement.",
    ],
    secondaryTitle: "Systems",
    secondaryType: "list",
    secondaryItems: ["AI behavior", "Gunplay", "Character movement", "Pickup system", "Game flow"],
    developerText: "",
    developerType: "",
    developerItems: [],
    galleryCount: 9,
    gallerySrc: "images/UnityBootcamp/",
    fileExtensions: ["png", "png", "png", "png", "png", "png", "png", "png", "png"],
    tags: ["Unity", "C#", "Arcade", "AI", "Prototype"],
  },
  {
    slug: "project-mfg",
    title: "Project W.E.S.T.",
    image: "/images/mfgcover.png",
    studioLine: "Solo Project",
    cardMeta: "Solo Project · 2020",
    platforms: [
      {
        platformName: "PC", 
        platformLink: ""
      }
    ],
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
    video: "videos/ProjectmfgGameplay.mp4",
    role: "Game Developer - Game Designer",
    learnings: [
      "Continued learning Unreal Engine with an initial exploration of the shooter genre.",
      "Created and implemented core gameplay mechanics.",
      "Received guidance and mentorship from experienced game industry professionals to develop mechanics aligned with current industry standards.",
    ],
    secondaryTitle: "Systems",
    secondaryType: "list",
    secondaryItems: ["Weapons", "Mission system", "Save system", "Enemies AI and behavior", "Objective tracker", "Endless wave system", "Audio and UI"],
    developerText: "",
    developerType: "",
    developerItems: [],
    galleryCount: 7,
    gallerySrc: "images/MFG/",
    fileExtensions: ["png", "png", "png", "png", "png", "png", "png"],
    tags: ["Unreal Engine", "C++", "TPS", "Gameplay"],
  },
  {
    slug: "urban-warzone",
    title: "Urban Warzone",
    image: "/images/urbanwarzone.png",
    studioLine: "Solo Project",
    cardMeta: "Solo Project · 2020",
    platforms: [
      {
        platformName: "PC", 
        platformLink: ""
      }
    ],
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
    video: "videos/UrbanWarzoneGameplay.mp4",
    role: "Game Developer - Game Designer",
    learnings: [
      "Built my first multiplayer game in Unity using Photon.",
      "Developed foundational knowledge of networking inside a first-person shooter project.",
      "Designed and implemented lobby systems to support a simple multiplayer experience.",
    ],
    secondaryTitle: "Systems",
    secondaryType: "list",
    secondaryItems: ["Lobby system", "FPS character and weapons", "Multiplayer replication functionality"],
    developerText: "",
    developerType: "",
    developerItems: [],
    galleryCount: 5,
    gallerySrc: "images/UrbanWarzone/",
    fileExtensions: ["png", "png", "png", "png", "png"],
    tags: ["Unity", "C#", "Photon", "FPS", "Multiplayer"],
  },
  {
    slug: "new-moon",
    title: "New Moon",
    image: "/images/NewMoon/newmoon.png",
    studioLine: "Solo Project",
    cardMeta: "Solo Project · 2019",
    platforms: [
      {
        platformName: "PC", 
        platformLink: ""
      }
    ],
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
    video: "videos/Gameplay.mp4",
    role: "Game Developer - Game Designer",
    learnings: [
      "Developed a game from the ground up, covering its concept, structure, and execution.",
      "Built a strong foundation in programming logic for game development.",
      "Understood how core gameplay systems are designed and implemented.",
    ],
    secondaryTitle: "Systems",
    secondaryType: "list",
    secondaryItems: ["Combat systems", "Gameplay flow", "Player progression", "NPC Dialogue interactions", "Quest progression"],
    developerText: "",
    developerType: "",
    developerItems: [],
    galleryCount: 5,
    gallerySrc: "images/NewMoon/",
    fileExtensions: ["png", "gif", "gif", "gif", "gif"],
    tags: ["Unity", "C#", "RPG", "Turn-based", "UI"],
  },
];

function AuroraBackground() {
  const canvasRef = React.useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const orbs = [
      { x: 0.15, y: 0.75, r: 0.55, color: "220,30,30",  vx: 0.00015, vy: -0.0001  },
      { x: 0.80, y: 0.20, r: 0.50, color: "30,40,220",   vx: -0.0001, vy: 0.00012  },
      { x: 0.50, y: 0.55, r: 0.35, color: "160,20,20",   vx: 0.00008, vy: 0.00015  },
    ];

    let animId;

    function resize() {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    function draw() {
      const { width: w, height: h } = canvas;
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = "#000";
      ctx.fillRect(0, 0, w, h);
        
      orbs.forEach((o) => {
        const gx = o.x * w;
        const gy = o.y * h;
        const gr = o.r * Math.max(w, h);
        const g  = ctx.createRadialGradient(gx, gy, 0, gx, gy, gr);
        g.addColorStop(0,   `rgba(${o.color},0.20)`);  // era 0.55
        g.addColorStop(0.5, `rgba(${o.color},0.06)`);  // era 0.15
        g.addColorStop(1,   `rgba(${o.color},0)`);
        ctx.globalCompositeOperation = "screen";
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, w, h);
      });

      ctx.globalCompositeOperation = "source-over";
      orbs.forEach((o) => {
        o.x += o.vx;
        o.y += o.vy;
        if (o.x < 0 || o.x > 1) o.vx *= -1;
        if (o.y < 0 || o.y > 1) o.vy *= -1;
      });

      animId = requestAnimationFrame(draw);
    }
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none"
    />
  );
}

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

const isYouTube = (url) =>
  url.includes("youtube.com/embed/") || url.includes("youtu.be/") || url.includes("youtube.com/watch");

const isLocalVideo = (url) =>
  /\.(mp4|webm|ogg)$/i.test(url);

const getYouTubeEmbedUrl = (url) => {
  try {
    if (url.includes("youtube.com/embed/")) {
      return `${url}${url.includes("?") ? "&" : "?"}autoplay=1&mute=1`;
    }

    if (url.includes("youtube.com/watch")) {
      const parsed = new URL(url);
      const videoId = parsed.searchParams.get("v");
      return videoId
        ? `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`
        : url;
    }

    if (url.includes("youtu.be/")) {
      const videoId = url.split("youtu.be/")[1]?.split("?")[0];
      return videoId
        ? `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`
        : url;
    }

    return url;
  } catch {
    return url;
  }
};

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
      <div className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950/50 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-700 hover:shadow-2xl hover:shadow-black/30">
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
    <img src={`images/${name}.png`} alt={`${name}`} className="h-24 w-auto object-contain" />
  );
}

function ProjectGallery({ project }) {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const images = useMemo(() => {
    return Array.from({ length: project.galleryCount }).map((_, index) => ({
      src: `${project.gallerySrc}${project.slug}${index + 1}.${project.fileExtensions[index]}`,
      alt: `${project.title} - Shot ${index + 1}`,
      label: `Shot ${index + 1}`,
    }));
  }, [project]);

  const openModal = (index) => setSelectedIndex(index);
  const closeModal = () => setSelectedIndex(null);

  const goPrev = () => {
    setSelectedIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const goNext = () => {
    setSelectedIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  useEffect(() => {
    if (selectedIndex === null) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };

    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedIndex, images.length]);

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2">
        {images.map((image, index) => (
          <button
            key={`${project.slug}-${index}`}
            type="button"
            onClick={() => openModal(index)}
            className="group overflow-hidden rounded-[1.75rem] border border-zinc-800 bg-zinc-950 text-left transition hover:border-zinc-700"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="aspect-[16/10] w-full object-cover transition duration-300 group-hover:scale-[1.02]"
            />
            <div className="px-4 py-3">
              <p className="text-xs uppercase tracking-[0.18em] text-zinc-400">
                {project.title} · {image.label}
              </p>
            </div>
          </button>
        ))}
      </div>

      {selectedIndex !== null && (
        <div id="modaldiv"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/65 backdrop-blur-sm"
          onClick={closeModal}
        >
          <button
            type="button"
            onClick={closeModal}
            className="absolute right-6 top-6 z-[110] rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
            aria-label="Close gallery"
          >
            <X className="h-6 w-6" />
          </button>

          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  goPrev();
                }}
                className="absolute left-4 top-1/2 z-[110] -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20 md:left-8"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-7 w-7" />
              </button>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  goNext();
                }}
                className="absolute right-4 top-1/2 z-[110] -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20 md:right-8"
                aria-label="Next image"
              >
                <ChevronRight className="h-7 w-7" />
              </button>
            </>
          )}

          <div id="border"
            className="relative mx-auto flex max-h-[90vh] w-full max-w-[95vw] items-center justify-center px-16 md:px-24"
            onClick={(e) => { e.stopPropagation(); closeModal();} }
          >
            <img
              src={images[selectedIndex].src}
              alt={images[selectedIndex].alt}
              className="max-h-[85vh] w-auto max-w-full rounded-2xl object-contain shadow-2xl"
            />
          </div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-black/40 px-4 py-2 text-sm text-zinc-200 backdrop-blur-sm">
            {selectedIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
}

function HomePage({ openProject, menuOpen, setMenuOpen }) {
  return (
    <div className="min-h-screen overflow-hidden text-white">
      <AuroraBackground />
      <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-800 bg-black/20 backdrop-blur">
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
                ["2", "Shipped videogames for consoles and VR sets"],
                ["Gameplay and AI", "Driven systems"],
                ["Unreal Engine, C++, AngelScript", "Core stack"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-3xl border border-zinc-800 bg-zinc-950/30 p-5"
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
              Projects I developed with multiple interdisciplinary teams, focused on Co-op and PvP multiplayer, gameplay, AI, mentorship, network, CPU and GPU optimization.
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
              <div className="overflow-hidden rounded-[2rem] border border-zinc-800 bg-zinc-950/50">
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
              <p>
                I do enjoy playing and creating games as part of my life style, hoping to keep growing in the industry. I'm striving to fulfill my dream of making AAA games
              </p>
              </div>
            </div>
          </div>
        </section>

 <section id="contact" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="rounded-[2rem] border border-zinc-800 bg-zinc-950/30 p-8 sm:p-10">
            <p className="mb-3 text-xs uppercase tracking-[0.28em] text-zinc-500">Contact</p>
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
              <div className="flex h-full flex-col justify-center text-left">
                <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  I would be excited to contribute my experience to build and create memorable games.
                </h2>
                <p className="mt-4 text-base leading-7 text-zinc-400">
                  Open to gameplay, AI, or multiplayer opportunities for games.
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
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-zinc-700 px-4 py-2 text-sm transition hover:bg-zinc-900">
            <ArrowLeft className="h-4 w-4" /> Back to projects
          </button>
          <h1 className="text-4xl font-semibold tracking-tight">Project not found</h1>
          <p className="mt-4 text-zinc-400">This project page does not exist yet.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen text-white">
      <AuroraBackground />
      <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-800 bg-black/20 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <button
            type="button"
            onClick={goBack}
            className="inline-flex items-center gap-2 text-sm text-zinc-400 transition hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" /> Back
          </button>
          <span className="text-sm font-semibold tracking-[0.18em] uppercase">{project.title}</span>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center"
        >
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.28em] text-zinc-500">
              {project.year} · {project.category}
            </p>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              {project.title}
            </h1>
            <p className="mt-4 text-lg text-zinc-400">{project.studioLine}</p>
            {project.subtitle ? <p className="mt-3 text-sm text-zinc-500">{project.subtitle}</p> : null}
            <p className="mt-6 max-w-3xl text-base leading-8 text-zinc-400">{project.overview}</p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-zinc-800 bg-zinc-950/50 p-4">
                <p className="text-md uppercase tracking-[0.22em] text-zinc-500">Platforms</p>
                {project.platforms.map((item, index) => (
                  <span key={item.platformName}>
                  {item.platformLink ? (
                  <a className="mt-2 text-lg leading-7 text-zinc-300 underline underline-offset-4 decoration-zinc-600 hover:text-white hover:decoration-white transition-colors" key={item.platformName} href={item.platformLink} target="_blank">
                    {item.platformName}
                  </a>
                ) : (
                  <p className="mt-2 text-lg leading-7 text-zinc-300" key={item.platformName}>{item.platformName}</p>
                )}

                {index < project.platforms.length - 1 && ", "}
                </span>
                ))}
              </div>
              <div className="rounded-2xl border border-zinc-800 bg-zinc-950/50 p-4">
                <p className="text-md uppercase tracking-[0.22em] text-zinc-500">Genre</p>
                <p className="mt-2 text-lg leading-7 text-zinc-300">{project.genre}</p>
              </div>
            </div>

            <div className="mt-4 rounded-2xl border border-zinc-800 bg-zinc-950/50 p-4">
              <p className="text-md uppercase tracking-[0.22em] text-zinc-500">Tech</p>
              <p className="mt-2 text-sm leading-7 text-zinc-300">{project.tech}</p>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-zinc-800 bg-zinc-950/50">
          {project.video ? (
        <div className="aspect-video w-full">
          {isYouTube(project.video) ? (
            <iframe
              className="h-full w-full"
              src={getYouTubeEmbedUrl(project.video)}
              title={`${project.title} video`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          ) : isLocalVideo(project.video) ? (
            <video
              className="h-full w-full"
              src={project.video}
              autoPlay
              muted
              playsInline
              controls
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-sm text-zinc-400">
              Unsupported video source
            </div>
          )}
        </div>
        ) : (
        <div className="aspect-video w-full bg-gradient-to-br from-zinc-900 via-zinc-950 to-black" />
        )}
</div>

        </motion.div>

        <section className="mt-16 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] border border-zinc-800 bg-zinc-950/50 p-8">
            <div className="space-y-8">
              <div>
                <p className="text-md uppercase tracking-[0.22em] text-zinc-500">Role</p>
                <p className="mt-2 text-lg leading-7 text-zinc-300">{project.role}</p>
              </div>

              <div>
                <p className="text-md uppercase tracking-[0.22em] text-zinc-500">Key Learnings</p>
                <div className="mt-3 space-y-3 text-md leading-7 text-zinc-300">
                  {project.learnings.map((item) => (
                    <p key={item}>• {item}</p>
                  ))}
                </div>
              </div>

              {project.secondaryTitle !== "" && (
               <div>
                <p className="text-md uppercase tracking-[0.22em] text-zinc-500">{project.secondaryTitle}</p>
                <div className="mt-3 space-y-3 text-md leading-7 text-zinc-300">
                    {project.secondaryItems.map((item) => (
                      <p key={item}>• {item}</p>
                    ))}
                </div>
               </div>
              )}

              {project.developerText !== "" && (
               <div>
                <p className="text-md uppercase tracking-[0.22em] text-zinc-500">{project.developerText}</p>
                <div className={`mt-4 grid gap-4 ${project.developerItems.length === 2 ? "sm:grid-cols-2" : "sm:grid-cols-3"}`}>
                    {project.developerItems.map((item) => (
                      <CompanyTile key={item} name={item} />
                    ))}
                  </div>
               </div>
              )}

            </div>
          </div>

          <div className="rounded-[2rem] border border-zinc-800 bg-zinc-950/50 p-8">
            <div className="mb-6 flex items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-zinc-500">Project gallery</p>
                <p className="mt-2 text-sm leading-7 text-zinc-400">
                  Replace these placeholders with screenshots, captures, diagrams, or production visuals for the project.
                </p>
              </div>
              <span className="text-xs uppercase tracking-[0.22em] text-zinc-500">{project.galleryCount} images</span>
              
            </div>

            <div>
              <ProjectGallery project={project} />
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
