import React from "react";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";

function Programs() {
    return (
        <Wrap>
            <Fade bottom>
                <h1>Projects</h1>
                <Container>

                </Container>
            </Fade>
        </Wrap>
    );
}

export default Programs

const Wrap = styled.div`
    height: 100vh;
    width: 100vw;
    background: blue;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    align-items: center;
    justify-content: center;
    text-align: center;
    display: flex;
    flex-direction: column;
`

const Container = styled.div`
    border: 5px solid white;
    height: 800px;
    width: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
`