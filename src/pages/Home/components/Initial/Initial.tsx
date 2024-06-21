import { BabyDon, Coin, LogoBrandName } from "../../../../assets/images";
import { NavigationItem } from "../../Home.constants";
import MobileMenu from "../MobileMenu/MobileMenu";
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
  MobileMenuContainer,
  NavBar,
  NavItem,
  RightBlurBackground,
} from "./Initial.styles";

type InitialProps = {
  refProp: React.MutableRefObject<HTMLDivElement | null>;
  menuItems: NavigationItem[];
};
function Initial({ refProp, menuItems }: InitialProps) {
  return (
    <Container ref={refProp}>
      <MobileMenuContainer>
        <MobileMenu menuItems={menuItems} />
      </MobileMenuContainer>
      <HeaderContainer>
        <LogoNameImg src={LogoBrandName} alt="Logo name" />
        <NavBar>
          {menuItems.map(({ label, onClick }) => (
            <NavItem key={label} onClick={() => onClick()}>
              {label}
            </NavItem>
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
