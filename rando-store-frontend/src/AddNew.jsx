import React, { Component } from "react";

export default class AddNew extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {}
        };
    }

    render() {
        return (
            <div className="container">
                <button className="addnew">Add New Item</button>
            </div>
        );
    }

    // componentDidMount = async () => {
    //     const response = await fetch("http://localhost:3000/items", {
    //         method: "POST",
    //         body: JSON.stringify({
    //             id: 6,
    //             name: "Jewellery",
    //             price: 10,
    //         }),
    //         headers: {
    //             "Content-type": "application/json; charset=UTF-8"
    //         }
    //     });
    //     const items = await response.json();
    //     this.setState({ data: items });


    // }
}

