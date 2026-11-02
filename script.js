// Project data: the Recent Work panel, the rolling bar and the detail dialog are all built
// from this list. `thumb` is the card image; `images` are shown in the dialog.
// Optional: `featured: true` puts the project in Recent Work instead of the rolling bar,
// `short` replaces the title on the card, `tag` is shown next to the year,
// and `wide: true` on an image spans the dialog width.
const projects = [
  {
    year: "2026",
    tag: "Paper",
    featured: true,
    title: "Exploiting the Weyl-Chamber Structure for Hardware-Aware Quantum Circuit Compression",
    short: "Hardware-Aware Quantum Circuit Compression",
    org: "Volkswagen Group & TU Munich",
    orgs: [{ name: "Preprint, arXiv:2610.32812 (2026)", url: "https://arxiv.org/abs/2610.32812" }],
    people: "<strong>N. Misciasci</strong>, I. N. M. Le, C. B. Mendl",
    thumb: "images/WEYL/weyl_chamber.svg",
    bullets: [
      "Tensor-network circuit compression produces generic two-qubit gates, which then have to be decomposed into the hardware's native gates.",
      "We show that the optimized gates have a predictable <strong>Weyl-chamber</strong> structure (near-R<sub>ZZ</sub> for Ising, near-fSim for Heisenberg XXZ) and optimize directly over <strong>native gates</strong> instead.",
      "For 50-qubit Heisenberg chains, the native circuits reach lower error at equal depth.",
    ],
    images: [
      { src: "images/WEYL/weyl_chamber.svg", caption: "Weyl chamber of two-qubit gates. Native gates: R<sub>ZZ</sub> (orange edge) and fSim (teal face)." },
      { src: "images/WEYL/heisenberg_results.png", caption: "Heisenberg XXZ model, 50 qubits: loss versus number of native two-qubit layers, hardware-aware (orange) versus Riemannian (blue) optimization." },
    ],
    links: [
      { label: "arXiv", url: "https://arxiv.org/abs/2610.32812" },
      { label: "Code on GitHub", url: "https://github.com/ixaixim/weyl-circuit-compression" },
    ],
  },
  {
    year: "2026",
    tag: "Paper",
    featured: true,
    title: "Evaluating Sample-Based Krylov Quantum Diagonalization for Heisenberg Models with Applications to Materials Science",
    short: "Quantum Diagonalization of Magnets on IBM Hardware",
    org: "Volkswagen Group × IBM collaboration",
    orgs: [{ name: "Entropy 28(4), 367 (2026)", url: "https://doi.org/10.3390/e28040367" }],
    people: "<strong>N. Misciasci</strong>, R. Firt, J. E. Mueller, T. Friedhoff, C. Onah, A. Schulze, S. Mostame",
    thumb: "images/SKQD/ground_state_sparsity.jpg",
    bullets: [
      "<strong>Motivation:</strong> magnets for electric car motors. This study is one step in a larger effort to develop and predict new magnetic materials with quantum computers.",
      "A <strong>Volkswagen–IBM collaboration</strong> evaluating Sample-based Krylov Quantum Diagonalization (SKQD) on Heisenberg models, with runs of up to 64 qubits on IBM quantum hardware.",
      "In 2D, such materials quickly become hard for classical tensor-network methods, which is where quantum computers could help.",
    ],
    images: [
      { src: "images/SKQD/ground_state_sparsity.jpg", caption: "Ground-state sparsity of a 20-spin Heisenberg model. In the red regions the ground state is dense, which makes it harder for SKQD." },
      { src: "images/SKQD/magnetization_energy_8x8.png", caption: "64-qubit 8×8 lattice of [CuCl(pyz)<sub>2</sub>](BF<sub>4</sub>) on IBM Nighthawk: magnetization and energy versus field, SKQD versus DMRG. In 2D, the cost of tensor-network methods grows exponentially with the lattice width." },
    ],
    links: [
      { label: "Paper", url: "https://doi.org/10.3390/e28040367" },
      { label: "arXiv", url: "https://arxiv.org/abs/2512.17141" },
    ],
  },
  {
    year: "2025",
    tag: "Paper",
    title: "QUEST: QUantum-Enhanced Shared Transportation",
    org: "Volkswagen Group · IEEE QCE 2025",
    orgs: [{ name: "2025 IEEE International Conference on Quantum Computing and Engineering (QCE), pp. 2149–2160", url: "https://doi.org/10.1109/QCE65121.2025.00235" }],
    people: "C. Onah, <strong>N. Misciasci</strong>, C. Othmer, K. Michielsen",
    thumb: "images/QUEST/waas_app.png",
    bullets: [
      "<strong>Windbreaking-as-a-Service:</strong> a larger vehicle shields a smaller one from the wind, reducing drag and energy use. An app could pair drivers who share a route.",
      "We formulated the pairing as an optimization problem (QUBO) and solved it with <strong>QAOA on IBM quantum hardware</strong>, recovering the classical optimum.",
      "Extrapolated runtimes suggest a crossover with the classical Gurobi solver at about 16 pairs (about 256 qubits).",
    ],
    images: [
      { src: "images/QUEST/windbreaking.jpg", caption: "Windbreaking in action.", wide: true },
      { src: "images/QUEST/runtime_gurobi_qaoa.png", caption: "Runtime of the classical Gurobi solver versus QAOA on quantum hardware, with the extrapolated crossover.", wide: true },
    ],
    links: [
      { label: "IEEE", url: "https://doi.org/10.1109/QCE65121.2025.00235" },
      { label: "arXiv", url: "https://arxiv.org/abs/2505.08074" },
    ],
  },
  {
    year: "2025",
    tag: "Paper",
    featured: true,
    title: "AUGUR, a Flexible and Efficient Optimization Algorithm for Identification of Optimal Adsorption Sites",
    short: "AUGUR: Finding Optimal Adsorption Sites with GNNs",
    org: "TU Munich · npj Computational Materials",
    orgs: [{ name: "npj Computational Materials 11, 136 (2025)", url: "https://doi.org/10.1038/s41524-025-01630-5" }],
    people: "I. Kouroudis, Poonam, <strong>N. Misciasci</strong>, F. Mayr, L. Müller, Z. Gu, A. Gagliardi",
    thumb: "images/AUGUR/pt9_cluster.png",
    bullets: [
      "Finding where a molecule binds best on a cluster or surface usually takes many expensive DFT calculations.",
      "AUGUR combines <strong>graph neural networks</strong> and <strong>Gaussian processes</strong> into an energy predictor with built-in uncertainty, used as the surrogate in a <strong>Bayesian optimization</strong>.",
      "It finds the optimal adsorption sites of large clusters in far fewer iterations than state-of-the-art approaches. My contributions: software, methodology, data curation and analysis.",
    ],
    images: [
      { src: "images/AUGUR/pt9_zn_energy_surface.jpg", caption: "Pt<sub>9</sub>–Zn cluster: predicted energy surface (left), best adsorption site (top) and uncertainty (right).", wide: true },
    ],
    links: [{ label: "Paper", url: "https://doi.org/10.1038/s41524-025-01630-5" }],
  },
  {
    year: "2023",
    title: "Domain Adaptation for Organic Semiconductors",
    org: "Master's thesis, Technical University of Munich",
    orgs: [{ name: "Master's thesis, Technical University of Munich", url: "https://www.tum.de/en/" }],
    people: "Supervisor: Prof. H.-J. Bungartz · Advisor: I. Kouroudis, M.Sc.",
    thumb: "images/MASTER_THESIS/organic_semicond.png",
    bullets: [
      "Simulations reproduce molecular properties accurately but are computationally expensive. Machine learning is much faster, but needs large amounts of simulated ground-truth data for training.",
      "<strong>Transfer learning</strong> reuses what a model learned on one task for a related task, which cuts down the new simulation data needed.",
      "Applied adversarial <strong>Domain Adaptation (DA)</strong> with <strong>Graph Neural Networks</strong>: trained on pentacene and tetracene, the model predicts the charge-transfer integrals of the organic semiconductor DNTT.",
      "The DA-enhanced GNN predicts DNTT clearly more accurately than a standard GNN, which lays the groundwork for a broader study of transfer learning in materials science.",
    ],
    images: [
      { src: "images/MASTER_THESIS/organic_semicond.png", caption: "Organic semiconductor." },
      { src: "images/MASTER_THESIS/model_da.png", caption: "Domain Adaptation architecture using adversarial training." },
      { src: "images/MASTER_THESIS/vanilla_result.png", caption: "Predictions of a standard GNN on DNTT." },
      { src: "images/MASTER_THESIS/da_result.png", caption: "Predictions of the DA-enhanced GNN on DNTT." },
    ],
    links: [{ label: "Code on GitHub", url: "https://github.com/ixaixim/master_thesis" }],
  },
  {
    year: "2022",
    title: "Differentiable Physics: a Learnable Physics Solver",
    org: "TU Munich, Chair for Graphics and Visualization",
    orgs: [{ name: "Chair for Graphics and Visualization, TU Munich", url: "https://www.cs.cit.tum.de/cg/cover-page/" }],
    people: "Topic offered by Prof. Thuerey in the course <em>Advanced Deep Learning for Physics</em>",
    thumb: "images/ADP/mountain_landscape_part3.png",
    bullets: [
      "Implemented and compared physics solvers for a given potential landscape. Task: predict the trajectory of a point.",
      "Implemented a supervised learning solver, which is purely data-driven. Problem: it leads to suboptimal solutions when multiple solutions exist.",
      "Implemented a <strong>differentiable physics solver</strong>: a data-driven, learnable solver that also incorporates knowledge of the potential landscape. It is more accurate than the supervised approach.",
    ],
    images: [
      { src: "images/ADP/mountain_landscape_part1.png", caption: "Classic physics optimization in a symmetric potential landscape. Two paths are possible depending on the initialization (the lower path is shown)." },
      { src: "images/ADP/mountain_landscape_part2.png", caption: "Supervised physics solver: 25 paths with different initial conditions. Many paths are suboptimal." },
      { src: "images/ADP/mountain_landscape_part3.png", caption: "The differentiable physics solver resolves the multimodality and chooses one path. The zig-zags can be reduced with hyperparameter tuning." },
    ],
  },
  {
    year: "2021",
    title: "Optimizing Neural Networks with the Cascade-Correlation Algorithm",
    org: "Vitesco Technologies & TU Munich",
    orgs: [
      { name: "Vitesco Technologies" },
      { name: "Chair of Numerical Mathematics, TU Munich", url: "https://www-m2.ma.tum.de/bin/view/Allgemeines/" },
    ],
    people: "Supervised by Dr. T. Köpple and G. Gutierrez, M.Sc.",
    thumb: "images/CASE_STUDIES/architecture.png",
    bullets: [
      "Built an <strong>optimal</strong> artificial neural network (ANN), with a minimal number of layers and neurons, that does not overfit the data.",
      "Goal: an ANN small enough to run on an engine processor with limited memory, predicting the temperature of the vehicle's engine.",
      "The Cascade-Correlation (Cascor) network is both an architecture and a family of learning algorithms: it starts from a minimal network and <strong>adds units automatically</strong>, one at a time, optimizing residual correlations.",
    ],
    images: [
      { src: "images/CASE_STUDIES/architecture.png", caption: "The Cascor architecture adds a neuron every epoch and connects it to all previous neurons." },
      { src: "images/CASE_STUDIES/results_prediction.png", caption: "Prediction results on test data." },
    ],
  },
  {
    year: "2021",
    title: "Comparison of Simple Classifiers",
    org: "TU Munich, Mathematical Modeling of Biological Systems",
    orgs: [{ name: "Chair of Mathematical Modeling of Biological Systems, TU Munich", url: "https://www.math.cit.tum.de/math/personen/professuren/theis-fabian/" }],
    people: "Topic offered by Prof. F. Theis in the course <em>Statistical Learning</em>",
    thumb: "images/STAT_LEARN/output.png",
    bullets: [
      "Compared classifiers: linear Support Vector Machine (SVM), Radial Basis Function (RBF) SVM, decision tree, random forest and AdaBoost.",
      "Shows the limits of linear classifiers (linear SVM) compared with kernel classifiers (RBF SVM).",
      "Exposes the overfitting of single classifiers (decision trees) compared with ensemble methods: bagging (random forest) and boosting (AdaBoost).",
    ],
    images: [
      { src: "images/STAT_LEARN/output.png", caption: "Classification results on three toy datasets." },
    ],
  },
  {
    year: "2021",
    title: "Silicon Properties from DFT with Quantum ESPRESSO",
    org: "TU Munich, Simulation of Nanosystems for Energy Conversion",
    orgs: [{ name: "Associate Professorship Simulation of Nanosystems for Energy Conversion, TU Munich", url: "https://www.ee.cit.tum.de/sne/home/" }],
    people: "Supervised by M. Rinderle and I. Kouroudis · in collaboration with J. Schwend",
    thumb: "images/SEMICONDUCTORS/lattice_silicon.png",
    bullets: [
      "Performed self-consistent density functional theory (DFT) calculations to obtain the density of states (DOS) and band structure of silicon.",
      "Used different exchange-correlation functionals to obtain more accurate band-gap results.",
    ],
    images: [
      { src: "images/SEMICONDUCTORS/lattice_silicon.png", caption: "Silicon lattice (fcc)." },
      { src: "images/SEMICONDUCTORS/bandstructure.png", caption: "Band structure simulation." },
      { src: "images/SEMICONDUCTORS/dos.png", caption: "Density of states simulation." },
    ],
  },
  {
    year: "2019",
    title: "Aerosol Parameters in Atmospheric Radiative Transfer",
    org: "Bachelor's thesis, University of Milan",
    orgs: [{ name: "Condensed Matter Physics Group, Università degli Studi di Milano", url: "https://www.fisica.unimi.it/ecm/home/ricerca/gruppi-di-ricerca/fisica-della-materia-condensata" }],
    people: "Supervised by Prof. Potenza",
    thumb: "images/BACHELOR_THESIS/variaz_sigma_60g_2x_1.png",
    bullets: [
      "One of the greatest challenges in climate research is determining how light is affected by small particles (aerosols) in the atmosphere.",
      "Studied the sensitivity of diffuse irradiance to different types of Antarctic mineral dust aerosols.",
      "Ran radiative transfer simulations to determine the influence of three crucial aerosol parameters: phase function, extinction cross section and single-scattering albedo.",
    ],
    images: [
      { src: "images/BACHELOR_THESIS/IPCC.jpg", caption: "Courtesy of the Intergovernmental Panel on Climate Change (IPCC): radiative forcing due to different types of aerosols. The large error bars show that these effects are not yet well understood." },
      { src: "images/BACHELOR_THESIS/variaz_sigma_60g_2x_1.png", caption: "Percentage differences in downward irradiance (horizontal axis) at different altitudes (vertical axis), comparing prolate and oblate particle shapes with a spherical reference. The maximum is at sea level." },
    ],
  },
];

