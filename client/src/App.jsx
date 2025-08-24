import React from "react";
import Header from "@components/Header";
import Footer from "@components/Footer";

const App = () => {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <Header />
      <main className="p-6">
        <h1 className="font-serif text-3xl">Hello, Nature Blog!</h1>
        <p className="font-sans text-muted-foreground mt-2">
          Navbar is sticky and responsive ✅
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default App;
