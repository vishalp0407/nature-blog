import React from "react";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Hero from "@screens/Hero";

const App = () => {
  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col">
      <Header />
      <main className="">
        <Hero />

        {/* Later: attach id="latest" to the posts grid section */}
        <section
          id="latest"
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10"
        >
          <h2 className="font-serif text-2xl md:text-3xl">Latest Posts</h2>
          <p className="text-muted-foreground mt-2">
            We’ll render the post cards here in S2.4–S2.5.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
