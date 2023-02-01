import { Head } from "@inertiajs/react";
import React from "react";
import { Button } from "react-bootstrap";
import PageTitle from "../../Components/PageTitle";
import TableSort from "../../Components/TableSort";
import HRLayout from "../../Layouts/HRLayout";

export default function HRList(props) {
    return (
        <>
            <Head title="HR List" />
            <HRLayout>
                <PageTitle
                    items={[
                        {
                            title: "HR List",
                            url: route("hr.hr.list"),
                        }
                    ]}/>
                <div className="dhca-container">
                    <TableSort 
                        button={<Button variant="primary">Add HR</Button>}
                        DataSource={props.hr}
                        Columns={['First Name', 'Middle Name', 'Last Name']}
                        Values={['hr_fname', 'hr_middle', 'hr_lname']}
                    /> 
                </div>
            </HRLayout>
        </>
    )
}