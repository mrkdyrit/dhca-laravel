import React, { useState } from "react"
import { Toast } from "react-bootstrap"

export default function FlashToast({success, title, message}) {
    const isSuccess = success ? 'success' : 'failed'

    const [show, setShow] = useState(true)
    const toggle = () => setShow(!show)

    return (
        <Toast className={isSuccess} show={show} onClose={toggle} delay={3000} autohide>
            <Toast.Header>
                <strong className="me-auto text-capitalize"><i class="bi bi-info-circle"></i> {isSuccess}</strong>
            </Toast.Header>
            <Toast.Body>
                {message}
            </Toast.Body>
        </Toast>
    )
}