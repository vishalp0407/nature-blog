import React from "react";
import ThemeGuide from "@components/ThemeGuide";
import Layouts from "@components/Layouts";

const App = () => {
  return (
    <div className="min-h-screen">
      <Layouts
        title="Layout Ready ✅"
        description="This page uses Container + Page wrappers for consistent spacing."
        headerExtra={
          <button className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-medium">
            Action
          </button>
        }
      >
        <div className="grid gap-6 md:grid-cols-3">
          <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 shadow-lg">
            <h3
              className="text-xl"
              style={{ fontFamily: '"DM Serif Display", serif' }}
            >
              Card One
            </h3>
            <p className="text-slate-300 mt-2">
              Consistent container padding & max width.
            </p>
          </div>
          <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 shadow-lg">
            <h3
              className="text-xl"
              style={{ fontFamily: '"DM Serif Display", serif' }}
            >
              Card Two
            </h3>
            <p className="text-slate-300 mt-2">
              Reusable Page header with title/desc.
            </p>
          </div>
          <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 shadow-lg">
            <h3
              className="text-xl"
              style={{ fontFamily: '"DM Serif Display", serif' }}
            >
              Card Three
            </h3>
            <p className="text-slate-300 mt-2">
              Body spacing controlled by Page.
            </p>
          </div>
        </div>
      </Layouts>
    </div>
  );
};

export default App;
