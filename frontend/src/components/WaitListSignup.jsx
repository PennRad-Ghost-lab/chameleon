import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";

const WaitlistSignup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [institution, setInstitution] = useState("");
    const [responseMessage, setResponseMessage] = useState("");
    const [variant, setVariant] = useState("success");

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch("/api/waitlist", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, email }),
            });

            if (response.ok) {
                setResponseMessage("Thank you for signing up!");
                setVariant("success");
                setName("");
                setEmail("");
            } else {
                setResponseMessage("Something went wrong. Please try again.");
                setVariant("danger");
            }
        } catch (error) {
            console.error("Error:", error);
            setResponseMessage("Network error. Please try again.");
            setVariant("danger");
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
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3 w-100" controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
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
                <Button variant="primary" type="submit" className="w-50 d-flex justify-content-center mx-auto text-centero">
                    Join Waitlist
                </Button>
            </Form>
        </div>
);
};

export default WaitlistSignup;
