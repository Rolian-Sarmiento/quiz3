import React from "react";
import contents from "../contents";
import Content from "../components/Content";
import { Container, Row, Col } from "react-bootstrap";

export default function HomeScreen() {
    const featured = contents[0];
    const others = contents.slice(1);

    return (
        <Container className="mt-3">
            <h2
                className="mb-3"
                style={{
                    fontWeight: "bold",
                    color: "#000000ff",
                    borderBottom: "2px solid #000000ff",
                    paddingBottom: "5px",
                    fontSize: "1.25rem",
                }}
            >
            </h2>
            <Row className="more-stories-row g-3">
                {others.map((item) => (
                    <Col
                        key={item.id}
                        xs={12}
                        sm={6}
                        md={4}
                        lg={3}
                        className="d-flex align-items-stretch"
                    >
                        <Content item={item} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}
