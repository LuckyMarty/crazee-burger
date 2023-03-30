import React from 'react'
import styled from 'styled-components';

export default function Menu() {
    return (
        <MenuStyled>
            <div>
                <article>
                    <div>Image</div>
                    <div>Info</div>
                </article>
            </div>
        </MenuStyled>
    )
}


const MenuStyled = styled.div`
    margin: 50px auto;

    >div {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 25px;
        margin: auto;
        justify-content: center;
    }

    article {
        background-color: blueviolet;
        height: 330px;
        min-width: 240px;
    }
`;