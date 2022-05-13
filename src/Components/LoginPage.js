import React, { Component } from 'react'
// import "../Styles/LoginPage.css";
import hello from "../hello.jpg";
import { Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const mystyle = {
  // width: "100%",
  color: "white",
  textAlign: "center",
  position: "relative",
  alignItems: "center",
  textTransform: "uppercase",
  margin: "auto",
  width: "22%",
  top: "20%",
};



const h2Style = {
  letterSpacing: "10px",
}

const checkStyle = {
  textAlign: "Left",
  fontSize: "15px",
}

const btnstyle = {
  padding: "10px 30px",
  marginTop: "20px",
  fontSize: "15px",
  borderRadius: "28px",
  backgroundColor: "white",
  fontWeight: "500",
  textTransform: "uppercase",
  letterSpacing: "5px",
  border: "None",
  textDecoration: "none",
  color: "black",
}

const inStyle = {
  borderRadius: "28px",
}

function LoginPage() {
  return (
    <Form style={mystyle}>
      <h2 style={h2Style}>Get Started</h2>
      <br></br>
      <div className='group'>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" style={inStyle} />
    
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" style={inStyle}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox" style={checkStyle}>
    <Form.Check type="checkbox" label="Keep Logged in" />
  </Form.Group>
  <a className='loginBtn' href='http://localhost:3000/listnup' style={btnstyle}>Login</a>
</div>

</Form>

    
   
  
  )
}

export {LoginPage};