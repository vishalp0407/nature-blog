import React from "react";
import Container from "@components/Container";

const Layouts = ({ title, description, headerExtra = null, children }) => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {(title || description || headerExtra) && (
        <div className="border-b border-slate-800">
          <Container className="py-6 md:py-8">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                {title && (
                  <h1
                    className="text-2xl md:text-3xl tracking-tight"
                    style={{ fontFamily: '"DM Serif Display", serif' }}
                  >
                    {title}
                  </h1>
                )}
                {description && (
                  <p className="text-slate-400 mt-1">{description}</p>
                )}
              </div>
              {headerExtra && <div className="shrink-0">{headerExtra}</div>}
            </div>
          </Container>
        </div>
      )}
      <main>
        <Container className="py-6 md:py-10">{children}</Container>
      </main>
    </div>
  );
};

export default Layouts;
