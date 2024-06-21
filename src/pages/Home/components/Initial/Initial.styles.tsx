import styled from "styled-components";

const Container = styled.div`
  position: relative;
  padding-top: 34px;
  padding-inline: 98px;
  height: 100vh;
`;

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;

  @media (max-width: 960px) {
    justify-content: center;
    & > button {
      display: none !important;
    }
  }
`;

const NavBar = styled.nav`
  display: flex;
  align-items: center;
  gap: 54px;
  @media (max-width: 1105px) {
    gap: 10px;
  }

  @media (max-width: 960px) {
    display: none !important;
  }
`;

const MobileMenuContainer = styled.div`
  display: none;
  @media (max-width: 960px) {
    display: block;
  }
`;

const NavItem = styled.a`
  font-size: 20px;
  font-weight: 400;
  color: var(--paragraph-color);
  &:hover {
    color: #fff;
  }
`;

const LogoNameImg = styled.img`
  height: 55px;
`;

const CallButton = styled.button`
  background: var(--primary-color);
  border-radius: 99px;
  padding: 16px 28px;
  font-weight: 600;
  letter-spacing: 1px;
  font-size: 20px;
`;

const AuditButton = styled.button`
  border: 2px var(--primary-color) solid;
  background-color: transparent;
  border-radius: 99px;
  padding: 12px 28px;
  font-weight: 600;
  letter-spacing: 1px;
  font-size: 20px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 12px;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  gap: 95px;
`;

const ContentImg = styled.img`
  height: 40vw;
`;

const RightBlurBackground = styled.div`
  background: var(--primary-color);
  position: absolute;

  right: 0;
  bottom: 0;

  width: 10%;
  height: 10%;

  opacity: 0.5;

  box-shadow: 10px 10px 400px 200px rgba(32, 121, 254, 0.75);
  -webkit-box-shadow: 10px 10px 400px 200px rgba(32, 121, 254, 0.75);
  -moz-box-shadow: 10px 10px 400px 200px rgba(32, 121, 254, 0.75);

  border-radius: 416px;
  z-index: -10;
  filter: blur(600px);
  -webkit-filter: blur(600px);
`;

const LeftBlurBackground = styled.div`
  background: var(--primary-color);
  position: absolute;

  left: -10%;
  top: 25%;

  width: 20%;
  height: 55%;

  opacity: 0.4;

  box-shadow: 10px 10px 400px 100px rgba(32, 121, 254, 0.75);
  -webkit-box-shadow: 10px 10px 400px 100px rgba(32, 121, 254, 0.75);
  -moz-box-shadow: 10px 10px 400px 100px rgba(32, 121, 254, 0.75);

  border-radius: 416px;
  z-index: -10;
  filter: blur(600px);
  -webkit-filter: blur(600px);
`;

const MiddleBlurBackground = styled.div`
  background: var(--primary-color);
  position: absolute;

  left: 30%;
  top: 25%;

  width: 30%;
  height: 50%;

  opacity: 0.3;

  box-shadow: 10px 10px 400px 100px rgba(32, 121, 254, 0.75);
  -webkit-box-shadow: 10px 10px 400px 100px rgba(32, 121, 254, 0.75);
  -moz-box-shadow: 10px 10px 400px 100px rgba(32, 121, 254, 0.75);

  border-radius: 416px;
  z-index: -10;
  filter: blur(600px);
  -webkit-filter: blur(600px);
`;

export type CoinImgProps = {
  top?: string;
  bottom?: string;
  right?: string;
  left?: string;
  height: number;
  opacity: number;
};

const CoinImg = styled.img<CoinImgProps>`
  position: absolute;
  z-index: -10;

  ${({ height, opacity, top, bottom, right, left }) => ({
    height: `${height}px`,
    opacity: opacity.toString(),
    ...(top && { top: top }),
    ...(bottom && { bottom: bottom }),
    ...(right && { right: right }),
    ...(left && { left: left }),
  })}
`;

export {
  NavBar,
  NavItem,
  Container,
  ContentImg,
  CallButton,
  LogoNameImg,
  AuditButton,
  HeaderContainer,
  ButtonsContainer,
  ContentContainer,
  LeftBlurBackground,
  RightBlurBackground,
  MiddleBlurBackground,
  CoinImg,
  MobileMenuContainer,
};
