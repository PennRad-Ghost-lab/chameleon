import React, { useState } from "react";
import { Form, Button, Alert, Modal, Spinner } from "react-bootstrap";

const WaitlistSignup = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [institution, setInstitution] = useState("");
    const [responseMessage, setResponseMessage] = useState("");
    const [variant, setVariant] = useState("success");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true); // Show loading modal

        try {
            const response = await fetch("https://backend-damp-mountain-3912.fly.dev/api/google-sheets", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    firstName,
                    lastName,
                    email,
                    institution }),
            });

            if (response.ok) {
                setResponseMessage("Thank you for signing up!");
                setVariant("success");
                setFirstName("");
                setLastName("");
                setEmail("");
                setInstitution("");
            } else {
                setResponseMessage("Something went wrong. Please try again.");
                setVariant("danger");
            }
        } catch (error) {
            console.error("Error:", error);
            setResponseMessage("Network error. Please try again.");
            setVariant("danger");
        } finally {
            setLoading(false); // Hide loading modal
        }
    };

    return (
        <div className="waitlist">
            <h1>Sign Up for Waitlist</h1>
            {responseMessage && (
                <Alert
                    variant={variant}
                    onClose={() => setResponseMessage("")}
                    dismissible
                >
                    {responseMessage}
                </Alert>
            )}
            <Form className="waitlist-form" onSubmit={handleSubmit}>
                <Form.Group className="mb-3 w-100" controlId="formFirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter your first name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3 w-100" controlId="formLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter your last name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3 w-100" controlId="formInstitution">
                    <Form.Label>Institution</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter your Institution"
                        value={institution}
                        onChange={(e) => setInstitution(e.target.value)}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3 w-100" controlId="formEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </Form.Group>
                <Button variant="primary" type="submit" className="w-50 d-flex justify-content-center mx-auto text-center">
                    Join Waitlist
                </Button>
            </Form>

            {/* Loading Modal */}
            <Modal show={loading} centered backdrop="static" keyboard={false}>
                <Modal.Body className="text-center">
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                    <p className="mt-3">Processing your request...</p>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default WaitlistSignup;

