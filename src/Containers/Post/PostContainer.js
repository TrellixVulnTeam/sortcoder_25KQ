import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import MainLayout from "../Layouts/MainLayout/MainLayout";
import { Client } from "../../prismic-config";
import Loader from "../../Components/Loader/Loader";

export default function PostContainer({ match }) {
  const [ArticleData, setArticleData] = useState(null);
  const id = match.params.id;
  let list_item = [];
  let li_count = -1;
  useEffect(() => {
    const fetchPrismicData = async () => {
      const article = await Client.getByUID("sortcoder_blog", id);
      setArticleData(article);
    };
    fetchPrismicData();
  }, [id]);
  console.log(ArticleData);
  if (ArticleData == null) {
    return (
      <>
        <Loader />
      </>
    );
  } else {
    return (
      <>
        {/* Head Component */}
        <Helmet>
          <title>{ArticleData.data.title[0].text}</title>
          <meta
            data-rh="true"
            property="article:published_time"
            content={ArticleData.data.public_date}
          ></meta>
          <meta
            data-rh="true"
            name="title"
            content={ArticleData.data.title[0].text}
          ></meta>
          <meta
            data-rh="true"
            name="description"
            content={ArticleData.data.subtext[0].text}
          ></meta>
          <meta
            data-rh="true"
            property="og:description"
            content={ArticleData.data.subtext[0].text}
          ></meta>
          <meta
            data-rh="true"
            property="twitter:description"
            content={ArticleData.data.subtext[0].text}
          ></meta>
          <meta
            data-rh="true"
            property="og:url"
            content="https://www.sortcoder.tech/blog/getting-started-with-python"
          ></meta>
          <meta
            data-rh="true"
            property="al:web:url"
            content="https://www.sortcoder.tech/blog/getting-started-with-python"
          ></meta>
          <meta
            data-rh="true"
            name="keywords"
            content="SORTCODER BLOG, PROGRAMMING, LEARN CODE FREE, CODING, CODE"
          ></meta>
        </Helmet>
        <MainLayout>
          <PostWrapper>
            <Container>
              <PostHeader>
                <h1>{ArticleData.data.title[0].text}</h1>
                <p>{ArticleData.data.subtext[0].text}</p>
                <PostHeaderImg>
                  <img
                    src={ArticleData.data.image.url}
                    alt="img"
                    width="100%"
                  ></img>
                </PostHeaderImg>
              </PostHeader>
              <ContentWrapper>
                {ArticleData.data.body[0].primary.text.map((text, key) => {
                  if (
                    text.type === "o-list-item" ||
                    text.type === "list-item"
                  ) {
                    li_count = li_count + 1;
                    list_item.push(<li key={li_count}>{text.text}</li>);
                  } else {
                    if (list_item.length > 0) {
                      let list = <ul key={key}>{list_item}</ul>;
                      list_item = [];
                      return list;
                    }
                  }

                  switch (text.type) {
                    case "heading2":
                      return <h2 key={key}>{text.text}</h2>;
                    case "paragraph": {
                      
                      return <p key={key}>{text.text}</p>;
                    }

                    case "image":
                      return (
                        <ContentImg key={key}>
                          <img
                            src={text.url}
                            alt="img"
                            loading="lazy"
                            width="100%"
                          />
                          <figcaption>{text.alt}</figcaption>
                        </ContentImg>
                      );
                    case "embed":
                      return text.oembed.type === "video" ? (
                        <>
                          <div
                            style={{
                              maxHeight: "440px",
                              height: "100vh",
                              width: "100%",
                            }}
                          >
                            <iframe
                              width="100%"
                              height="100%"
                              src={URL(text.oembed.html)}
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              frameBorder="0"
                              scrolling="no"
                              title="Embedded youtube"
                            ></iframe>
                          </div>
                        </>
                      ) : (
                        <div>
                          <ContentImg key={key}>
                            <img
                              src={text.oembed.embed_url}
                              alt="img"
                              loading="lazy"
                              width="100%"
                            />
                          </ContentImg>
                        </div>
                      );

                    default:
                      return null;
                  }
                })}
              </ContentWrapper>
            </Container>
          </PostWrapper>
        </MainLayout>
      </>
    );
  }
}
const PostWrapper = styled.div`
  /* background-color: navajowhite; */
`;
const Container = styled.div`
  background-color: #fff;
  width: 100%;
  max-width: 1172px;
  margin: 0 auto;
`;
const PostHeader = styled.div`
  text-align: left;
  padding: 70px 170px 30px;
  h1 {
    font-weight: 600;
    font-size: 48px;
    margin-bottom: 11px;
  }
  p {
    font-size: 22px;
    margin-top: 20px;
    line-height: 1.5em;
    color: #808286;
  }

  @media screen and (max-width: 992px) {
    padding: 70px 50px 25px;
  }
  @media screen and (max-width: 550px) {
    padding: 70px 30px 25px;
    h1 {
      font-size: 28px;
    }
    p {
      font-size: 16px;
    }
  }
`;
const ContentWrapper = styled.div`
  text-align: left;
  padding: 30px 170px 50px;
  display: flex;
  flex-direction: column;
  line-height: 1.8;
  font-size: 18px;

  p {
    margin-bottom: 15px;
    font-size: 18px;
  }

  h2 {
    font-size: 28px;
    margin-top: 5px;
    margin-bottom: 5px;
  }
  ul {
    padding: 0 30px;
    margin-left: 30px;
    margin-bottom: 10px;
    li {
      margin: 5px 0;
    }
  }
  @media screen and (max-width: 992px) {
    padding: 30px 80px 50px;
  }
  @media screen and (max-width: 550px) {
    padding: 30px 40px 50px;
    p {
      font-size: 16px;
    }
    h2 {
      font-size: 21px;
    }
    ul {
      padding: 0;
    }
  }
`;

const PostHeaderImg = styled.div`
  width: 100%;
  /* max-width: 500px; */
  margin: 0 auto;
  margin-top: 30px;
`;

const ContentImg = styled.div`
  margin: 16px 0 40px;
  flex-direction: column;
  max-width: 600px;
  margin: 0 auto;
  figcaption {
    line-height: 1.5em;
    text-align: center;
    font-size: 14px;
    margin-top: 15px;
    margin-left: 16px;
    margin-right: 16px;
  }
`;

function URL(str) {
  // console.log(str);
  const regex = /src="([^"]+)"/;
  return str.match(regex)[1];
}
