// Project data: the rolling bar and the detail dialog are both built from this list.
// `thumb` is the card image; `images` are shown in the dialog.
// Optional: `short` replaces the title on the card, `tag` is shown next to the year,
// `thumbFull` fills the card image area edge to edge, and `wide: true` on an image spans the dialog width.
const projects = [
  {
    year: "2026",
    tag: "Paper",
    title: "Exploiting the Weyl-Chamber Structure for Hardware-Aware Quantum Circuit Compression",
    short: "Hardware-Aware Quantum Circuit Compression via the Weyl Chamber",
    org: "Volkswagen Group & TU Munich",
    orgs: [{ name: "Preprint, arXiv:2610.32812 (2026)", url: "https://arxiv.org/abs/2610.32812" }],
    people: "<strong>N. Misciasci</strong>, I. N. M. Le, C. B. Mendl",
    thumb: "images/WEYL/weyl_chamber.svg",
    bullets: [
      "Compressing quantum circuits with tensor networks makes long-time simulation of quantum many-body dynamics possible on near-term hardware. Riemannian optimization does this over generic two-qubit gates, but each gate must then be decomposed into the hardware's native gates, which eats into the compression gain.",
      "We show that the optimized gates already have a predictable structure in the <strong>Weyl chamber</strong>: near-R<sub>ZZ</sub> for the Ising model and near-fSim for the Heisenberg XXZ model.",
      "Building on this, we optimize directly over the <strong>native gate set</strong>, with far fewer parameters. Gradients come from matrix product operator (MPO) contractions of each gate's environment.",
      "For 50-qubit chains: in the Ising model, the small residual Weyl coordinates turn out to be essential for high compression. In the Heisenberg XXZ model, native fSim circuits are more efficient and reach lower loss at equal depth.",
    ],
    images: [
      { src: "images/WEYL/weyl_chamber.svg", caption: "Weyl chamber of two-qubit gates up to local equivalence. R<sub>ZZ</sub>(θ) lies on the I–CNOT edge (orange); fSim(θ, φ) covers the face α<sub>x</sub> = α<sub>y</sub> (I–iSWAP–SWAP, teal)." },
      { src: "images/WEYL/heisenberg_weyl_coordinates.png", caption: "Weyl coordinates of the Riemannian-optimized gates for the Heisenberg XXZ model (N = 50). α<sub>x</sub> ≈ α<sub>y</sub> is the signature of an fSim gate, and α<sub>x</sub> ≈ 2|α<sub>z</sub>| reflects the coupling ratio J/|J<sub>z</sub>| = 2." },
      { src: "images/WEYL/heisenberg_results.png", caption: "Heisenberg XXZ model, N = 50: loss versus number of native two-qubit gate layers. Hardware-aware optimization (orange) reaches lower loss than Riemannian optimization (blue) over most of the depth range. Dashed lines show the initial Trotter circuits." },
    ],
    links: [
      { label: "arXiv", url: "https://arxiv.org/abs/2610.32812" },
      { label: "Code on GitHub", url: "https://github.com/ixaixim/weyl-circuit-compression" },
    ],
  },
  {
    year: "2026",
    tag: "Paper",
    title: "Evaluating Sample-Based Krylov Quantum Diagonalization for Heisenberg Models with Applications to Materials Science",
    short: "Quantum Diagonalization of Magnets on IBM Hardware",
    org: "Volkswagen Group × IBM collaboration",
    orgs: [{ name: "Entropy 28(4), 367 (2026)", url: "https://doi.org/10.3390/e28040367" }],
    people: "<strong>N. Misciasci</strong>, R. Firt, J. E. Mueller, T. Friedhoff, C. Onah, A. Schulze, S. Mostame · a Volkswagen Group and IBM collaboration",
    thumb: "images/SKQD/ground_state_sparsity.jpg",
    bullets: [
      "<strong>Motivation:</strong> the magnets in electric car motors. This study is one step in a much larger effort whose long-term goal is to develop and predict new magnetic materials with quantum computers.",
      "Together with <strong>IBM</strong>, we evaluate Sample-based Krylov Quantum Diagonalization (SKQD) on 1D and 2D Heisenberg models, the standard models of quantum magnetism.",
      "SKQD is efficient when the ground state is sparse, but magnetic ground states are often dense. We map the ground-state sparsity to see where the method should struggle.",
      "To compute magnetization curves, we built initial states from <strong>W states</strong> that target a chosen magnetization sector, and swept over the sectors.",
      "On IBM quantum hardware, 18- and 30-qubit chains reproduce the expected magnetization curves. On the IBM Nighthawk processor, we ran a 64-qubit 8×8 lattice modeled on the quasi-2D magnet [CuCl(pyz)<sub>2</sub>](BF<sub>4</sub>).",
      "In 2D, classical tensor-network methods quickly become expensive: the bond dimension DMRG needs grows exponentially with the lattice width, and contracting PEPS is #P-hard. This is where quantum computers could help.",
    ],
    images: [
      { src: "images/SKQD/ground_state_sparsity.jpg", caption: "Ground-state sparsity of a 20-spin Heisenberg model in the (Δ, h<sub>z</sub>) plane, shown as the logarithm of the inverse participation ratio (IPR). In the red regions the ground state is dense, which is where SKQD is expected to struggle." },
      { src: "images/SKQD/w_state_circuit.jpg", caption: "Circuit that prepares an initial state in a chosen magnetization sector from W states (here 6 qubits built from two 3-qubit W states). It lets SKQD sweep over the magnetization sectors." },
      { src: "images/SKQD/magnetization_energy_8x8.png", caption: "64-qubit 8×8 lattice of [CuCl(pyz)<sub>2</sub>](BF<sub>4</sub>) on IBM's Nighthawk processor: relative magnetization (A) and ground-state energy (B) versus magnetic field, SKQD compared with DMRG. Lattices like this are already hard for tensor-network methods, since the required bond dimension grows exponentially with the lattice width." },
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
    thumb: "images/QUEST/windbreaking_thumb.jpg",
    thumbFull: true,
    bullets: [
      "<strong>Windbreaking-as-a-Service (WaaS):</strong> a larger \"windbreaker\" vehicle shields a \"windsurfer\" vehicle from the wind, which reduces drag and energy consumption. An app could pair drivers who share a route.",
      "QUEST is the computational framework behind the pairing: matching windbreakers to windsurfers under timing, speed and vehicle-class constraints, formulated as a mixed-integer quadratic problem.",
      "For a single-segment prototype, we verified the optimum classically (Hungarian algorithm, Gurobi, brute-force enumeration), then rewrote the problem as a QUBO / Ising Hamiltonian and solved it with <strong>QAOA on IBM quantum hardware</strong>, which recovered the optimal assignment.",
      "Extrapolating the measured runtimes, the quantum solver would overtake Gurobi at about 16 surfer–breaker pairs, a problem that needs about 256 qubits. A quantum speedup remains unproven.",
    ],
    images: [
      { src: "images/QUEST/windbreaking.jpg", caption: "Windbreaking in action: the windbreaker shields the windsurfer from the wind.", wide: true },
      { src: "images/QUEST/waas_app.png", caption: "A possible realization of the WaaS app: suitable windbreakers nearby, with the CO<sub>2</sub> saved by each pairing." },
      { src: "images/QUEST/runtime_gurobi_qaoa.png", caption: "Runtime of the Gurobi QUBO solver versus quantum hardware time for depth-4 QAOA, with exponential fits. The fits cross at about 16 surfer–breaker pairs (worst case assumed for the quantum runtime)." },
    ],
    links: [
      { label: "IEEE", url: "https://doi.org/10.1109/QCE65121.2025.00235" },
      { label: "arXiv", url: "https://arxiv.org/abs/2505.08074" },
    ],
  },
  {
    year: "2025",
    tag: "Paper",
    title: "AUGUR, a Flexible and Efficient Optimization Algorithm for Identification of Optimal Adsorption Sites",
    short: "AUGUR: Finding Optimal Adsorption Sites with GNNs",
    org: "TU Munich · npj Computational Materials",
    orgs: [{ name: "npj Computational Materials 11, 136 (2025)", url: "https://doi.org/10.1038/s41524-025-01630-5" }],
    people: "I. Kouroudis, Poonam, <strong>N. Misciasci</strong>, F. Mayr, L. Müller, Z. Gu, A. Gagliardi · Chair of Simulation of Nanosystems for Energy Conversion, TU Munich",
    thumb: "images/AUGUR/pt9_cluster.png",
    bullets: [
      "Finding where a molecule binds best on a cluster or surface (the optimal adsorption site) normally takes many expensive density functional theory (DFT) calculations.",
      "<strong>AUGUR</strong> (Aware of Uncertainty Graph Unit Regression) combines <strong>graph neural networks</strong> and <strong>Gaussian processes</strong> into a symmetry-aware energy predictor with built-in uncertainty quantification.",
      "Used as the surrogate in a data-efficient <strong>Bayesian optimization</strong>, it finds the optimal adsorption sites of large, complex clusters in far fewer iterations than state-of-the-art approaches, without hand-crafted features.",
      "Graph pooling lets one model handle molecules of different sizes, so a model trained on small, cheap systems can predict energies of expensive ones. Case studies: platinum Chini clusters, a (ZnO)<sub>78</sub> nanocluster, a covalent organic framework and defective silicene.",
      "My contributions: software, methodology, data curation, formal analysis and investigation.",
    ],
    images: [
      { src: "images/AUGUR/pt9_zn_energy_surface.jpg", caption: "Pt<sub>9</sub>–Zn cluster: energy surface predicted by AUGUR in eV (left), the most favorable adsorption position of the Zn atom (top middle), and the uncertainty of the prediction (right).", wide: true },
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

const track = document.getElementById("project-track");
const dialog = document.getElementById("project-dialog");
const dialogContent = document.getElementById("dialog-content");

function cardHTML(p, i) {
  return `
    <button class="card" type="button" data-index="${i}">
      <img class="card-thumb${p.thumbFull ? " full" : ""}" src="${p.thumb}" alt="" loading="lazy">
      <span class="card-body">
        <span class="card-year">${p.year}${p.tag ? ` · ${p.tag}` : ""}</span>
        <span class="card-title">${p.short || p.title}</span>
        <span class="card-org">${p.org}</span>
      </span>
    </button>`;
}

function renderTrack() {
  const cards = projects.map(cardHTML).join("");
  // The second copy makes the loop seamless; it is hidden from assistive tech and keyboard.
  track.innerHTML = `
    <div class="marquee-group">${cards}</div>
    <div class="marquee-group" aria-hidden="true" inert>${cards}</div>`;
  track.style.setProperty("--duration", `${projects.length * 9}s`);
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

track.addEventListener("click", (e) => {
  const card = e.target.closest(".card");
  if (card) openProject(projects[card.dataset.index]);
});

dialog.querySelector(".dialog-close").addEventListener("click", () => dialog.close());

// A click on the backdrop lands on the <dialog> itself, not on its content.
dialog.addEventListener("click", (e) => {
  if (e.target === dialog) dialog.close();
});

renderTrack();
