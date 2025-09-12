import { useMemo, useState } from "react";
import PostCard from "@screens/PostCard";
import Pagination from "./Pagination.jsx";

export default function PostsGrid({
  items = [],
  perPage = 6, // desktop-friendly default
  className = "",
  title = "Latest Posts", // optional section heading
  id, // optional anchor id
}) {
  const [page, setPage] = useState(1);

  const totalPages = Math.max(1, Math.ceil(items.length / perPage));
  const pageItems = useMemo(() => {
    const start = (page - 1) * perPage;
    return items.slice(start, start + perPage);
  }, [items, page, perPage]);

  const onPrev = () => setPage((p) => Math.max(1, p - 1));
  const onNext = () => setPage((p) => Math.min(totalPages, p + 1));

  return (
    <section id={id} className={className}>
      {title ? (
        <header className="mb-4">
          <h2 className="font-serif text-2xl md:text-3xl">{title}</h2>
        </header>
      ) : null}

      {/* Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {pageItems.map((p, i) => (
          <PostCard
            key={i + 1}
            href={`/post/${p.slug}`} // We'll switch to <Link> after router setup
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
        {pageItems.length === 0 && (
          <div className="col-span-full text-center text-muted-foreground py-10 border border-dashed border-border rounded-lg">
            No posts to show.
          </div>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <Pagination
          page={page}
          totalPages={totalPages}
          onPrev={onPrev}
          onNext={onNext}
        />
      )}
    </section>
  );
}
