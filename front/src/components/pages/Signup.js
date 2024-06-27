import React, { useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import validation from "../SignupValidation";

function Signup() {
    const [values, setValues] = useState({
        pseudo: "",
        firstName: "",
        lastName: "",
        email: "",
        password: ""
      });
    
      const [errors, setErrors] = useState({});
      const handleInput = (event) => {
        setValues(prev =>({
            ...prev,
            [event.target.name]: event.target.value
        }));
      };
      const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(validation(values));
    };

  return (
    <div className="signup"> 
      <Header />
      <div className="d-flex justify-content-center align-items-center bg-white vh-100">
        <div className="p-3 rounded w-25" style={{backgroundColor: "grey"}}>
        <h2>Sign Up</h2>
          <form action="" onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="name"><strong>Pseudo</strong></label>
                <input type="name" placeholder="Enter Pseudo" name="pseudo"
                onChange={handleInput} className="form-control rounded-0"/>
                {errors.pseudo && <span className="text-danger"> {errors.pseudo}</span>}
            </div>
            <div className="mb-3">
                <label htmlFor="name"><strong>First Name</strong></label>
                <input type="name" placeholder="Enter First Name" name="firstName"
                onChange={handleInput} className="form-control rounded-0"/>
                {errors.firstName && <span className="text-danger"> {errors.firstName}</span>}
            </div>
            <div className="mb-3">
                <label htmlFor="name"><strong>Last Name</strong></label>
                <input type="name" placeholder="Enter Last Name" name="lastName"
                onChange={handleInput} className="form-control rounded-0"/>
                {errors.lastName && <span className="text-danger"> {errors.lastName}</span>}
            </div>
            <div className="mb-3">
                <label htmlFor="email"><strong>Email</strong></label>
                <input type="email" placeholder="Enter Email" name="email"
                onChange={handleInput} lassName="form-control rounded-0"/>
                {errors.email && <span className="text-danger"> {errors.email}</span>}

            </div>
            <div className="mb-3">
                <label htmlFor="password"><strong>Password</strong></label>
                <input type="password" placeholder="Enter Password" name="password"
                onChange={handleInput} className="form-control rounded-0"/>
                {errors.password && <span className="text-danger"> {errors.password}</span>}
            </div>
            <button type='submit' className="btn btn-success w-100"> Sign Up</button>
            <Link to="/login" className="btn btn-default border w-100 bg-light tet-decoration-none">Log In</Link>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Signup;
