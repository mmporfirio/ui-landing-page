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

type PartnersProps = {
  refProp: React.MutableRefObject<HTMLDivElement | null>;
};

function Partners({ refProp }: PartnersProps) {
  return (
    <Container ref={refProp}>
      <h2>Partners</h2>
      <CircleContainer>
        <BabyBrandContainer>
          <BabyImg src={Logo} alt="Logo Baby Don" />
          <BabyName>BABY DON</BabyName>
        </BabyBrandContainer>
        <InnerCircleContainer />
        {PARTNERS_LIST.map(({ src, ...props }, index) => (
          <PartnerCard {...props} key={index}>
            <PartnerImg src={src} alt={src.split("/").reverse()[0]} />
          </PartnerCard>
        ))}
      </CircleContainer>
      <CoinImg src={Coin} alt="" />
      <TopRightBlurBackground />
      <TopLeftBlurBackground />
      <MiddleRightBlurBackground />
    </Container>
  );
}

export default Partners;
