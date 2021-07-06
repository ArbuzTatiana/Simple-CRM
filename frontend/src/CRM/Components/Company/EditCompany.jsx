import React, {useContext, useState} from 'react';
import {Form, Button} from "react-bootstrap";
import {CompanyContext} from "../../Contexts/CompanyContext";

const EditCompany = ({theCompanies}) => {

    const id = theCompanies.id;

    const [name, setName] = useState(theCompanies.name);
    const [email, setEmail] = useState(theCompanies.email);
    const [phone_number, setPhone] = useState(theCompanies.phone_number);
    const [website, setWebsite] = useState(theCompanies.website);
    const [image, setImage] = useState(theCompanies.image);

    const {updateCompany} = useContext(CompanyContext);

    const updatedCompany = { name, email, phone_number, website, image};

    const handleSubmit = (e) => {
        e.preventDefault();
        updateCompany(id, updatedCompany)
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
                        onChange={(e)=> setName(e.target.value)}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Control
                        type="email"
                        placeholder="Email *"
                        name="email"
                        value={email}
                        onChange={(e)=> setEmail(e.target.value)}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Control
                        type="text"
                        placeholder="Phone"
                        name="phone_number"
                        value={phone_number}
                        onChange={(e)=> setPhone(e.target.value)}

                    />
                </Form.Group>
                <Form.Group>
                    <Form.Control
                        type="website"
                        placeholder="website *"
                        name="website"
                        value={website}
                        onChange={(e)=> setWebsite(e.target.value)}


                    />
                </Form.Group>
                <Form.Group>
                    <Form.Control
                        type="image"
                        placeholder="logo *"
                        name="logo"
                        value={image}
                        onChange={(e)=> setImage(e.target.value)}

                    />
                </Form.Group>
                <Button variant="success" type="submit" block>
                    Edit New Company
                </Button>
            </Form>
        </div>
    )
}

export default EditCompany;