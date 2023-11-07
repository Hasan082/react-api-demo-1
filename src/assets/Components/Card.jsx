import axios from "axios";
import { useEffect, useState } from "react";

const Card = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then((response) => {
                setPosts(response.data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    return (
        <div>
            <div className="postWrapper">
                {posts.map((post) => (
                    <div className="single-card" key={post.id}>
                        <span>{post.id}</span>
                        <h1>{post.title}</h1>
                        <p>{post.body}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Card;
