import { Head } from "@inertiajs/react";
import React from "react";
import { Button } from "react-bootstrap";
import PageTitle from "../../Components/PageTitle";
import TableSort from "../../Components/TableSort";
import HRLayout from "../../Layouts/HRLayout";

export default function DoctorList(props) {
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
                        DataSource={props.doctors}
                        Columns={['First Name', 'Middle Name', 'Last Name']}
                        Values={['doctor_fname', 'doctor_middle', 'doctor_lname']}
                    /> 
                </div>
            </HRLayout>
        </>
    )
}