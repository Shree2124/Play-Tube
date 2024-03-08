import React from 'react'
import styled from 'styled-components'
import { IoHomeOutline } from 'react-icons/io5';
import {SiYoutubeshorts} from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { useSelector } from 'react-redux';
const Sidebar = () => {
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
      const toggle = useSelector(state=>state.toggle.isClicked)

  return (
    <MainDiv className={`${toggle ? 'w-20' : 'w-[15%]'} `}>
        {list.map((item,index)=>{
            return(
                <ItemDiv key={index} className={`flex ${toggle?'flex-col':'flex-row'}`}>
                    {item.icons}
                    <Field className={`${toggle ?'text-sm ml-0 truncate':'ml-10 text-xl'}`}>{item.title}</Field>
                </ItemDiv>
            )
        })}
    </MainDiv>
  )
}

const MainDiv = styled.div`
    height: 100vh;
    margin-top: 3rem;
    overflow-y: scroll;
    overflow-x: hidden;
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

`

const ItemDiv = styled.div`
    margin: 1.25rem;
    cursor: pointer;
`

const Field = styled.p`


`

export default Sidebar