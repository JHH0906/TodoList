import React from "react";
import styled from "styled-components";
import { FaPaw } from "react-icons/fa"

const Footer1 = styled.div`
width: 300px;
height: 50px;
display:flex;
justify-content: space-around;
align-items:center;
background-color: #F3E0CD;
margin-left: auto;
margin-right: auto;
font-size: 20px;
`

function Footer () {
    return (
        <Footer1>
            <FaPaw />
            <h5>Dog`s To Do by BrotherHo</h5>
            <FaPaw />
        </Footer1>
    )
}
export default Footer;