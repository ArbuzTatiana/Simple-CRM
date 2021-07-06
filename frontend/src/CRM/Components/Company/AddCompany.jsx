import React, {useContext, useState} from 'react';
import {Form, Button} from "react-bootstrap";
import {CompanyContext} from "../../Contexts/CompanyContext";

const AddCompany = () => {

    const {addCompany} = useContext(CompanyContext);

    const [newCompany, setNewCompany] = useState({
        id: "", name: "", email: "", phone_number: "", website: "", image: ""
    });

    const onInputChange = (e) => {
        setNewCompany({...newCompany, [e.target.name]: e.target.value})
    };

    const {id, name, email, phone_number, website, image} = newCompany;

    const handleSubmit = (e) => {
        e.preventDefault();
        addCompany(id, name, email, phone_number, website, image);
    };

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Control
                        type="text"
                        placeholder="Name *"
                        name="name"
                        value={name}
                        onChange={(e) => onInputChange(e)}
                        required
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Control
                        type="email"
                        placeholder="Email *"
                        name="email"
                        value={email}
                        onChange={(e) => onInputChange(e)}
                        required
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Control
                        type="text"
                        placeholder="Phone"
                        name="phone_number"
                        value={phone_number}
                        onChange={(e) => onInputChange(e)}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Control
                        type="website"
                        placeholder="website *"
                        name="website"
                        value={website}
                        onChange={(e) => onInputChange(e)}
                        required
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Control
                        type="image"
                        placeholder="logo *"
                        name="logo"
                        value={image}
                        onChange={(e) => onInputChange(e)}
                        required
                    />
                </Form.Group>
                <Button variant="success" type="submit" block>
                    Add New Company
                </Button>
            </Form>
        </div>
    )
}

export default AddCompany;