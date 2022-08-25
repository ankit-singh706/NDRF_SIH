import React from 'react';
import styled from 'styled-components';
import '../Disaster.css';
import { CCard,CCardBody,CCardTitle,CCardText,CButton,CCardImage } from '@coreui/react';


const Disaster = () => {
    return (
        <Container>
                {/* state is dynamic here */}
                <h2 className="heading_disaster">Gujurat Floods(12 July 2022)</h2>
            <StatisticalData>
                <div className="lives"></div>
                <div className="houses"></div>
            </StatisticalData>
                <h2 className="heading_disaster my">Geographical Data(12 July 2022)</h2>
            <GeographicalData>
                <div className="temp"></div>
                <div className="club">
                    <div className="humid"></div>
                    <div className="rain"></div>
                </div>
            </GeographicalData>
                <h2 className="heading_disaster">Situation Reports & Source Documents</h2>
                <Data>
                <div className="info">
                    <div className="date"><a href='#'>DMC 2022/08/10</a></div>
                    <div className="disaster">Situation report regarding Flood/ Heavy rainfall as on 10 2022 at 1800 Hrs</div>
                </div>
                <hr/>
                </Data>
                <Data>
                <div className="info"><div className="date"><a href='#'>DMC 2022/08/10</a></div><div className="disaster">Situation report regarding Flood/ Heavy rainfall as on 10 2022 at 1800 Hrs</div></div><hr/>
                </Data>
                <Data>
                <div className="info"><div className="date"><a href='#'>DMC 2022/08/10</a></div><div className="disaster">Situation report regarding Flood/ Heavy rainfall as on 10 2022 at 1800 Hrs</div></div><hr/>
                </Data>
                <Data>
                <div className="info"><div className="date"><a href='#'>DMC 2022/08/10</a></div><div className="disaster">Situation report regarding Flood/ Heavy rainfall as on 10 2022 at 1800 Hrs</div></div><hr/>
                </Data>
                <Data>
                <div className="info"><div className="date"><a href='#'>DMC 2022/08/10</a></div><div className="disaster">Situation report regarding Flood/ Heavy rainfall as on 10 2022 at 1800 Hrs</div></div><hr/>
                </Data>
            
                <h2 className="heading_disaster my">Situation Reports & Source Documents</h2>
                <DisData>
                <CCard style={{ width: '21rem',border:'0px transparent' }}>
                    <CCardImage orientation="top" src="./images/react.jpg" />
                    <CCardBody>
                        <CCardTitle style={{fontWeight:"bold"}}>2022-07-19</CCardTitle>
                        <CCardText style={{ padding: '10px 0px',fontFamily:'"Poppins", sans-serif',fontWeight:"300"}}>
                        DETECTED FLOOD WATER IN ANDHRA PRADESH STATE,INDIA. As observed by ALOS-2 image on 17 July 2022
                        </CCardText>
                        <CButton style={{ marginTop:"10px"}} href="#">Download</CButton>
                    </CCardBody>
                </CCard>
                <CCard style={{ width: '21rem',border:'0px transparent' }}>
                    <CCardImage orientation="top" src="./images/react.jpg" />
                    <CCardBody><CCardTitle style={{fontWeight:"bold"}}>2022-07-19</CCardTitle><CCardText style={{ padding: '10px 0px',fontFamily:'"Poppins", sans-serif',fontWeight:"300"}}>DETECTED FLOOD WATER IN ANDHRA PRADESH STATE,INDIA. As observed by ALOS-2 image on 17 July 2022</CCardText><CButton style={{ marginTop:"10px"}} href="#">Download</CButton></CCardBody>
                </CCard>
                <CCard style={{ width: '21rem',border:'0px transparent' }}>
                    <CCardImage orientation="top" src="./images/react.jpg" />
                    <CCardBody><CCardTitle style={{fontWeight:"bold"}}>2022-07-19</CCardTitle><CCardText style={{ padding: '10px 0px',fontFamily:'"Poppins", sans-serif',fontWeight:"300"}}>DETECTED FLOOD WATER IN ANDHRA PRADESH STATE,INDIA. As observed by ALOS-2 image on 17 July 2022</CCardText><CButton style={{ marginTop:"10px"}} href="#">Download</CButton></CCardBody>
                </CCard>
                <CCard style={{ width: '21rem',border:'0px transparent' }}>
                    <CCardImage orientation="top" src="./images/react.jpg" />
                    <CCardBody><CCardTitle style={{fontWeight:"bold"}}>2022-07-19</CCardTitle><CCardText style={{ padding: '10px 0px',fontFamily:'"Poppins", sans-serif',fontWeight:"300"}}>DETECTED FLOOD WATER IN ANDHRA PRADESH STATE,INDIA. As observed by ALOS-2 image on 17 July 2022</CCardText><CButton style={{ marginTop:"10px"}} href="#">Download</CButton></CCardBody>
                </CCard>
                <CCard style={{ width: '21rem',border:'0px transparent' }}>
                    <CCardImage orientation="top" src="./images/react.jpg" />
                    <CCardBody><CCardTitle style={{fontWeight:"bold"}}>2022-07-19</CCardTitle><CCardText style={{ padding: '10px 0px',fontFamily:'"Poppins", sans-serif',fontWeight:"300"}}>DETECTED FLOOD WATER IN ANDHRA PRADESH STATE,INDIA. As observed by ALOS-2 image on 17 July 2022</CCardText><CButton style={{ marginTop:"10px"}} href="#">Download</CButton></CCardBody>
                </CCard>
                <CCard style={{ width: '21rem',border:'0px transparent' }}>
                    <CCardImage orientation="top" src="./images/react.jpg" />
                    <CCardBody><CCardTitle style={{fontWeight:"bold"}}>2022-07-19</CCardTitle><CCardText style={{ padding: '10px 0px',fontFamily:'"Poppins", sans-serif',fontWeight:"300"}}>DETECTED FLOOD WATER IN ANDHRA PRADESH STATE,INDIA. As observed by ALOS-2 image on 17 July 2022</CCardText><CButton style={{ marginTop:"10px"}} href="#">Download</CButton></CCardBody>
                </CCard>

                </DisData>
        </Container>
    )
}

