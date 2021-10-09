import React, { useEffect, useState } from "react";
import styled from "styled-components";
import BlogCradList from "../Components/Cards/BlogCard/BlogCradList";
import MainLayout from "../Containers/Layouts/MainLayout/MainLayout";
import Loader from "../Components/Loader/Loader";
import Prismic from "prismic-javascript";
import { Client } from "../prismic-config";

export default function Blog() {
  const [BlogData, setBlogData] = useState({
    blogdata: null,
  });

  useEffect(() => {
    const fetchPrismicData = async () => {
      const prismicData = await Client.query(
        Prismic.Predicates.at("document.type", "sortcoder_blog"),
        { orderings: "[my.post.date desc]" }
      );

      if (prismicData) {
        setBlogData({
          blogdata: prismicData.results,
        });
      }
    };
    fetchPrismicData();
  }, []);

  if (BlogData.blogdata) {
    return (
      <>
        <MainLayout>
          <BlogContainer>
            <BlogWrapper>
              <div>
                <BlogCradList data={BlogData.blogdata} />
              </div>
            </BlogWrapper>
          </BlogContainer>
        </MainLayout>
      </>
    );
  } else {
    return (
      <>
        <Loader />
      </>
    );
  }
}

const BlogContainer = styled.div``;
const BlogWrapper = styled.div`
  background-color: white;
  max-width: 1172px;
  width: 100%;
  margin: 0 auto;
  padding: 60px 0;
  div {
    display: flex;
    flex-wrap: wrap;
  }
`;
