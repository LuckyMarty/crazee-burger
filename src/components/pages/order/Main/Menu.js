import React, { useState } from 'react'
import styled from 'styled-components';
import { fakeMenu2 } from '../../../../fakeData/fakeMenu';
import Product from '../../../reusable-ui/Card';
import { priceFormat } from "../../../../utils/math"

export default function Menu() {
    // Stats
    const [products, setProducts] = useState(fakeMenu2);


    return (
        <MenuStyled>
            {products.map((product) => {
                return (
                    <Product 
                        key={product.id}
                        title={product.title} 
                        imageSource={product.imageSource} 
                        leftDescription={priceFormat(product.price)} 
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