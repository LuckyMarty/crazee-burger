import React, { useState } from 'react'
import styled from 'styled-components';
import { fakeMenu1, fakeMenu2 } from '../../../../fakeData/fakeMenu';
import { theme } from '../../../../theme';
import Product from './Product/Product';

export default function Menu() {
    // Stats
    const [products, setProducts] = useState(fakeMenu2);


    return (
        <MenuStyled>
            {products.map((product) => {
                return (
                    <Product 
                        // title={product.title} 
                        // imageSource={product.imageSource} 
                        // price={product.price} 
                        {...product}
                    />
                )
            })}
        </MenuStyled>
    )
}


const MenuStyled = styled.div`
    margin: 50px auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 60px;
    justify-content: center;
`;