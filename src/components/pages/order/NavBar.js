import React from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../../../theme';
import Logo from '../../reusable-ui/logo/Logo'
import NavBarRightSide from './NavBarRightSide';

export default function NavBar() {
    return (
        <NavBarStyled>
            <a href='# '><Logo /></a>
            <NavBarRightSide />
        </NavBarStyled>
    )
}

const color = theme.colors;

const NavBarStyled = styled.div`
  padding: 20px;
  background-color: ${color.white};

  display: flex;
  justify-content: space-between;
  align-items: center;
`;