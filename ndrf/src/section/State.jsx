import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import httpClient from '../helpers/httpClient'

const State = (props) => {
    const [disasterList, setDisasterList] = useState([])
    const getPodList = async () => {
        await httpClient({
            url: '/disasters',
            method: 'get',
        })
            .then((response) => {
                var templist = response.data
                console.log(templist[0].Period)
                setDisasterList(templist)
            })
            .catch((error) => {
                console.log(error)
            })
    }
    useEffect(() => {
        getPodList()
    }, [])

    const navigate = useNavigate()
    return (
        <>
            <Heading>
                {/* state is dynamic here */}
                <h2>State Disaster Information</h2>
            </Heading>
            <GeographicalData>
                <div className='temp'></div>
                <div className='club'>
                    <div className='humid'></div>
                    <div className='rain'></div>
                </div>
            </GeographicalData>
            {disasterList.map((disaster, index) => {
                return (
                    <Data>
                        <div className='info' key={index}>
                            <div className='date'>{disaster.Period}</div>

                            <div className='disaster'>
                                <a
                                    onClick={() => {
                                        navigate('/disaster', {
                                            state: disaster,
                                        })
                                    }}
                                >
                                    {disaster.Event_type}
                                </a>
                            </div>
                        </div>
                        <hr />
                    </Data>
                )
            })}
        </>
    )
}

const Heading = styled.div`
    margin-top: 110px;
    padding: 20px 50px;
    font-family: 'Noto Sans', sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;

    h2 {
        font-size: 2rem;
        width: 90%;
        border-radius: 8px;
        padding: 3px 20px;
        background-color: #00dce6;
    }
`
const GeographicalData = styled.div`
    .temp {
        border: 1px solid black;
        height: 50vh;
        margin: 20px 100px;
        border-radius: 20px;
    }

    .club {
        height: 45vh;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 20px 100px;
        padding: 10px 10px;
        gap: 30px;
    }

    .rain,
    .humid {
        border: 1px solid red;
        padding: 10px 10px;
        height: inherit;
        width: 50%;
        border-radius: 20px;
    }
`
const Data = styled.div`
    margin-bottom: 10px;

    .info {
        display: flex;
        flex-direction: row;
        padding: 10px 130px;
        font-family: 'Noto Sans', sans-serif;
        justify-content: space-between;
        margin: 0 50px;
    }

    .date,
    .disaster {
        font-size: 1.1rem;
        font-weight: 600;
        text-align: left;
    }

    .disaster a {
        color: black;
        text-decoration: underline;
    }

    hr {
        margin: 0px 120px;
    }
`

export default State
