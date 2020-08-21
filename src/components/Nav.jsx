import React from "react";
import '../scss/mainNav.scss';
import {Link} from "react-router-dom";
import { Button, Icon } from 'semantic-ui-react';

const Nav = (props) => {
    return(
        <div>
        <nav className={'navigation'}>
            <Link className={'navItem'} to='/tour'>Tour</Link>
            <Link className={'navItem'} to='/features'>Features</Link>
            <Link className={'navItem'} to='/pricing'>Pricing</Link>
            <Link className={'navItem' + ' logoItem'} to={'/'}><span>NEW</span>PROVIDENCE</Link>
            <Link className={'navItem ' + ' help'} to='/help'>Help</Link>
            <Link className={'navItem'} to='/contacts'>Contacts</Link>
            <div>
                <Button className={'navButton'} color='apple'>
                    <Icon name='apple' /> Get App
                </Button>
            </div>
        </nav>
        </div>
    )
}

export default Nav;