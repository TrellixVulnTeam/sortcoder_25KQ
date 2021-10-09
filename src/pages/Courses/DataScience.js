import React from "react";
import styled from "styled-components";

import CourseCard from "../../Components/Cards/CourseCard/CourseCard";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
export default function DataScience() {
  return (
    <>
      <Container>
        <Header/>
        <HeroWrapper>
          <LeftWrapper src="/assets/left_py.svg" height="400px"></LeftWrapper>
          <ContentWrapper>
            <img src="/assets/g_sortcoder.png" alt="Logo" width="150px"></img>
            <h1>Build Data Science Skills online with us.</h1>
            <Button>Get Started</Button>
          </ContentWrapper>
          <RightWrapper src="/assets/left_py.svg" height="400px"></RightWrapper>
        </HeroWrapper>
        <SectionWrapper>
          <Section1Wrapper>
            <h1>What is DataScience?</h1>
            <p>
              Learn the data skills you need online at your own pace—from
              non-coding essentials to data science and machine learning.
            </p>
          </Section1Wrapper>
          <Section2Wrapper>
            <Section2Container>
              <Section2ContentWrapper>
                <h1>
                  Start Learning <span>for free</span>
                </h1>
                <div>
                  {data.map((d) => (
                    <CourseCard data={d} />
                  ))}
                </div>
              </Section2ContentWrapper>
            </Section2Container>
          </Section2Wrapper>
          <Section3Wrapper>
            <Section3Container>
              <Section3Left>
                {/* <div> */}
                <h3>
                  <span>Colab</span> Workspace
                </h3>
                <h1>Get started with your own data analysis in seconds</h1>
                <p>
                  Anyone can execute, write and share their data analysis code
                  through the browser,
                </p>
                {/* </div> */}
                <Button style={{ margin: 0 }}>How it works</Button>
              </Section3Left>
              <Section3Right>
                <img src="/assets/S3img.svg" alt="img"></img>
              </Section3Right>
            </Section3Container>
            <Section3Wave>
              <img
                src={"assets/wave.png"}
                alt="wave"
                width="100%"
                height="800px"
              ></img>
            </Section3Wave>
          </Section3Wrapper>
          <Section4Wrapper>
            <Section4Part>
              <Line startcolor="#fff" endcolor="#007cf0" />
              <Section4PartnNum startcolor="#007cf0" endcolor="#00dfd8">
                <span>1</span>
                <h3>Basic Programming</h3>
              </Section4PartnNum>
              <h1>Get Start with basic python</h1>
              <Paragraph>
                <p>
                  This module is an introduction to the fundamental programming
                  concepts of the Python programming language. Build your first
                  Python program and familiarize yourself with Python.
                </p>
              </Paragraph>
            </Section4Part>
            <Section4Part>
              <Line startcolor="#fff" endcolor="#ee4d5f" />
              <Section4PartnNum startcolor="#ee4d5f" endcolor="#ffcdaf">
                <span>2</span>
                <h3>Solve Problems </h3>
              </Section4PartnNum>
              <h1>Move to intermediate level</h1>
              <Paragraph>
                <p>
                  After completing the basic part of Python modules move on to
                  an intermediate level tutorial, Here you will learn new Python
                  concepts. If you already have a basic concept of python then
                  you go with intermediate level.
                </p>
              </Paragraph>
            </Section4Part>
            <Section4Part>
              <Line startcolor="#fff" endcolor="#ff4d4d" />
              <Section4PartnNum startcolor="#ff4d4d" endcolor="#f9cb28">
                <span>3</span>
                <h3>Analysis problems</h3>
              </Section4PartnNum>
              <h1>Understand Python modules</h1>
              <Paragraph>
                <p>
                  Let us understand the modules of data science implementation,
                  The modules are Numpy, Pandas, Matplotlib and Seaborn. Develop
                  problem solving skills and find multiple ways to solve
                  problems.
                </p>
              </Paragraph>
            </Section4Part>
            <Section4Part>
              <Line startcolor="#fff" endcolor="#7928ca" />
              <Section4PartnNum startcolor="#7928ca" endcolor="#ff0080">
                <span>4</span>
                <h3>Practice</h3>
              </Section4PartnNum>
              <h1>Apply your skills</h1>
              <Paragraph>
                <p>
                  It takes most of the time to master Python and data analysis.
                  Try to spend at least some time each day coding, Even if it's
                  only for an hour. If you give time you can become a good data
                  analyst
                </p>
              </Paragraph>
            </Section4Part>
          </Section4Wrapper>
        </SectionWrapper>
      </Container>
      <Footer />
    </>
  );
}
const Container = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.63), rgba(0, 0, 0, 0.623)),
    url("/assets/blur.jpg");
`;
const HeroWrapper = styled.div`
  height: 100vh;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: space-between;
  padding: 0 40px;
  align-items: center;
  @media screen and (max-width: 1240px) {
    img {
      display: none;
    }
  }
`;
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  font-family: "Noto Sans TC", sans-serif;
  align-items: center;
  padding: 0 10px;
  h1 {
    color: #fff;
    margin: 0;
    font-size: 60px;
  }
  img {
    margin: 0;
    padding-bottom: 20px;
  }
  @media screen and (max-width: 1200px) {
    h1 {
      font-size: 50px;
    }
  }
  @media screen and (max-width: 992px) {
    h1 {
      font-size: 40px;
    }
  }
`;
const LeftWrapper = styled.img`
  /* background-image: url('/assets/left_py.svg'); */
`;
const RightWrapper = styled.img``;