const Container = styled.div`
    margin-top:110px;
    padding:20px 10px;
`


const StatisticalData = styled.div`
    height:45vh;
    margin:20px 100px;
    display:flex;
    align-items:center;
    justify-content:center;
    padding:10px 10px;
    gap:30px;

    .lives,.houses{
        border:1px solid red;
        padding:20px 20px;
        height:inherit;
        width:50%;
        border-radius:20px;
    }
`

const GeographicalData = styled.div`
    
    .temp{
        border:1px solid black;
        height:50vh;
        margin:20px 100px;
        border-radius:20px;
    }

    .club{
        height:45vh;
        display:flex;
        align-items: center;
        justify-content: center;
        margin:20px 100px;
        padding:10px 10px;
        gap:30px; 
    }

    .rain,.humid{
        border:1px solid red;
        padding:10px 10px;
        height:inherit;
        width:50%;
        border-radius:20px;
    }
`

const Data = styled.div`
    margin-bottom: 10px;

    .info{
        margin: 20px 100px;
        display: flex;
        flex-direction: row;  
        justify-content:space-around;
        gap: 20px;
        padding:10px 20px;
        font-family: "Noto Sans", sans-serif;
    }

    .date,.disaster{
        font-size: 1.1rem;
        font-weight: 600;
    }

    .date a{
        color: blue;
        text-decoration: underline;
    }

    hr{
        margin: 0px 120px;
    }
`

const DisData = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin:40px 10px;
    flex-wrap: wrap;
`

export default Disaster;
