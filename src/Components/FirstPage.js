import React from 'react';


const mystyle = {
  letterSpacing: "20px",
  width: "100%",
  color: "white",
  fontSize: "15px",
  textAlign: "center",
  position: "relative",
  alignItems: "center",
  textTransform: "uppercase",
  margin: "auto",
  // width: "50%",
  top: "20%",
};
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
}
  

function FirstPage() {
  return (
    <div style={mystyle}>
        <h1>Welcome to ListnUp!</h1>

    <br/>
    {/* <a href='http://localhost:3000/LoginPage#' style={btnstyle}><h1>Click to get started</h1></a> */}
    <a href='http://localhost:3000/LoginPage#' ><button style={btnstyle}>Click</button></a>
    </div>
  )
}

export {FirstPage};