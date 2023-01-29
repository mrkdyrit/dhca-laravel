import { Head } from "@inertiajs/react";
import React from "react";
import PageTitle from "../../Components/PageTitle";
import TableSort from "../../Components/TableSort";
import HRLayout from "../../Layouts/HRLayout";

export default function DoctorList() {
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
                    <TableSort />
                </div>
            </HRLayout>
        </>
    )
}