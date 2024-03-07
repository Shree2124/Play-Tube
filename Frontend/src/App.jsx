import "./App.css";
import styled from "styled-components";
import { Navbar, Sidebar } from "./components";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import VideoContainer from "./components/VideoContainer";
function App() {
  const auth = useSelector((state) => state.auth.status);

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
