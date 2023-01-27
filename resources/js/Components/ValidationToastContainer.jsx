import { usePage } from "@inertiajs/inertia-react";
import React from "react";
import { Toast, ToastContainer } from "react-bootstrap";
import ValidationErrorToast from "./ValidationErrorToast";
import FlashToast from "./FlashToast";

export default function ValidationToastContainer({errors, flash}) {

    return  (
        <ToastContainer
            className="p-3"
            position="top-end">
                {
                    Object.keys(errors).length != 0 && Object.entries(errors).map(([key, value]) => (
                        <ValidationErrorToast title={key} message={value} />
                    ))
                }

                { flash.success &&
                    <FlashToast success={flash.success} message={flash.message} />
                }
        </ToastContainer>
    )
}