const featuredGrid = document.getElementById("featured-grid");
const track = document.getElementById("project-track");
const dialog = document.getElementById("project-dialog");
const dialogContent = document.getElementById("dialog-content");

function cardHTML(p, i, isCopy) {
  return `
    <button class="card" type="button" data-index="${i}"${isCopy ? ' tabindex="-1"' : ""}>
      <img class="card-thumb" src="${p.thumb}" alt="" loading="lazy" draggable="false">
      <span class="card-body">
        <span class="card-year">${p.year}${p.tag ? ` · ${p.tag}` : ""}</span>
        <span class="card-title">${p.short || p.title}</span>
        <span class="card-org">${p.org}</span>
      </span>
    </button>`;
}

// Cards keep their index into `projects`, so both sections open the right dialog.
function renderCards() {
  const indexed = projects.map((p, i) => ({ p, i }));
  featuredGrid.innerHTML = indexed
    .filter(({ p }) => p.featured)
    .map(({ p, i }) => cardHTML(p, i, false))
    .join("");

  // The second copy makes the loop seamless. It stays clickable, but is hidden
  // from assistive tech and skipped by the Tab key.
  const others = indexed.filter(({ p }) => !p.featured);
  track.innerHTML = `
    <div class="marquee-group">${others.map(({ p, i }) => cardHTML(p, i, false)).join("")}</div>
    <div class="marquee-group" aria-hidden="true">${others.map(({ p, i }) => cardHTML(p, i, true)).join("")}</div>`;
}

