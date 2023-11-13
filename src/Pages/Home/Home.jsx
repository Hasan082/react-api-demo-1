import React, { useContext, useEffect } from 'react';
import { MyContext } from '../../Provider/MyProvider';
import Carousel from '../../Components/Carousel/Carousel';


const Home = () => {
    const { loader, setLoader } = useContext(MyContext);
    useEffect(()=>{
        setTimeout(() => {
            setLoader(false)
        }, 500);
    }, [])
    return (
        <div className='w-full max-w-[1200px] m-auto homepage homewrapper'>
            <Carousel />
        </div>
    );
};

export default Home;