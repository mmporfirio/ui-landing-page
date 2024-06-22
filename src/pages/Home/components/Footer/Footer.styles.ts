import styled from "styled-components";

const Container = styled.footer`
  position: relative;
  display: inline-block;

  height: 15vh;
  padding: 8%;
  margin-bottom: 20%;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5vw;

  & > p {
    font-size: clamp(0.5rem, 2.5vw, 1.5rem);
  }

  svg {
    width: 2vw;
    min-width: 15px;
    height: fit-content;
    margin-left: 15px;
  }

  @media (max-width: 724px) {
    gap: 0;
  }
`;

const LogoBrandImg = styled.img`
  width: 60%;
  min-width: 55px;
  @media (max-width: 724px) {
    display: none;
  }
`;

const NavBar = styled.nav`
  display: flex;
  align-items: center;
  gap: 5vw;
`;

const NavItem = styled.a`
  font-size: clamp(0.5rem, 4vw, 1.5rem);

  font-weight: 400;
  color: var(--paragraph-color);
  white-space: nowrap;
  &:hover {
    color: #fff;
  }
`;

const FooterText = styled.span`
  color: var(--paragraph-color);
  font-size: clamp(0.5rem, 2.5vw, 1.5rem);
  display: inline-block;
  max-width: 40%;
  padding-block: 1%;

  @media (max-width: 724px) {
    max-width: 100%;
  }
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
  z-index: 10;
  filter: blur(600px);
  -webkit-filter: blur(50px);
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