function openProject(p) {
  const orgs = p.orgs
    .map((o) => (o.url ? `<a href="${o.url}" target="_blank" rel="noopener">${o.name}</a>` : o.name))
    .join(" &amp; ");
  const bullets = p.bullets.map((b) => `<li>${b}</li>`).join("");
  const images = p.images
    .map(
      (img) => `
      <figure${img.wide ? ' class="wide"' : ""}>
        <a href="${img.src}" target="_blank" rel="noopener"><img src="${img.src}" alt="${img.caption.replace(/<[^>]+>/g, "")}" loading="lazy"></a>
        <figcaption>${img.caption}</figcaption>
      </figure>`
    )
    .join("");
  const links = (p.links || [])
    .map((l) => `<a class="button" href="${l.url}" target="_blank" rel="noopener">${l.label}</a>`)
    .join("");

  dialogContent.innerHTML = `
    <p class="dialog-meta">${p.year}${p.tag ? ` · ${p.tag}` : ""}</p>
    <h2 id="dialog-title">${p.title}</h2>
    <p class="dialog-org">${orgs}</p>
    ${p.people ? `<p class="dialog-people">${p.people}</p>` : ""}
    <ul>${bullets}</ul>
    <div class="gallery">${images}</div>
    ${links ? `<div class="dialog-links">${links}</div>` : ""}`;
  dialog.showModal();
  dialog.scrollTop = 0;
}

