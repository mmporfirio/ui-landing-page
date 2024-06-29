import {
  BabyDon,
  BabyDonMobile,
  Coin,
  Logo,
  LogoBrandName,
} from "../../../../assets/images";
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
        <picture>
          <source media="(min-width: 361px)" srcSet={LogoBrandName} />
          <source media="(max-width: 360px)" srcSet={Logo} />
          <LogoNameImg src={LogoBrandName} alt="Logo name" />
        </picture>
        <NavBar>
          {menuItems.map(({ label, onClick }) => (
            <NavItem key={label} onClick={() => onClick()}>
              {label}
            </NavItem>
          ))}
        </NavBar>
        <CallButton href="https://matheusmoreiraa.dev" target="_blank">
          Join now
        </CallButton>
      </HeaderContainer>
      <ContentContainer>
        <picture>
          <source media="(min-width: 561px)" srcSet={BabyDon} />
          <source media="(max-width: 560px)" srcSet={BabyDonMobile} />
          <ContentImg src={BabyDon} alt="Baby Don Image" />
        </picture>
        <ButtonsContainer>
          <CallButton href="https://matheusmoreiraa.dev" target="_blank">
            Join now
          </CallButton>
          <AuditButton
            href="https://www.linkedin.com/in/matheus-moreira-ap/?locale=en_US"
            target="_blank"
          >
            Audit
          </AuditButton>
        </ButtonsContainer>
        {COINS_POSITIONS.map((props, index) => (
          <CoinImg src={Coin} {...props} key={index} alt="" />
        ))}
      </ContentContainer>
      <MiddleBlurBackground />
      <LeftBlurBackground />
      <RightBlurBackground />
    </Container>
  );
}

export default Initial;
