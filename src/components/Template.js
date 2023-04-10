import React from "react";
import styled from "styled-components";
const Template1 = styled.div`
width: 300px;
height: 500px;
background: #FFEFDF;
padding-top: 20px;
margin-left: auto;
margin-right: auto;
`
const Template = ({children}) => {
    return (
    <div>
        <Template1>
        <div>{children}</div>
        </Template1>
    </div>
    )
}
export default Template;