// ---------- Slider ----------
// The track is moved with a transform by `pos` pixels. It advances on its own and
// can be dragged, swiped, scrolled with a trackpad, or moved with the arrows and the
// range input. After any interaction it waits a moment and then continues.
const marquee = document.querySelector(".marquee");
const range = document.getElementById("project-range");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const SPEED = 40; // px per second
const RESUME_DELAY = 2500; // ms after an interaction

let pos = 0;
let loopWidth = 1; // width of one copy of the cards
let hovering = false;
let keyboardFocus = false;
let lastInteraction = -Infinity;
let tween = null;
let drag = null;
let suppressClick = false;
let openedByPointer = false;

function measure() {
  loopWidth = track.firstElementChild.offsetWidth || 1;
}

function step() {
  const cards = track.querySelectorAll(".card");
  return cards[1].getBoundingClientRect().left - cards[0].getBoundingClientRect().left;
}

function interacted() {
  lastInteraction = performance.now();
}

function paused(now) {
  return (
    hovering || keyboardFocus || drag?.active || dialog.open || reducedMotion.matches ||
    now - lastInteraction < RESUME_DELAY
  );
}

function render() {
  pos = ((pos % loopWidth) + loopWidth) % loopWidth;
  track.style.transform = `translate3d(${-pos}px, 0, 0)`;
  if (document.activeElement !== range) range.value = Math.round((pos / loopWidth) * 1000);
}

