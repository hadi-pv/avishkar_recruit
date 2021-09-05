import React,{Component} from 'react';
import './App.css';
import {Form,Button} from 'react-bootstrap';

class Login extends Component{
    constructor(props) {
        super(props);
    
        this.state = {
          userName: "",
          email: "",
          password: "",
          confirmPass: "",
          errors: []
        };
    
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      hasError(key) {
        return this.state.errors.indexOf(key) !== -1;
      }
    
      handleInputChange(event) {
        var key = event.target.name;
        var value = event.target.value;
        var obj = {};
        obj[key] = value;
        this.setState(obj);
      }
    
      handleSubmit(event) {
        event.preventDefault();   
        var errors = [];
  
        if (this.state.userName.trim().length<8) {
            errors.push("userName");
          }
    
        const expression = /\S+@\S+/;
        var validEmail = expression.test(String(this.state.email).toLowerCase());
        if (!validEmail) {
          errors.push("email");
        }
        
        if (this.state.password.trim().length<6) {
            errors.push("password");
        }

        if (this.state.password !== this.state.confirmPass) {
            errors.push("confirmPass");
          }

        this.setState({
          errors: errors
        });
    
        if (errors.length > 0) {
          return false;
        } else {
          window.location="/content";
        }
      }
    render(){
        return(
            <React.Fragment>
                <Form className="form-div">
                <h3>Avishkar-Form</h3>
                    <Form.Group className="mb-3" controlId="formGroupUserName">
                        <Form.Label >User Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter User Name" className={
                            this.hasError("userName")
                                ? "form-control is-invalid"
                                : "form-control"
                            }
                            name="userName"
                            value={this.state.userName}
                            onChange={this.handleInputChange}
                        />
                        <div className={
                            this.hasError("userName") ? "inline-errormsg" : "hidden"
                            }
                        >
                            User Name should be atleast 8 characters
                        </div>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" className={
                            this.hasError("email")
                                ? "form-control is-invalid"
                                : "form-control"
                            }
                            name="email"
                            value={this.state.email}
                            onChange={this.handleInputChange}
                        />
                        <div
                            className={this.hasError("email") ? "inline-errormsg" : "hidden"}
                        >
                            Email is invalid or missing
                        </div>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" className={
                            this.hasError("password")
                                ? "form-control is-invalid"
                                : "form-control"
                            }
                            name="password" 
                            value={this.state.password}
                            onChange={this.handleInputChange}
                        />
                        <div
                            className={this.hasError("password") ? "inline-errormsg" : "hidden"}
                        >
                            Password should be atleast 6 characters
                        </div>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupConfirmPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="Confirm Password" className={
                            this.hasError("confirmPass")
                                ? "form-control is-invalid"
                                : "form-control"
                            }
                            name="confirmPass"
                            value={this.state.confirmPass}
                            onChange={this.handleInputChange}
                        />
                        <div
                            className={this.hasError("confirmPass") ? "inline-errormsg" : "hidden"}
                        >
                            Should match password
                        </div>
                    </Form.Group>
                    <Form.Group className="d-grid" >
                    <Button variant="primary" type="submit"  onClick={this.handleSubmit}>
                        REGISTER
                    </Button>
                    </Form.Group>
                </Form>
            </React.Fragment>
        )
    }
}

export default Login;