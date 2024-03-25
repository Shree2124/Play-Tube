import React from "react";
import { styled } from "styled-components";

const VideoContainer = ({ darkMode, setDarkMode }) => {
  return (
    <>
      <Container>
        <div className="h-[200px] text-2xl">adkkdjf  dh1</div>
        <div className="h-[200px] text-2xl">1adkkdjf  dh</div>
        <div className="h-[200px] text-2xl">1</div>
        <div className="h-[200px] text-2xl">adkkdjf  dh1</div>
        <div className="h-[200px] text-2xl">1adkkdjf  dh</div>
        <div className="h-[200px] text-2xl">last</div>
        <div className="h-[200px] text-2xl">last</div>
        <div className="h-[200px] text-2xl">last</div>
        <div className="h-[200px] text-2xl">last</div>
        <div className="h-[200px] text-2xl">last</div>
        <div className="h-[200px] text-2xl">last alaskj</div>
      </Container>
    </>
  );
};

const Container = styled.div`
  background-color: ${({ theme }) => theme.bgLighter};
  color: ${({ theme }) => theme.text};
  /* position: relative; */
`;
export default VideoContainer;
