import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import { Navbar, Sidebar } from "./components";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import VideoContainer from "./components/VideoContainer";
import { useEffect, useState } from "react";
import { darkTheme, lightTheme } from "./utils/Theme.js";
import axios from "axios";

function App() {
  const auth = useSelector((state) => state.auth.status);
  const [data, setData] = useState([]);
  const [darkMode, setDarkMode] = useState(true);

  // const connection = async ()=>{
  //   await axios.get("https://play-tube-api.vercel.app/jokes")
  //   .then((res)=>{
  //     setData(res.data)
  //     console.log(data);
  //   })
  //   .catch((err)=>{
  //     console.log("Error:- ",err);
  //   })
  // }
  // connection()

  return (
    <>
      {/* <div>
      {
        data.map((joke)=>(
          <>
          <h2>{joke.title}</h2>
          <p>{joke.content}</p>
          </>
        ))
      }
    </div> */}
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <OutterDiv>
          <Navbar />
          <InnerDiv>
            <Sidebar darkMode={darkMode} setDarkMode={setDarkMode} />
            <OutletDiv>
              <Outlet />
            </OutletDiv>
          </InnerDiv>
        </OutterDiv>
      </ThemeProvider>
    </>
  );
}

const OutterDiv = styled.div`
  overflow: hidden;
`;

const InnerDiv = styled.div`
  display: flex;
`;

const OutletDiv = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
  overflow-y: scroll;
  scroll-behavior: smooth;
  background-color: ${({ theme }) => theme.bgLighter};

  &::-webkit-scrollbar {
    width: 0px; /* Adjust as needed */
  }

  &:hover::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #313131;
    background-color: ${({ theme }) =>
      theme.scrollBar}; /* Color of scrollbar thumb */
  }
`;

export default App;
