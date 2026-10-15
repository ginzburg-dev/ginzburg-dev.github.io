import type { Status } from "../components/StatusBadge.astro";

export interface SecondaryProject {
  title: string;
  summary: string;
  years: string;
  status: Status;
  stack: string[];
  repo?: string;
  video?: string;
  group: "tools" | "platform";
}

/**
 * Smaller projects that are listed with a link rather than given a full case
 * study. Every entry with a `repo` is a public repository.
 */
export const secondaryProjects: SecondaryProject[] = [
  {
    title: "JAM Asset Manager",
    summary:
      "Plug-in-based asset and shot management toolkit for Autodesk Maya: versioned scene publishing with JSON metadata, dependency tracking, render-scene templates and project browsing.",
    years: "2018 – 2020",
    status: "released",
    stack: ["Python", "Qt / PySide", "Maya"],
    repo: "https://github.com/ginzburg-dev/JAM-asset-manager",
    video: "https://www.youtube.com/watch?v=ntvdcg_zj6I",
    group: "tools",
  },
  {
    title: "EXR Cleanup Tool",
    summary:
      "Command-line tool for removing RenderMan variance channels from OpenEXR files, cutting file sizes before images move downstream.",
    years: "2025",
    status: "released",
    stack: ["C++", "OpenEXR", "CMake"],
    repo: "https://github.com/ginzburg-dev/exr-cleanup-tool",
    group: "tools",
  },
  {
    title: "Auto Light Linker",
    summary:
      "Rule-based light-linking tool for Maya: reads a JSON rule file, matches lights and geometry, then creates or breaks illumination and shadow links with a preview before applying.",
    years: "2025",
    status: "released",
    stack: ["Python", "Maya"],
    repo: "https://github.com/ginzburg-dev/auto-light-linker",
    group: "tools",
  },
  {
    title: "ML image-processing service",
    summary:
      "Python service for image and video processing with ML inference pipelines, covering denoising, segmentation and restoration as queued post-render operations.",
    years: "2025 – 2026",
    status: "development",
    stack: ["Python", "REST API", "PostgreSQL", "Docker"],
    repo: "https://github.com/ginzburg-dev/ml-processing-service",
    group: "platform",
  },
  {
    title: "aigen-studio",
    summary:
      "Config-driven content pipeline runner: YAML-defined steps combine model-driven and rule-based processing to collect, store, reuse and combine data into repeatable publishing workflows.",
    years: "2026",
    status: "development",
    stack: ["Python", "YAML pipelines"],
    repo: "https://github.com/ginzburg-dev/aigen-studio",
    group: "platform",
  },
  {
    title: "Local LLM agent harness",
    summary:
      "Reusable local-LLM harness for coding and technical research: iterative model-driven planning with deterministic tool execution, controlled file and shell access, approval gates for mutations, and test-based verification before any success is reported.",
    years: "2025 – 2026",
    status: "development",
    stack: ["Python", "Ollama", "Qwen Coder"],
    group: "platform",
  },
];
