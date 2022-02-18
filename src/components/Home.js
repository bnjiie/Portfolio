import React from "react";
import styled from "styled-components";
import Section from "./Section";
import About from "./About";
import About2 from "./About2";
import ProjSlider from "./ProjSlider";

function Home() {
    return (
        <Container>
            <Section />
            <About />
            <About2 />
            <ProjSlider />
        </Container>
    );
}

export default Home

const Container = styled.div`
    display: flex;
    flex-direction: column;
`