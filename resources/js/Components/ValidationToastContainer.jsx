import { usePage } from "@inertiajs/react";
import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

import 'react-toastify/dist/ReactToastify.css';
// import { ToastContainer } from "react-bootstrap";
// import ValidationErrorToast from "./ValidationErrorToast";
// import FlashToast from "./FlashToast";

export default function ValidationToastContainer() {
    const { errors } = usePage().props

    // Watch for any errors thrown from the backend
    useEffect(() => {
        // Show error toast
        Object.keys(errors).length != 0 && Object.keys(errors).map((key) => (
            toast.error(errors[key], {
                toastId: key
            })
        ))        
    }, [errors])
    
    return  (
        <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable={false}
            pauseOnHover
            theme="light"/>
    )
}