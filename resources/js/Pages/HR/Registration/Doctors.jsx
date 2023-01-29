import { Head, useForm, usePage } from "@inertiajs/react";
import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import PageTitle from "../../../Components/PageTitle";
import SectionTitle from "../../../Components/SectionTitle";
import HRLayout from "../../../Layouts/HRLayout";

export default function AddDoctors(props) {
    const { data, setData, post } = useForm({})

    const { errors } = usePage().props
    const { flash } = usePage().props

    function onSubmit(e) {
        e.preventDefault()
        post(route('hr.doctors.store'), data)
    }

    return (
        <>
            <Head title="Add Doctors" />
            <HRLayout
                appName={props.appName}
                auth={props.auth}
                errors={errors}
                flash={flash}
                user_type={props.user_type}
            >
                <PageTitle
                    items={[
                        {
                            title: "Doctors List",
                            url: route("hr.doctors.list"),
                        },
                        {
                            title: "Add Doctors",
                            url: route("hr.doctors.add"),
                        }
                    ]}
                />

                <div className="dhca-container">
                    <div className="px-lg-5 mx-lg-5 py-3">
                        <form onSubmit={onSubmit}>
                            <SectionTitle title="Doctor's Name" />
                            <Row className="row-cols-1 row-cols-md-3 mb-5">
                                <Col>
                                    <Form.Control onChange={e => setData('first_name', e.target.value)}/>
                                    <Form.Label className="text-muted ps-2 pt-1 fw-light">First Name</Form.Label>
                                </Col>
                                <Col>
                                    <Form.Control onChange={e => setData('middle_name', e.target.value)}/>
                                    <Form.Label className="text-muted ps-2 pt-1 fw-light">Middle Name</Form.Label>
                                </Col>
                                <Col>
                                    <Form.Control onChange={e => setData('last_name', e.target.value)}/>
                                    <Form.Label className="text-muted ps-2 pt-1 fw-light">Last Name</Form.Label>
                                </Col>
                            </Row>

                            <SectionTitle title="Contact Information" />
                            <Row className="row-cols-1 row-cols-md-3 mb-5">
                                <Col>
                                    <Form.Control onChange={e => setData('contact_number', e.target.value)} />
                                    <Form.Label className="text-muted ps-2 pt-1 fw-light">Contact Number</Form.Label>
                                </Col>
                                <Col>
                                    <Form.Control type="email" onChange={e => setData('email', e.target.value)}  />
                                    <Form.Label className="text-muted ps-2 pt-1 fw-light">Email Address</Form.Label>
                                </Col>
                                <Col>
                                </Col>
                            </Row>

                            <SectionTitle title="Professional Information" />
                            <Row className="row-cols-1 row-cols-md-3 mb-5">
                                <Col>
                                    <Form.Control onChange={e => setData('medical_field', e.target.value)} />
                                    <Form.Label className="text-muted ps-2 pt-1 fw-light">Medical Field</Form.Label>
                                </Col>
                                <Col>
                                    <Form.Control onChange={e => setData('id_number', e.target.value)} />
                                    <Form.Label className="text-muted ps-2 pt-1 fw-light">ID Number</Form.Label>
                                </Col>
                                <Col>
                                    
                                </Col>
                            </Row>

                            <div className="text-end mt-5 pt-5">
                                <Button
                                    variant="primary"
                                    type="submit">Add Doctor</Button>
                            </div>
                        </form>
                    </div>
                </div>  
            </HRLayout>
        </>
    );
}
