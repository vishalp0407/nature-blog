import React from "react";

const ThemeGuide = () => {
  return (
    <div className="min-h-screen px-6 py-12 ">
      <div className="mx-auto max-w-5xl space-y-8">
        {/* Header */}
        <header className="flex items-center justify-between ">
          <div>
            <h1
              className="text-4xl tracking-tight"
              style={{ fontFamily: '"DM Serif Display", serif' }}
            >
              Nature Blog — Theme (v4.1 defaults)
            </h1>
            <p className="text-slate-400 mt-1">
              Dark-first palette using Tailwind default classes only.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button className="inline-flex items-center gap-2 px-4 py-2 rounded-xl font-medium border border-slate-700 text-slate-200 hover:bg-slate-800 transition ">
              Ghost
            </button>
            <button className="inline-flex items-center gap-2 px-4 py-2 rounded-xl font-medium bg-emerald-500 hover:bg-emerald-400 text-slate-900 transition">
              Primary
            </button>
          </div>
        </header>
        {/* colors preview (default utilities) */}
        <section className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div className="rounded-2xl bg-slate-950 border border-slate-800 p-4 shadow-lg">
            <div className="text-sm uppercase tracking-wide text-slate-400">
              background
            </div>
            <div className="mt-2 text-lg">Aa</div>
          </div>
          <div className="rounded-2xl bg-slate-950 border border-slate-800 p-4 shadow-lg">
            <div className="text-sm uppercase tracking-wide text-slate-400">
              surface
            </div>
            <div className="mt-2 text-lg">Aa</div>
          </div>
          <div className="rounded-2xl bg-slate-950 border border-slate-800 p-4 shadow-lg">
            <div className="text-sm uppercase tracking-wide text-slate-400">
              card
            </div>
            <div className="mt-2 text-lg">Aa</div>
          </div>
          <div className="rounded-2xl bg-slate-950 border border-slate-800 p-4 shadow-lg">
            <div className="text-sm uppercase tracking-wide text-slate-400">
              brand
            </div>
            <div className="mt-2 text-lg">Aa</div>
          </div>
        </section>
        {/* Typograph8y +card */}
        <section className="rounded-2xl bg-slate-900 border border-slate-800 shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Typography</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <div
                className="text-3xl"
                style={{ fontFamily: '"DM Serif Display", serif' }}
              >
                Serif Heading — DM Serif Display
              </div>
              <p className="text-slate-300 mt-2">
                Body text uses <span className="font-medium">Inter</span> for
                readability.
              </p>
            </div>
            <div>
              <div className="text-sm text-slate-400">Meta /Muted</div>
              <div className="text-lg">Regular Text</div>
              <div className="text-xl font-semibold">Emphasis</div>
            </div>
          </div>
        </section>
        {/* Components preview */}
        <section className="grid md:grid-cols-3 gap-6">
          <article className="rounded-2xl bg-slate-900 border border-slate-800 shadow-lg p-5">
            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs border border-slate-700 bg-slate-800">
              Tag
            </span>
            <h3
              className="text-2xl mt-3"
              style={{ fontFamily: '"DM Serif Display", serif' }}
            >
              Post Card Title
            </h3>
            <p className="text-slate-300 mt-2">
              Short excerpt explaining the post in one or two lines.
            </p>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-slate-400 text-sm">3 min read</span>
              <button className="inline-flex items-center px-3 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-medium">
                Read
              </button>
            </div>
          </article>

          <article className="rounded-2xl bg-slate-900 border border-slate-800 shadow-lg p-5">
            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs border border-slate-700 bg-slate-800">
              Climate
            </span>
            <h3
              className="text-2xl mt-3"
              style={{ fontFamily: '"DM Serif Display", serif' }}
            >
              Another Card
            </h3>
            <p className="text-slate-300 mt-2">
              Muted text and surface contrast preview.
            </p>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-slate-400 text-sm">5 min read</span>
              <button className="inline-flex items-center px-3 py-1.5 rounded-xl border border-slate-700 text-slate-200 hover:bg-slate-800">
                Details
              </button>
            </div>
          </article>

          <div className="rounded-2xl bg-slate-900 border border-slate-800 shadow-lg p-5">
            <h4 className="text-xl font-semibold">Shadows & Radius</h4>
            <p className="text-slate-300 mt-2">
              Rounded-2xl, default shadow-lg, and borders.
            </p>
            <div className="mt-4 h-24 rounded-3xl shadow-lg bg-slate-800 border border-slate-700" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default ThemeGuide;
