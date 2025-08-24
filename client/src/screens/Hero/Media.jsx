import React from "react";

const Media = () => {
  const url =
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1600&auto=format&fit=crop";
  console.log("Media mouned");

  return (
    <>
      {/* Background image */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-center bg-cover"
        style={{ backgroundImage: `url(${url})` }}
      />
      {/* Gradient overlay for text readability */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-b from-black/50 via-black/40 to-background/90"
      />
    </>
  );
};

export default Media;
