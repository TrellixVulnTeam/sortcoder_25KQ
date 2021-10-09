import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaPinterest,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
export default function Footer() {
  return (
    <>
      <FooterWrapper>
        <FooterContainer>
          <FooterUP>
            <img
              src="/assets/main_Sortcoder.png"
              alt="logo"
              height="25px"
              style={{
                marginTop: "36px",
              }}
            ></img>
            <FooterLinks>
              {Footerdata.map((data, key) => (
                <LinksWrapper key={key}>
                  <strong>{data.title}</strong>
                  {data.links.map((d) => (
                    <FLinks to={d.link}>{d.subtitle}</FLinks>
                  ))}
                </LinksWrapper>
              ))}
            </FooterLinks>
          </FooterUP>
          <FooterDOWN>
            <div>
              © {new Date().getFullYear()} SortCoder, Powered by MCS. All Rights
              Reserved.
            </div>
            <div>
              <SocialLink>
                <FaFacebook size={25} />
              </SocialLink>
              <SocialLink href="https://twitter.com/sortcoder">
                <FaTwitter size={25} />
              </SocialLink>
              <SocialLink href="https://www.instagram.com/sortcoder/">
                <FaInstagram size={25} />
              </SocialLink>
              <SocialLink href="https://www.youtube.com/channel/UClxpXUYmmvmTqpsRrYYa3AA">
                <FaYoutube size={25} />
              </SocialLink>
              <SocialLink>
                <FaPinterest size={25} />
              </SocialLink>
              <SocialLink href="https://www.linkedin.com/in/sortcoder-learn-to-code-for-free-353520218/">
                <FaLinkedin size={25} />
              </SocialLink>
              <SocialLink>
                <FaGithub size={25} />
              </SocialLink>
            </div>
          </FooterDOWN>
        </FooterContainer>
      </FooterWrapper>
    </>
  );
}

const FooterWrapper = styled.div`
  background-color: #040e18;
`;

const FooterContainer = styled.div`
  /* background-color: #fff; */
  margin: 0 auto;
  max-width: 1172px;
  width: 100%;
  padding-bottom: 48px;
`;
const FooterUP = styled.div`
  display: flex;
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 16px;
  padding-top: 64px;

  @media screen and (max-width: 550px) {
    img {
      height: 100%;
      width: 30%;
      min-width: 150px;
    }
    flex-direction: column;
  }
`;
const FooterLinks = styled.div`
  display: flex;
  padding-left: 64px;
  flex-wrap: wrap;

  @media screen and (max-width: 550px) {
    padding: 0;
  }
`;
const LinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 0 28px;
  /* width: 100%; */
  @media screen and (max-width: 550px) {
    width: 20%;
    padding: 0 48px;
  }
  @media screen and (max-width: 450px) {
    width: 100%;
  }

  strong {
    text-transform: uppercase;
    font-size: 16px;
    padding-bottom: 16px;
    padding-top: 36px;
    color: #fff;
    letter-spacing: 2px;
    line-height: 1.2;
  }
`;
const FLinks = styled(Link)`
  color: #fff;
  padding: 9px 0;
  opacity: 0.75;
  :hover {
    opacity: 1;
  }
`;
const FooterDOWN = styled.div`
  padding-top: 64px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 16px;
  div {
    color: #fff;
  }
  @media screen and (max-width: 768px) {
    justify-content: center;
    div {
      margin-top: 30px;
    }
  }
`;
const SocialLink = styled.a`
  margin-right: 20px;
  margin-top: 8px;
  color: #fff;
  align-items: center;
  transition: 0.4s ease-in-out;

  :hover {
    /* opacity: 0.85; */
    color: #7933fc;
    transition: 0.3s ease-in-out;
  }
`;
const Footerdata = [
  {
    title: "Resources",
    links: [
      { subtitle: "Blog", link: "/blog" },
      { subtitle: "Experts", link: "/" },
      { subtitle: "Articles", link: "/" },
      { subtitle: "Examples", link: "/" },
      { subtitle: "Roadmap", link: "/" },
    ],
  },
  {
    title: "Learn",
    links: [
      { subtitle: "Python", link: "/" },
      { subtitle: "Data Analysis", link: "/" },
    ],
  },

  {
    title: "Company",
    links: [
      { subtitle: "Home", link: "/" },
      { subtitle: "About", link: "/" },
      { subtitle: "Blog", link: "/" },
      { subtitle: "Support", link: "/" },
      { subtitle: "Youtube", link: "/" },
      { subtitle: "Terms & Conditions", link: "/" },
    ],
  },
  {
    title: "Apps",
    links: [{ subtitle: "Coming Soon!", link: "/" }],
  },
];
