import React from "react";
import PostCard from "@screens/PostCard";

const DemoCards = () => {
  const cover =
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop";
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <PostCard
        href="/post/exploring-forests"
        title="Exploring the Ancient Forests"
        cover={cover}
        coverAlt="Misty forest"
        tag="Forest"
        excerpt="From moss-laden trunks to canopies teeming with life, walk through the living archives of Earth."
        author="Vishal"
        readTime="4 min read"
        date="2025-08-20"
      />
      <PostCard
        href="/post/exploring-forests"
        title="Exploring the Ancient Forests"
        cover={cover}
        coverAlt="Misty forest"
        tag="Forest"
        excerpt="From moss-laden trunks to canopies teeming with life, walk through the living archives of Earth."
        author="Vishal"
        readTime="4 min read"
        date="2025-08-20"
      />
      <PostCard
        href="/post/exploring-forests"
        title="Exploring the Ancient Forests"
        cover={cover}
        coverAlt="Misty forest"
        tag="Forest"
        excerpt="From moss-laden trunks to canopies teeming with life, walk through the living archives of Earth."
        author="Vishal"
        readTime="4 min read"
        date="2025-08-20"
      />
      <PostCard
        href="/post/exploring-forests"
        title="Exploring the Ancient Forests"
        cover={cover}
        coverAlt="Misty forest"
        tag="Forest"
        excerpt="From moss-laden trunks to canopies teeming with life, walk through the living archives of Earth."
        author="Vishal"
        readTime="4 min read"
        date="2025-08-20"
      />
    </section>
  );
};

export default DemoCards;
