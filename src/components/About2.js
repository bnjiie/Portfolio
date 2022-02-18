import React from "react";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";
import { GoCheck } from "react-icons/go";

function About2() {
    return(
        <Wrap>
            <Fade bottom>
                    <Text>
                        <h2>Proficiency</h2>
                        <table>
                            <tr>
                                <th></th>
                                <th>Beginner</th>
                                <th>Intermidiate</th>
                                <th>Advanced</th>
                            </tr>
                            <tr>
                                <td>HTML</td>
                                <td><GoCheck style={{color: '#a6cfd8', fontSize: '60px'}}/></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>CSS</td>
                                <td><GoCheck style={{color: '#a6cfd8', fontSize: '60px'}}/></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Javascript</td>
                                <td><GoCheck style={{color: '#a6cfd8', fontSize: '60px'}}/></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ReactJS</td>
                                <td><GoCheck style={{color: '#a6cfd8', fontSize: '60px'}}/></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </table>
                    </Text>
            </Fade>
        </Wrap>
    );
}

export default About2

const Wrap = styled.div`
    height: 100vh;
    width: 100vw;
    background: transparent;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    align-items: center;
    justify-content: center;
`



const Text = styled.div`
    color: #cae2e8;
    font-size: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 90px;
    
    h2 {
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

        table {
            border: 5px solid #76b5c2;
        }

        th, td {
        border: 2px solid #a6cfd8;
        padding: 10px;
        text-align: center;
    }
`