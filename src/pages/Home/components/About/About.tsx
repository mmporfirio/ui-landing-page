import { Baby, Coin } from "../../../../assets/images";
import { COINS_POSITIONS } from "./About.constants";
import {
  BabyImg,
  CoinImg,
  Container,
  ContentContainer,
  LeftBlurBackground,
  LeftTopBlurBackground,
  RightBlurBackground,
  TextContainer,
} from "./About.styles";

type AboutProps = {
  refProp: React.MutableRefObject<HTMLDivElement | null>;
};

function About({ refProp }: AboutProps) {
  return (
    <Container ref={refProp}>
      <h2>ABOUT BABYDON</h2>
      <ContentContainer>
        <BabyImg src={Baby} alt="Baby Don Image" />
        <TextContainer>
          <p>
            Baby DON is set for a meteoric rise, with experts forecasting an
            astonishing surge perfectly coinciding with Trump's highly
            anticipated victory in the 2024 elections.
          </p>
          <p>
            $BABYDON is out making deals, big deals, the best deals with
            marketing agencies to make this memecoin the leading standard of
            communities in 2024.
          </p>
        </TextContainer>
      </ContentContainer>
      <ContentContainer reverse>
        <TextContainer>
          <p>
            Volume and hype had died down in the last years within our chain
            moving to foreign lands. Today, history will take it's coure and
            Solana will rightfully take position to house the best memecoins of
            2024.
          </p>
          <p>
            Daily addresses surmount Solana and ETH, so let's make it a reality
            that all of Solana community knows to be true. We have the manpower
            and dedication to be the #1 chain, so let's make it happen.
          </p>
        </TextContainer>
        <BabyImg src={Baby} alt="Baby Don Image" reverse />
      </ContentContainer>
      {COINS_POSITIONS.map((props, index) => (
        <CoinImg src={Coin} {...props} key={index} alt="" />
      ))}
      <LeftBlurBackground />
      <LeftTopBlurBackground />
      <RightBlurBackground />
    </Container>
  );
}

export default About;
