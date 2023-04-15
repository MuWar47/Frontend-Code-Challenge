import React, { Component } from "react";

export default class Product extends Component {
    render() {
        return (
            <div className="col-lg-6">
                <div className="card m-2">
                    <div className="card-body">
                        <img src={this.props.value.img} className="product_imgs" alt="mm" />
                        <h5>{this.props.value.name}</h5>
                        <div>${this.props.value.price}</div>
                    </div>

                    <div className="card-footer">
                        {/* <div className="float-start">
                            <span className="badge bg-secondary">{this.props.value.quantity}</span>
                            <div className="btn-group">
                                <button className="btn btn-outline-success" onClick={() => { this.props.onIncrement(this.props.value, 10); }}>+</button>
                                <button className="btn btn-outline-success" onClick={() => { this.props.onDecrement(this.props.value, 0); }}>-</button>
                            </div>
                        </div> */}
                        <div className="float-end">{this.props.children}
                            {/* <span className="hand-cursor" onClick={() => { this.props.onDelete(this.props.value) }}><i className="fa fa-trash"></i></span> */}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}