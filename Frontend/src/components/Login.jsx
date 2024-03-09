import React,{useState, useEffect} from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Input, Button } from "../components/index";
import { useForm } from "react-hook-form";
import { SiHellofresh } from "react-icons/si";
const Login = () => {
  const { register, handleSubmit } = useForm();
  const [username, setUsername] = useState("");
  // const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const submit = async() => {
    const data = {
    email: email,
    username: username,
    password: password,
  }
    // console.log("hello");
    // console.log(fullName);
    console.log(username);
    console.log(password);
    console.log(email);

    await  axios.post("https://play-tube-api.vercel.app/user/login",data)
    .then((res)=>{
      console.log("Success ");
      console.log(res);
      navigate("/dashboard");
    })
    .catch((err)=>{
      console.log("Error:- ",err);
    })
  };
  return (
    <LoginDiv>
      <SubDiv>
        <LogoDiv>
          <span>
            <img src="../asstes/tune-tube.svg" alt="Logo" />
          </span>
        </LogoDiv>
        <div className="flex flex-col">
          <h2>Login to your account</h2>
          <div className="flex flex-col items-center">
            <p className="text-xl">
              Don&apos;t have any account?&nbsp;
              <Link to="/register">Sign Up</Link>
            </p>
          </div>
        </div>
        <Form onSubmit={handleSubmit(()=>submit())}>
          <ContentDiv>
            <Input
              label="Email: "
              placeholder="Enter your Email: "
              type="email"
              {...register("email", {
                required: true,
                validate: {
                  matchPatern: (value) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Email address must be a valid address",
                },
              })}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <Input
              label="Username: "
              placeholder="Enter your Username: "
              type="text"
              {...register("Username", {
                required: true,
              })}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <Input
              label="Password : "
              placeholder="Enter your Password: "
              type="password"
              {...register("password", {
                required: true,
              })}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <Button
              type="submit"
              bgColor="bg-red-500"
              className="hover:bg-green-500"
            >
              Sign in
            </Button>
          </ContentDiv>
        </Form>
      </SubDiv>
    </LoginDiv>
  );
};

const LoginDiv = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const SubDiv = styled.div`
  margin: 0 auto;
  border: 1px solid black;
  width: 32rem;
  background-color: rgb(243 244 246 / 1);
  border-radius: 0.75rem;
  padding: 2.5rem;

  h2 {
    text-align: center;
    font-size: 1.5rem;
    line-height: 1.25;
    font-weight: 700;
  }
  a {
    font-weight: bold;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
    transition-duration: 200ms;
    text-decoration-line: underline;
    &:hover {
      transform: scale(2);
      transition: all 0.2s ease-in-out;
    }
  }
`;

const LogoDiv = styled.div`
  margin-bottom: 0.5rem;
  display: flex;
  justify-content: center;

  span {
    display: inline-block;
    width: 100%;
    max-width: 100px;
  }
`;

const Form = styled.form`
  margin-top: 2rem;
`;

const ContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  margin-top: calc(1.25rem calc(1 - 0));
  margin-bottom: calc(1.25rem 0);
`;

export default Login;
