import React, {Component} from 'react';
import FormElement from "../../Componets/FormElement/FormElement";
import {Button, Col, Form, FormGroup} from "reactstrap";
import {connect} from "react-redux";
import {registerUser} from "../../store/actions/actionsUsers";

class Register extends Component {
    state = {
        username: '',
        password: ''
    };
    inputChangeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };
    submitFormHandler = async event => {
        event.preventDefault();
        await this.props.registerUser({...this.state});
    };
    getFieldError = fieldName => {
        try {
            return this.state.error.errors[fieldName].message;
        } catch (e) {
            return undefined;
        }
    };
    
    render() {
        return (
            <>
                <Form onSubmit={this.submitFormHandler}>
                <h2>Register new user</h2>
                <FormElement
                    error={this.getFieldError('username')}
                    type="text"
                    propertyName="username"
                    title="Username"
                    value={this.state.username}
                    onChange={this.inputChangeHandler}
                    autoComplete="current-username"
                    placeholder="Enter username you registered with"
                />
                    <FormElement
                        error={this.getFieldError('password')}
                        type="password"
                        propertyName="password"
                        title="Password"
                        value={this.state.password}
                        onChange={this.inputChangeHandler}
                        autoComplete="current-password"
                        placeholder="Enter password"
                    />
                    <FormGroup row>
                        <Col sm={{offset:2, size: 10}}>
                            <Button type="submit" color="primary">
                                Register
                            </Button>
                        </Col>
                    </FormGroup>
                </Form>
            </>
        );
    }
}
const mapStateToProps = state => ({
    error: state.users.registerError
});
const mapDispatchToProps = dispatch => ({
    registerUser: userData => dispatch(registerUser(userData))
});
export default connect(mapStateToProps, mapDispatchToProps)(Register);