import { Logo, LogoBrandName } from "../../../../assets/images";
import PaperPlaneIcon from "../../../../assets/svg/PaperPlaneIcon";
import XIcon from "../../../../assets/svg/XTwitterIcon";
import { NavigationItem } from "../../Home.constants";
import {
  Container,
  FlexContainer,
  FooterText,
  LogoBrandImg,
  NavBar,
  NavItem,
  RightBlurBackground,
} from "./Footer.styles";
type FooterProps = {
  menuItems: NavigationItem[];
};
function Footer({ menuItems }: FooterProps) {
  return (
    <Container>
      <FlexContainer>
        <picture>
          <source media="(min-width: 845px)" srcSet={LogoBrandName} />
          <source media="(max-width: 844px)" srcSet={Logo} />
          <LogoBrandImg src={LogoBrandName} alt="Logo Baby Don" />
        </picture>
        <NavBar>
          {menuItems.map(({ label, onClick }) => (
            <NavItem key={label} onClick={() => onClick()}>
              {label}
            </NavItem>
          ))}
        </NavBar>
      </FlexContainer>
      <FooterText>
        In our web version footer, we extend our gratitude to our valued Baby
        Don community. It's a space where we express appreciation for the
        support that drives us forward.
      </FooterText>
      <hr />
      <FlexContainer>
        <p>© 2024 Baby Don. All rights reserved.</p>
        <FlexContainer>
          <a>
            <XIcon />
          </a>
          <a>
            <PaperPlaneIcon />
          </a>
        </FlexContainer>
      </FlexContainer>
      <RightBlurBackground />
    </Container>
  );
}

export default Footer;
