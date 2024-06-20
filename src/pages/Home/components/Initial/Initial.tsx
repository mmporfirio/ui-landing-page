import { BabyDon, Coin, LogoBrandName } from "../../../../assets/images";
import { COINS_POSITIONS } from "./Initial.constants";

import {
  AuditButton,
  ButtonsContainer,
  CallButton,
  CoinImg,
  Container,
  ContentContainer,
  ContentImg,
  HeaderContainer,
  LeftBlurBackground,
  LogoNameImg,
  MiddleBlurBackground,
  NavBar,
  NavItem,
  RightBlurBackground,
} from "./Initial.styles";

const NAV_ITEMS = ["Home", "About Us", "Partners", "Donomics"];

function Initial() {
  return (
    <Container>
      <HeaderContainer>
        <LogoNameImg src={LogoBrandName} alt="Logo name" />
        <NavBar>
          {NAV_ITEMS.map((title) => (
            <NavItem key={title}>{title}</NavItem>
          ))}
        </NavBar>
        <CallButton>Join now</CallButton>
      </HeaderContainer>
      <ContentContainer>
        <ContentImg src={BabyDon} alt="Baby Don Image" />
        <ButtonsContainer>
          <CallButton>Join now</CallButton>
          <AuditButton>Audit</AuditButton>
        </ButtonsContainer>
        {COINS_POSITIONS.map((props, index) => (
          <CoinImg src={Coin} {...props} key={index} />
        ))}
      </ContentContainer>
      <MiddleBlurBackground />
      <LeftBlurBackground />
      <RightBlurBackground />
    </Container>
  );
}

export default Initial;
