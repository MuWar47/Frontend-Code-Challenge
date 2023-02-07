import React from "react";
import styled from "styled-components";
import NavBar from "./NavBar";

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
            <NavBar />
            <Banner>
                <h2>RandoStore</h2>

                <button type="button" className="btn btn-outline-primary">View All Products</button>
                <button type="button" className="btn btn-outline-primary">View Cart</button>
            </Banner>

        </Container>
    );
}

export default Home;