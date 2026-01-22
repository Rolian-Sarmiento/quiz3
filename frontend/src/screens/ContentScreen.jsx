import { useParams } from "react-router-dom";
import contents from "../contents";

const images = require.context('../images/contentimg', true);

export default function ContentScreen() {
    const { id } = useParams();
    const item = contents.find(c => c.id === Number(id));

    if (!item) return <h2>Content is not found</h2>;

    const imgSrc = images(`./${item.id}.png`);

    return (
        <div style={{ padding: "20px", maxWidth: "800px", margin: "auto" }}>
            <img
                src={imgSrc}
                alt={item.name}
                style={{ width: "100%", height: "350px", objectFit: "cover", borderRadius: "10px" }}
            />
            <h1 style={{ fontWeight: "bold", marginTop: "20px" }}>{item.name}</h1>
            <p style={{ marginTop: "15px", lineHeight: "1.6", fontSize: "18px" }}>
                {item.description}
            </p>
        </div>
    );
}
