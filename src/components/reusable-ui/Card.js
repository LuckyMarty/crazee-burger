import React from 'react'
import styled from 'styled-components';
import { theme } from '../../theme';
import PrimaryButton from "./PrimaryButton"

export default function Product(
    {
        title,
        imageSource,
        leftDescription,
    }
) {
    return (
        <ProductStyled>
            <div className='image'>
                <img src={imageSource} alt={title} />
            </div>
            <div className='info-text'>
                <div className='title'>{title}</div>
                <div className='description'>
                    <div className='price'>{leftDescription}</div>
                    <PrimaryButton className="add-button" label={"Ajouter"} />
                </div>
            </div>
        </ProductStyled>
    )
}


const ProductStyled = styled.article`
    background-color: ${theme.colors.white};
    height: 330px;
    width: 240px;

    padding: 50px ${theme.spacing.md};

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

    .info-text {
        .title {
            font-family: ${theme.fontFamily.F1};
            font-size: ${theme.fonts.P4};
            font-weight: ${theme.weights.bold};
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .description {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 6px;

            .price {
                color: ${theme.colors.primary};
            }
        }
    }
`;