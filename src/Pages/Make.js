import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Ellipse from "../asseets/Ellipse2.png"

const MakeContainer = styled.div`
width:300px;
height:500px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
background: #FFEFDF;
.text1, .text2{
    font-size:20px;
}
.text1{
    position:relative;
    top:30px;
}
.text2{
    position:relative;
    top:60px;
}
`

function Make () {
    return (
        <div>
        <Header />
        <MakeContainer>
            <img src={Ellipse} alt="github"></img>
            <div className="text1">BrotherHo</div>
            <div className="text2">Github: JHH0906</div>
        </MakeContainer>
        <Footer />
        </div>
    )

}

export default Make