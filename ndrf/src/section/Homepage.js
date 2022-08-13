import React from 'react';
import styled from 'styled-components';
import Donations from '../components/Donations';
import ImageSlider from '../components/ImageSlider';


const Homepage = (props) =>{
    return(
        <Container>
            <ImageSlider/>
            <Donations/>
        </Container>
    )
}


const Container = styled.main`
    position: relative;
    overflow-x: hidden;
    display: block;
    /* padding: 0 calc(3.5vw + 5px); */

    &:after{
        content: '';
        position: absolute;
        inset: 0px;
        opacity: 1;
        z-index: -1;
    }
`

export default Homepage;