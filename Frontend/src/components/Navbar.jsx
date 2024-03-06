import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoSearch } from "react-icons/io5";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Container>
      <Section>
        <IconAndLogoSection>
          <RxHamburgerMenu size={"30px"} />
          <LogoImage src="" alt="Logo" />
        </IconAndLogoSection>
        <InputandSearchSection>
          <InputSection>
            <Input type="text" placeholder="Search" />
          </InputSection>
          <SearchButton>
            <IoSearch size={"17px"} />
          </SearchButton>
        </InputandSearchSection>
        <AuthenticationButtons>
          <LoginButton to='/login'>Log in</LoginButton>
          <SignupButton to='/register'>Sign up</SignupButton>
        </AuthenticationButtons>
      </Section>
    </Container>
  );
};

const Container = styled.div`
position: fixed;
  margin: 0;
  display: flex;
  width: 100%;
  z-index: 10;
  background-color: #fff;
  
`;

const Section = styled.div`
  /* padding: 0 1.25rem 0 1.25rem; */
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;
  gap: 20rem;
  border-bottom: 1px solid gray;
`;

const IconAndLogoSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  gap: 1rem;
  margin-left: 0.75rem ;
`;

const LogoImage = styled.img`
  width: 115px;
  height: 6px;
  margin: 0;
  padding: 0;
`;

const InputandSearchSection = styled.div`
  display: flex;
  align-items: center;
  width: 40%;
`;

const InputSection = styled.div`
  width: 100%;
  padding: 0.5rem 1rem 0.5rem 1rem;
  margin: 0.75rem 0 0.75rem 0;
  border: 1px solid rgb(156 163 175 / 1);
  border-top-left-radius: 9999px;
  border-bottom-left-radius: 9999px;
`;

const Input = styled.input`
  border: none;
  width: 100%;
  &:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
  }
`;

const SearchButton = styled.button`
  border: 1px solid rgb(156 163 175/1);
  border-radius: 1.5rem;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
  width: 10%;
  padding: 0.5rem 1rem 0.5rem 1rem;
`;

const AuthenticationButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 2rem;
  margin: 0;
`;
const LoginButton = styled(Link)`
  padding: 0.5rem 1rem 0.5rem 1rem;
  background-color: #212121;
  color: #fff;
  text-decoration: none;
  border-radius: 1.5rem;
`;

const SignupButton = styled(Link)`
  padding: 0.5rem 1rem 0.5rem 1rem;
  background-color: #212121;
  color: #fff;
  text-decoration: none;
  border-radius: 1.5rem;
`;
export default Navbar;
