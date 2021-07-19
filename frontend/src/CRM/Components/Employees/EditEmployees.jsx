import React, {useContext, useState} from 'react';
import {Form, Button} from "react-bootstrap";
import {EmployeesContext} from "../../Contexts/EmployeesContext";
import Optionsdata from "./Optionsdata";

const EditEmployees = ({theEmployees}) => {

    const {updateEmployee, employees} = useContext(EmployeesContext);

    console.log(theEmployees.company.name)

    const id = theEmployees.id;


    const [firstName, setFirstName] = useState(theEmployees.first_name);
    const [lastName, setLastName] = useState(theEmployees.last_name);
    const [company, setCompany] = useState(theEmployees.company.name);
    const [email, setEmail] = useState(theEmployees.email);
    const [phone_number, setPhone] = useState(theEmployees.phone_number);


    const handleSubmit = (e) => {

        e.preventDefault();

        const newEmployee = new FormData();
        newEmployee.append("first_name", firstName);
        newEmployee.append("last_name", lastName);
        newEmployee.append("company_id", company);
        newEmployee.append("email", email);
        newEmployee.append("phone_number", phone_number);

        updateEmployee(id, newEmployee);
    };

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Control
                        type="text"
                        placeholder="First Name *"
                        name="firstName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Control
                        type="text"
                        placeholder="Last Name *"
                        name="lastName"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                    />
                </Form.Group>

                <Form.Group controlId="formBasicSelect">
                    <Form.Control
                        as="select"
                        placeholder="Company"
                        value={company}
                        onChange={e => {
                            setCompany(e.target.value)
                        }}
                        required
                    >
                        <option>{theEmployees.company.name}</option>

                        <Optionsdata employees={employees}/>

                    </Form.Control>
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
                        type="number"
                        placeholder="Phone number *"
                        name="phone_number"
                        value={phone_number}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </Form.Group>
                <Button onClick={handleSubmit} variant="success" type="submit" block>
                    Edit Employee
                </Button>
            </Form>
        </div>
    )
}

export default EditEmployees;