import React from "react";
import styled from "styled-components";
import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { CCarousel,CCarouselCaption,CCarouselItem,CImage } from '@coreui/react';

const DonationsContainer = (props) =>{
    return(
        <Container>
            <LiveUpdates>
            <CCarousel controls indicators>
                <CCarouselItem>
                    <Cover><CImage  className="d-block w-100 rad" src="/images/react.jpg" alt="slide 1" /></Cover>
                    <CCarouselCaption className="d-none d-md-block">
                    <h5>First slide label</h5>
                    <p>Some representative placeholder content for the first slide.</p>
                    </CCarouselCaption>
                </CCarouselItem>
                <CCarouselItem>
                    <Cover><CImage className="d-block w-100 h-60" src="/images/vue.jpg" alt="slide 2" /></Cover>
                    <CCarouselCaption className="d-none d-md-block">
                    <h5>Second slide label</h5>
                    <p>Some representative placeholder content for the first slide.</p>
                    </CCarouselCaption>
                </CCarouselItem>
                <CCarouselItem>
                    <Cover><CImage className="d-block w-100" src="/images/angular.jpg" alt="slide 3" /></Cover>
                    <CCarouselCaption className="d-none d-md-block">
                    <h5>Third slide label</h5>
                    <p>Some representative placeholder content for the first slide.</p>
                    </CCarouselCaption>
                </CCarouselItem>
            </CCarousel>
            </LiveUpdates>
            <Unknown></Unknown>
        </Container>
    )
}

const Container = styled.div`
    height: 200px;
    border-radius:20px;
    margin-top: 140px;
    width: 65%;
    height: 80vh;
    display: flex;
    padding: 12px 12px;
    flex-direction: column;
    margin-bottom: 30px;
`

const LiveUpdates = styled.div`
    border-radius: 10px;
    height: 60vh;
    width: 100%;
    margin-bottom: 10px;

`

const Unknown = styled.div`
    border: 1px solid green;
    height: 40vh;
    border-radius: 10px;
    width: 100%;
`

const Cover = styled.div`
    img{
        height: 55vh;
        width: 100vw;
        object-fit: cover;
        border-radius: 40px;

    }
`

export default DonationsContainer;