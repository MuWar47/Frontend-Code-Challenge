import React, { Component } from "react";
import Product from "./Product";

export default class AllProducts extends Component {
    state = {
        data: {
            "1": { "id": 1, "name": "King Size Bed", "price": "300", "img": "./bed.jpg" },
            "2": { "id": 2, "name": "Comfy Slippers", "price": "15", "img": "D:/code/Frontend-Code-Challenge/static/img/slippers.jpg" },
            "3": { "id": 3, "name": "CD Rack", "price": "100", "img": "D:/code/Frontend-Code-Challenge/static/img/rack.jpg" },
            "4": { "id": 4, "name": "Glow Stick Bundle", "price": "10", "img": "D:/code/Frontend-Code-Challenge/static/img/sticks.jpg" },
            "5": { "id": 5, "name": "Cookie Jar", "price": "25", "img": "D:/code/Frontend-Code-Challenge/static/img/cookies.jpg" }
        }
    };
    render() {
        return (
            <div className="container">
                <h3>Products</h3>
                <div className="row">
                    {
                        Object.entries(this.state.data).map(([key, value]) => {
                            return (
                                <Product key={key} value={value} onIncrement={this.handleIncrement} onDecrement={this.handleDecrement}>
                                    <button className="btn btn-primary">Buy Now</button>
                                </Product>
                            );
                        })
                    }
                </div>
            </div>
        );
    }
    //render end
    handleIncrement = () => { };

    handleDecrement = () => { };

}