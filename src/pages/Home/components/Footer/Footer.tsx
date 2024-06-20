import { LogoBrandName } from "../../../../assets/images";
import PaperPlaneIcon from "../../../../assets/svg/PaperPlaneIcon";
import XIcon from "../../../../assets/svg/XIcon";
import { NAV_ITEMS } from "../../Home.constants";
import {
  Container,
  FlexContainer,
  FooterText,
  LogoBrandImg,
  NavBar,
  NavItem,
  RightBlurBackground,
} from "./Footer.styles";

function Footer() {
  return (
    <Container>
      <FlexContainer>
        <LogoBrandImg src={LogoBrandName} />
        <NavBar>
          {NAV_ITEMS.map((title) => (
            <NavItem key={title}>{title}</NavItem>
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
