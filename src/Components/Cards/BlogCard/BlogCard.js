import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { linkResolver } from "../../../prismic-config";
export default function BlogCard(props) {
  return (
    <>
      <BlogCardContainer>
        <NavLink to={linkResolver(props.postId)}>
          {<img src={props.img} alt="img" width="100%" height="100%" />}
        </NavLink>
        <BlogContent>
          <h2>{props.postTitle}</h2>
          <p>
            Writing a great email takes time, creativity, and practice. Getting
            readers to open those emails is no different. Apply these tips to
            ensure your hard work gets read.
          </p>
          <AuthorWrapper>
            <div>
              <img
                src={"/assets/programmer.png"}
                alt="img"
                width="34px"
                height="34px"
              />
            </div>
            <AuthorDetails>
              <span>{props.author.text}</span>
              <time>{props.postDate}</time>
            </AuthorDetails>
          </AuthorWrapper>
        </BlogContent>
      </BlogCardContainer>
    </>
  );
}
const BlogCardContainer = styled.div`
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  flex: 1 1 301px;
`;
const BlogContent = styled.div`
  width: 100%;
  max-width: 896px;
  text-align: left;
  display: flex;
  flex-direction: column;
  color: #172333;
  h2 {
    margin-top: 15px;
    font-size: 22px;
    line-height: 32px;
    margin-bottom: 8px;
  }
  p {
    font-size: 16px;
    line-height: 20px;
    color: #6d6d6d;
    margin-bottom: 16px;
  }
`;
const NavLink = styled(Link)`
  height: 200px;
  width: 100%;
  display: block;
  img {
    border-radius: 5px;
    object-fit: cover;
    width: 100%;
  }
`;
const AuthorWrapper = styled.div`
  img {
    border-radius: 100%;
  }
`;

const AuthorDetails = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 500;
  font-size: 12px;
  margin-left: 10px;
  justify-content: center;
  time {
    font: 300;
    font-size: 10px;
    color: #6d6d6d;
  }
`;
