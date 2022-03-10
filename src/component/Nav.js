import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (

        <nav>
            <Link to='/'>TRADING FEES</Link>
            <Link to='/filteringtable1'>DEPOSIT & WITHDRAWAL FEES</Link>

        </nav>
    )
}

export default Nav
