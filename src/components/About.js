import React from "react";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";
import { RiDropFill, RiDropLine } from "react-icons/ri";


function About() {
    return (
        <Wrap>
            <Fade bottom>
                <h1>About</h1>
                <Container>
                    <Text>
                        <br />
                        <p>
                            <dl>
                                <dt><RiDropFill style={{fontSize: '19px'}} /> Graduated BS Electronics Engineer</dt>
                                <dd>at FEU Institute of Technology</dd>
                            </dl>
                        </p>
                        <br />
                        <p><RiDropFill style={{fontSize: '19px'}} /> Work Experiences:</p>
                        <dl>
                            <dt><RiDropLine style={{fontSize: '19px'}} /> Commissioning Engineer at PPASI under Uniwell Tech Corp</dt>
                            <dd>~ Building Automation</dd>
                            <dd>~ Programming and testing systems with regards to Building Management System</dd>
                            <br />
                            <dt><RiDropLine style={{fontSize: '19px'}} /> Customer Support Engineer</dt>
                            <dd>~ Field Service Engineer</dd>
                            <dd>~ Install, Test, Maintain different Medical Equipment</dd>
                        </dl>

                    </Text>
                </Container>
            </Fade>
        </Wrap>
    );
}

export default About

const Wrap = styled.div`
    height: 100vh;
    width: 100vw;
    background: transparent;

    h1 {
        text-align: center;
        margin-top: 30px;
        color: #76b5c2;

        animation: glow 2s ease-in-out infinite alternate;
    }

    @keyframes glow {
        from {
          text-shadow: 0 0 20px #2d9da9;
        }
        to {
          text-shadow: 0 0 30px #34b3c1, 0 0 10px #4dbbc7;
        }
      }
    }
`


const Container = styled.div`
    border: 5px solid #76b5c2;
    min-height: 80vh;
    max-width: 50vw;
    display: flex;
    align-items: center;
    justify-items: center;
    margin: auto;
`

const Text = styled.div`
    color: #76b5c2;
    font-size: clamp(10px, 4vw, 25px);
    padding: 20px;

`