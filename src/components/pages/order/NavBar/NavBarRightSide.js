import React from 'react';
import styled from 'styled-components';
import { theme } from '../../../../theme';
import Profile from './Profile';

export default function NavBarRightSide() {

    return (
        <NavBarRightSideStyled>
            <div>Admin</div>
            <Profile />
        </NavBarRightSideStyled>
    )
}


const spacing = theme.spacing;

const NavBarRightSideStyled = styled.div`
    display: flex;
    align-items: center;
    gap: ${spacing.md};
`;