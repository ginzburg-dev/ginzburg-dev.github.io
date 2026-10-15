import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

test("the home page presents featured projects in the requested order", async () => {
  const html = await readFile(new URL("../dist/index.html", import.meta.url), "utf8");
  const radiance = html.indexOf(">Radiance4D<");
  const neural = html.indexOf(">Ginzburg Neural Denoiser<");
  const deterministic = html.indexOf(">Ginzburg Denoiser<");

  assert.notEqual(radiance, -1, "Radiance4D is present");
  assert.notEqual(neural, -1, "Ginzburg Neural Denoiser is present");
  assert.notEqual(deterministic, -1, "Ginzburg Denoiser is present");
  assert.ok(radiance < neural, "Radiance4D appears before Ginzburg Neural Denoiser");
  assert.ok(
    neural < deterministic,
    "Ginzburg Neural Denoiser appears before Ginzburg Denoiser",
  );
  assert.doesNotMatch(html, /Research and talks/);
  assert.match(html, /Figure 1 from the paper/);
  assert.match(html, /<html lang="en" data-theme="dark">/);

  const paperTitle = html.indexOf(
    "Pre-filtered Frame-Difference Features for Temporal Monte Carlo Denoising",
  );
  const paperLabel = html.indexOf(">Research paper<");
  const paperFigure = html.indexOf("Figure 1 from the paper");
  assert.notEqual(paperLabel, -1, "the homepage identifies the item as a research paper");
  assert.match(
    html,
    /<span class="paper-kind"[^>]*>Research paper<\/span>/,
    "the research paper label is rendered as a compact badge",
  );
  assert.ok(paperLabel < paperTitle, "the research paper label appears above the title");
  assert.ok(paperTitle < paperFigure, "the paper title appears above Figure 1");
});

test("the site does not expose a CV link or file", async () => {
  const home = await readFile(new URL("../dist/index.html", import.meta.url), "utf8");
  const about = await readFile(
    new URL("../dist/about/index.html", import.meta.url),
    "utf8",
  );
  const cv = new URL("../public/Dmitri_Ginzburg_CV.pdf", import.meta.url);

  assert.doesNotMatch(home, />CV<\/a>/);
  assert.doesNotMatch(about, />Download CV<\/a>/);
  await assert.rejects(access(cv));
});

test("the About page keeps the biography, credits and education only", async () => {
  const about = await readFile(
    new URL("../dist/about/index.html", import.meta.url),
    "utf8",
  );

  assert.doesNotMatch(about, />Experience</);
  assert.doesNotMatch(about, /Global Talent|employer sponsorship/);
  assert.match(about, />Selected credits</);
  assert.match(about, />Education</);
  assert.match(about, /Bachelor of Engineering, Microelectronics/);
});

test("the site does not publish a Writing section", async () => {
  const home = await readFile(new URL("../dist/index.html", import.meta.url), "utf8");
  const writing = new URL("../dist/writing/index.html", import.meta.url);

  assert.doesNotMatch(home, /href="\/writing\/"/);
  await assert.rejects(access(writing));
});

test("the projects overview does not show metric result callouts", async () => {
  const projects = await readFile(
    new URL("../dist/projects/index.html", import.meta.url),
    "utf8",
  );

  assert.doesNotMatch(projects, /class="result"/);
  assert.doesNotMatch(projects, /temporal PSNR|temporal MAE/);
});

test("the Research page does not duplicate the neural denoiser project", async () => {
  const research = await readFile(
    new URL("../dist/research/index.html", import.meta.url),
    "utf8",
  );

  assert.doesNotMatch(research, />Ongoing research</);
  assert.doesNotMatch(research, />Selected talks and lectures</);
  assert.doesNotMatch(research, />Education and credentials</);
  assert.match(
    research,
    /CVMP 2026, European Conference on Visual Media Production, London, UK/,
  );
  assert.doesNotMatch(research, /not yet publicly available|not described here/);
  assert.match(research, /Figure 1 from the paper/);
  assert.match(
    research,
    /Monte Carlo rendering at limited sample counts leaves image sequences noisy/,
  );
  assert.match(
    research,
    /Pre-filtered achieves the highest mean PSNR and temporal PSNR/,
  );
});

test("talks are published on their own page", async () => {
  const talks = await readFile(
    new URL("../dist/talks/index.html", import.meta.url),
    "utf8",
  );

  assert.match(talks, />Talks</);
  assert.match(talks, /Guided Temporal Kernel Prediction/);
  assert.doesNotMatch(talks, /Education and credentials/);
});
