import React from "react";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";


function Section() {
    return (
        <div>
            <Wrap>
                <Fade bottom>
                    <ItemText>
                        <h1>Benjamin Fernandez</h1>
                    </ItemText>
                </Fade>
            </Wrap>
        </div>
    );
}


export default Section

const Wrap = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`

const ItemText = styled.div`
    display: inline-block;

    @media (max-width: 768px) {
        flex-direction: column;
    }

    h1 {
        color: #76b5c2;

        overflow: hidden;
        border-right: 3px solid #76b5c2;
        white-space: nowrap;
        font-size: 60px;
        width: 0;
        animation: 
            typing 2s steps(20, end) forwards,
            blink .8s infinite;
        
    }

    @keyframes typing {
        fromt { width: 0 }
        to { width: 100% }
    }

    @keyframes blink {
        from {border-color: transparent }
        to {border-color: #76b5c2 }
    }
`