import React, { Component } from "react";

export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = { email: "", password: "", message: "" };
    }

    render() {
        return (
            <React.Fragment>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Login</h5>
                        <div className="mb-3">
                            <label for="Email" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="Email" value={this.state.email} onChange={(event) => { this.setState({ email: event.target.value }) }}></input>

                        </div>
                        <div className="mb-3">
                            <label for="Password" className="form-label">Password</label>
                            <input type="password" className="form-control" id="Password" value={this.state.password} onChange={(event) => { this.setState({ password: event.target.value }) }} />
                        </div>
                        <button type="submit" className="btn btn-light" onClick={this.onSigninClick}>Sign in</button>
                        {this.state.message}
                    </div>
                </div>
            </React.Fragment>
        );
    }

    onSigninClick = () => {
        if (this.state.email === "muny@test.com" && this.state.password === "muny123") {
            this.setState({ message: <span className="text-success">Success</span> });
        }
        else {
            this.setState({ message: <span className="text-danger">Invalid credentials</span> });
        }
    }
}