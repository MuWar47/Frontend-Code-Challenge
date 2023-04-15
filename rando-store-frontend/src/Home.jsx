import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    height: 100vh;
    background-color: #ffdab9a1;
`;

const Banner = styled.div`
    display: flex;
    justify-content: center;
`;

function Home() {
    return (
        <Container>
            <Banner>
                <h2>RandoStore</h2>

                <Link to="/products"><button type="button" className="btn btn-outline-primary">View All Products</button></Link>
                <Link to="/cart"><button type="button" className="btn btn-outline-primary">View Cart</button></Link>
            </Banner>

        </Container>
    );
}

export default Home;