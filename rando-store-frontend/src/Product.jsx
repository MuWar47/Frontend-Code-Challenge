import React, { Component } from "react";

export default class Product extends Component {
    render() {
        return (
            <div className="col-lg-6">
                <div className="card m-2">
                    <div className="card-body">
                        <img src={this.props.value.img} alt="" />
                        <h5>{this.props.value.name}</h5>
                        <div>${this.props.value.price}</div>
                    </div>

                    <div className="card-footer">
                        <div className="float-start">
                            <div className="btn-group">
                                <button className="btn btn-outline-primary" onClick={this.props.onIncrement}>+</button>
                                <button className="btn btn-outline-primary" onClick={this.props.onDecrement}>-</button>
                            </div>
                        </div>
                        <div className="float-end">{this.props.children}</div>
                    </div>
                </div>
            </div>
        );
    }
}