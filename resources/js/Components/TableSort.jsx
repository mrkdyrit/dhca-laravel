import React, { useEffect, useState } from "react";
import { Button, Col, Form, InputGroup, Row, Table } from "react-bootstrap";

export default function TableSort({button, DataSource, Columns, Values, showAction = false, Actions}) {

    const [dataSet, setDataSet] = useState(DataSource)
    
    const [TableRows, setTableRows] = useState()

    useEffect(() => {
        // Checks if data set has contents
        if(dataSet.length != 0) {
            setTableRows(
                dataSet.map((data, index) => {
                    return (
                        <tr key={index + 1}>
                            <td>{index + 1}</td>
                            {
                                Values.map((key, i) => {
                                    return (
                                        <td key={i + 1}>{data[key]}</td>
                                    );
                                })
                            }
                            {showAction && (
                                <td>
                                    {   
                                        // View Button
                                        Actions.includes('view') && (
                                            <Button variant="outline-primary" className="action-btn mx-1">
                                                <i className="bi bi-eye"></i>
                                            </Button>
                                        )
                                    }

                                    {
                                        // Edit Button
                                        Actions.includes('edit') && (
                                            <Button variant="outline-primary" className="action-btn mx-1">
                                                <i className="bi bi-pencil"></i>
                                            </Button>
                                        )
                                    }

                                    {
                                        // Delete Button
                                        Actions.includes('delete') && (
                                            <Button variant="outline-primary" className="action-btn mx-1">
                                                <i className="bi bi-trash3"></i>
                                            </Button>
                                        )
                                    }
                                </td>
                            )}
                        </tr>
                    )
                })
            );
        } else {
            setTableRows(
                <tr>
                    <td className="text-center" colSpan={100}>
                        No Data Found
                    </td>
                </tr>
            )
        }
    }, [dataSet])

    function handleSearch(e) {
        setDataSet(DataSource.filter((O=>Object.keys(O).some(K=> String(O[K]).toLocaleLowerCase().includes(e.target.value.trim().toLocaleLowerCase())))))
    }

    return (
        <>
            <Row>
                <Col>
                </Col>
                <Col>
                    <Row>
                        <Col>
                            <InputGroup className="mb-3">
                                <Form.Control
                                    placeholder="Search"
                                    aria-label="Search"
                                    aria-describedby="search-table"
                                    onChange={handleSearch}
                                />
                                <InputGroup.Text id="search-table"><i className="bi bi-search"></i></InputGroup.Text>
                            </InputGroup>
                        </Col>
                        {
                            button && (
                                <Col sm="4" className="text-end">
                                    {button}
                                </Col>
                            )
                        }
                    </Row>
                </Col>
            </Row>
            <Table responsive>
                <thead>
                    <tr>
                        <td>#</td>
                        {
                            Columns.map((title, i) => {
                                return (
                                    <td key={i+1}>{title}</td>
                                )
                            })
                        }
                        {showAction && (
                            <td>Action</td>
                        )}
                    </tr>
                </thead>
                <tbody>
                    {TableRows}
                </tbody>
            </Table>
        </>
    )
}