import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoSearch } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlineVideoCall } from "react-icons/md";
import Avatar from 'react-avatar';
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setToggle } from "../redux/features/toggleSlice";

const Navbar = ({darkTheme, setDarkTheme}) => {
  const toggle = useSelector((state) => state.toggle.isClicked);
  const auth = useSelector((state) => state.auth.status);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setToggle(toggle));
  };
  return (
    <Container>
      <Section>
        <IconAndLogoSection>
          <RxHamburgerMenu size={"30px"} onClick={handleClick} />
          <LogoImage src="../assets/tune-tube.svg" alt="Logo" />
        </IconAndLogoSection>
        <InputandSearchSection>
          <InputSection>
            <Input type="text" placeholder="Search" />
          </InputSection>
          <SearchButton>
            <IoSearch size={"22px"} />
          </SearchButton>
        </InputandSearchSection>
        {auth ? (
          <div className="flex items-center gap-4 mx-6">
            <MdOutlineVideoCall size={"30px"} />
            <IoMdNotificationsOutline size={"30px"} />
            <Avatar
              src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              size={"35px"}
              round="30px"
            />
          </div>
        ) : (
          <AuthenticationButtons>
            <LoginButton to="/login">Log in</LoginButton>
            <SignupButton to="/register">Sign up</SignupButton>
          </AuthenticationButtons>
        )}
      </Section>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  margin: 0;
  padding: 0;
  display: flex;
  width: 100%;
  z-index: 10;
  background-color: ${({ theme }) => theme.bgLighter};
  min-width: 10px;
  color: ${({ theme }) => theme.text};
`;

const Section = styled.div`
  /* padding: 0 1.25rem 0 1.25rem; */
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;
  gap: 20rem;
  @media only screen and (min-width:480px) and (max-width:768px){
  width: 50%;
  flex-wrap: wrap;
  justify-content: center;
}

@media only screen and (max-width:478px){
 /* flex-wrap: wrap; */
 gap: 1rem;
}
`;

const IconAndLogoSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  gap: 1rem;
  margin-left: 0.75rem;
  background-color: ${({ theme }) => theme.bgLighter};
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
  font-size: 15px;
  background-color: ${({ theme }) => theme.bgLighter};
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
  padding: 0.5rem 1rem 0.5rem 1rem;
`;

const AuthenticationButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 20%;
  gap: 2rem;
  margin-right: 2rem;
`;
const LoginButton = styled(Link)`
  text-decoration: none;
  padding: 0.2rem 0.75rem;
  border: 1px solid ${({ theme }) => theme.text};
  border-radius: 2.5rem;
  font-size: 20px;
  background-color: ${({ theme }) => theme.bgLighter};
  color: ${({ theme }) => theme.text};
  &:hover {
    background-color: gray;
    color: white;
    transition: 0.2s ease-in-out;
  }
`;

const SignupButton = styled(Link)`
  text-decoration: none;
  padding: 0.2rem 1rem;
  border: 1px solid ${({ theme }) => theme.text};
  border-radius: 2.5rem;
  font-size: 20px;
  background-color: ${({ theme }) => theme.bgLighter};
  color: ${({ theme }) => theme.text};
  &:hover {
    background-color: gray;
    color: white;
    transition: 0.2s ease-in-out;
  }
`;
export default Navbar;
