import React from "react";
import contents from "../contents";
import Content from "../components/Content";
import { Container, Row, Col } from "react-bootstrap";

export default function Services() {
    const service = contents.filter(item => item.type === "service");

    return (
        <Container className="mt-4">
            <h3 className="mb-3" style={{ fontWeight: "bold", color: "#800000ff", borderBottom: "2px solid #800000ff", paddingBottom: "5px" }}>
                Service</h3>
            <Row>
                {service.map(item => (
                    <Col key={item.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
                        <Content item={item} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}
