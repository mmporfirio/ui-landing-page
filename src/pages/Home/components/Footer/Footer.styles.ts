import styled from "styled-components";

const Container = styled.footer`
  position: relative;
  display: inline-block;

  height: 15vh;
  padding: 8%;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 5vw;
`;

const LogoBrandImg = styled.img`
  width: 20%;
`;

const NavBar = styled.nav`
  display: flex;
  align-items: center;
  gap: 54px;
`;

const NavItem = styled.a`
  font-size: 25px;
  font-weight: 400;
  color: var(--paragraph-color);
  &:hover {
    color: #fff;
  }
`;

const FooterText = styled.span`
  color: var(--paragraph-color);
  font-size: 24px;
  display: inline-block;
  max-width: 40%;
  padding-block: 1%;
`;

const RightBlurBackground = styled.div`
  background: var(--primary-color);
  position: absolute;

  right: 0%;
  bottom: 0%;

  width: 15%;
  height: 15%;

  opacity: 0.4;

  box-shadow: 10px 10px 400px 150px rgba(32, 121, 254, 0.75);
  -webkit-box-shadow: 10px 10px 400px 150px rgba(32, 121, 254, 0.75);
  -moz-box-shadow: 10px 10px 400px 150px rgba(32, 121, 254, 0.75);

  border-radius: 416px;
  z-index: -10;
  filter: blur(600px);
  -webkit-filter: blur(600px);
`;

export {
  NavBar,
  NavItem,
  Container,
  FooterText,
  LogoBrandImg,
  FlexContainer,
  RightBlurBackground,
};
