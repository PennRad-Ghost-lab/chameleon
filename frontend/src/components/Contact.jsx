import React, { useRef } from 'react';
import { Form, Button, Card, Container } from 'react-bootstrap';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    console.log(form.current);

    emailjs.sendForm(
      'service_ieesieu',
      'template_f7sau0d',
      form.current,
      {
        publicKey: 'TvffD1g5go9bZ-GGD'
      }
    ).then((result) => {
        alert('Message sent successfully!');
        form.current.reset();
      }, (error) => {
        console.error('Error sending message:', error.text);
        alert('Failed to send message. Please try again later.');
      });
  };

  return (
    <Container className="d-flex my-5">
      <Card style={{ width: '30rem', padding: '20px' }}>
        <Card.Body>
          <Card.Title>Contact Us</Card.Title>
          <Form ref={form} onSubmit={sendEmail}>
            <Form.Group controlId="firstName" className="mb-3">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" name="firstName" placeholder="Enter your first name" required />
            </Form.Group>

            <Form.Group controlId="lastName" className="mb-3">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" name="lastName" placeholder="Enter your last name" required />
            </Form.Group>

            <Form.Group controlId="institution" className="mb-3">
              <Form.Label>Institution</Form.Label>
              <Form.Control type="text" name="institution" placeholder="Enter your institution" required />
            </Form.Group>

            <Form.Group controlId="email" className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name="email" placeholder="Enter your email" required />
            </Form.Group>

            <Form.Group controlId="message" className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={4} name="message" placeholder="Enter your message" required />
            </Form.Group>

            <Button variant="primary" type="submit">Send Message</Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ContactForm;
