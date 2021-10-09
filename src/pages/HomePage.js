import React, { Component } from "react";
import MainLayout from "../Containers/Layouts/MainLayout/MainLayout";
import styled from "styled-components";
import {
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaMailBulk,
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import CarouselSlider from "../Components/Carousel/CarouselSlider";
class HomePage extends Component {
  render() {
    return (
      <>
        <MainLayout>
          <HeroContainer>
            <HeroWrapper>
              <h1>Build Own Web and Mobile Application with us.</h1>
              <p>
                Sortcoder is the part of the MCS.Here we build mordern Website
                and Mobile aplication withe latest Technology and affordable
                price range.{" "}
              </p>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <a href="#services">
                  <HeroButton style={{ color: "#0b64bf" }}>
                    Get started
                  </HeroButton>
                </a>
                <HeroButton
                  style={{
                    backgroundColor: "#0b233a",
                  }}
                >
                  Contact Us
                </HeroButton>
              </div>
              <HeroImage>
                <img
                  src={process.env.PUBLIC_URL + "/assets/home.png"}
                  alt="img"
                />
              </HeroImage>
            </HeroWrapper>
          </HeroContainer>
          <SectionChooseContainer>
            <SectionChooseContenetWrapper>
              <h3 id="services">Our Services For You </h3>
              <p>We are always here to solve and understanding</p>
              <ServiceContainer>
                {ServiceData.map((data) => (
                  <Service>
                    <div>
                      <img
                        src="https://d2zv2ciw0ln4h1.cloudfront.net/uploads/React-logo_663c3a4121.svg"
                        alt="sdsd"
                        width="120px"
                      />
                    </div>
                    <h4>{data.title}</h4>
                    <p>{data.about}</p>
                  </Service>
                ))}
              </ServiceContainer>
            </SectionChooseContenetWrapper>
          </SectionChooseContainer>
          <SliderContainer>
            <CarouselSlider />
          </SliderContainer>
          <SectionTeamContainer>
            <TeamContainer>
              <TeamWrapper>
                <h1>Meet our team</h1>
                <p>
                  Our talented team has come together with one goal: to help
                  design and build the next generation of modern web and mobile
                  applications for our customers, scholars, companies and
                  governments.
                </p>
                <MemberCardContainer>
                  <MembeCardWrapper>
                    {MemberData.map((data) => (
                      <Members data={data} />
                    ))}
                  </MembeCardWrapper>
                </MemberCardContainer>
              </TeamWrapper>
            </TeamContainer>
          </SectionTeamContainer>
          <NewsLetterContainer
            bgImg={process.env.PUBLIC_URL + "assets/blurForHome.png"}
          >
            <h1>Subscribe To Our Newsletter</h1>
            <p>Get notification about tips ,blog and news just for you.</p>
            <NewsLetterWrapper>
              <NewsEmailWrapper>
                <div style={{ padding: " 0 10px 0 15px", color: " #314763" }}>
                  <FiMail size={25} />
                </div>
                <input placeholder="Enter your email address" />
                <button>Subscribe</button>
              </NewsEmailWrapper>
            </NewsLetterWrapper>
          </NewsLetterContainer>
        </MainLayout>
      </>
    );
  }
}
function Members(props) {
  return (
    <>
      <MembeCard>
        <img src={process.env.PUBLIC_URL + props.data.img} alt="Img" />
        <div>
          <MemberAbout>
            <span>{props.data.name}</span>
            <span>{props.data.designation}</span>
          </MemberAbout>
          <MemberSocial>
            <a href={props.data.twitter} target="_blank" rel="noreferrer">
              <span>
                <FaTwitter size={20} />
              </span>
            </a>
            <a href={props.data.linkedin} target="_blank" rel="noreferrer">
              <span>
                <FaLinkedinIn size={20} />
              </span>
            </a>
            <a href={props.data.instagram} target="_blank" rel="noreferrer">
              <span>
                <FaInstagram size={20} />
              </span>
            </a>
          </MemberSocial>
        </div>
      </MembeCard>
    </>
  );
}
const HeroContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url("${process.env.PUBLIC_URL + "assets/blurForHome.png"}");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  /* margin-bottom: 120px; */
`;

const HeroWrapper = styled.div`
  color: white;
  top: 30%;
  font-size: 34px;
  width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 50px;
  padding-top: 150px;
  p {
    font-size: 18px;
    margin: 0 auto;
    max-width: 800px;
    margin-top: 42px;
    line-height: 2;
    font-weight: 600;
  }

  @media screen and (max-width: 768px) {
    padding-top: 0;
    h1 {
      font-size: 40px;
      line-height: 50px;
      margin-top: 80px;
    }
  }
  @media screen and (max-width: 567px) {
    padding: 0 20px;
    h1 {
      font-size: 32px;
      text-align: left;
    }
    p {
      text-align: left;
    }
  }
  @media screen and (max-width: 350px) {
    padding: 0 10px;
  }
`;
const HeroButton = styled.div`
  width: fit-content;
  background-color: white;
  padding: 20px 30px;
  border-radius: 5px;
  font-size: 16px;
  margin-top: 20px;
  font-weight: 800;
  cursor: pointer;
  margin-right: 20px;
  border: none;
  align-self: center;
  @media screen and (max-width: 567px) {
    padding: 15px 25px;
    font-size: 15px;
  }
`;
const HeroImage = styled.div`
  position: relative;
  top: 80px;
  width: 100%;

  @keyframes bounce {
    from {
      transform: translate3d(0, 0, 0);
    }
    to {
      transform: translate3d(0, 10px, 0);
    }
  }
  /* padding: 10px; */
  animation: bounce 1.3s;
  animation-direction: alternate;
  animation-iteration-count: infinite;
  img {
    width: 100%;
    max-width: 800px;
    min-width: 300px;
  }
`;
const SectionChooseContainer = styled.div`
  position: relative;
  padding-top: 200px;
  padding-bottom: 50px;
  :after {
    height: 105%;
    width: 100%;
    left: 0;
    background-color: #101828;
    top: 0;
    position: absolute;
    z-index: -2;
    content: "";
    /* clip-path: polygon(0 0, 100% 20%, 100% 96%, 0% 100%); */
  }
  :before {
    @keyframes bounce {
      from {
        transform: translate3d(0, 0, 0);
      }
      to {
        transform: translate3d(0, 10px, 0);
      }
    }
    padding: 10px;
    animation: bounce 2.3s;
    animation-direction: alternate;
    animation-iteration-count: infinite;
    height: 200px;
    width: 233px;
    content: "";
    background-image: url("https://razorpay.com/assets/home/dotted-bg.png");
    background-repeat: no-repeat;
    background-size: contain;
    z-index: -1;
    position: absolute;
    top: 107px;
    left: 50px;
    transform: rotate(180deg);
  }
  @media screen and (max-width: 960px) {
    :before {
      top: 307px;
    }
  }
`;
const SectionChooseContenetWrapper = styled.div`
  color: white;
  max-width: 1100px;
  margin: 0 auto;
  width: 100%;

  h3 {
    font-size: 44px;
    margin-bottom: 18px;
  }
  p {
    line-height: 2;
    font-weight: 400;
    font-size: 18px;
  }
  @media screen and (max-width: 567px) {
    h3 {
      font-size: 28px;
      padding: 0 20px;
    }
    p {
      font-size: 16px;
      padding: 0 20px;
    }
  }
`;
const ServiceContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 85px;
`;
const Service = styled.div`
  max-width: 275px;
  background-color: #fff;
  color: #344b80;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 8px;
  padding: 40px 24px 32px;
  padding: 25px 15px;
  box-shadow: 0 4px 22px rgb(202 202 202 / 25%);
  margin: 10px 15px;
  background-image: url("https://razorpay.com/assets/home/unregistered-bg-1.svg");
  /* background-size: cover; */
  background-repeat: no-repeat;
  :hover {
    transform: scale(1.05, 1.05);
    transition: transform 175ms ease-in, opacity 175ms ease-in,
      -webkit-transform 175ms ease-in;
    transform-origin: center;
    background-image: url("https://razorpay.com/assets/home/unregistered-hover.svg");
  }
  p {
    text-align: center;
    margin-top: 12px;
  }
  div {
    img {
      margin-bottom: 24px;
    }
  }
  @media screen and (max-width: 567px) {
    p {
      font-size: 16px;
    }
  }
`;
const SliderContainer = styled.div`
  width: 100%;
  background: white;
`;
const SectionTeamContainer = styled.div`
  position: relative;

  :before {
    background-image: url("https://razorpay.com/assets/home/dotted-bg.png");
    height: 200px;
    width: 233px;
    content: "";
    background-repeat: no-repeat;
    background-size: contain;
    z-index: 1;
    position: absolute;
    top: 300px;
    right: 0;
    transform: rotate(90deg);
    @keyframes bounce {
      from {
        transform: translate3d(0, 0, 0);
      }
      to {
        transform: translate3d(0, 10px, 0);
      }
    }
    padding: 10px;
    animation: bounce 2.3s;
    animation-direction: alternate;
    animation-iteration-count: infinite;
  }
`;

const TeamContainer = styled.div`
  background-color: #101828;
  padding: 40px 20px;
  padding-top: 90px;
  color: white;
`;
const TeamWrapper = styled.div`
  letter-spacing: -0.03em;
  h1 {
    font-weight: 800;
    font-size: 54px;
    word-spacing: -0.05em;
    text-align: center;
  }
  p {
    font-size: 18px;
    font-weight: 400;
    line-height: 1.5;
    max-width: 800px;
    margin: 0 auto;
    /* margin: 20px 0; */
    margin-top: 20px;
  }
`;
const MemberCardContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  /* max-width: 1200px; */
  @media screen and (min-width: 576px) {
    max-width: 540px;
  }
  @media screen and (min-width: 768px) {
    max-width: 720px;
  }
  @media screen and (min-width: 992px) {
    max-width: 960px;
  }
  @media screen and (min-width: 1200px) {
    max-width: 1140px;
  }
  @media screen and (min-width: 1400px) {
    max-width: 1320px;
  } ;
`;
const MembeCardWrapper = styled.div`
  padding-top: 15px;
  padding-bottom: 15px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
  z-index: 10;
`;
const MembeCard = styled.div`
  background-color: #202938;
  color: white;
  width: 100%;
  padding: 32px;
  border-radius: 10px;
  margin: 15px;
  max-width: 300px;
  img {
    width: 230px;
    height: 230px;
    border-radius: 999px;
    background: black;
    object-fit: cover;
  }
  div {
    display: flex;
    justify-content: space-between;
    margin-top: 42px;
    margin-bottom: 16px;
  }
  @media screen and (min-width: 768px) {
    max-width: 50%;
  }
  @media screen and (min-width: 992px) {
    max-width: 320px;
  }
  @media screen and (max-width: 992px) {
    img {
      width: 200px;
      height: 200px;
    }
  }
`;
const MemberAbout = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  span {
    display: flex;
    margin-top: 8px;
    font-weight: 500;
    font-size: 20px;
    letter-spacing: 0.05px;
    :nth-child(even) {
      color: #7933fc;
      font-weight: bold;
    }
  }
`;
const MemberSocial = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    margin-right: 10px;
    color: #9ca2ae;
    cursor: pointer;
    :hover {
      color: #fff;
    }
  }
