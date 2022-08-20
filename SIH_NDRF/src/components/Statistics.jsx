import React from "react";
import styled from "styled-components";

const Statistics = (props) =>{
    return(
        <>
        <Heading><h1>STATISTICS</h1></Heading>
        <Container>
            <Map></Map>
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
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-weight: bold;
`

const Map = styled.div`
    border: 1px solid red;
    border-radius: 20px;
    width: 65%;
    height: 85vh;
    padding:12px 12px;
`

const Stats = styled.div`
    border: 1px solid black;
    width: 30%;
    border-radius: 20px;
    height: 85vh;
`

export default Statistics;
