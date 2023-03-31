import React, { useState } from 'react';
import styled from 'styled-components';
import { theme } from '../../../../theme';
import Profile from './Profile';
import ToggleButton from '../../../reusable-ui/ToggleButton';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaUserSecret } from "react-icons/fa"

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
            <ToastContainer className="toaster" bodyClassName="body-toast" />
        </NavBarRightSideStyled>
    )
}


const spacing = theme.spacing;

const NavBarRightSideStyled = styled.div`
    display: flex;
    align-items: center;
    gap: 50px;


    .toaster {
        max-width: 300px;
    }

    .Toastify__toast.Toastify__toast-theme--dark.Toastify__toast--info {
        background: ${theme.colors.background_dark};
    }

    .body-toast {
        .Toastify__toast-icon.Toastify--animate-icon.Toastify__zoom-enter {
            margin-right: 20px;
            margin-left: 5px;
        }
        div {
            line-height: 1.3em;
        }
    }
`;