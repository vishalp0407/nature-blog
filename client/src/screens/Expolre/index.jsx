import React, { useMemo, useState } from "react";
import SearchInput from "./SearchInput";
import CategorySelect from "./CategorySelect";
import LocationSelect from "./LocationSelect";
import SortSelect from "./SortSelect";
import TagFilter from "./TagFilter";
import ActiveFilters from "./ActiveFilters";
import PostsGrid from "@screens/PostGrid";
import { demoPosts } from "@screens/PostGrid/data";

const Explore = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [location, setLocation] = useState("Any");
  const [sort, setSort] = useState("newest");
  const [tags, setTags] = useState([]);
  console.log(search);

  const onToggleTag = (t) =>
    setTags((curr) =>
      curr.includes(t) ? curr.filter((x) => x !== t) : [...curr, t]
    );
  const onClearTag = (t) => setTags((curr) => curr.filter((x) => x !== t));
  const onClearAll = () => {
    setSearch("");
    setTags([]);
    setCategory("All");
    setLocation("Any");
    setSort("newest");
  };
  const filtered = useMemo(() => {
    let list = [...demoPosts, ...demoPosts, ...demoPosts];

    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.excerpt.toLowerCase().includes(q) ||
          p.tag.toLowerCase().includes(q)
      );
    }
    if (tags.length) {
      list = list.filter((p) => tags.includes(p.tag));
    }
    if (category !== "All") {
      list = list.filter((p) =>
        category === "photo Esssay"
          ? p.title.toLowerCase().includes("photo")
          : true
      );
    }
    if (location !== "Any") {
    }
    if (sort === "newest") {
      list.sort((a, b) => new Date(b.date) - new Date(a.date));
    }
    if (sort === "popular") {
      // demo: leave order or custom sort; keeping as-is
    }
    return list;
  }, [search, tags, category, location, sort]);

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <header className="mb-6">
        <h1 className="font-serif text-2xl md:text-3xl">Explore</h1>
        <p className="text-muted-foreground mt-1">
          Filter posts by tags, category, and more.
        </p>
      </header>
      <div className="grid gap-4 md:grid-cols-[1.3fr_.7fr_.7fr_.7fr]">
        <SearchInput value={search} onChange={setSearch} />
        <CategorySelect value={category} onChange={setCategory} />
        <LocationSelect value={location} onChange={setLocation} />
        <SortSelect value={sort} onChange={setSort} />
      </div>
      <div className="mt-4">
        <TagFilter selected={tags} onToggle={onToggleTag} />
      </div>
      <div className="mt-4">
        <ActiveFilters
          search={search}
          tags={tags}
          category={category}
          location={location}
          onClearTag={onClearTag}
          onClearAll={onClearAll}
        />
      </div>
      <div className="mt-8">
        <PostsGrid items={filtered} perPage={6} title="results" />
      </div>
    </section>
  );
};

export default Explore;
