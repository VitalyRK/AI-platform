import styled from "styled-components";
import logo from "@/assets/robot.png";
import Heading from "./Heading";

const StyledHeader = styled.header`
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-light--1);

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledLogo = styled.div`
  /* font-family: var(--font-anta); */
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;
  line-height: 1;
  p {
    color: var(--color-brand-200);
    font-weight: 600;
  }
`;

function Header() {
  return (
    <StyledHeader>
      <StyledLogo>
        <img src={logo} alt="Logo" width={100} />
        <hgroup>
          <Heading as="h1">ROBOTECH</Heading>
          <p>ENGINEERING</p>
        </hgroup>
      </StyledLogo>
    </StyledHeader>
  );
}

export default Header;
