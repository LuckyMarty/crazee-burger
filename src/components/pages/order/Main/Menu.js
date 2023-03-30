import React, { useState } from 'react'
import styled from 'styled-components';
import { fakeMenu1, fakeMenu2 } from '../../../../fakeData/fakeMenu';

export default function Menu() {
    // Stats
    const [products, setProducts] = useState(fakeMenu2);


    return (
        <MenuStyled>
            {products.map((product) => {
                return(
                    <article>
                        <div>Image</div>
                        <div>{product.title}</div>
                    </article>
                )
            })}
            {/* <article>
                <div>Image</div>
                <div>Info</div>
            </article> */}
        </MenuStyled>
    )
}


const MenuStyled = styled.div`
    margin: 50px auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 60px;
    justify-content: center;


    article {
        background-color: blueviolet;
        height: 330px;
        width: 240px;
    }
`;