let last = performance.now();
function tick(now) {
  const dt = Math.min(now - last, 50);
  last = now;
  if (tween) {
    const t = Math.min((now - tween.start) / tween.duration, 1);
    pos = tween.from + (tween.to - tween.from) * (1 - Math.pow(1 - t, 3));
    if (t === 1) tween = null;
    interacted();
  } else if (!paused(now)) {
    pos += (SPEED * dt) / 1000;
  }
  render();
  requestAnimationFrame(tick);
}

function slideBy(direction) {
  const from = tween ? tween.to : pos;
  tween = { from: pos, to: from + direction * step(), start: performance.now(), duration: 450 };
}

// Hover pauses the slider so a card can be clicked. pointermove (not pointerenter)
// re-arms it, so closing a dialog over the band does not leave it paused.
marquee.addEventListener("pointermove", (e) => {
  if (e.pointerType === "mouse") hovering = true;
});
marquee.addEventListener("pointerleave", () => (hovering = false));

// Drag with the mouse or a finger. touch-action: pan-y in the CSS keeps vertical page scrolling.
marquee.addEventListener("pointerdown", (e) => {
  if (e.button !== 0) return;
  tween = null;
  drag = { id: e.pointerId, x: e.clientX, pos, active: false };
});
marquee.addEventListener("pointermove", (e) => {
  if (!drag || e.pointerId !== drag.id) return;
  const dx = e.clientX - drag.x;
  if (!drag.active && Math.abs(dx) > 6) {
    drag.active = true;
    marquee.setPointerCapture(e.pointerId);
    marquee.classList.add("dragging");
  }
  if (drag.active) pos = drag.pos - dx;
});
function endDrag(e) {
  if (!drag || e.pointerId !== drag.id) return;
  if (drag.active) {
    suppressClick = true; // the release after a drag is not a click on a card
    setTimeout(() => (suppressClick = false));
    marquee.classList.remove("dragging");
    interacted();
  }
  drag = null;
}
marquee.addEventListener("pointerup", endDrag);
marquee.addEventListener("pointercancel", endDrag);

