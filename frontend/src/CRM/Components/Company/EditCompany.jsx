import React, {useContext, useState} from 'react';
import {Form, Button} from "react-bootstrap";
import {CompanyContext} from "../../Contexts/CompanyContext";

const EditCompany = ({theCompanies}) => {

    const {updateCompany} = useContext(CompanyContext);

    const id = theCompanies.id;

    const [name, setName] = useState(theCompanies.name);
    const [email, setEmail] = useState(theCompanies.email);
    const [phone_number, setPhone] = useState(theCompanies.phone_number);
    const [website, setWebsite] = useState(theCompanies.website);
    const [image_url, setImage] = useState(theCompanies.image_url);

    const handleSubmit = (e) => {

        e.preventDefault();

        const updatedCompany = new FormData();
        updatedCompany.append("name", name);
        updatedCompany.append("email", email);
        updatedCompany.append("phone_number", phone_number);
        updatedCompany.append("website", website);
        updatedCompany.append("image_url", image_url);

        updateCompany(id, updatedCompany)
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
                        onChange={(e) => setName(e.target.value)}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Control
                        type="email"
                        placeholder="Email *"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Control
                        type="text"
                        placeholder="Phone"
                        name="phone_number"
                        value={phone_number}
                        onChange={(e) => setPhone(e.target.value)}

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
                        label={theCompanies.image_url}
                        onChange={(e) => setImage(e.target.files[0])}
                        file input>
                    </Form.File>
                </Form.Group>
                <Button onClick={handleSubmit} variant="success" type="submit" block>
                    Edit New Company
                </Button>
            </Form>
        </div>
    )
}

export default EditCompany;