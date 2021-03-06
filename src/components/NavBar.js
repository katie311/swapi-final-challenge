import React from 'react';
import { Menu, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <Menu inverted>
            <Container>
                <Link to='/'>
                    <Menu.Item name='StarWars API' />
                </Link>
                <Link to='/characters'>
                    <Menu.Item name='Characters' />
                </Link>
                <Link to='/planets'>
                    <Menu.Item name='Planets' />
                </Link>
            </Container>
        </Menu>
    )
}