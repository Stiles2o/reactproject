import React, { useState } from 'react'
import { MdOutlineMail } from "react-icons/md";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import Image1 from "../../assets/images/login.png"
import { Col, Collapse, Container, Image, NavLink, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
    let [user, setUser] = useState({ email: '', password: '' })
    let [errors, setErrors] = useState({})
    let [show, setShow] = useState(false)

    let checkemail = () => {
        let pat = /^[\w\.]+\@[\w]+\.[a-zA-Z]{3}$/
        if (user.email == '') {
            setErrors((prevErrors) => ({ ...prevErrors, emailerr: "Email is required" }));
            return false
        }
        else if (!pat.test(user.email)) {
            setErrors((prevErrors) => ({ ...prevErrors, emailerr: "Invalid Email" }));
            return false
        }
        else {
            setErrors((prevErrors) => ({ ...prevErrors, emailerr: "" })); return true
        }
    }

    let checkpassword = () => {
        let pwd = /^(?=.*[A-Z])(?=.*[o])(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z0-9!@#$%^&*(),.?":{}|<>]+$/;
        if (user.password == '') {
            setErrors((prevErrors) => ({ ...prevErrors, passworderr: "Password is required" }));
            return false
        }
        else if (!pwd.test(user.password)) {
            setErrors((prevErrors) => ({ ...prevErrors, passworderr: "Plz enter valid password" }));
            return false
        }
        else {
            setErrors((prevErrors) => ({ ...prevErrors, passworderr: "" })); return true
        }
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        let e1 = checkemail(); let p1 = checkpassword();
        if (e1 && p1) {
            alert("LOG IN sucessfully!!!!");
            setUser({ email: '', password: '' });
            setErrors({});
        }
        else e.preventDefault()
    }


    return (
        <Container className='p-4 mt-5 border shadow '>
            <h1 style={{ textAlign: "center" }} className='text-warning'>LOG IN</h1><hr />
            <Row className="p-4">
                <Col xs={4}>
                    <Image src={Image1} fluid roundedCircle className='bg-warning p-2' />
                </Col>
                <Col>
                    <form onSubmit={handleSubmit}>
                        <div class="input-group mb-3">
                            <span class="input-group-text"><MdOutlineMail /></span>
                            <div class="form-floating">
                                <input type="email" class="form-control" name='email' id="floatingInputGroup1" placeholder="Email" value={user.email}
                                    onChange={(e) => setUser({ ...user, email: e.target.value })}
                                    onBlur={checkemail} />
                                <label for="floatingInputGroup1">Email</label>
                            </div>
                        </div>
                        {errors?.emailerr && <span className="text-danger">{errors.emailerr}</span>}
                        <div class="input-group mb-3">
                            <button type="button" class="input-group-text" onClick={() => setShow(!show)}>
                                {show == false ? <FaRegEyeSlash /> : <FaRegEye />}
                            </button>
                            <div class="form-floating">
                                <input type={show ? "text" : "password"} class="form-control" name='password' id="floatingInputGroup1" placeholder="Password" value={user.password}
                                    onChange={(e) => setUser({ ...user, password: e.target.value })}
                                    onBlur={checkpassword} />
                                <label for="floatingInputGroup1">Password</label>
                            </div>
                        </div>
                        {errors?.passworderr && <span className="text-danger">{errors.passworderr}</span>}
                        <div>
                            <button type="submit" className="btn btn-warning me-2" style={{ width: '100%' }}>Log In</button>
                        </div>
                    </form>
                    <Link to="/newc">Create Account</Link>
                </Col>
            </Row>
        </ Container>
    )
}

export default Login
