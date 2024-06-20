import styled from "styled-components";

const Container = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  margin-bottom: 5%;
`;

const Card = styled.div<{ borderLeftColor?: string }>`
  display: flex;
  justify-content: space-between;

  width: 80%;
  padding-block: 3%;
  padding-inline: 0.5%;

  border-radius: 26px;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(18.3px);
  -webkit-backdrop-filter: blur(18.3px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding-inline: 2%;

  ${(props) =>
    props.borderLeftColor &&
    `
    border-left: 0.5rem solid ${props.borderLeftColor}; 
    `}
`;

const CharImg = styled.img`
  width: 60%;
`;

const TaxesContainer = styled.div`
  display: grid;
  gap: 2%;
  width: 40%;
`;

const CardText = styled.span`
  font-size: 1.5rem;
  font-weight: 500;
`;

const InnerCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const LeftBottomBlurBackground = styled.div`
  background: var(--primary-color);
  position: absolute;

  left: -5%;
  bottom: -25%;

  width: 30%;
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

const RightTopBlurBackground = styled.div`
  background: var(--primary-color);
  position: absolute;

  right: -5%;
  top: 0%;

  width: 30%;
  height: 45%;

  opacity: 0.4;

  box-shadow: 10px 10px 300px 100px rgba(32, 121, 254, 0.75);
  -webkit-box-shadow: 10px 10px 300px 100px rgba(32, 121, 254, 0.75);
  -moz-box-shadow: 10px 10px 300px 100px rgba(32, 121, 254, 0.75);

  border-radius: 416px;
  z-index: -10;
  filter: blur(600px);
  -webkit-filter: blur(600px);
`;

export {
  Container,
  Card,
  CharImg,
  TaxesContainer,
  CardText,
  InnerCardContainer,
  LeftBottomBlurBackground,
  RightTopBlurBackground,
};
