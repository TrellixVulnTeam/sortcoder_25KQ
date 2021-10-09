import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
export default function Header(props) {
  // const [HeaderColor, setHeaderColor] = useState("#040e18");
  // function scrollEvent(e) {
  //   if (window.scrollY > 300) {
  //     setHeaderColor("#040e18");
  //   } else {
  //     setHeaderColor();
  //   }
  // }
  // useEffect(() => {
  //   setHeaderColor(props.color);
  //   window.addEventListener("scroll", scrollEvent);
  // });
  return (
    <>
      <HeaderContainer>
        <HeaderWrapper>
          <HeaderContent>
            <Links to="/">
              <img
                src="/assets/main_Sortcoder.png"
                alt="logo"
                height="20px"
              ></img>
            </Links>
            <LinksWrapper>
              <Links>Resources</Links>
              <Links to="/blog">Blog</Links>
              <Links>About</Links>
              <Links>Support</Links>
            </LinksWrapper>
            <Login>
              <Links>Login</Links>
            </Login>
          </HeaderContent>
        </HeaderWrapper>
      </HeaderContainer>
    </>
  );
}

const HeaderContainer = styled.div`
  /* background-color: ${(props) => props.col}; */
  background-color: #040e18;
  transition: 0.5 ease-in-out;
  z-index: 100;
  min-width: 0;
  position: sticky;
  top: 0;
  /* width: 100%; */
`;
const HeaderWrapper = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  min-width: 0;
`;
const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  img {
    cursor: pointer;
  }
`;
const Login = styled.div`
  display: none;
  @media screen and (min-width: 992px) {
    display: block;
  }
`;
const Links = styled(Link)`
  color: white;
  padding: 0 12px;
  margin: 0 4px;
  font-weight: 500;
  cursor: pointer;
  :hover {
    color: #0284fe;
    transition: 0.3s;
  }
`;
const LinksWrapper = styled.div`
  display: none;
  @media screen and (min-width: 992px) {
    display: flex;
  }
`;
