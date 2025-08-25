import React from "react";

import Hero from "@screens/Hero";
import PostsGrid from "@screens/PostGrid";
import { demoPosts } from "@screens/PostGrid/data";

const HomeScreen = () => {
  const many = [...demoPosts, ...demoPosts, ...demoPosts];
  return (
    <>
      <Hero />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <PostsGrid id="latest" title="Latest Post" items={many} perPage={6} />
      </div>
    </>
  );
};

export default HomeScreen;
