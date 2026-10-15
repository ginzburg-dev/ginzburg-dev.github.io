export interface Talk {
  title: string;
  venue: string;
  year: number;
  project?: string;
}

export const talks: Talk[] = [
  {
    title: "Guided Temporal Kernel Prediction for Denoising Image Sequences",
    venue: "Internal engineering talk, Flawless AI",
    year: 2026,
  },
  {
    title:
      "Rendering Complex Scenes: Path Tracing and Temporal Kernel-Prediction Denoising",
    venue: "Guest lecture, TUMO Moscow",
    year: 2021,
  },
  {
    title:
      "AR Place Tagging: Tracking and Mapping Algorithms for Location-Anchored Content",
    venue: "Formula IT accelerator",
    year: 2019,
  },
  {
    title:
      "Wavelet–Temporal Hybrid Filtering for Noise Suppression in Rendered Sequences",
    venue: "Technical presentation, Aeroplane Productions",
    year: 2016,
  },
  {
    title:
      "Diffusion-Approximation Model of Light Transport for Real-Time Film Previsualisation",
    venue: "CG conference, Moscow",
    year: 2014,
  },
  {
    title:
      "Interactive 3D Visualisation of Microelectronic Structures with a custom C++/OpenGL engine",
    venue: "MIET, Moscow",
    year: 2012,
    project: "/projects/opengl-visualisation-engine/",
  },
];
