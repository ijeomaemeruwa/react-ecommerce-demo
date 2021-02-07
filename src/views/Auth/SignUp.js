import React from 'react';
import './auth.css';
import {Link} from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import FormInput from '../../components/FormInput/FormInput';
import {RiFacebookBoxFill} from 'react-icons/ri';
import {IoIosCheckboxOutline} from 'react-icons/io';


const SignUp = () => {
return (
    <>
    <section className="user">
    <div classname="user_access">
    <div className="title">
    <h4>REGISTER</h4>
    </div>

    <Form className="form">
    <Form.Group>
      <Form.Label>Email</Form.Label>
      <FormInput type="email" required/>
    </Form.Group>
    <Form.Group>
      <Form.Label>Password</Form.Label>
      <FormInput type="password" required/>
    </Form.Group>

    <div className="form__links">
    <p><span><IoIosCheckboxOutline /></span> Remember me</p>
    <Link to="/login" classname="login">Log in</Link>
    </div> 
    

    <div className="btn__container">
      <button className="auth__btn">
        CREATE ACCOUNT
      </button>

      <button className="fb__btn">
      <span><RiFacebookBoxFill /></span>
        REGISTER WITH FACEBOOK
      </button>
    </div> 
    </Form>
    </div>      
    </section>      
    </>
)
}

export default SignUp
