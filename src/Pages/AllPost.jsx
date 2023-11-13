import axios from "axios";
import { useEffect, useState, useContext } from "react";
import SingleCard from "../Components/SingleCard";
import { MyContext } from "../Provider/MyProvider";



const AllPost = () => {
    const [posts, setPosts] = useState([]);
    const { loader, setLoader } = useContext(MyContext);
    
    useEffect(() => {
        setLoader(true)
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then((response) => {
                setPosts(response.data);
                setTimeout(() => {
                    setLoader(false)
                }, 2000);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                setLoader(false)
            });
    }, []);
    
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
