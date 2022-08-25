import React from "react";
import styled from "styled-components";
import Chloropeth from "../section/Chloropeth";

const Statistics = (props) =>{
    return(
        <>
        <Heading><h1>STATISTICS</h1></Heading>
        <Container>
            <Map>
                <Chloropeth/>
            </Map>
            <Stats><p>Hello</p></Stats>
        </Container>
        </>
    )
}

const Container = styled.div`
    height: 100vh;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
`

const Heading = styled.div`
    text-align: center;
    
    h1{
        font-size: 2.3rem;
        font-family: "Poppins", sans-serif;
        font-weight: 700;
        /* letter-spacing: 2px; */
    }
`

const Map = styled.div`
    width: 65%;
    height: 85vh;
    padding:12px 12px;
    z-index:0;
    
`

const Stats = styled.div`
    border: 1px solid black;
    width: 30%;
    border-radius: 20px;
    height: 85vh;
`

export default Statistics;