// Horizontal trackpad scrolling.
marquee.addEventListener(
  "wheel",
  (e) => {
    if (Math.abs(e.deltaX) <= Math.abs(e.deltaY)) return;
    e.preventDefault();
    tween = null;
    pos += e.deltaX;
    interacted();
  },
  { passive: false }
);

// Keyboard: pause while a card has visible focus and keep that card on screen.
track.addEventListener("focusin", (e) => {
  const card = e.target.closest(".card");
  if (!card || !card.matches(":focus-visible")) return;
  keyboardFocus = true;
  marquee.scrollLeft = 0; // undo the browser's own scroll-into-view
  const offset = card.offsetLeft - pos;
  if (offset < 0 || offset + card.offsetWidth > marquee.clientWidth) pos = card.offsetLeft - 24;
});
track.addEventListener("focusout", () => (keyboardFocus = false));

document.getElementById("project-prev").addEventListener("click", () => slideBy(-1));
document.getElementById("project-next").addEventListener("click", () => slideBy(1));
range.addEventListener("input", () => {
  tween = null;
  pos = (range.value / 1000) * loopWidth;
  interacted();
});

function onCardClick(e) {
  const card = e.target.closest(".card");
  if (!card || suppressClick) return;
  openedByPointer = e.detail > 0;
  openProject(projects[card.dataset.index]);
}
track.addEventListener("click", onCardClick);
featuredGrid.addEventListener("click", onCardClick);

dialog.querySelector(".dialog-close").addEventListener("click", () => dialog.close());

// A click on the backdrop lands on the <dialog> itself, not on its content.
dialog.addEventListener("click", (e) => {
  if (e.target === dialog) dialog.close();
});

// On close the dialog hands focus back to the card. If it was opened with the mouse,
// drop that focus so the slider continues right away.
dialog.addEventListener("close", () => {
  hovering = false;
  if (openedByPointer && document.activeElement?.closest(".card")) document.activeElement.blur();
});

renderCards();
measure();
window.addEventListener("resize", measure);
requestAnimationFrame(tick);
