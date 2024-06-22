import styled from "styled-components";

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 36px;
  height: 100%;
`;

const CloseButton = styled.button`
  height: 5vh;
  width: 5vh;
`;

const MenuHeadContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LogoMenuImg = styled.img`
  height: 5vh;
`;

const MenuItemsContainer = styled.div`
  display: flex;
  justify-self: center;
  flex-direction: column;
  height: 60%;
  justify-content: space-evenly;
`;

const MenuItem = styled.a`
  color: #000;
  font-size: clamp(0.5rem, 10vw, 1.5rem);
`;

const Line = styled.hr`
  width: 100%;
`;

export {
  Line,
  MenuItem,
  LogoMenuImg,
  InnerContainer,
  CloseButton,
  MenuHeadContainer,
  MenuItemsContainer,
};
