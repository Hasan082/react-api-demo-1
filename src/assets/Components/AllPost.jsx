import axios from "axios";
import { useEffect, useState } from "react";
import Spinner from "./Spinner";
import SingleCard from "./SingleCard";


const AllPost = () => {
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
                    {posts.map((cardData) => (
                       <SingleCard key={cardData.id} cardData={cardData}/>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AllPost;
