import React, {useContext, useState} from 'react';
import {Form, Button} from "react-bootstrap";
import {CompanyContext} from "../../Contexts/CompanyContext";

const AddCompany = () => {

    const {addCompany} = useContext(CompanyContext);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone_number, setPhone] = useState("");
    const [website, setWebsite] = useState("");
    const [image_url, setImage] = useState("");


    const handleSubmit = (e) => {

        e.preventDefault();

        const newCompany = new FormData();
        newCompany.append("name", name);
        newCompany.append("email", email);
        newCompany.append("phone_number", phone_number);
        newCompany.append("website", website);
        newCompany.append("image_url", image_url);

        addCompany(newCompany);
    };

    const onPhotoSelected = (e) => {
        if (e.target.files.length) {
            setImage(e.target.files[0]);
        }
    }

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Control
                        type="text"
                        placeholder="Name *"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Control
                        type="email"
                        placeholder="Email *"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Control
                        type="text"
                        placeholder="Phone"
                        name="phone_number"
                        value={phone_number}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Control
                        type="website"
                        placeholder="website *"
                        name="website"
                        value={website}
                        onChange={(e) => setWebsite(e.target.value)}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.File
                        type="file"
                        placeholder="logo *"
                        name="logo"
                        onChange={onPhotoSelected}
                        file input/>
                </Form.Group>
                <Button onClick={handleSubmit} variant="success" type="submit" block>
                    Add New Company
                </Button>
            </Form>
        </div>
    )
}

export default AddCompany;