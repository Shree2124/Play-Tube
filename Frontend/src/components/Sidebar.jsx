import React from "react";
import styled from "styled-components";
import { IoHomeOutline } from "react-icons/io5";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { useSelector } from "react-redux";

import { Link } from "react-router-dom";

import HomeIcon from "@mui/icons-material/Home";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import SportsBasketballOutlinedIcon from "@mui/icons-material/SportsBasketballOutlined";
import MovieOutlinedIcon from "@mui/icons-material/MovieOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import SettingsBrightnessOutlinedIcon from "@mui/icons-material/SettingsBrightnessOutlined";

const Sidebar = ({ darkMode, setDarkMode }) => {
  const list = [
    {
      icons: <IoHomeOutline size={"25px"} />,
      title: <p>Home</p>,
    },
    {
      icons: <SiYoutubeshorts size={"25px"} />,
      title: <span>Shorts</span>,
    },
    {
      icons: <MdOutlineSubscriptions size={"30px"} />,
      title: <span>Subscription</span>,
    },
    {
      icons: <IoHomeOutline size={"25px"} />,
      title: <span>Home</span>,
    },
    {
      icons: <SiYoutubeshorts size={"25px"} />,
      title: <span>Shorts</span>,
    },
    {
      icons: <MdOutlineSubscriptions size={"30px"} />,
      title: <span>Subscription</span>,
    },
    {
      icons: <IoHomeOutline size={"25px"} />,
      title: <span>Home</span>,
    },
    {
      icons: <SiYoutubeshorts size={"25px"} />,
      title: <span>Shorts</span>,
    },
    {
      icons: <MdOutlineSubscriptions size={"30px"} />,
      title: <span>Subscription</span>,
    },
    {
      icons: <IoHomeOutline size={"25px"} />,
      title: <span>Home</span>,
    },
    {
      icons: <SiYoutubeshorts size={"25px"} />,
      title: <span>Shorts</span>,
    },
    {
      icons: <MdOutlineSubscriptions size={"30px"} />,
      title: <span>Subscription</span>,
    },
    {
      icons: <MdOutlineSubscriptions size={"30px"} />,
      title: <span>Subscription</span>,
    },
    {
      icons: <IoHomeOutline size={"25px"} />,
      title: <span>Home</span>,
    },
    {
      icons: <SiYoutubeshorts size={"25px"} />,
      title: <span>Shorts</span>,
    },
    {
      icons: <MdOutlineSubscriptions size={"30px"} />,
      title: <span>Subscription</span>,
    },
    {
      icons: <MdOutlineSubscriptions size={"30px"} />,
      title: <span>Subscription</span>,
    },
    {
      icons: <IoHomeOutline size={"25px"} />,
      title: <span>Home</span>,
    },
    {
      icons: <SiYoutubeshorts size={"25px"} />,
      title: <span>Shorts</span>,
    },
    {
      icons: <MdOutlineSubscriptions size={"30px"} />,
      title: <span>Subscription</span>,
    },
  ];
  const toggle = useSelector((state) => state.toggle.isClicked);

  // return (
  //   <MainDiv className={`${toggle ? 'w-20' : 'w-[15%]'} `}>
  //       {list.map((item,index)=>{
  //           return(
  //               <ItemDiv key={index} className={`flex ${toggle?'flex-col':'flex-row'}`}>
  //                   {item.icons}
  //                   <Field className={`${toggle ?'text-sm ml-0 truncate':'ml-10 text-xl'}`}>{item.title}</Field>
  //               </ItemDiv>
  //           )
  //       })}
  //   </MainDiv>
  // )

  return (
    <Container>
      <Wrapper>
        {/* <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Logo>
            <Img src={YTLogo} />
            TUNE TUBE
          </Logo>
        </Link> */}
        <Item>
          <HomeIcon />
          <p>Home</p>
        </Item>
        <Item>
          <ExploreOutlinedIcon />
          Explore
        </Item>
        <Item>
          <SubscriptionsOutlinedIcon />
          Subscriptions
        </Item>
        <Hr />
        <Item>
          <VideoLibraryOutlinedIcon />
          Library
        </Item>
        <Item>
          <HistoryOutlinedIcon />
          History
        </Item>
        <Hr />
        <Login>
          Sign in to like videos, comment, and subscribe.
          <Link to="/login" style={{ textDecoration: "none" }}>
            <Button>
              <AccountCircleOutlinedIcon />
              SIGN IN
            </Button>
          </Link>
        </Login>
        <Hr />
        <Title>BEST OF TUNE TUBE</Title>
        <Item>
          <LibraryMusicOutlinedIcon />
          Music
        </Item>
        <Item>
          <SportsBasketballOutlinedIcon />
          Sports
        </Item>
        <Item>
          <SportsEsportsOutlinedIcon />
          Gaming
        </Item>
        <Item>
          <MovieOutlinedIcon />
          Movies
        </Item>
        <Item>
          <ArticleOutlinedIcon />
          News
        </Item>
        <Item>
          <LiveTvOutlinedIcon />
          Live
        </Item>
        <Hr />
        <Item>
          <SettingsOutlinedIcon />
          Settings
        </Item>
        <Item>
          <FlagOutlinedIcon />
          Report
        </Item>
        <Item>
          <HelpOutlineOutlinedIcon />
          Help
        </Item>
        <Item onClick={() => setDarkMode(!darkMode)}>
          <SettingsBrightnessOutlinedIcon />
          {darkMode ? "Light" : "Dark"} Mode
        </Item>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  padding: 1rem;
  height: 100vh;
  margin-top: 3rem;
  overflow: auto;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  color: ${({ theme }) => theme.text};
  bottom: 0;
  background-color: ${({ theme }) => theme.bgLighter};

  &::-webkit-scrollbar {
    width: 0px; /* Adjust as needed */
  }

  &:hover::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.scrollBar}; /* Color of scrollbar thumb */
  }
`;
const Wrapper = styled.div`
  padding: 2rem 0.5rem;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  padding: 7px 7px;

  &:hover {
    border-radius: 5px;
    background-color: ${({ theme }) => theme.soft};
  }
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;

const Login = styled.div``;
const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  margin-top: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Title = styled.h2`
  font-size: 14px;
  font-weight: 500;
  color: #aaaaaa;
  margin-bottom: 20px;
`;

// const MainDiv = styled.div`
//     height: 100vh;
//     margin-top: 3rem;
//     overflow-y: scroll;
//     overflow-x: hidden;
//     position: relative;
//     top: 0;
//     left: 0;
//     right: 0;
//     bottom: 0;

// `

// const ItemDiv = styled.div`
//     margin: 1.25rem;
//     cursor: pointer;
// `

// const Field = styled.p`

// `

export default Sidebar;
