import React, { useState } from 'react';
import styled from 'styled-components';
import Profile from './Profile';
import ToggleButton from '../../../reusable-ui/ToggleButton';
import { toast } from 'react-toastify';
import { FaUserSecret } from "react-icons/fa"
import ToastMessage from './ToastMessage';

export default function NavBarRightSide() {
    const [isAdmin, setIsAdmin] = useState(false);

    const displayToastNotification = () => {

        if (!isAdmin) {
            toast.info("Mode admin activé",
                {
                    icon: <FaUserSecret size={30} />,
                    theme: "dark",
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
        } else {
            toast.info("Mode admin désactivé",
                {
                    // icon: <FaUserSecret size={30} />,
                    theme: "light",
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
        }
        setIsAdmin(!isAdmin);
    }


    return (
        <NavBarRightSideStyled>
            <ToggleButton
                labelIfUnchecked='Activer le monde admin'
                labelIfChecked='Désactiver le mode admin'
                onToggle={displayToastNotification}
            />
            <Profile />
            <ToastMessage />
        </NavBarRightSideStyled>
    )
}


const NavBarRightSideStyled = styled.div`
    display: flex;
    align-items: center;
    gap: 50px;
`;