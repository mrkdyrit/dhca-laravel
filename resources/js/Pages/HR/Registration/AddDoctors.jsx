import { Head, useForm } from "@inertiajs/react";
import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import Swal from "sweetalert2";
import PageTitle from "../../../Components/PageTitle";
import SectionTitle from "../../../Components/SectionTitle";
import HRLayout from "../../../Layouts/HRLayout";

export default function AddDoctors() {
    // Form inputs
    const { data, setData, post, reset } = useForm({});


    function onSubmit(e) {
        e.preventDefault();
        
        //Validate input
        post(route("hr.doctors.validate"), {
            data: data,
            // Only submit form when no errors are found
            onSuccess: () => {
                // Show Confirm dialog
                Swal.fire({
                    title: 'CONFIRMATION',
                    html: 'Add <b>' + data.first_name + ' ' + data.last_name +'</b>?',
                    customClass: {
                        popup: 'rounded-0',
                        title: 'text-start fw-bold fs-2 mx-4 px-0',
                        confirmButton: 'btn btn-primary ms-3',
                        cancelButton: 'btn btn-outline-primary',
                        focusConfirm: false,
                        htmlContainer: 'fs-5 my-5 py-5',
                        actions: 'mt-0 pe-4'
                    },
                    reverseButtons: true,
                    buttonsStyling: false,
                    confirmButtonText: 'Add',
                    showCancelButton: true,
                    width: 600,
                }).then((result) => {
                    if(result.isConfirmed) {
                        // Submit form only if user confirms
                        post(route("hr.doctors.store"), {
                            data: data,
                
                            // Clear inputs on successful submits also clears data
                            onSuccess: () => {e.target.reset(), reset()}
                        })
                    } else {
                        // Cancel submission
                        e.preventDefault
                    }
                })
            }
        });
    }

    return (    
        <>
            <Head title="Add Doctors" />
            <HRLayout>
                <PageTitle
                    items={[
                        {
                            title: "Doctors List",
                            url: route("hr.doctors.list"),
                        },
                        {
                            title: "Add Doctors",
                            url: route("hr.doctors.add"),
                        },
                    ]}/>

                <div className="dhca-container">
                    <div className="px-lg-5 mx-lg-5 py-3">
                        <form onSubmit={onSubmit}>

                            <SectionTitle title="Doctor's Name" />
                            <Row className="row-cols-1 row-cols-md-3 mb-5">
                                <Col>
                                    <Form.Control
                                        onChange={(e) =>
                                            setData(
                                                "first_name",
                                                e.target.value
                                            )
                                        }
                                    />
                                    <Form.Label className="text-muted ps-2 pt-1 fw-light">
                                        First Name
                                    </Form.Label>
                                </Col>
                                <Col>
                                    <Form.Control
                                        onChange={(e) =>
                                            setData(
                                                "middle_name",
                                                e.target.value
                                            )
                                        }
                                    />
                                    <Form.Label className="text-muted ps-2 pt-1 fw-light">
                                        Middle Name
                                    </Form.Label>
                                </Col>
                                <Col>
                                    <Form.Control
                                        onChange={(e) =>
                                            setData("last_name", e.target.value)
                                        }
                                    />
                                    <Form.Label className="text-muted ps-2 pt-1 fw-light">
                                        Last Name
                                    </Form.Label>
                                </Col>
                            </Row>

                            <SectionTitle title="Contact Information" />
                            <Row className="row-cols-1 row-cols-md-3 mb-5">
                                <Col>
                                    <Form.Control
                                        onChange={(e) =>
                                            setData(
                                                "contact_number",
                                                e.target.value
                                            )
                                        }
                                    />
                                    <Form.Label className="text-muted ps-2 pt-1 fw-light">
                                        Contact Number
                                    </Form.Label>
                                </Col>
                                <Col>
                                    <Form.Control
                                        type="text"
                                        onChange={(e) =>
                                            setData("email", e.target.value)
                                        }
                                    />
                                    <Form.Label className="text-muted ps-2 pt-1 fw-light">
                                        Email Address
                                    </Form.Label>
                                </Col>
                                <Col></Col>
                            </Row>

                            <SectionTitle title="Professional Information" />
                            <Row className="row-cols-1 row-cols-md-3 mb-5">
                                <Col>
                                    <Form.Control
                                        onChange={(e) =>
                                            setData(
                                                "medical_field",
                                                e.target.value
                                            )
                                        }
                                    />
                                    <Form.Label className="text-muted ps-2 pt-1 fw-light">
                                        Medical Field
                                    </Form.Label>
                                </Col>
                                <Col>
                                    <Form.Control
                                        onChange={(e) =>
                                            setData("id_number", e.target.value)
                                        }
                                    />
                                    <Form.Label className="text-muted ps-2 pt-1 fw-light">
                                        ID Number
                                    </Form.Label>
                                </Col>
                                <Col></Col>
                            </Row>

                            <SectionTitle title="Account Information" />
                            <Row className="row-cols-1 row-cols-md-3 mb-5">
                                <Col>
                                    <Form.Control
                                        onChange={(e) =>
                                            setData("username", e.target.value)
                                        }
                                    />
                                    <Form.Label className="text-muted ps-2 pt-1 fw-light">
                                        Username
                                    </Form.Label>
                                </Col>
                                <Col>
                                    <Form.Control
                                        type="password"
                                        onChange={(e) =>
                                            setData("password", e.target.value)
                                        }
                                    />
                                    <Form.Label className="text-muted ps-2 pt-1 fw-light">
                                        Password
                                    </Form.Label>
                                </Col>
                                <Col>
                                    <Form.Control
                                        type="password"
                                        onChange={(e) =>
                                            setData(
                                                "password_confirmation",
                                                e.target.value
                                            )
                                        }
                                    />
                                    <Form.Label className="text-muted ps-2 pt-1 fw-light">
                                        Confirm Password
                                    </Form.Label>
                                </Col>
                            </Row>

                            <div className="text-end mt-5 pt-5">
                                <Button variant="primary" type="submit">
                                    Add Doctor
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </HRLayout>
        </>
    );
}
