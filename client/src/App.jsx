import React from "react";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Hero from "@screens/Hero";
import DemoCards from "@screens/DemoCard";
import PostsGrid from "@screens/PostGrid";
import { demoPosts } from "@screens/PostGrid/data";
import Explore from "@screens/Expolre";
import PostDetails from "@screens/PostDetails";
import DummyPostDetails from "@screens/DummyPostDetails";

const App = () => {
  const many = [...demoPosts, ...demoPosts, ...demoPosts];
  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        {/* <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <PostsGrid id="latest" title="LatestPost" items={many} perPage={6} />
        </div> */}
        <Explore />
        <DummyPostDetails />
      </main>
      <Footer />
    </div>
  );
};

export default App;
