import React , {useState,useEffect} from 'react'
import "./LogIn.css"
import axios from 'axios'
import {Form,Button,Container} from "react-bootstrap"
const LogIn = () => {
  const url = "http://localhost:4545/login";
  const [user, setuser] = useState({
    email:"",
    password:""
  })
  const handleinput = (e) =>{
    const {name , value}=e.target;
    setuser({
      ...user ,[name]:value
    })
    console.log(user)
}
const login = () => {
  
  axios.post(url, user);
};
  return (
    <>
    <Container>
    <Form onSubmit={(e) => e.preventDefault()}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" name='email' value={user.email} onChange={handleinput} placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password"name='password' value={user.password} onChange={handleinput} placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit" onClick={login}>
    Submit
  </Button>
       </Form>
    </Container>
       
    </>
  )
}

export default LogIn