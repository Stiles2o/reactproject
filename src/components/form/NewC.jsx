import React, { useState } from 'react'
import { Button, Col, Container, Form, Image, InputGroup, Row } from 'react-bootstrap'
import { FaRegUser } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import Image1 from "../../assets/images/register.png"
import { useForm } from 'react-hook-form';

const NewC = () => {
    let [show, setShow] = useState(false);
    let [show1, setShow1] = useState(false);
    let { register, handleSubmit, getValues, formState: { errors }, trigger } = useForm();
    const newAccount = (user) => {
        alert(JSON.stringify(user))
    }
    return (
        <Container className='p-4 mt-5 border shadow'>
            <h1 style={{ textAlign: "center" }} className='text-warning'>Create Account</h1><hr />
            <Row className='p-4'>
                <Col xs={4}>
                    <Image src={Image1} fluid roundedCircle className='bg-warning p-2' />
                </Col>
                <Col>
                    <Form onSubmit={handleSubmit(newAccount)}>
                        <Form.Group className="mb-3">
                            <InputGroup >
                                <InputGroup.Text><FaRegUser /></InputGroup.Text>
                                <Form.Control placeholder="Username" {...register('username', { required: "Username is requierd", minLength: { value: 3, message: 'Minimum 3 character' }, maxLength: { value: 20, message: 'Maximum 20 character' } })} onBlur={() => trigger('username')} />
                            </InputGroup>
                            {errors.username && <span className='text-danger'>{errors.username.message}</span>}
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <InputGroup>
                                <InputGroup.Text ><MdOutlineMail /></InputGroup.Text>
                                <Form.Control type='email' placeholder="Email" {...register('email', { required: { value: true, message: "Email is requierd" }, pattern: { value: /^[\w\.]+\@[\w]+\.[a-zA-Z]{3}$/, message: 'Please Enter valid Emali' } })} onBlur={() => trigger('email')} />
                            </InputGroup>
                            {errors.email && <span className='text-danger'>{errors.email.message}</span>}
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <InputGroup>
                                <InputGroup.Text><BsTelephone /></InputGroup.Text>
                                <Form.Control type='tel' placeholder="Mobile Number" {...register('number', { required: "Numbers is requierd", pattern: { value: /^(\+91|91)?[789]\d{9}$/, message: 'Please Enter valid Numbers' } })} onBlur={() => trigger('number')} />
                            </InputGroup>
                            {errors.number && <span className='text-danger'>{errors.number.message}</span>}
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <InputGroup>
                                <Button variant='secondary' onClick={() => setShow(!show)}>{show ? <FaRegEye /> : <FaRegEyeSlash />}</Button>
                                <Form.Control type={show ? 'text' : 'password'} {...register('password', { required: "Password is requierd", pattern: { value: /^(?=.*[A-Z])(?=.*[o])(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z0-9!@#$%^&*(),.?":{}|<>]+$/, message: 'Please Enter valid password' } })} placeholder="Password" onBlur={() => trigger('password')} />
                            </InputGroup>
                            {errors.password && <span className='text-danger'>{errors.password.message}</span>}
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <InputGroup>
                                <Button variant='secondary' onClick={() => setShow1(!show1)}>{show1 ? <FaRegEye /> : <FaRegEyeSlash />}</Button>
                                <Form.Control type={show1 ? 'text' : 'password'} {...register('cpassword', {
                                    required: "Password is requierd", validate: (cpwd) => {
                                        let { password } = getValues(); return password == cpwd || 'Password not match'
                                    }
                                })} placeholder="Confirm Password" onBlur={() => trigger('cpassword')} />
                            </InputGroup>
                            {errors.cpassword && <span className='text-danger'>{errors.cpassword.message}</span>}
                        </Form.Group>
                        <div class="d-grid gap-2">
                            <Button variant="warning" type="submit">Create Account</Button>
                        </div>

                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default NewC
