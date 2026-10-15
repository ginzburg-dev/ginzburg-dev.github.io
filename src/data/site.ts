export const site = {
  name: "Dmitri Ginzburg",
  role: "Software Engineer",
  specialisms: ["Machine Learning", "GPU Computing", "Computer Graphics"],
  location: "London, UK",
  email: "ginzburgdd@gmail.com",
  description:
    "Software engineer working on machine-learning models, GPU inference, " +
    "computer graphics and the production systems around them.",
  links: {
    github: "https://github.com/ginzburg-dev",
    linkedin: "https://www.linkedin.com/in/ginzburg-cg",
    imdb: "https://www.imdb.com/name/nm17000880/",
    artstation: "https://ginzburg-lighting-td.artstation.com/",
  },
} as const;

/** Home page positioning. Kept to three sentences. */
export const positioning = [
  "I develop machine-learning models and performance-sensitive software in C++ and Python: training and evaluating models, optimising inference, and integrating them into the systems that run them in production.",
  "Most of that work is in rendering, image and video processing, and GPU computing. It includes learned and deterministic denoisers, a standalone C++/CUDA inference engine, RenderMan integrators and Arnold shader plug-ins in C++, and the backend services and pipelines that carry them into production.",
] as const;

export const paperSentence =
  "Author of the research paper “Pre-filtered Frame-Difference Features for Temporal Monte Carlo Denoising,” accepted for publication at CVMP 2026.";
