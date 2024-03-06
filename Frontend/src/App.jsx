import "./App.css";
import styled from "styled-components";
import { Navbar, Sidebar } from "./components";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <OutterDiv>
      <Navbar />
      <InnerDiv>
        <Sidebar />
        <OutletDiv>
          <Outlet />
        </OutletDiv>
      </InnerDiv>
    </OutterDiv>
  );
}

const OutterDiv = styled.div`
  margin-top: 0;
`;

const InnerDiv = styled.div`
  display: flex;
 
`;

const OutletDiv = styled.div`
margin: auto;
margin-left: 16.5rem;
position: absolute;
left: 0;
right: 0;
bottom: 0;
top: 0;
overflow-y: scroll;
overflow-x: hidden;
height: 100%;
width: 85%;
`

export default App;
