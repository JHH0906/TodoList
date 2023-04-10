import styled from "styled-components";
import { MdArrowForwardIos } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";
import { TbDog } from "react-icons/tb";
import { BsFillPeopleFill } from "react-icons/bs";



const NavContainer = styled.div`
width: 200px;
height: 500px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`
const NavHeader = styled.div`
width: 200px;
height: 50px;
display:flex;
justify-content: center;
align-items:center;
background-color: #F3E0CD;
.aaa{
    font-size:20px;
    position:relative;
    right:80px;    
}
`
const NavBody = styled.div`
width: 200px;
height: 450px;
display:flex;
flex-direction:column;
justify-content: center;
align-items: center;
background: #FFEFDF;
`
const NavBody2= styled.div`
width: 150px;
height: 130px;
display:flex;
flex-direction:column;
justify-content: space-between;

.bbb{
    width:150px;
    height:40px;
    background:#F3E0CD;
    display:flex;
    justify-content:space-around;
    align-items:center;
    
}
.ccc{
    width:150px;
    height:40px;
    background:#F3E0CD;
    display:flex;
    justify-content:space-around;
    align-items:center;
}
.ddd{
    width:150px;
    height:40px;
    background:#F3E0CD;
    display:flex;
    justify-content:space-around;
    align-items:center;
}
`
function Nav () {
    return (
        <NavContainer>
            <NavHeader>
            <div className="aaa"><MdArrowForwardIos /></div>
            </NavHeader>
            <NavBody>
                <NavBody2>
                <div className="bbb"><AiFillHome /> 메인 페이지</div>
                <div className="ccc"><TbDog /> 사진 보기</div>
                <div className="ddd"><BsFillPeopleFill /> 만든 사람</div>
                
                </NavBody2>
            </NavBody>
        </NavContainer>
    )
}

export default Nav