import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { mobile, bmobile } from '../Responsive';
import Product from './Product';
import axios from 'axios';

const Container = styled.div`
        padding: 20px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        overflow: hidden;
        ${mobile({ justifyContent: "center", alignItems: 'center' })}
        ${bmobile({ justifyContent: "center", alignItems: 'center' })}
        `;


const Products = () => {
  const [productData, setProductData] = useState([]);

  // const getData = () => {
  //   axios.get('https://fakestoreapi.com/products')
  //     .then((res) => {
  //       console.log(res)
  //       setProductData(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //     })
  // }

  const getData = async () => {
    try {
      let fetchingData = await axios.get('https://fakestoreapi.com/products')
      let response = await fetchingData.data
      setProductData(response)
    }
    catch (error) {
      console.log(error.message)
    }

  }

  useEffect(() => {
    getData()
  }, [])

  // console.log(productData);

  return (
    <Container>
      {
        productData.slice(0, 8).map(item => (
          <Product item={item} key={item.id} />
        ))}
    </Container>
  )
}

export default Products