`;

const NewsLetterContainer = styled.div`
  background: linear-gradient(120deg, #ac32b6, #07b8f7, #fff 100%);
  background-repeat: no-repeat;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  color: white;
  flex-direction: column;
  padding: 80px 0;
  h1 {
    font-size: 44px;
    margin-bottom: 20px;
  }
  p {
    font-weight: bold;
    margin-bottom: 20px;
  }
  @media screen and (max-width: 567px) {
    h1 {
      font-size: 34px;
    }
    p {
      padding: 10px;
    }
  }
`;
const NewsLetterWrapper = styled.div`
  align-self: center;
`;
const NewsEmailWrapper = styled.div`
  padding: 10px;
  background: #fff;
  border-radius: 15px;
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  input {
    padding: 0 80px 0 10px;
    outline: none;
    ::placeholder {
      color: #314763;
      width: 100%;
      padding-right: 15px;
    }
  }
  button {
    border: none;
    width: fit-content;
    padding: 15px 25px;
    border-radius: 5px;
    cursor: pointer;
    background: linear-gradient(to right, #304357, #12293f);
    font-weight: 800;
    color: white;
  }
  @media screen and (max-width: 576px) {
    input {
      padding: 0 10px;
    }
    button {
      padding: 12px;
    }
  }
`;

const MemberData = [
  {
    name: "Praveen Nair",
    img: "/assets/members/praveen.png",
    designation: "CEO",
    instagram: "https://www.instagram.com/official_praveen001/",
    twitter: "",
    linkedin: "https://www.linkedin.com/in/praveen-nair-107b2a186/",
  },
  {
    name: "Ritik Chhipa",
    img: "/assets/members/Ritikchhipa.png",
    designation: "CTO",
    instagram: "https://www.instagram.com/chhiparitik5/",
    twitter: "https://twitter.com/Ritikchhipa5",
    linkedin: "https://www.linkedin.com/in/ritik-chhipa-4705a1171/",
  },
  {
    name: "Navi Singh",
    img: "/assets/members/navi.png",
    designation: "COO",
    instagram: "https://instagram.com/navisingh8293",
    twitter: "https://twitter.com/Navpree99251133",
    linkedin: "https://www.linkedin.com/in/navpreet-singh30",
  },
  {
    name: "Srishti Sinha",
    img: "/assets/members/srishti.png",
    designation: "CRM",
    instagram: "",
    twitter: "",
    linkedin: "https://www.linkedin.com/in/srishti-sinha-314b92183/",
  },
  {
    name: "Ritik Dara",
    img: "/assets/members/Ritik.png",
    designation: "Managing Director",
    instagram: "https://www.instagram.com/ritikdara.876/",
    twitter: "",
    linkedin: "https://www.linkedin.com/in/ritik-dara-4114501b8/",
  },
  {
    name: "Rahul Sani",
    img: "/assets/members/rahul.png",
    designation: "ML and Data Scientist",
    instagram: "https://www.instagram.com/rahul.saini.022/",
    twitter: "",
    linkedin: "https://www.linkedin.com/in/rahul-saini-b83610187",
  },
];
const ServiceData = [
  {
    title: "Website",
    icon: "",
    about:
      "We have an experienced website development team. Which build static and dynamic website and provides a user friendly experience.",
  },
  {
    title: "Cross-Platform Application",
    about:
      "Here, we have expertise in building a cross-platform mobile application for both Android and iOS devices. By using the latest technology like React Native, Flutter, and more. We build a mobile app that runs smoothly on both iOS and Android devices.",
  },
  {
    title: "Android Application",
    about:
      "Our full-stack Android developers use the latest technology and industry experience to create and develop successful Android applications",
  },
  // {
  //   title: "Security",
  //   about: "",
  // },
  {
    title: "Website Design ",
    about:
      "Our experts know the importance of user experience and user interface in website and mobile application design. Our UI/UX experts strictly follow the design guidelines provided by Apple and Google to build good looking apps without hindering their functionality.",
  },
];
export default HomePage;
