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
        <Outlet />
      </InnerDiv>
    </OutterDiv>
  );
}

const OutterDiv = styled.div`
  margin-top: 0;

`;

const InnerDiv = styled.div`
  display: flex;
  gap: 4rem;
`;

export default App;
