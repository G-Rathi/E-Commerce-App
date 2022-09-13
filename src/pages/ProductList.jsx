import React, { useState } from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Products from '../components/Products'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'
import { mobile } from '../Responsive'
import { useLocation } from 'react-router-dom'


const Container = styled.div`
         /* overflow: hidden; */
         `;

const Title = styled.h1`
        margin: 20px;
        `;

const FilterContainer = styled.div`
        display: flex;
        justify-content: space-between;
        `;

const Filter = styled.div`
        margin: 20px;
        ${mobile({ margin: "0px 20px", display: "flex", flexDirection: "column" })};
        `;

const FilterText = styled.span`
        font-size: 20px;
        font-weight: 600;
        margin-right: 20px;
        ${mobile({ marginRight: "0" })};
        `;

const Select = styled.select`
        padding: 10px;
        margin-right: 20px;
        background-color: white;
        cursor:pointer;
        ${mobile({ margin: "10px 0px" })};
        `;
const Option = styled.option`
        `;

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({})
  const [sort, setSort] = useState({})

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  }

  const handleSort = (e) => {
    const value = e.target.value;
    setSort({
      ...sort,
      [e.target.name]: value,
    });
  }

  console.log(sort);
  return (
    <Container>

      <Navbar />

      <Announcement />
      <Title>{cat}</Title>

      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name='Color' onChange={handleFilters}>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select>
          <Select name="Size" onChange={handleFilters}>
            <Option>Size</Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
            <Option>XXL</Option>
          </Select>
        </Filter>

        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select name="sort" onChange={handleSort}>
            <Option >Newest</Option>
            <Option>Price (Low to High)</Option>
            <Option>Price (High to Low)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filters={filters} sort={sort} />
      <NewsLetter />
      <Footer />
    </Container>
  )
}

export default ProductList