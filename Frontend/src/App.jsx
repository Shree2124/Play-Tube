import "./App.css";
import styled from "styled-components";
import { Navbar, Sidebar } from "./components";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import VideoContainer from "./components/VideoContainer";
import { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const auth = useSelector((state) => state.auth.status);
  const [data, setData] = useState([]);

  const connection = async ()=>{
    await axios.get("https://play-tube-api.vercel.app/jokes")
    .then((res)=>{
      setData(res.data)
      console.log(data);
    })
    .catch((err)=>{
      console.log("Error:- ",err);
    })
  }
  connection()

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
    <OutterDiv>
      <Navbar />
      <InnerDiv>
        <Sidebar />
        <OutletDiv>
          <Outlet />
        </OutletDiv>
      </InnerDiv>
    </OutterDiv>
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
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: 100%;
`;

export default App;
