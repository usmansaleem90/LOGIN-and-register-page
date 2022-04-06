import React, { useState, useEffect } from "react";
import { Form, Button, Container } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// toast.configure( );
const Register = () => {
  const url = "http://localhost:4545/register";
  const navigate = useNavigate();
  const initialvalues = {
    name: "",
    fullname: "",
    email: "",
    password: "",
    confirmpassword: "",
  };
  const [user, setuser] = useState(initialvalues);
  

  const handleinput = (e) => {
    const { name, value } = e.target;
    setuser({ ...user, [name]: value });
    console.log(user);
  };

  const register = () => {
    const {name,fullname,email,password,confirmpassword} = user;
    if (name && fullname && email && password && confirmpassword) {
      if (password === confirmpassword) {
        axios.post(url, user);
        toast.success("Successfully Registered", { autoClose: 1200 });
        navigate("/log");
      } else {
        toast.warning("Password don't match", { autoClose: 1200 });
      }
    } else {
      toast.error("Please fill all fields", { autoClose: 1200 });
    }


  };

  return (
    <div>
      <Container>
        <Form className="mt-4" onSubmit={(e) => e.preventDefault()}>
          <Form.Group className="mb-3">
            <Form.Label className="mb-3">First Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={user.name}
              onChange={handleinput}
              placeholder="Enter Name"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="mb-3"> LastName</Form.Label>
            <Form.Control
              type="text"
              name="fullname"
              value={user.username}
              onChange={handleinput}
              placeholder="FullName"
            />
          </Form.Group>

        

          

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={user.email}
              onChange={handleinput}
              placeholder="Enter email"
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={user.password}
              onChange={handleinput}
              placeholder="Password"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              name="confirmpassword"
              value={user.confirmpassword}
              onChange={handleinput}
              placeholder="Confirm Password"
            />
          </Form.Group>

          <Button variant="primary" type="submit" onClick={register}>
            Submit
          </Button>
        </Form>
      </Container>
      <ToastContainer />
    </div>
  );
};
export default Register;
