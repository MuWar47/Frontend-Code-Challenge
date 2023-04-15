import React, { Component } from "react";
import Product from "./Product";

export default class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {}
        };
    }
    render() {
        return (
            <div className="container">
                <h3>Your Cart</h3>
                <div className="row">
                    {
                        Object.entries(this.state.data).map(([key, value]) => {
                            return (
                                <Product key={key} value={value} onIncrement={this.handleIncrement} onDecrement={this.handleDecrement} onDelete={this.handleDelete}>
                                    where is this?
                                </Product>
                            );
                        })
                    }
                </div>
            </div>
        );
    }
    //render end

    componentDidMount = async () => {
        //http requests and data fetches here
        var response = await fetch("http://localhost:3000/items");
        var items = await response.json();
        this.setState({ data: items });
    }

    // componentDidUpdate(prevProps, prevState) {
    //     //make conditional http call here
    // }

    handleIncrement = (product, maxValue) => {
        let allData = { ...this.state.data };   //copy of state.data
        let vals = Object.values(allData);         //array of values from above obj
        let index = vals.indexOf(product);

        if (vals[index].quantity < maxValue) {
            vals[index].quantity++;

            this.setState({ data: vals });
        }
    };

    handleDecrement = (product, minValue) => {
        let allData = { ...this.state.data };   //copy of state.data
        let vals = Object.values(allData);         //array of values from above obj
        let index = vals.indexOf(product);

        if (vals[index].quantity > minValue) {
            vals[index].quantity--;

            this.setState({ data: vals });
        }
    };

    handleDelete = (product) => {
        let allData = { ...this.state.data };   //copy of state.data
        let vals = Object.values(allData);         //array of values from above obj
        let index = vals.indexOf(product);

        vals.splice(index, 1);

        this.setState({ data: vals });
    };

}