import React from "react";
import styled from "styled-components";

const State = (props) =>{
    return(
        <>
            <Heading>
                {/* state is dynamic here */}
                <h2>State Disaster Information</h2>
            </Heading>
            <Data>
                <div className="info">
                    <div className="date">23/06/2022</div>
                    <div className="disaster"><a href="/">India: Lightning</a></div>
                </div>
                <hr/>
            </Data>
            <Data><div className="info"><div className="date">23/06/2022</div><div className="disaster"><a href="/">India: Lightning</a></div></div><hr/></Data>
            <Data><div className="info"><div className="date">23/06/2022</div><div className="disaster"><a href="/">India: Lightning</a></div></div><hr/></Data>
            <Data><div className="info"><div className="date">23/06/2022</div><div className="disaster"><a href="/">India: Lightning</a></div></div><hr/></Data>
            <Data><div className="info"><div className="date">23/06/2022</div><div className="disaster"><a href="/">India: Lightning</a></div></div><hr/></Data>
            <Data><div className="info"><div className="date">23/06/2022</div><div className="disaster"><a href="/">India: Lightning</a></div></div><hr/></Data>
            <Data><div className="info"><div className="date">23/06/2022</div><div className="disaster"><a href="/">India: Lightning</a></div></div><hr/></Data>
        </>
    )
}


const Heading = styled.div`
    margin-top: 110px;
    padding:20px 50px;
    font-family: "Noto Sans", sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    
    h2{
        font-size:2.0rem;
        width: 90%;
        border-radius: 8px;
        padding: 3px 20px;
        background-color: #00DCE6;
    }
`

const Data = styled.div`
    margin-bottom: 10px;

    .info{
        display: flex;
        flex-direction: row;  
        justify-content:space-around;
        gap: 200px;
        padding:10px 130px;
        font-family: "Noto Sans", sans-serif;
    }

    .date,.disaster{
        font-size: 1.1rem;
        font-weight: 600;
    }

    .disaster a{
        color: black;
        text-decoration: underline;
    }

    hr{
        margin: 0px 120px;
    }
`

export default State;