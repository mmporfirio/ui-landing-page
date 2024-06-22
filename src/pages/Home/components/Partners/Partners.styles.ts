import styled, { css } from "styled-components";

const Container = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const CircleContainer = styled.div`
  position: relative;
  width: 50%;
  margin-top: 2%;
  padding-bottom: 50%;
  border-radius: 50%;
  background-color: transparent;
  border: 4vw solid var(--primary-color);

  -webkit-box-shadow: inset 4px 4px 300px 0px #2079fe,
    5px 5px 300px 50px rgba(32, 121, 254, 0.75);
  box-shadow: inset 4px 4px 300px 0px #2079fe,
    5px 5px 300px 50px rgba(32, 121, 254, 0.75);

  @media (max-width: 724px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 15px;
    border: none;
    -webkit-box-shadow: unset;
    box-shadow: unset;

    width: auto;
    padding-bottom: 5%;
  }
`;

const InnerCircleContainer = styled.div`
  position: absolute;
  border: 1vw solid #fff;
  left: -5%;
  right: -5%;
  top: -5%;
  bottom: -5%;
  border-radius: 50%;

  @media (max-width: 724px) {
    display: none;
  }
`;

export type PartnerCardProps = {
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
};

const PartnerCard = styled.div<PartnerCardProps>`
  position: absolute;

  display: flex;
  justify-content: center;
  align-items: center;

  height: 18%;
  width: 40%;

  border-radius: 26px;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(18.3px);
  -webkit-backdrop-filter: blur(18.3px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding-inline: 2%;

  ${(props) => css`
    top: ${props.top || "unset"};
    left: ${props.left || "unset"};
    right: ${props.right || "unset"};
    bottom: ${props.bottom || "unset"};
  `}

  @media (max-width: 724px) {
    position: unset;
    height: 92px;
    width: 80vw;
  }
`;

const PartnerImg = styled.img`
  max-height: 90%;
  max-width: 100%;
`;

const BabyImg = styled.img`
  width: 5vw;
`;

const BabyName = styled.span`
  white-space: nowrap;
  font-size: clamp(1rem, 5vw, 2rem);
  font-weight: 800;
  color: var(--primary-color);
`;

const BabyBrandContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-left: 40%;
  margin-block: 40%;

  @media (max-width: 724px) {
    display: none;
  }
`;

const TopLeftBlurBackground = styled.div`
  background: var(--primary-color);
  position: absolute;

  left: -7.5%;
  top: 0%;

  width: 15%;
  height: 18%;

  opacity: 0.4;

  box-shadow: 10px 10px 400px 150px rgba(32, 121, 254, 0.75);
  -webkit-box-shadow: 10px 10px 400px 150px rgba(32, 121, 254, 0.75);
  -moz-box-shadow: 10px 10px 400px 150px rgba(32, 121, 254, 0.75);

  border-radius: 416px;
  z-index: -10;
  filter: blur(600px);
  -webkit-filter: blur(600px);
`;

const TopRightBlurBackground = styled.div`
  background: var(--primary-color);
  position: absolute;

  right: 20%;
  top: 20%;

  width: 2%;
  height: 2%;

  opacity: 0.7;

  box-shadow: 10px 10px 200px 150px rgba(32, 121, 254, 0.75);
  -webkit-box-shadow: 10px 10px 200px 150px rgba(32, 121, 254, 0.75);
  -moz-box-shadow: 10px 10px 200px 150px rgba(32, 121, 254, 0.75);

  border-radius: 416px;
  z-index: -10;
  filter: blur(600px);
  -webkit-filter: blur(600px);
  z-index: -20;
`;

const MiddleRightBlurBackground = styled.div`
  background: var(--primary-color);
  position: absolute;

  right: -10%;
  top: 60%;

  width: 10%;
  height: 10%;

  opacity: 0.7;

  box-shadow: 10px 10px 200px 150px rgba(32, 121, 254, 0.75);
  -webkit-box-shadow: 10px 10px 200px 150px rgba(32, 121, 254, 0.75);
  -moz-box-shadow: 10px 10px 200px 150px rgba(32, 121, 254, 0.75);

  border-radius: 416px;
  z-index: -10;
  filter: blur(600px);
  -webkit-filter: blur(600px);
  z-index: -20;
`;

const CoinImg = styled.img`
  position: absolute;
  right: 15%;
  top: 20%;
  height: 13%;
  opacity: 0.6;
  z-index: -10;
`;

export {
  BabyImg,
  CoinImg,
  BabyName,
  Container,
  PartnerImg,
  PartnerCard,
  CircleContainer,
  BabyBrandContainer,
  InnerCircleContainer,
  TopLeftBlurBackground,
  TopRightBlurBackground,
  MiddleRightBlurBackground,
};
