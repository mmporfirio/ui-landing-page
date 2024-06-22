import styled, { css } from "styled-components";

const Container = styled.section`
  position: relative;
  min-height: 100vh;
  text-align: center;
  padding-inline: 7%;
`;

const ContentContainer = styled.div<{ reverse?: boolean }>`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-bottom: 2%;

  @media (max-width: 724px) {
    display: flex;
    flex-direction: column;
    ${(props) =>
      props?.reverse &&
      css`
        flex-direction: column-reverse;
      `}
  }
`;

const BabyImg = styled.img<{ reverse?: boolean }>`
  height: 400px;
  padding-left: 18%;

  ${(props) =>
    props?.reverse &&
    css`
      padding-right: 18%;
      justify-self: end;
      transform: scaleX(-1);
    `}

  @media (max-width: 724px) {
    padding-inline: 0;
  }
`;

const TextContainer = styled.div`
  text-align: initial;
  display: flex;
  flex-direction: column;
`;

const LeftBlurBackground = styled.div`
  background: var(--primary-color);
  position: absolute;

  left: 20%;
  top: 30%;

  width: 15%;
  height: 20%;

  opacity: 0.4;

  box-shadow: 10px 10px 400px 150px rgba(32, 121, 254, 0.75);
  -webkit-box-shadow: 10px 10px 400px 150px rgba(32, 121, 254, 0.75);
  -moz-box-shadow: 10px 10px 400px 150px rgba(32, 121, 254, 0.75);

  border-radius: 416px;
  z-index: -10;
  filter: blur(600px);
  -webkit-filter: blur(600px);
`;

const LeftTopBlurBackground = styled.div`
  background: var(--primary-color);
  position: absolute;

  left: 0%;
  top: 0%;

  width: 10%;
  height: 10%;

  opacity: 0.4;

  box-shadow: 10px 10px 400px 150px rgba(32, 121, 254, 0.75);
  -webkit-box-shadow: 10px 10px 400px 150px rgba(32, 121, 254, 0.75);
  -moz-box-shadow: 10px 10px 400px 150px rgba(32, 121, 254, 0.75);

  border-radius: 416px;
  z-index: -10;
  filter: blur(600px);
  -webkit-filter: blur(600px);
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
  CoinImg,
  BabyImg,
  Container,
  TextContainer,
  ContentContainer,
  LeftBlurBackground,
  RightBlurBackground,
  LeftTopBlurBackground,
};
