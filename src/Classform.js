import React, { Component } from 'react';

class Classform extends Component {
    constructor(props) {
        super(props);
        this.state={
            name: "",
            email: "",
            password: "",
        };
    }
    handleChange=(e)=>{
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value});
    }
handleSubmit=(e)=>{
    e.preventDefault();
    console.log(this.state);
    this.setState({
        name:"",
        email:"",
        password:"",
    })
}
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Name</label>
                        <br/>
                        <input
                         type="text"
                         name="name"
                         value={this.state.name}
                         onChange={this.handleChange}
                         ></input>
                    </div>
                    <div>
                        <label>Email</label>
                        <br/>
                        <input type="email"
                         name="email"
                         value={this.state.email}
                         onChange={this.handleChange}
                         ></input>
                         

                    </div>
                    <div>
                        <label>Password</label>
                        <br/>
                        <input type="password" name="password"
                         value={this.state.password}
                         onChange={this.handleChange}
                         ></input>
                         
                        <br/>
                        <button>Submit</button>

                    </div>
                </form>
            </div>
        );
    }
}

export default Classform;
