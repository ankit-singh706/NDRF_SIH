import React from "react";
import styled from "styled-components";

const Donations = (props) => {
  return (
    <>
      <About>
        <div className="heading">Charity is an Act of </div>
        <div className="heading-org">A Soft Heart</div>
        <p>
          These donations are utilized to render immediate relief to families of
          those killed or injured in natural calamities.
        </p>
        <Button>
          <a href="/donation">
            <button class="button-56" role="button">
              Donate Now
            </button>
          </a>
        </Button>
      </About>
      <Image>
        <img src="/images/about.svg" alt="Loading.." />
      </Image>
      <BottomSection>
        <Card>
          <div className="box"><img src='./images/logo_donated.gif' alt="Donated"/></div>
          <div className="textbox">
            <h2>1200+</h2>
            <p>People Donated</p>
          </div>
        </Card>
        <Card>
          <div className="box"><img src='./images/logo_donated.gif' alt="Donated"/></div>
          <div className="textbox">
            <h2>1200+</h2>
            <p>People Donated</p>
          </div>
        </Card>
        <Card>
          <div className="box"><img src='./images/logo_donated.gif' alt="Donated"/></div>
          <div className="textbox">
            <h2>1200+</h2>
            <p>People Donated</p>
          </div>
        </Card>
        <Card>
          <div className="box"><img src='./images/logo_donated.gif' alt="Donated"/></div>
          <div className="textbox">
            <h2>1200+</h2>
            <p>People Donated</p>
          </div>
        </Card>
      </BottomSection>
        <Heading><h1>Donation Statistics</h1></Heading>
      <DonationStats>
        <Graph><p></p></Graph>
        <Graph><p></p></Graph>
      </DonationStats>
      <Floater>
        <h2>Help Disaster Victims</h2>
        <p>Rs 500 can feed a family for a week </p>
        <Button>
          <a href="/donation">
            <button class="button-56" role="button">
              Donate Now
            </button>
          </a>
        </Button>
      </Floater>
        <Heading><h1>Why Donate?</h1></Heading>
      <DonationReason>
        <Wrap><h2>Tracebility</h2></Wrap>
        <Wrap><img src="https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1376&q=80" alt=""/></Wrap>
        <Wrap><img src="https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1376&q=80" alt=""/></Wrap>
        <Wrap><img src="https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1376&q=80" alt=""/></Wrap>
        <Wrap><img src="https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1376&q=80" alt=""/></Wrap>
        <Wrap><img src="https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1376&q=80" alt=""/></Wrap>
      </DonationReason>
    </>
  );
};

const About = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  margin-top: 100px;
  margin-left: 20px;
  width: 490px;
  height: 225px;
  left: 88px;
  top: 185px;
  font-family: "Poppins", sans-serif;

  line-height: 75px;
  color: #2d2828;

  .heading {
    text-align: center;
    font-weight: 700;
    font-size: 72px;
  }
  .heading-org {
    color: #ffae17;
    font-weight: 800;
    font-size: 72px;
  }

  p {
    margin-top: 25px;
    position: relative;
    text-align: center;
    width: 460px;
    height: auto;
    font-family: "Noto Sans", sans-serif;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    color: grey;
  }
`;

const Button = styled.div`
  .button-56 {
    margin-top: 30px;
    align-items: center;
    background-color: #fdc04d;
    border: 2px solid #111;
    border-radius: 8px;
    box-sizing: border-box;
    color: #111;
    cursor: pointer;
    display: flex;
    font-family: Inter, sans-serif;
    font-size: 16px;
    height: 48px;
    justify-content: center;
    line-height: 24px;
    max-width: 100%;
    padding: 0 25px;
    position: relative;
    text-align: center;
    font-size: 18px;
    font-family: "Noto Sans", sans-serif;
    text-decoration: none;
    user-select: none;
    font-weight: bolder;
    -webkit-user-select: none;
    touch-action: manipulation;
  }

  .button-56:after {
    background-color: #111;
    border-radius: 8px;
    content: "";
    display: block;
    height: 48px;
    left: 0;
    width: 100%;
    position: absolute;
    top: -2px;
    transform: translate(8px, 8px);
    transition: transform 0.2s ease-out;
    z-index: -1;
  }

  .button-56:hover:after {
    transform: translate(0, 0);
  }

  .button-56:active {
    background-color: #ffdeda;
    outline: 0;
  }

  .button-56:hover {
    outline: 0;
  }

  @media (min-width: 768px) {
    .button-56 {
      padding: 0 40px;
    }
  }

  a {
    color: black;
    text-decoration: none;
  }
