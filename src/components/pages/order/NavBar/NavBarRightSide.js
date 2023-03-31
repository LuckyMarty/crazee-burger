import React from 'react';
import styled from 'styled-components';
import { theme } from '../../../../theme';
import Profile from './Profile';
import ToggleButton from '../../../reusable-ui/ToggleButton';

export default function NavBarRightSide() {

    return (
        <NavBarRightSideStyled>
            <ToggleButton
                labelIfUnchecked='Activer le monde admin'
                labelIfChecked='Désactiver le mode admin'
            />
            <Profile />
        </NavBarRightSideStyled>
    )
}


const spacing = theme.spacing;

const NavBarRightSideStyled = styled.div`
    display: flex;
    align-items: center;
    gap: 50px;
`;