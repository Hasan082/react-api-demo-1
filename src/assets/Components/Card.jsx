import axios from "axios";
import { useEffect, useState } from "react";
import Spinner from "./Spinner";


const Card = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then((response) => {
                setPosts(response.data);
                setTimeout(() => {
                    setLoading(false);
                }, 2500)
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                setLoading(false);
            });
    }, []);
    
    if (loading) {
        return <Spinner />
    }
    return (
        <div className="siteWrap mb-7">
            <div className="heading text-center my-10 py-5">
                <h1 className="text-5xl">All Post</h1>
            </div>
            <div className="w-full max-w-[1200px] m-auto">

                <div className="postWrapper grid grid-cols-3 gap-8">
                    {posts.map((post) => (
                        <div className="single-card text-center bg-white rounded-lg shadow-md border shadow-gray-200 p-5 transition-transform transform hover:scale-105 hover:shadow-lg cursor-pointer transition-duration-500" key={post.id}>
                            <span className="bg-blue-500 text-white text-sm rounded-full w-8 h-8 text-center inline-flex items-center justify-center">{post.id}</span>
                            <h1 className="text-xl font-semibold mt-2">{post.title}</h1>
                            <p className="text-gray-600 mt-2">{post.body}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Card;
