import { Coin, Logo } from "../../../../assets/images";
import { PARTNERS_LIST } from "./Partners.constants";
import {
  BabyBrandContainer,
  BabyImg,
  BabyName,
  CircleContainer,
  CoinImg,
  Container,
  InnerCircleContainer,
  MiddleRightBlurBackground,
  PartnerCard,
  PartnerImg,
  TopLeftBlurBackground,
  TopRightBlurBackground,
} from "./Partners.styles";

function Partners() {
  return (
    <Container>
      <h2>Partners</h2>
      <CircleContainer>
        <BabyBrandContainer>
          <BabyImg src={Logo} />
          <BabyName>BABY DON</BabyName>
        </BabyBrandContainer>
        <InnerCircleContainer />
        {PARTNERS_LIST.map(({ src, ...props }, index) => (
          <PartnerCard {...props} key={index}>
            <PartnerImg src={src} />
          </PartnerCard>
        ))}
      </CircleContainer>
      <CoinImg src={Coin} />
      <TopRightBlurBackground />
      <TopLeftBlurBackground />
      <MiddleRightBlurBackground />
    </Container>
  );
}

export default Partners;
