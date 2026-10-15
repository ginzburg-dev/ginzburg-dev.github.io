export interface Role {
  employer: string;
  title: string;
  period: string;
  location?: string;
  /**
   * Contribution bullets. Shared platforms are described as contributions,
   * never as sole ownership.
   */
  points: string[];
}

export const roles: Role[] = [
  {
    employer: "Flawless AI",
    title: "Pipeline Technical Director",
    period: "October 2025 – July 2026",
    location: "London, UK · contract",
    points: [
      "Software engineering for the internal production platform around DeepEditor, Flawless AI's ML-based facial performance editing and visual dubbing technology.",
      "Designed and built a cloud-storage abstraction with metadata-aware synchronisation, cache invalidation, mounted-volume handling and parallel AWS S3 ingestion, removing a serial-download bottleneck.",
      "Worked on Python backend services and REST APIs integrating the production platform with external production systems, and maintained the GraphQL client used for DeepEditor media workflows.",
      "As part of Forward Deployed Engineering, contributed to the design of a user-facing API integrating Flawless AI technology into client production workflows.",
      "Built metadata-driven Nuke publishing automation; standardised ingest, publishing and delivery workflows across six productions.",
      "Set up GitHub Actions build, pytest and release workflows across pipeline repositories; 94 pull requests were merged across five platform repositories in nine months.",
      "Conducted research into Gaussian splatting for facial rendering.",
    ],
  },
  {
    employer: "Studio Amikaya",
    title: "Senior Software Engineer",
    period: "October 2024 – October 2025",
    location: "Remote · Amsterdam, Netherlands",
    points: [
      "Built and trained a visual-artefact detection model on production image and video data; implemented GPU kernels in Triton and integrated distributed inference with the studio's compute infrastructure.",
      "Built a Python REST API for image-restoration ML inference with PostgreSQL, Docker, pytest and CI, supporting batched and queued execution.",
      "Developed a custom C++ Pixar RenderMan integrator for VR point-cloud generation, capturing front- and back-facing surface samples for more complete scene representations.",
      "Designed a reusable LLM agent harness and task-specific agents for distinct CG and ML workflows, connecting local models to domain tools, project context and iterative execution.",
      "Expanded the studio render farm and provided technical leadership across rendering and pipeline for a globally distributed team.",
    ],
  },
  {
    employer: "Jellyfish Pictures",
    title: "Senior Lighting & Compositing Artist",
    period: "June 2024 – October 2024",
    location: "London, UK",
    points: [
      "Created mastershot and mastercomp templates adopted for DreamWorks' *Dog Man* (2025), with render and compositing troubleshooting and pipeline support.",
      "Developed Nuke gizmos for the lighting and compositing workflow.",
    ],
  },
  {
    employer: "Studio Amikaya",
    title: "Software Engineer & Head of Post Production",
    period: "2022 – 2024",
    location: "Amsterdam, Netherlands",
    points: [
      "Designed and built the studio's Python production pipeline and workflow automation, supporting a threefold increase in post-production throughput.",
      "Developed an ML render quality-control and monitoring system combining visual-artefact detection with render-log and execution-time analysis across the distributed rendering pipeline.",
      "Integrated a fine-tuned noise-suppression tool into the production pipeline, and built tooling for render-job monitoring and remote workload control.",
      "Led a five-person technical post-production team and owned end-to-end technical delivery.",
    ],
  },
  {
    employer: "Bazelevs",
    title: "Senior Lighting Technical Director",
    period: "2022 – 2023",
    location: "Freelance",
    points: [
      "Built a Houdini–Arnold pipeline, a look-development workflow using Solaris, OpenUSD and Arnold, and reusable Houdini Digital Assets.",
    ],
  },
  {
    employer: "Platoshka",
    title: "Post Production Supervisor & Lead Lighting Technical Director",
    period: "2021 – 2022",
    points: [
      "Developed and optimised the Maya–Redshift production pipeline and workflow automation in Python for the *Beadies* animated series, doubling output to four episodes per month.",
      "Worked with Unreal Engine real-time rendering during the series' transition to Unreal.",
    ],
  },
  {
    employer: "Soyuzmultfilm",
    title: "Software Engineer",
    period: "2020 – 2021",
    points: [
      "Led development of cross-site data-transfer and synchronisation software for production assets and render data across distributed sites.",
      "Developed and maintained shader plug-ins for Autodesk Arnold in C++, including subsurface-scattering optimisation and fixes for production rendering issues.",
    ],
  },
  {
    employer: "Aeroplane Productions",
    title: "Software Engineer & Lighting Technical Director",
    period: "2016 – 2020",
    points: [
      "Developed and deployed Ginzburg Denoiser, a deterministic C++ spatiotemporal denoising system integrated into the Maya–RenderMan pipeline and used on two animated series and two feature films, enabling approximately 30% lower render budgets.",
      "Developed and optimised a custom C++ Pixar RenderMan path-tracing integrator for light-transport contribution analysis and bounce-depth optimisation, contributing to approximately 15–20% lower average render times while maintaining comparable image quality.",
      "Improved multiple importance sampling and light/BxDF sampling heuristics to reduce variance and reach target image quality with fewer samples.",
      "Mentored lighting artists and provided production-rendering troubleshooting.",
    ],
  },
  {
    employer: "Concept Space · Asymmetric VFX · Digital Lab",
    title: "Pipeline Technical Director and Visual Effects Supervisor",
    period: "2010 – 2016",
    points: [
      "Pipeline and supervision roles across commercials, series and feature work, including automated rig setups, animation validators, playblast automation, and tools for detecting motion-capture artefacts and cleaning motion data.",
    ],
  },
];

export const filmography = [
  { title: "Fall 2: Deadpoint", year: 2026, studio: "Capstone Pictures" },
  { title: "Michael", year: 2026 },
  { title: "Dog Man", year: 2025, studio: "DreamWorks" },
  { title: "Hodja Nasreddin", year: 2025 },
  { title: "The Alpine Campaign", year: 2022 },
  { title: "The Iron Mask", year: 2020 },
  { title: "Fixies vs. Crabots", year: 2019 },
  { title: "The Fixies: Top Secret", year: 2017 },
];
