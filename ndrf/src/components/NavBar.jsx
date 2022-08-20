import React from "react";
import styled from "styled-components";

const NavBar = (props) =>{
    return(
        <Nav>
            {/* <Logo><p>DECENTRALIZED</p></Logo> */}
            <NavMenu>
                <a href="/">DECENTRALIZED</a>
                <a href="/">STATISTICS</a>
                <a href="/">DASHBOARD</a>
                <a href="/logistics">LOGISTICS</a>
                <a href="/">ABOUT</a>
            </NavMenu>
            <Wallet>
                <a href='/'>Connect Wallet</a>
            </Wallet>
        </Nav>
    )
}

const Nav = styled.div`
    position: fixed;
    margin-top: 10px;
    top: 0;
    left: 0;
    right: 0;
    height: 70px;
    display: flex;
    justify-content: space-around;
    gap: 10.8rem;
    padding: 0 36px;
    align-items: center;
    z-index: 3;
`

// const Logo = styled.div`
//     padding: 4px 12px;
//     display: inline-block;
//     background-color: aliceblue;
//     border: 1px solid black;
//     border-radius: 20px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     font-size: 24px;
//     font-weight: 600;
//     p{
//         margin: 0;
//     }

// `

const NavMenu = styled.div`
    padding: 4px 12px;
    background-color: aliceblue;
    border: 1px solid black;
    border-radius: 20px;
    display: flex;
    align-items: center;
    gap: 24px;
    font-size: 24px;
    a{
        text-decoration: none;
        color: black;
    }
`

const Wallet = styled.div`
    padding: 4px 12px;
    background-color: aliceblue;
    border: 1px solid black;
    border-radius: 20px;
    display: flex;
    align-items: center;
    gap: 24px;
    font-size: 24px;

    a{
        text-decoration: none;
        color: black;
    }
`

export default NavBar;