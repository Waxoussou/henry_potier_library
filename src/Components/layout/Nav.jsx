import React from 'react';
import { Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Info from '../Info';

const Nav = () => {
    return <>
        <Navbar bg='dark' variant='dark' sticky='top'>
            <Link to='/' > <Button variant='outline-info'>GO BACK</Button>  </Link>
        </Navbar>
        <Info />
    </>
}

export default Nav;