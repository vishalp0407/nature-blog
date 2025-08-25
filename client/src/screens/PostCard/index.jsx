import React from "react";
import Image from "./Image";
import Tag from "./Tag";
import Excerpt from "./Excerpt";
import Title from "./Title";
import Meta from "./Meta";
import Hero from "@screens/Hero";

const PostCard = ({
  href = "#",
  title,
  cover,
  coverAlt = "Cover image",
  className = "",
  tag,
  excerpt,
  author,
  readTime,
  date,
}) => {
  return (
    <article
      className={`group rounded-lg bg-card text-card-foreground border border-border shadow transition hover:-translate-y-0.5 hover:shadow-lg ${className}`}
    >
      <Image src={cover} alt={coverAlt} />

      {/* Body */}
      <div className="p-4 space-y-3">
        <Tag label={tag} />
        <Title href={href}>{title}</Title>
        <Excerpt text={excerpt} />
        <Meta author={author} readTime={readTime} date={date} />
      </div>
    </article>
  );
};

export default PostCard;
