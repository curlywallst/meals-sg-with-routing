import React from 'react'
import { NavLink } from 'react-router-dom'

const linkStyle = {
    width: '100px',
    padding: '12px',
    margin: '0 6px 6px',
    background: 'blue',
    textDecoration: 'none',
    color: 'white'
}

const Navigation = () =>
        <div>
            <NavLink 
                to='/'
                exact
                style={linkStyle}
                activeStyle={{
                    background: 'darkblue'
                }}
            >Home</NavLink>

             <NavLink 
                to='/categories'
                exact
                style={linkStyle}
                activeStyle={{
                    background: 'darkblue'
                }}
            >Categories</NavLink>

            <NavLink 
                to='/ingredients'
                exact
                style={linkStyle}
                activeStyle={{
                    background: 'darkblue'
                }}
            >Ingredients</NavLink>
        </div>

export default Navigation
