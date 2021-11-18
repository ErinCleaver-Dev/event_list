import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const Nav = styled.ul`
    background: #1E1D1E;
    padding: 20px 90px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Point = styled.li`
    list-style-type: none;
    h1, h3 {
        color: rgb(153,248,243);
    }
    a  {
        text-decoration: none;
        cursor: pointer;
    };
`


const Navbar = () => {
    return (
        <Nav>
            <Point>
                <Link href="/">
                   <h1>Events</h1>
                </Link>
            </Point>
            <Point>
                <Link href="/events">
                   <h3>Browse All events</h3>
                </Link>
            </Point>
        </Nav>
    )
}

export default Navbar
