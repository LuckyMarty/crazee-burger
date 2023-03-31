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
    gap: 60px;
    justify-content: center;

    grid-template-columns: repeat(4, 1fr);
    
    @media (max-width: 1200px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 640px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;