import React, { Component } from "react";
import Product from "./Product";

export default class AllProducts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {}
        };
    }

    render() {
        return (
            <div className="container">
                <h3>Products</h3>
                <div className="row">
                    {
                        Object.entries(this.state.data).map(([key, value]) => {
                            return (
                                <Product key={key} value={value}>
                                    <button className="btn btn-primary" onClick={() => { this.handleBuy(value.id) }}>Buy Now</button>
                                </Product>
                            );
                        })
                    }
                </div>
            </div>
        );
    }

    componentDidMount = async () => {
        //http requests and data fetches here
        var response = await fetch("http://localhost:3000/items");
        var items = await response.json();
        this.setState({ data: items });
    }

    handleBuy = (id) => {
        console.log(localStorage);
    };
}