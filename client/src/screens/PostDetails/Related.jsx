import React from "react";

import PostCard from "@screens/PostCard";

const Related = ({ items = [] }) => {
  if (!items.length) return null;

  return (
    <section className="mt-12">
      <h2 className="font-serif text-2xl md:text-3xl">Related posts</h2>
      <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((p) => (
          <PostCard
            key={p.slug}
            href={`/post/${p.slug}`} /* Router add hoga later */
            cover={p.cover}
            coverAlt={p.coverAlt}
            tag={p.tag}
            title={p.title}
            excerpt={p.excerpt}
            author={p.author}
            readTime={p.readTime}
            date={p.date}
          />
        ))}
      </div>
    </section>
  );
};

export default Related;
