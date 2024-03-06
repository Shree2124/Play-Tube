import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const Login = () => {
  return (
    <LoginDiv>
      <SubDiv>
      <MainDiv>
        <Header>
          <LoginText>Login</LoginText>
        </Header>
        <Main>
          <Label>Username:</Label>
          <Input type="text" placeholder="Enter username:" />
          <Label>Password:</Label>
          <Input type="text" placeholder="Enter password:" />
          <Button>Sign in</Button>
          <ForgotPassword>
            Forgot password 
          </ForgotPassword>
        </Main>

      </MainDiv>
      <SignupDiv>
        <Text>
          Welcome to Login page
        </Text>
        <Text2>
          Don't have an account?
        </Text2>
        <SignupButton>Sign up</SignupButton>
      </SignupDiv>
      </SubDiv>
    </LoginDiv>
  );
};

const LoginDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  height: 60%;
  position: fixed;
  margin: auto;
  margin-top: 10rem;
  margin-left: 7rem;
`;

const SubDiv = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
`

const MainDiv = styled.div`
  background-color: #fff;
  border: 1px solid gray;
  border-right: 1px solid black;
  display: flex;
  flex-direction: column;
  border-top-left-radius: 2.5rem;
  border-bottom-left-radius: 2.5rem;
  height: 100%;
  width: 50%;
`;

const Header = styled.div`
  width: 100%;
  text-align: center;
  font-size: 25px;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
`;

const LoginText = styled.div`
  font-family: 'Times New Roman', Times, serif;
  margin: 2rem;
  margin-left: 1rem;
  width: fit-content;
  color: gray;
`;
const Label = styled.label`
  font-family: cursive;
  text-transform: uppercase;
  font-size: 20px;
  margin-left: 0.75rem;
`;
const Input = styled.input`
  margin: auto;
  width: 400px;
  height: 40px;
  padding: 1rem;
  border: 1px solid #f2f2f2;
  color: gray;
  font-size: 15px;
  border-radius: 2.5rem;
  background-color: #f2f2f2;
`;

const Button = styled.button`
  width: 400px;
  height: 40px;
  margin: auto;
  border-radius: 2.5rem;
  border: 1px solid gray;
  background: linear-gradient(to bottom, #f65860, #f6567a);
  color: #fff;
  font-size: 15px;
`;

const ForgotPassword = styled(Link)`
  font-size: 15px;
  margin-left: 40px;
  text-decoration: none;
  color: gray;
  &:hover{
    color: #000;
  }

`
const SignupDiv = styled.div`
  background: linear-gradient(to bottom, #f65860, #f6567a);
  width: 50%;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-top-right-radius: 2.5rem;
  border-bottom-right-radius: 2.5rem;
`;

const Text = styled.h1`
 color: #fff;
  /* margin: auto; */
  margin-top: 10rem;
  margin-bottom: 1rem;
  font-weight: bold;
`

const Text2 = styled.p`
color: #fff;
  margin-bottom: 1rem;
`
const SignupButton = styled(Link)`
  color: #fff;
  text-decoration: none;
  padding: 1rem;
  border: 1px solid #fff;
  border-radius: 2.5rem;
  font-size: 25px;
  &:hover{
    background-color: #fff;
    color: black;
    transition: .2s ease-in-out;
  }
`

export default Login;