const Button = styled.div`
  display: inline-block;
  padding: 12px 15px;
  background-color: #0284fe;
  border-radius: 5px;
  color: white;
  margin-top: 50px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  :hover {
    box-shadow: 0 0 5px #2196f300, 0 0 10px #2196f300, 0 0 40px #2196f39c;
    transition: 0.3s ease-in-out;
  }
`;
const SectionWrapper = styled.div`
  background-color: #fff;
`;
const Section1Wrapper = styled.div`
  background-color: #7933ff;
  padding: 100px 0;
  color: #fff;
  padding-right: 16px;
  padding-left: 16px;
  h1 {
    font-size: 50px;
    letter-spacing: -1px;
  }
  p {
    font-size: 24px;
    max-width: 548px;
    margin: 0 auto;
    padding: 24px 0;
  }
  @media screen and (max-width: 992px) {
    h1 {
      font-size: 40px;
    }
  }
`;
const Section2Wrapper = styled.div`
  background-color: #fffbf3;
`;
const Section2Container = styled.div`
  max-width: 1172px;
  margin: 0 auto;
  padding: 50px 10px;
`;
const Section2ContentWrapper = styled.div`
  text-align: left;
  h1 {
    font-size: 40px;
    color: #000;
    margin-bottom: 12px;
    span {
      color: #7933ff;
    }
  }
  div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  @media screen and (max-width: 992px) {
    h1 {
      font-size: 32px;
    }
  }
`;
const Section3Wrapper = styled.div`
  background-color: #040e18;
  position: relative;
`;
const Section3Container = styled.div`
  z-index: 1;
  position: relative;
  max-width: 550px;
  margin: 0 auto;
  padding: 90px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 16px;
  padding-left: 16px;
  color: white;
  flex-direction: column;
  @media screen and (min-width: 1200px) {
    flex-direction: row;
    max-width: 1172px;
  }
`;
const Section3Wave = styled.div`
  position: absolute;
  bottom: -130px;
  right: 0;
  width: 100%;
  /* max-width: 1172px; */
  transform: rotateX(0);
`;
const Section3Left = styled.div`
  text-align: left;
  div {
    color: white;
  }

  h1 {
    font-size: 40px;
    letter-spacing: -1px;
    margin-bottom: 8px;
  }
  h3 {
    font-size: 14px;
    text-transform: uppercase;
    color: #06bdfc;
    letter-spacing: 2px;
    font-weight: 700;
    margin-bottom: 12px;
    span {
      color: #e8720b;
    }
  }
  p {
    font-size: 18px;
    line-height: 1.5;
    margin-bottom: 16px;
  }
`;
const Section3Right = styled.div`
  width: 100%;
  z-index: 10;
  box-sizing: border-box;
  margin-top: 32px;
  @media screen and (min-width: 1200px) {
    padding: 20px 80px;
  }
  img {
    width: 100%;
  }
`;
const Section4Wrapper = styled.div`
  margin: 0 auto;
  padding: 100px 0;
  background-color: white;
  position: relative;
  border-radius: 20px;
  width: 100%;
  max-width: 1172px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 20px;
  margin-bottom: 80px;
`;
const Section4Part = styled.div`
  text-align: center;
  color: black;

  h1 {
    font-size: 60px;
    letter-spacing: -1px;
    margin-bottom: 24px;
    padding: 0 24px;
  }
  @media screen and (max-width: 992px) {
    h1 {
      font-size: 40px;
    }
  }
`;
const Paragraph = styled.div`
  margin: 0 auto;
  max-width: 620px;
  /* width: 100%; */
  padding: 0 16px;
  margin-bottom: 64px;
  @media screen and (max-width: 992px) {
  }
  p {
    color: #0000008c;
    font-weight: 500;
    letter-spacing: -0.02em;
    text-align: center;
    line-height: 1.6;
  }
`;
const Line = styled.div`
  width: 1px;
  background-color: black;
  height: 100px;
  align-self: center;
  margin: 0 auto;
  background-image: linear-gradient(
    ${(props) => props.startcolor},
    ${(props) => props.endcolor}
  );
`;
const Section4PartnNum = styled.div`
  margin-bottom: 24px;

  span {
    display: inline-flex;
    border-radius: 100%;
    color: #fff;
    width: 40px;
    height: 40px;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    margin-bottom: 24px;
    background-image: linear-gradient(
      90deg,
      ${(props) => props.startcolor},
      ${(props) => props.endcolor}
    );
  }
  h3 {
    font-size: 32px;
    background-image: linear-gradient(
      90deg,
      ${(props) => props.startcolor},
      ${(props) => props.endcolor}
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    padding: 0 3.2px;
    letter-spacing: -1px;
  }
`;
const data = [
  {
    title: "Learn Python",
    para: "From data manipulation to unit testing, gain the career-building skills you need to succeed as a Python programmer. No prior coding experience needed.",
    type: "Beginner",
  },
  {
    title: "Python Programming",
    para: "From data manipulation to unit testing, gain the career-building skills you need to succeed as a Python programmer. No prior coding experience needed.",
    type: "Intermediate",
  },
  {
    title: "Python Advance",
    para: "From data manipulation to unit testing, gain the career-building skills you need to succeed as a Python programmer. No prior coding experience needed.",
    type: "Advance",
  },
  {
    title: "Data Science",
    para: "From data manipulation to unit testing, gain the career-building skills you need to succeed as a Python programmer. No prior coding experience needed.",
    type: "Intermediate",
  },
];
