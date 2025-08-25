import React from "react";
import PostDetails from "@screens/PostDetails";
import { demoPosts } from "@screens/PostGrid/data";

const DummyPostDetails = () => {
  const main = {
    slug: "exploring-forests",
    title: "Exploring the Ancient Forests",
    author: "virat kohali",
    readTime: "5 min read",
    date: "2025-08=20",
    cover:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop",
    coverAlt: "Misty forest",
    content: (
      <>
        <p>
          Ancient forests are living archives of biodiversity—moss-laden trunks,
          lichens, and layered canopies tell stories of time.
        </p>
        <h2>Canopy & understory</h2>
        <p>
          From towering conifers to fern carpets, each layer shapes light, wind,
          and water. Keystone species maintain balance.
        </p>
        <img
          src="https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?q=80&w=1200&auto=format&fit=crop"
          alt="Forest detail"
        />
        <p>
          Conservation efforts rely on understanding these interactions—soil
          webs, fungi networks, and migration corridors.
        </p>
      </>
    ),
  };
  const related = demoPosts.slice(0, 3);
  return <PostDetails posts={main} related={related} />;
};

export default DummyPostDetails;
