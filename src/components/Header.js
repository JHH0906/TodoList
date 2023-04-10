import React from "react";
import styled from "styled-components";
import { FaPaw } from "react-icons/fa"
import { BiMenu} from "react-icons/bi"


const Header1 = styled.div`
width: 300px;
height: 50px;
display:flex;
justify-content: space-around;
align-items:center;
background-color: #F3E0CD;
font-size: 20px;
margin-top: 48px;
margin-left: auto;
margin-right: auto;
`

const Header = ({todoLength}) => {
    return (
        <Header1>
            
            <FaPaw />
            <h3>Dog`s To Do ({todoLength})</h3>
            <BiMenu />
            
        </Header1>
    )
}
export default Header;