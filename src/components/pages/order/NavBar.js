import React from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../../reusable-ui/logo/Logo'

export default function NavBar() {
    // State
    const { username } = useParams();

    return (
        <NavBarStyled>
            {/* <Logo /> */}
            <div>
                <h1>Bonjour {username}</h1>
                <Link to="/">
                    <button>Déconnexion</button>
                </Link>
            </div>
        </NavBarStyled>
    )
}

const NavBarStyled = styled.div`
  background-color: red;
`;