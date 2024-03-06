import React from 'react'
import styled from 'styled-components'
import { IoHomeOutline } from 'react-icons/io5';
import {SiYoutubeshorts} from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
const Sidebar = () => {
    const list = [
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
  return (
    <MainDiv>
        {list.map((item,index)=>{
            return(
                <ItemDiv key={index}>
                    {item.icons}
                    <Field>{item.title}</Field>
                </ItemDiv>
            )
        })}
    </MainDiv>
  )
}

const MainDiv = styled.div`
    z-index: -1;
    margin-top: 3rem;
    width: 15%;
    border: 1px solid rgb(229 231 235/1);
    overflow-y: scroll;
    overflow-x: hidden;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

`

const ItemDiv = styled.div`
    display: flex;
    flex-direction: row;
    margin: 1.25rem;
`

const Field = styled.p`
    margin-left: 2.5rem;
    font-size: 1.25rem/* 20px */;


`

export default Sidebar