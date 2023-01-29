import { Head } from "@inertiajs/react";
import React from "react";
import HRLayout from "../../Layouts/HRLayout";

export default function DoctorList(props) {
    return (
        <>
            <Head title="Doctor List" />
            <HRLayout
                appName={props.appName}
                auth={props.auth}
                errors={props.errors}
                flash={props.flash}
                user_type={props.user_type}>
                
            </HRLayout>
        </>
    )
}