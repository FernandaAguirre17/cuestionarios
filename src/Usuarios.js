import React from 'react'
import { useState } from 'react'
import { Card, Container, Form, Button } from 'react-bootstrap'
import { SimpleNavegador } from './Components/SImpleNavigator'

export const Usuarios = () => {
    const [data, setData] = useState({
        name: '',
        last_name: '',
        email: '',
        password: '',
        confirmPassword: '',
    })
const [errors,setErrors] = useState({});

    const validate = (name, value) => {
        const newErrors = { ...errors };

        const vContenido = /^[a-zA-Z\s]+$/;
        const vContenidoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (name === 'name') {
            if (value.trim() === "") {
                newErrors.name = "El nombre no puede estar vacio"
            } else if (!vContenido.test(value.trim())) {
                newErrors.name = "El nombre solo puede contener letras"
            } else {
                delete newErrors.name
            }
        } else if (name === 'last_name') {
            if (value.trim() === "") {
                newErrors.last_name = "El apellido no puede estar vacio"
            } else if (!vContenido.test(value.trim())) {
                newErrors.last_name = "El apellido solo puede contener letras"
            } else {
                delete newErrors.last_name
            }
        } else if (name === 'email') {
            if (value.trim() === "") {
                newErrors.email = "El email no puede estar vacio"
            } else if (!vContenidoEmail.test(value.trim())) {
                newErrors.email = "El email no es valido"
            } else {
                delete newErrors.email
            }
        } else if (name === 'password') {
            if (value.trim() === "") {
                newErrors.password = "El password no puede estar vacio"
            } else if (value.trim().length < 8) {
                newErrors.password = "El password tiene que tener al menos 8 cracteres"
            } else {
                delete newErrors.password
            }
        } else if (name === 'confirmPassword') {
            if (value.trim() === "") {
                newErrors.confirmPassword = "El confirmPassword no puede estar vacio"
            } else if (value.trim() !== data.password.trim()) {
                newErrors.confirmPassword = "El confirmPassword no coincide con el password"
            } else {
                delete newErrors.confirmPassword
            }
        }

        setErrors(newErrors);
    };

    const onChangeRegister = (e) => {
        const { name, value } = e.target;
        validate(name, value);
        setData({
            ...data,
            [name]: value
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        const formErrors = validateForm();
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
        } else {
            console.log(data);
            alert("Formulario enviado con exito")
        }
    };

    const validateForm = () => {
        const formErrors = {};
        Object.keys(data).forEach(name => {
            validate(name, data[name]);
            if (errors[name]) {
                formErrors[name] = errors[name];
            }
        });
        return formErrors;
    };

    return (
        <>
            <SimpleNavegador />
            <Container className='mt-3'>
                <Card>
                    <Card.Body>
                        <Card.Title>Registro</Card.Title>

                        <Form onSubmit={onSubmit} >
                            <Form.Group>
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control onChange={onChangeRegister} name='name' value={data.name} placeholder='ingresa tu nombre' />
                                {errors.name && <p>{errors.name}</p>}
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Apellido</Form.Label>
                                <Form.Control onChange={onChangeRegister} name='last_name' value={data.last_name} placeholder='ingresa tu apellido' />
                                {errors.last_name && <p>{errors.last_name}</p>}
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Email</Form.Label>
                                <Form.Control onChange={onChangeRegister} name='email' type='email' value={data.email} placeholder='ingresa tu email' />
                                {errors.email && <p>{errors.email}</p>}
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Password</Form.Label>
                                <Form.Control onChange={onChangeRegister} name='password' type='password' value={data.password} placeholder='ingresa tu password' />
                                {errors.password && <p>{errors.password}</p>}
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>ConfirmPassword</Form.Label>
                                <Form.Control onChange={onChangeRegister} name='confirmPassword' type='password' value={data.confirmPassword} placeholder='ingresa tu confirmPassword' />
                                {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
                            </Form.Group>

                            <Button type="submit" className='mt-3'>Registrate</Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Container>
        </>
    )
}
