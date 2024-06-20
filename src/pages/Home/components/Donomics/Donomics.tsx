import { CharDonomics } from "../../../../assets/images";
import { TAXES_OPTIONS } from "./Donomics.constants";
import {
  Card,
  CardText,
  CharImg,
  Container,
  InnerCardContainer,
  LeftBottomBlurBackground,
  RightTopBlurBackground,
  TaxesContainer,
} from "./Donomics.styles";

function Donomics() {
  return (
    <Container>
      <h2>Donomics</h2>
      <Card>
        <CharImg src={CharDonomics} alt="Donomics Char" />
        <TaxesContainer>
          <Card>
            <InnerCardContainer>
              <h3>Taxes</h3>
            </InnerCardContainer>
          </Card>
          {TAXES_OPTIONS.map((option) => (
            <Card borderLeftColor={option.color} key={option.label}>
              <InnerCardContainer>
                <CardText>{option.label}</CardText>
                <CardText>{option.percentual}%</CardText>
              </InnerCardContainer>
            </Card>
          ))}
        </TaxesContainer>
      </Card>
      <LeftBottomBlurBackground />
      <RightTopBlurBackground />
    </Container>
  );
}

export default Donomics;
