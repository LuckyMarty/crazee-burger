import React, { useState } from 'react'
import styled from 'styled-components';
import { fakeMenu1, fakeMenu2 } from '../../../../fakeData/fakeMenu';
import { theme } from '../../../../theme';

export default function Menu() {
    // Stats
    const [products, setProducts] = useState(fakeMenu2);


    return (
        <MenuStyled>
            {products.map((product) => {
                return(
                    <article>
                        <div className='image'>
                            <img src={product.imageSource} />
                        </div>
                        <div className='info-text'>
                            <div className='title'>{product.title}</div>
                            <div className='description'>
                                <div className='price'>{product.price}</div>
                                <button className='add-button'>Ajouter</button>
                            </div>
                        </div>
                    </article>
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


    article {
        background-color: ${theme.colors.background_white};
        height: 330px;
        width: 240px;

        padding: 50px 50px 150px;

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

    }
`;