`;

const Image = styled.div`
  position: relative;
  left: 675px;
  top: 140px;
  width: 632px;
  height: auto;
  img {
    height: auto;
    width: 90%;
    margin-left: 30px;
  }
`;

const BottomSection = styled.div`
  position: relative;
  top: 100px;
  height: 170px;
  margin: 30px 32px;
  margin-bottom: 150px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 1rem;
  padding: 2px 12px;
`;

const Card = styled.div`
  display: flex;
  align-items: center;
  width: 25%;
  height: inherit;
  background-color:#D9D9D9;
  border-radius: 10px;
  padding: 23px 12px;

  .box {
    height: 100px;
    width: 100px;
    /* border: 1px solid black; */
    display: inline-flex;  
  }

  img{
    border-radius: 30px;
    /* opacity: 0.8; */
    /* filter: invert(100%); */
    
  }



  .textbox {
    flex-direction: column;
    height: 100px;
    width: 180px;
    margin-left: 14px;
  }

  h2 {
    font-family: "Poppins", sans-serif;
    letter-spacing: 2px;
    font-weight: bolder;
    margin: 14px 0px;
  }

  p {
    font-family: "Noto Sans", sans-serif;
    font-weight: 600;
    line-height: 24px;
    color: grey;
    margin: 0px 0px;
  }
`;

const Heading = styled.div` 
    margin-top: 80px;
    margin-bottom: 50px;
    text-align: center;
    font-weight: bold;
    font-family: "Poppins", sans-serif;
    font-weight: bold;
`
const DonationStats = styled.div`
    height: 80vh;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: row;
    gap: 2rem;
    padding: 23px 12px;
`

const Graph = styled.div`
    height: inherit;
    width: 50%;
    border-radius: 20px;
    text-align: center;
    margin: 23px;
    background: #D9D9D9;
`
const Floater = styled.div`
    position: relative;
    display: flex;
    width: 90%;
    height: 121px;
    margin:auto;
    margin-top: 40px;
    background: #D9D9D9;
    border-radius: 82px;
    z-index: 1;

    h2{
        position: relative;
        display: inline-flex;
        font-size: 2rem;
        left: 90px;
        top: 20px;
        font-family: "Poppins", sans-serif;
        font-weight: 700;
    }

    p{
        position: absolute;
        display: inline-flex;
        left: 90px;   
        top: 60px;
        padding-top: 3px;
        font-family: "Noto Sans", sans-serif;
        font-weight: 800;
    }

    Button{
        /* position: relative; */
        left:600px;
        top: 5px;
    }
`

const DonationReason = styled.div`
    margin: 12px 23px;
    padding: 12px 83px;
    display: grid;
    grid-gap: 50px;
    gap: 50px;
    grid-template-rows: repeat(2, minmax(0,3fr));
    grid-template-columns: repeat(2, minmax(0,3fr));


    @media(max-width:768px){
        grid-template-columns: repeat(2,minmax(0,1fr));
    }    
`

const Wrap = styled.div`
    padding-top: 46.25%;
    border-radius: 10px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,rgb(0 0 0/ 73%) 0px 16px 10px -10px;
    cursor: pointer;
    overflow: hidden;
    position: relative;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
    border: 3px solid rgba(249,249,249,0.1);

    img{
        inset: 0px;
        display: block;
        height: 100%;
        object-fit: cover;
        opacity: 1;
        position: absolute;
        transition: opacity 500ms ease-in-out 0s;
        width: 100%;
        z-index: 1;
        top: 0;
    }

    &:hover{
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,rgb(0 0 0/ 73%) 0px 16px 10px -10px;
        transform: scale(1.05);
        border-color: rgba(249,249,294,0.8);
    }
`


export default Donations;
