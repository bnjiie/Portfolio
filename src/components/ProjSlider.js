import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import images1 from '../images/clockcounter.png';
import images2 from '../images/jschallenges.JPG';
import images3 from '../images/mytodolist.JPG'

function ProjSlider() {

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidestoScroll: 1,
        autoplay: true,
    }

    return(
        <Box>
        <h1>Projects</h1>
        <Container {...settings}>
            <Wrap>
                <img src={images1} alt="" />
                <TextBox>
                    <h3>Simple Clock and Counter App</h3>
                </TextBox>
            </Wrap>
            <Wrap>
                <img src={images2} alt="" />
                <TextBox>
                    <h3>JavaScript Challenges</h3>
                    <p>Online Tutorials for JavaScript</p>
                </TextBox>
                
            </Wrap>
            <Wrap>
                <img src={images3} alt="" />
                <TextBox>
                    <h3>To Do List App</h3>
                    <p>2 days Bootcamp using React</p>
                </TextBox>
            </Wrap>
        </Container> 
        </Box> 
    );
}

export default ProjSlider

const Box = styled.div`
font-size: 20px;
text-align: center;
width: 100vw;
margin-top: 40px;
display: flex;
flex-direction: column;

h1 {
    color: #76b5c2;
    animation: glow 2s ease-in-out infinite alternate;

    @keyframes glow {
        from {
          text-shadow: 0 0 20px #2d9da9;
        }
        to {
          text-shadow: 0 0 30px #34b3c1, 0 0 10px #4dbbc7;
        }
      }
    }

h3, p {
    color: #76b5c2;
}
`

const Container = styled(Slider)`
height: 100vh;
width: 100vw;
align-items: center;
justify-content: center;
text-align: center;
display: flex;
margin-top: 30px;
padding: 20px;
`

const Wrap = styled.div`
    cursor: pointer;
        img {
            border: 5px solid #76b5c2;
            border-radius: 5px;
            box-shadow: 0 20px 25px rgba(0, 0, 0, 0.3);
            height: 700px;
            width: 400px;
            margin-left: auto;
            margin-right: auto;
            transition-duration: 300ms;
        }
`

const TextBox = styled.div`
    font-size: 15px;
    color: silver;
    height: 100px;
    width: 400px;
    align-items: center;
    justify-content: center;
    margin: auto;
`