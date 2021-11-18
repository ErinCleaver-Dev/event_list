import React from 'react'
import styles from 'styled-components'
import Navbar from '../navbar/Navbar'

const Main = styles.div`
    background: #E1EFEF;
`

const Body = (props) => {
    return (
        <Main>
            <Navbar/>
            {props.children}
        </Main>
    )
}

export default Body
