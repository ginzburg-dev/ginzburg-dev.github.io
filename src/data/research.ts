export const paper = {
  title:
    "Pre-filtered Frame-Difference Features for Temporal Monte Carlo Denoising",
  venue:
    "CVMP 2026, European Conference on Visual Media Production, London, UK",
  status: "Accepted for publication",
  year: 2026,
  figureAlt:
    "Figure 1 from the paper: a noisy rendered scene with two marked crops, followed by Input, Spatial, Temporal, Ours and Reference comparisons with temporal-variation maps.",
  abstract: [
    "Monte Carlo rendering at limited sample counts leaves image sequences noisy. Spatial denoisers reduce noise in individual frames, but residual errors may vary over time and appear as flicker. Temporal denoisers improve stability by reusing aligned observations from nearby frames, yet occlusions and alignment errors can introduce incompatible pixels and produce ghosting. We present a learned temporal denoiser that uses a frozen spatial pre-filter to guide alignment and per-pixel temporal weighting. The predicted weights blend aligned noisy frames, and a spatiotemporal refiner processes the result. Filtered guides therefore help determine which neighbors to trust, while the original Monte Carlo observations supply the reconstruction.",
    "Frame-difference maps give the predictor explicit evidence of mismatch after alignment. Differences computed from noisy frames also contain variation from independent Monte Carlo samples, including at correctly aligned pixels. We instead compute these maps from the filtered guides. The Raw and Pre-filtered variants differ only in this input; the alignment procedure, predictor and refiner architectures, training protocol, and noisy-frame blending remain unchanged. Across the six production sequences in our test set, Pre-filtered improves mean PSNR by 0.686 dB and temporal PSNR by 0.582 dB over Raw, with gains in both metrics on every sequence. Luma and chroma flicker errors and the 95th-percentile low-frequency temporal error also decrease. In a separate comparison with OIDN, temporal OptiX, and two temporal NAFNet baselines, Pre-filtered achieves the highest mean PSNR and temporal PSNR, while OIDN achieves the lowest LPIPS.",
  ],
} as const;
