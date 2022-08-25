import React from 'react'
import styled from 'styled-components'

const NavBar = (props) => {
    return (
        <Nav>
            {/* <Logo><p>DECENTRALIZED</p></Logo> */}
            <NavMenu>
                <a href='/'>DECENTRALIZED</a>
                <a href='/incidents'>INCIDENTS</a>
                <a href='/donation'>DONATION</a>
                <a href='/logistics'>LOGISTICS</a>
                <a href='/'>ABOUT</a>
            </NavMenu>
            <Wallet>
                <a href='/'>Connect Wallet</a>
            </Wallet>
        </Nav>
    )
}

const Nav = styled.div`
    position: fixed;
    margin: 10px 70px;
    top: 0;
    left: 0;
    right: 0;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 300;
`


const NavMenu = styled.div`
    padding: 13px 15px;
    border: 3px solid black;
    background-color: #fff;
    border-radius: 35px;
    display: flex;
    align-items: center;
    gap: 24px;
    font-size: 18px;
    a {
        text-decoration: none;
        color: black;
        margin: 0 4px;
    }
`

const Wallet = styled.div`
    padding: 13px 19px;
    background-color: #00dce6;
    filter: drop-shadow(3px 3px 0px #000000);
    border: 3px solid black;
    border-radius: 35px;
    transition: filter 150ms ease-out;
    display: flex;
    align-items: center;
    gap: 24px;
    font-size: 19px;
    :hover {
        filter: drop-shadow(0px 0px 0px #000000);
    }
    a {
        text-decoration: none;
        color: black;
    }
`

export default NavBar
