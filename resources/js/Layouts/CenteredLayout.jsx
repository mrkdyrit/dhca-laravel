import React from 'react';
import ValidationToastContainer from "../Components/ValidationToastContainer";

const CenteredLayout = ({children}) => {

    return (
        <>
            <div className="d-flex w-100 h-100">
                <div className="mx-auto my-auto">
                    {children}
                </div>
            </div>
        </>
    )
}

export default CenteredLayout