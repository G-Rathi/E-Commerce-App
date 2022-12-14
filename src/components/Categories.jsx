import styled from 'styled-components';
import React from 'react';
import { categories } from '../Data';
import CategoryItem from './CategoryItem';
import { bmobile, mobile } from '../Responsive';

const Container = styled.div`
        display: flex;
        padding: 20px;
        justify-content: space-between;
        ${mobile({ padding: "0px", flexDirection: "column" })}
        ${bmobile({ padding: "0px", flexDirection: "column" })}
        `;


const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
  )
}

export default Categories;