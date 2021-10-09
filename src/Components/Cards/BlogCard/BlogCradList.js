import React from "react";
import BlogCard from "./BlogCard";
export default function BlogCradList({ data }) {
  console.log(data);
  return (
    <>
      {data.map((d) => (
        <>
          <BlogCard
            key={d.uid}
            img={d.data.image.url}
            postDate={d.data.public_date}
            postTitle={d.data.title[0].text}
            postSubtext={d.data.subtext[0].text}
            postId={d}
            author={d.data.author[0]}
          />
        </>
      ))}
    </>
  );
}
