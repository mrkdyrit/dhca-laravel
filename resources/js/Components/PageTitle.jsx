import React from "react"
import { Breadcrumb } from "react-bootstrap"

export default function PageTitle({items}) {
    return (
        <div className="dhca-title-box fs-2 fw-bold text-uppercase mb-3">
            <Breadcrumb>
                {
                    items.map((item) => 
                        <Breadcrumb.Item href={item.url} key={item.title}>{item.title}</Breadcrumb.Item>
                    )
                }
            </Breadcrumb>
        </div>
    )
}