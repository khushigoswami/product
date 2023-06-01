import react from 'react';

import {AppBar, Toolbar, styled} from '@mui/material';

import { NavLink } from 'react-router-dom';

const Header = styled(AppBar)`
    background: #111111
`
const Tabs = styled(NavLink)`
    margin-right: 20px;
    font-size: 20px;
    text-decoration: none;
    color: inherit;
`

const NavBar = () => {
    return(
        <Header position="static">
            <Toolbar>
                <Tabs to='/'> Coffee Machine Product </Tabs>
                <Tabs to='/all'> All Coffee Machines</Tabs>
                <Tabs to='/add'> Add Coffee Machine</Tabs>
            </Toolbar>
        </Header>
    )
}

export default NavBar;