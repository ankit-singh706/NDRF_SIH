import React from "react";
import styled from "styled-components";

const Logistics = (props) =>{
    return(
        <>
            <Heading><h1>Tracking Instances-</h1></Heading>
            <TrackBar>
                <div className="box"><div className="progressbar"></div></div>
                <div className="box"><div className="progressbar second"></div></div>
                <div className="box"><div className="progressbar third"></div></div>
                <div className="box"><div className="progressbar fourth"></div></div>
                <div className="box"></div>
                
            </TrackBar>
            <TBarText>
                <p>Approved</p>
                <p>Preparing Dispatch</p>
                <p>Dispatched</p>
                <p>Destination Reached</p>
                <p>Distributed</p>
            </TBarText>
            <TrackingBar0>
                <div className="content">Sanctioned by Dy Commandment Sh. Kamal Mehra under the orders of Director General Sh. Atul Karwal</div>
            </TrackingBar0>
            <TrackingBar1>
                <div className="content">Troops and Transport from 2nd Battalion, Nadia (WB) beginning prep</div>
                <div className="content">Food and comfort supplies being sourced and packed</div>
            </TrackingBar1>
        </>
    )
}

const Heading = styled.div` 
    margin-top: 130px;
    margin-left: 65px;
    font-family: "Poppins", sans-serif;

    h1{
        font-weight: bold;
    }
    
`

const TrackBar = styled.div`
    margin: 80px 52px;
    margin-bottom: 0;
    padding: 12px 53px;
    display: flex;
    justify-content: space-between;
    top: 10px;

    .box{
        height: 50px;
        width: 50px;
        border-radius: 50%;
        background-color: orange;
    }
    .progressbar{
        position: absolute;
        height: 10px;
        width: 20%;
        top: 287px;
        left: 9%;
        border-bottom: 6px solid black;
        z-index: -1;
    }

    .second{
        left: 30%;
    }

    .third{
        left: 50.2%;
    }

    .fourth{
        left: 71%;
    }

`

const TBarText = styled.div`
    overflow: hidden;
    margin-bottom: 10px;
    margin-left: 18px;
    margin-right: 11px;
    padding: 12px 72px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2px;

    p{
        font-family: "Noto Sans", sans-serif;
        font-weight: 600;
        line-height: 24px;
        color: grey;
        margin: 0px 0px;
    }   
`

const TrackingBar0 = styled.div`
    position: relative;
    display: inline-flex;
    width: 190px;
    left: 45px;
    height: 190px;
    border-left: 2px solid #000000;

    .content{
        position: absolute;
        font-size: 12px;
        padding: 23px 22px;
    }
`

const TrackingBar1 = styled.div`
    position: relative;
    display: inline-flex;
    width: 100px;
    /* top: 0; */
    left: 75px;
    height: 190px;
    border-left: 2px solid #000000;
    

    .content{
        
        position: relative;
        display: inline-block;
        font-size: 12px;
        padding: 23px 22px;
    }
`

export default Logistics;