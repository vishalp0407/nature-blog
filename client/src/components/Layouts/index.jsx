import Container from "@components/Container";
import React from "react";

const Layouts = ({ title, description, headerExtra = null, children }) => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header section */}
      {(title || description || headerExtra) && (
        <div className="border-b border-border">
          <Container className="py-6 md:py-8">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                {title && (
                  <h1 className="text-2xl md:text-3xl font-serif tracking-tight">
                    {title}
                  </h1>
                )}
                {description && (
                  <p className="text-muted-foreground mt-1">{description}</p>
                )}
              </div>
              {headerExtra && <div className="shrink-0">{headerExtra}</div>}
            </div>
          </Container>
        </div>
      )}

      {/* Body section */}
      <main>
        <Container className="py-6 md:py-10">{children}</Container>
      </main>
    </div>
  );
};

export default Layouts;
