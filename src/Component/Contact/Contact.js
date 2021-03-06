import React, {Fragment,useState} from 'react';
import Image from "react-bootstrap/Image";
import {Form} from "react-bootstrap";
import './Contact.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';



export default function Contact () {

    const [formEmail,setFormEmail] = useState('')
    const [formMessage,setFormMessage] = useState('')
    const [btnState , setBtnState] = useState({
        value:'Send',
        variant:'primary'
    })

    const btnToDefaultStateTimer = () => {
         setTimeout(() => setBtnState({value:'Send',variant:'primary'}),4000)
    }
     const submitForm = (e) => {
        e.preventDefault()
        setFormEmail('')
        setFormMessage('')
        if (formMessage === '') {
            setBtnState({value:'Text form cannot be empty',variant:'danger'})
            setTimeout(() => {
                setBtnState({value:'Send',variant:'primary'})
                setTimeout(() => {
                })
            }, 4000)
        }
        const formData = {
            clientEmail: formEmail,
            clientMessage: formMessage
        }
        if(formMessage !== '') {
            setBtnState({value:'Loading…',variant:'warning'})
            const serverUrl = 'https://nika-mail-server.herokuapp.com/'
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
                    setBtnState({value:'Send complete',variant:'success'})
                    btnToDefaultStateTimer()
                }
            }).catch(()=>{
                setBtnState({value:"Error,not sent",variant:'danger'})
                btnToDefaultStateTimer()
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
                        <Button  type="submit" variant={btnState.variant}>
                            {btnState.value}
                        </Button>
                    </Form>
                </div>
                <Image className="d-none d-lg-block d-md-block" src="./image/large/14.jpg" fluid/>
                <Image className="d-sm-block d-md-none" src="./image/large/9.jpg" fluid/>
            </Fragment>
        )
}
