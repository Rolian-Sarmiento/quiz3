import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Content.css';

const images = require.context('../images/contentimg', true);

export default function Content({ item, big, featured }) {
    const imgSrc = images(`./${item.id}.png`);
    const category = item.type.charAt(0).toUpperCase() + item.type.slice(1);

    if (featured) {
        const cardBody = (
            <Card style={{ display: "flex", flexDirection: "row", marginBottom: "1rem", height: "auto", }} className="featured-card">
                <div style={{ flex: "0 0 40%" }}>
                    <Card.Img
                        src={imgSrc}
                        alt={item.name}
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            maxHeight: "100%",
                        }}
                    />
                </div>

                <Card.Body style={{ flex: "1", padding: "1.5rem", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <div style={{ fontSize: "1rem", fontWeight: "bold", color: "#800000ff", marginBottom: "0.5rem" }}>
                        {category}
                    </div>
                    <Card.Title style={{ fontSize: "3rem", fontWeight: "bold" }}>
                        {item.name}
                    </Card.Title>
                </Card.Body>
            </Card>
        );

        if (item.type === "staff") return cardBody;

        return (
            <Link to={`/content/${item.id}`} style={{ textDecoration: "none", color: "inherit" }}>
                {cardBody}
            </Link>
        );
    }

    const cardContent = (
        <Card className="h-100 d-flex flex-column" style={{
            width: big ? "100%" : "18rem",
            border: big ? "2px solid #ccc" : "",
        }}>
            <Card.Img
                variant="top"
                src={imgSrc}
                alt={item.name}
                style={big ? { height: "350px", objectFit: "cover" } : { objectFit: "cover" }}
            />
            <Card.Body className="d-flex flex-column flex-fill">
                <div style={{ fontSize: "1rem", fontWeight: "bold", color: "#800000ff", marginBottom: "0.5rem" }}>
                    {category}
                </div>
                <Card.Title style={{ fontWeight: "bold" }}>
                    {item.name}
                </Card.Title>
                <div className="mt-auto"></div>
            </Card.Body>
        </Card>
    );

    if (item.type === "staff") return cardContent;

    return (
        <Link to={`/content/${item.id}`} style={{ textDecoration: "none", color: "inherit" }}>
            {cardContent}
        </Link>
    );
}
