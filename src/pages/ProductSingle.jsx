import React, { useState } from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'
import { mobile, bmobile, tablet, laptop } from '../Responsive'
import { useNavigate } from 'react-router-dom'


const Container = styled.div``;

const Wrapper = styled.div`
        padding: 50px;
        display: flex;
        align-items: center;
        ${mobile({ padding: "10px 30px", flexDirection: "column" })};
        ${bmobile({ padding: "10px 30px", flexDirection: "column" })};
        `;

const ImgContainer = styled.div`
        flex:1;
        `;

const Image = styled.img`
        width: 100%;
        height: 90vh;
        object-fit:cover;
        ${mobile({ height: "50vh" })}
        ${bmobile({ height: "50vh" })}
        `;

const InfoContainer = styled.div`
        flex:1;
        padding: 0px 50px;
        ${mobile({ padding: "10px" })};
        ${bmobile({ padding: "10px" })};
        `;

const Title = styled.h1`
        font-weight: 400;
        `;

const Desc = styled.p`
        margin: 20px 0px;
        `;

const Price = styled.span`
        font-weight: 100;
        font-size: 40px;
        `;

const FilterContainer = styled.div`
        display:flex;
        justify-content:space-between;
        width: 38%;
        margin: 20px 0px;
        ${mobile({ width: "100%" })}
        ${bmobile({ width: "100%" })}
        `;

const Filter = styled.div`
        display:flex;
        align-items:center;
        `;

const FilterTitle = styled.span`
        font-size: 20px;
        font-weight: 200;
        `;

const FilterColor = styled.div`
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: ${props => props.color};
        margin: 0px 5px;
        cursor: pointer;
        `;

const FilterSize = styled.select`
        margin-left: 10px;
        padding: 5px;
        cursor: pointer;
        `;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
        display:flex;
        justify-content: space-between;
        width: 38%;
        margin: 30px 0px;
        ${mobile({ width: "100%", })}
        ${bmobile({ width: "100%", })}
        ${tablet({ width: "100%", })}
        ${laptop({ width: "100%", })}
        `;

const AmountContainer = styled.div`
        display:flex;
        align-items: center;
        font-weight: 700;
        margin-right: 30px;

        `;

const Amount = styled.span`
        margin: 0px 10px;
        width: 30px;
        height: 30px;
        border-radius: 10px;
        border: 1px solid teal;
        display: flex;
        align-items: center;
        justify-content: center;
        `;

const Button = styled.button`
        padding: 15px;
        border: 2px solid teal;
        background-color: white;
        cursor: pointer;
        font-weight: bold;

        &:hover{
            background-color: #f5e7e7;
        }
        `;



const ProductSingle = () => {
        const [amount, setAmount] = useState(1);
        const navigate = useNavigate();

        function beforeZero() {
                if (amount <= 0) {
                        setAmount(0)
                } else {
                        setAmount(amount - 1)
                }
        }

        function handlePlusButton() {
                setAmount(amount + 1)
        }

        function gotocart(e) {
                e.preventDefault();
                navigate('/cart')
        }

        return (
                <Container>
                        <Navbar />
                        <Announcement />
                        <Wrapper>
                                <ImgContainer>
                                        <Image src="https://cdna.lystit.com/photos/b577-2015/05/31/mother-porch-swings-picket-fences-short-sleeve-jumpsuit-product-2-153352953-normal.jpeg" />
                                </ImgContainer>
                                <InfoContainer>

                                        <Title>Denim Jumpsuit</Title>

                                        <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat dignissimos similique minus illum? Accusamus ducimus perspiciatis necessitatibus dolorem repellendus natus, qui facere pariatur laborum, dolorum fuga voluptatum debitis rem, vero molestias molestiae quo provident.</Desc>

                                        <Price>$ 20</Price>

                                        <FilterContainer>
                                                <Filter>
                                                        <FilterTitle>Color:</FilterTitle>
                                                        <FilterColor color="black" />
                                                        <FilterColor color="darkblue" />
                                                        <FilterColor color="gray" />
                                                </Filter>
                                                <Filter>
                                                        <FilterTitle>Size:</FilterTitle>
                                                        <FilterSize>
                                                                <FilterSizeOption>XS</FilterSizeOption>
                                                                <FilterSizeOption>S</FilterSizeOption>
                                                                <FilterSizeOption>M</FilterSizeOption>
                                                                <FilterSizeOption>L</FilterSizeOption>
                                                                <FilterSizeOption>XL</FilterSizeOption>
                                                                <FilterSizeOption>XXL</FilterSizeOption>
                                                        </FilterSize>
                                                </Filter>
                                        </FilterContainer>

                                        <AddContainer>
                                                <AmountContainer>
                                                        <i class="fa-solid fa-minus" style={{ cursor: 'pointer' }} onClick={beforeZero} />
                                                        <Amount>{amount}</Amount>
                                                        <i class="fa-solid fa-plus" style={{ cursor: 'pointer' }} onClick={handlePlusButton} />
                                                </AmountContainer>
                                                <Button onClick={gotocart}>Add To Cart</Button>
                                        </AddContainer>

                                </InfoContainer>
                        </Wrapper>
                        <NewsLetter />
                        <Footer />
                </Container>
        )
}

export default ProductSingle