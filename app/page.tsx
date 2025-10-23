const highlights = [
  {
    title: "Programmable analog memory",
    description:
      "Floating-gate transistors trap charge without a refresh cycle, giving each cell precise, non-volatile analog weights that stay put for field deployments.",
  },
  {
    title: "Consistency across silicon generations",
    description:
      "We validated floating gates from mature 350 nm CMOS through 16 nm FinFET, confirming matched behavior and tooling portability across six production nodes.",
  },
  {
    title: "Analog-first efficiency",
    description:
      "Measured systems routinely deliver over 1000× energy improvements versus digital baselines, unlocking battery-friendly inference without sacrificing accuracy.",
  },
];

const tooling = [
  {
    title: "ASHES synthesis flow",
    description:
      "Describe architectures in Python and compile directly to FPAA bitstreams or ASIC layouts. One codebase handles both exploration and production.",
  },
  {
    title: "Unified floating-gate libraries",
    description:
      "Standard-cell libraries capture bias points, routing patterns, and calibration data, so every design starts with proven analog building blocks.",
  },
  {
    title: "Prototype without detours",
    description:
      "Our 600k-device FPAA platform mirrors the ASIC fabric, letting teams evaluate neural primitives, calibrate weights, and script measurement loops before tapeout.",
  },
];

const mlHighlights = [
  {
    title: "MLP inference without ADCs",
    description:
      "Custom floating-gate activations and current-mode winners-take-all blocks keep the entire multilayer perceptron analog, trimming power-hungry conversions.",
  },
  {
    title: "Audio feature pipeline",
    description:
      "A ladder-filter front end paired with on-chip classifiers captures time and frequency structure simultaneously, proven on our FPAA silicon.",
  },
  {
    title: "Calibrated deployment",
    description:
      "Automated measurement scripts translate digital weights into floating-gate biases, tighten corners, and prepare data for the production assembly line.",
  },
];

const processNodes = [
  "350 nm CMOS",
  "180 nm CMOS",
  "130 nm CMOS",
  "65 nm CMOS",
  "28 nm CMOS",
  "16 nm FinFET",
];

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <div className="flex min-h-screen flex-col bg-slate-950 text-slate-100">
      <header className="relative isolate overflow-hidden px-6 pt-16 pb-24 sm:px-12">
        <div
          className="absolute inset-0 -z-10 bg-gradient-to-br from-amber-500/30 via-emerald-500/20 to-transparent opacity-60 blur-3xl"
          aria-hidden="true"
        />
        <div className="mx-auto max-w-5xl text-center sm:text-left">
          <span className="inline-flex items-center rounded-full border border-amber-400/40 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-amber-300/80">
            Chips FC
          </span>
          <h1 className="mt-8 text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Floating-gate silicon for the next wave of analog machine learning.
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-slate-300 sm:text-xl">
            We pair decades of floating-gate research with a modern tool stack to deliver
            programmable analog compute blocks that drop into today&apos;s supply chain. The
            result is a power-efficient ML chip that stays programmable long after deployment.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#story"
              className="rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-amber-300"
            >
              Why floating gates now
            </a>
            <a
              href="#process"
              className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:text-amber-200"
            >
              Explore the roadmap
            </a>
          </div>
        </div>
      </header>

      <main className="flex-1 space-y-24 bg-slate-950 pb-24">
        <section id="story" className="px-6 sm:px-12">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-200/80">
              Proven foundation
            </h2>
            <p className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
              Floating gates give us precise, reconfigurable analog behavior without burning power.
            </p>
            <p className="mt-6 text-base text-slate-300 sm:text-lg">
              Each floating-gate device stores charge inside a fully insulated gate, letting us program
              bias currents, offsets, and weights with subthreshold-level accuracy. The same mechanisms
              that power Flash memory become tunable analog parameters once we pair them with the right
              injection and tunneling controls.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-emerald-900/30 backdrop-blur"
                >
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="px-6 sm:px-12">
          <div className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-950 p-10">
            <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-200/80">
              Fabrication confidence
            </h2>
            <p className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
              Six process nodes, one behavior profile.
            </p>
            <p className="mt-6 max-w-3xl text-base text-slate-300 sm:text-lg">
              Floating-gate arrays built with our libraries and calibration flow stay stable from mature
              nodes to advanced FinFET processes. That continuity keeps device physics predictable,
              simplifies qualification, and lets designer choose the node that fits their volume and
              cost targets.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {processNodes.map((node) => (
                <span
                  key={node}
                  className="rounded-full border border-emerald-300/30 bg-emerald-500/10 px-5 py-2 text-sm font-medium text-emerald-200"
                >
                  {node}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id="tooling" className="px-6 sm:px-12">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-200/80">
              Tooling that matches the silicon
            </h2>
            <p className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
              Design once, deploy from lab benches to production wafers.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {tooling.map((item) => (
                <div
                  key={item.title}
                  className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur"
                >
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="text-sm leading-6 text-slate-300">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="ml" className="px-6 sm:px-12">
          <div className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-slate-900/70 p-10">
            <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-fuchsia-200/80">
              Machine learning, analog end-to-end
            </h2>
            <p className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
              Field demonstrations prove the workflow before tapeout.
            </p>
            <p className="mt-6 max-w-3xl text-base text-slate-300 sm:text-lg">
              Our team has already delivered multilayer perceptrons and audio inference front ends on the
              FPAA using the exact cells and compilation flow that map to ASICs. The outcome: a verified
              training-to-silicon loop where analog ML performance is measured, not just simulated.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {mlHighlights.map((item) => (
                <div key={item.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      <footer className="px-6 py-12 text-sm text-slate-500 sm:px-12">
        <div className="mx-auto flex max-w-5xl flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <span className="font-semibold text-slate-300">Chips FC</span>
          <span>© {year} Analog compute, ready for production.</span>
        </div>
      </footer>
    </div>
  );
}
