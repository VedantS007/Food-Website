import React from 'react'
import {
    ProductContainer,
    ProductHeading,
    ProductCard,
    ProductImg,
    ProductInfo,
    ProductTitle,
    ProductDesc,
    ProductPrice,
    ProductButton,
    ProductWrapper
} from './ProdElement'

const Products = ({heading, data}) => {
    return (
        <ProductContainer>
            <ProductHeading>{heading}</ProductHeading>
            <ProductWrapper>
              {data.map((products, index)=> {
                  return ( 
                      <ProductCard key={index}>
                          <ProductImg src={products.img} alt={products.alt} />
                          <ProductInfo>
                              <ProductTitle>{products.name}</ProductTitle>
                              <ProductDesc>{products.desc}</ProductDesc>
                              <ProductPrice>{products.price}</ProductPrice>
                              <ProductButton>{products.button}</ProductButton>
                          </ProductInfo>
                      </ProductCard>
                  )
              })}  
            </ProductWrapper>
        </ProductContainer>
    )
}

export default Products
