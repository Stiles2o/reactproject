import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaRegUser } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import Image1 from "../../assets/images/register.png"

const CreateAcc = () => {
    let [user, setUser] = useState({ username: '', email: '', number: '', password: '', cpassword: '' })
    let [errors, setErrors] = useState({})
    let [show, setShow] = useState(false)
    let [show2, setShow2] = useState(false)

    // For User name box Validation
    let checkusername = () => {
        if (user.username == '') {
            setErrors((prevErrors) => ({ ...prevErrors, usernameerr: "Username is required" }));
            return false
        }
        else {
            setErrors((prevErrors) => ({ ...prevErrors, usernameerr: "" })); return true
        }
    }

    // For Email box Validation
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

    // For Number Validation
    let checknumber = () => {
        let pat = /^(\+91|91)?[789]\d{9}$/;
        if (user.number == '') {
            setErrors((prevErrors) => ({ ...prevErrors, numbererr: "Number is required" }));
            return false
        }
        else if (!pat.test(user.number)) {
            setErrors((prevErrors) => ({ ...prevErrors, numbererr: "Invalid Numbers" }));
            return false
        }
        else {
            setErrors((prevErrors) => ({ ...prevErrors, numbererr: "" })); return true
        }
    }

    // For confirm Password Validation
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

    // For confirm Password Validation
    let checkcpassword = () => {
        if (user.cpassword == '') {
            setErrors((prevErrors) => ({ ...prevErrors, cpassworderr: "Confirm Password is required" }));
        }
        else if (user.password != user.cpassword) {
            setErrors((prevErrors) => ({
                ...prevErrors, cpassworderr: "Password not match"
            }));
            return false
        }
        else {
            setErrors((prevErrors) => ({ ...prevErrors, cpassworderr: "" })); return true
        }
    }

    // For submit button for validation
    const handleSubmit = (e) => {
        e.preventDefault()
        let u1 = checkusername(); let e1 = checkemail(); let n1 = checknumber(); let p1 = checkpassword(); let c1 = checkcpassword()
        if (u1 && e1 && n1 && p1 && c1) {
            // alert(user.username + '-' + user.email + '-' + user.number + '-' + user.password + '-' + user.cpassword)
            alert("THANK YOU!");
            setUser({ username: '', email: '', number: '', password: '', cpassword: '' });
            setErrors({});
        }
        else e.preventDefault()
    }
    return (
        <div className='container mt-5 shadow p-2'>
            <h1 style={{ textAlign: "center" }} className='text-warning'>Create Account</h1><hr />
            <div className="row ">
                <div className="col-6">
                    <img src={Image1} className='img-fluid' />
                </div>
                <div className="col-6">
                    <form onSubmit={handleSubmit}>
                        <div className="input-group mb-3">
                            <span className="input-group-text"><FaRegUser /></span>
                            <div className="form-floating">
                                <input type="text" className="form-control" name='username' placeholder="Username" value={user.username}
                                    onChange={(e) => setUser({ ...user, username: e.target.value })}
                                    onBlur={checkusername} />
                                <label  >Username</label>
                            </div>
                        </div>
                        {errors?.usernameerr && <span className="text-danger">{errors.usernameerr}</span>}
                        <div className="input-group mb-3">
                            <span className="input-group-text"><MdOutlineMail /></span>
                            <div className="form-floating">
                                <input type="email" className="form-control" name='email' placeholder="Email" value={user.email}
                                    onChange={(e) => setUser({ ...user, email: e.target.value })}
                                    onBlur={checkemail} />
                                <label  >Email</label>
                            </div>
                        </div>
                        {errors?.emailerr && <span className="text-danger">{errors.emailerr}</span>}
                        <div className="input-group mb-3">
                            <span className="input-group-text"><BsTelephone /></span>
                            <div className="form-floating">
                                <input type="tel" className="form-control" name='number' placeholder="Mobile Number" value={user.number}
                                    onChange={(e) => setUser({ ...user, number: e.target.value })}
                                    onBlur={checknumber} />
                                <label  >Mobile</label>
                            </div>
                        </div>
                        {errors?.numbererr && <span className="text-danger">{errors.numbererr}</span>}
                        <div className="input-group mb-3">
                            <button type="button" className="input-group-text" onClick={() => setShow(!show)}>
                                {show == false ? <FaRegEyeSlash /> : <FaRegEye />}
                            </button>
                            <div className="form-floating">
                                <input type={show ? "text" : "password"} className="form-control" name='password' placeholder="Password" value={user.password}
                                    onChange={(e) => setUser({ ...user, password: e.target.value })}
                                    onBlur={checkpassword} />
                                <label  >Password</label>
                            </div>
                        </div>
                        {errors?.passworderr && <span className="text-danger">{errors.passworderr}</span>}
                        <div className="input-group mb-3">
                            <button type="button" className="input-group-text" onClick={() => setShow2(!show2)}>
                                {show2 == false ? <FaRegEyeSlash /> : <FaRegEye />}
                            </button>
                            <div className="form-floating">
                                <input type={show2 ? "text" : "password"} className="form-control" name='cpassword' placeholder="Confirm Password" value={user.cpassword}
                                    onChange={(e) => setUser({ ...user, cpassword: e.target.value })}
                                    onBlur={checkcpassword} />
                                <label  >Confirm Password</label>
                            </div>
                        </div>
                        {errors?.cpassworderr && <span className="text-danger">{errors.cpassworderr}</span>}
                        <div className='mb-2'>
                            <button type="submit" className="btn btn-warning me-2" style={{ width: '100%' }}>Create</button>
                        </div>
                    </form>
                </div>
            </div>
        </div >
    )
}

export default CreateAcc
