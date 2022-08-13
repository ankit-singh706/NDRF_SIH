import React from "react";
import styled from "styled-components";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";

const ImageSlider = (props) =>{

    let settings = {
        dots:true,
        infinite:true,
        speed:500,
        slidesToShow:1,
        slidesToScroll:1,
        autoplay:true,
    }
    return(
        <div>
            <Container>
                <Carousel {...settings}>
                    <Wrap><a href="/"><img src="https://images.unsplash.com/photo-1660127797386-abad2ee4bc32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="Loading..."/></a></Wrap>
                    <Wrap><a href="/"><img src="https://images.unsplash.com/photo-1660127797386-abad2ee4bc32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="Loading..."/></a></Wrap>
                    <Wrap><a href="/"><img src="https://images.unsplash.com/photo-1660127797386-abad2ee4bc32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="Loading..."/></a></Wrap>
                    <Wrap><a href="/"><img src="https://images.unsplash.com/photo-1660127797386-abad2ee4bc32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="Loading..."/></a></Wrap>
                </Carousel>
            </Container>
        </div>
    )
}

const Container = styled.div`
    margin-top: 150px;
    margin-left: 60px;
    width: 66%;
    height: 45vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Carousel = styled(Slider)`
    padding: 0px 12px;
    border-radius: 90px;
    overflow: hidden;
    &>button{
        opacity: 0;
        height: 100%;
        width: 5vw;
        z-index: -1;
        &:hover{
            opacity: 1;
            transition: opacity 0.2s ease 0s;
        }
    }

    ul li button{
        &::before{
            font-size: 10px;
            color: rgb(150,158,171);
        
        }
    }

    li.slick-active button:before{
        color: black;
    }

    .slick-list{
        overflow:initial;
    }
    .slick-prev{
        left: -40px;
    }
    .slick-next{
        right: -40px;
    }
`

const Wrap = styled.div`
    border-radius: 4px;
    cursor: pointer;
    position: relative;

    a{
        border-radius:4px;
        box-shadow:rgb(0 0 0 / 69%) 0px 26px 30px -10px,rgb(0 0 0/ 73%) 0px 16px 10px -10px;
        cursor: pointer;
        display: block;
        position: relative;
        padding: 4px;

        img{
            width: 66%;
            height: 45vh; 
        }

        &:hover{
            padding: 0;
            border: 4px solid rgba(249,249,249,0.8);
            transition-duration: 300ms;
        }
    }
`;

export default ImageSlider;