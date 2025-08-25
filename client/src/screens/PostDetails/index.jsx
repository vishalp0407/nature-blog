import React from "react";
import Header from "./Header";
import Cover from "./Cover";
import Content from "./Content";
import Related from "./Related";

const PostDetails = ({ post, realted = [] }) => {
  if (!post) return null;
  const { title, author, date, readTime, cover, coverAlt, content } = post;
  return (
    <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-10">
      <Header title={title} author={author} date={date} readTime={readTime} />
      <Cover src={cover} alt={coverAlt} />
      <Content children={content} />
      {/* content  JSX/Html  md-rendered output passed in by parent later */}

      <Related items={realted} />
    </section>
  );
};

export default PostDetails;
