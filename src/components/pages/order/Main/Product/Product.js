import React from 'react'
import styled from 'styled-components';
import { theme } from '../../../../../theme';

export default function Product(
    {
        title,
        imageSource,
        price,
    }
) {
    return (
        <ProductStyled>
            <div className='image'>
                <img src={imageSource} />
            </div>
            <div className='info-text'>
                <div className='description'>
                    <div className='title'>{title}</div>
                    <div className='price'>{price}</div>
                    <button className='add-button'>Ajouter</button>
                </div>
            </div>
        </ProductStyled>
    )
}


const ProductStyled = styled.article`
    background-color: ${theme.colors.background_white};
    height: 330px;
    width: 240px;

    padding: 50px 20px;

    border-radius: ${theme.borderRadius.extraRound};
    overflow: hidden;
    box-shadow: -8px 8px 20px 0 rgba(0,0,0,.2);

    .image {
        width: 100%;
        height: 145px;
        
        >img {
            width: 100%;
            height: 145px;
            object-fit: contain;
        }
    }
`;