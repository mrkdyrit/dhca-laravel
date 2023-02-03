import { Head, usePage } from "@inertiajs/react";
import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import PageTitle from "../../Components/PageTitle";
import TableSort from "../../Components/TableSort";
import HRLayout from "../../Layouts/HRLayout";

export default function DoctorList() {
    // Get Doctor List
    const { doctors } = usePage().props

    return (
        <>
            <Head title="Doctor List" />
            <HRLayout>
                <PageTitle
                    items={[
                        {
                            title: "Doctors List",
                            url: route("hr.doctors.list"),
                        }
                    ]}/>
                <div className="dhca-container">
                    <TableSort 
                        button={<a href={route('hr.doctors.add')}><Button variant="primary">Add Doctor</Button></a>}
                        DataSource={doctors}
                        Columns={['First Name', 'Middle Name', 'Last Name']}
                        Values={['doctor_fname', 'doctor_middle', 'doctor_lname']}
                        showAction={true}
                        Actions={['view', 'edit', 'delete']}
                    /> 
                </div>
            </HRLayout>
        </>
    )
}