import { useContext, useEffect } from "react";
import Hero from "./Hero";
import { MyContext } from "../../Provider/MyProvider";

const About = () => {
    const { loader, setLoader } = useContext(MyContext);
    useEffect(()=>{
        setTimeout(() => {
            setLoader(false)
        }, 2000);
    }, [])
    return (
        <div className="w-full max-w-[1200px] m-auto">
            <Hero />
        </div>
    );
};

export default About;