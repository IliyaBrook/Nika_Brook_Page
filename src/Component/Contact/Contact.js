import React, {Fragment,useState} from 'react';
import Image from "react-bootstrap/Image";
import {Form} from "react-bootstrap";
import './Contact.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';

export default function Contact () {

    const [formEmail,setFormEmail] = useState('')
    const [formMessage,setFormMessage] = useState('')
    const [ifFormEmpty,setIfFormEmpty] = useState(false)
    const [formLoading,setFormLoading] = useState(false)


    const submitForm = (e) => {
        e.preventDefault()
        setFormEmail('')
        setFormMessage('')
        if (formMessage === '') {
            setIfFormEmpty(true)
            setTimeout(() => {
                this.setState({ifFormEmpty: false})
                setTimeout(() => {
                    setIfFormEmpty(false)
                })
            }, 4000)
        }
        const formData = {
            clientEmail: formEmail,
            clientMessage: formMessage
        }
        if (formMessage !== '') {
            setFormLoading(true)
            const serverUrl = 'http://localhost:8000/'
            fetch(serverUrl, {
                method: 'post',
                body: JSON.stringify(formData),
                headers: {
                    "Content-type": "application/json",
                    "mode": "no-cors"
                }
            }).then((res) => {
                if (res.ok) {
                    console.log('Post complete')
                    setFormLoading(false)
                }
            })
        }
    }

    const onEmail = (value) => {
        setFormEmail(value.target.value)
    }
    const onMessage = (value) => {
        setFormMessage(value.target.value)
    }
        return (
            <Fragment>
                <div className="contactForm">
                    <Form onSubmit={submitForm}>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" value={formEmail} onChange={onEmail}
                                          placeholder="name@example.com"/>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Message:</Form.Label>
                            <Form.Control as="textarea" rows={10} value={formMessage}
                                          onChange={onMessage}/>
                        </Form.Group>
                        <Button  type="submit" variant="primary">
                            {formLoading ? 'Sending…' : 'Send'}
                        </Button>
                    </Form>
                </div>
                <Image className="d-none d-lg-block d-md-block" src="./image/large/14.jpg" fluid/>
                <Image className="d-sm-block d-md-none" src="./image/large/9.jpg" fluid/>
            </Fragment>
        )
}
