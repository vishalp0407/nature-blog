import React from "react";
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import PostDetails from "@screens/PostDetails";
import { demoPosts } from "@screens/PostGrid/data";

const PostScreen = () => {
  const { slug } = useParams();

  // find main post by slug (fallback to null)
  const post = demoPosts.find((p) => p.slug === slug) || null;

  // derive related (simple: other posts)
  const related = demoPosts.filter((p) => p.slug !== slug).slice(0, 3);

  // scroll to top on mount/slug change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // if not found → friendly not-found view (inside main layout)
  if (!post) {
    return (
      <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="font-serif text-3xl">Post not found</h1>
        <p className="text-muted-foreground mt-2">
          The post you’re looking for doesn’t exist or was moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="px-4 py-2 rounded-md bg-accent text-accent-foreground font-medium hover:opacity-90"
          >
            Go to Home
          </Link>
        </div>
      </section>
    );
  }

  // build the article body (demo content for now)
  const main = {
    ...post,
    content: (
      <>
        <p>
          This is a demo article for <b>{post.title}</b>. Replace this with real
          content (Markdown/HTML) later.
        </p>
        <h2>Section heading</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          habitant morbi tristique senectus et netus.
        </p>

        <p>
          Aliquam vitae urna vel leo facilisis bibendum. Curabitur at diam ut
          lectus accumsan ultricies.
        </p>
      </>
    ),
  };

  return <PostDetails post={main} related={related} />;
};

export default PostScreen;
