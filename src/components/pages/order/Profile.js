import React from 'react'
import { BsPersonCircle } from 'react-icons/bs';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../../../theme';

export default function Profile() {
    // State
    const { username } = useParams();

    return (
        <ProfileStyled>
            <div>
                <div>Hey, <span>{username}</span></div>
                <Link to="/">
                    <button>Se déconnecter</button>
                </Link>
            </div>
            <div>
                <BsPersonCircle />
            </div>
        </ProfileStyled>
    )
}


const font = theme.fonts;
const weight = theme.weights;
const color = theme.colors;
const spacing = theme.spacing;

const ProfileStyled = styled.div`
    display: flex;
    align-items: end;
    gap: 10px;
    margin-right: 50px;
    color: ${color.greyBlue};

    >div:first-of-type {
        >div,
        >div>span {
            font-size: ${font.P0};
            font-weight: ${weight.regular};
            line-height: ${font.P2};
        }

        >div {
            margin-bottom: ${spacing.xxs};
            text-align: end;
        }

        >div>span {
            color: ${color.primary};
        }

        button {
            background-color: transparent;
            border: none;
            color: ${color.greyBlue};
            cursor: pointer;

            &:hover {
                color: ${color.greyDark};
                text-decoration: underline;
            }
        }
    }

    >div:last-of-type>svg {
        height: 36px;
        width: 36px;
        vertical-align: bottom;
    }
`;