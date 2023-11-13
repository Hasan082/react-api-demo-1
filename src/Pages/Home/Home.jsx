import React, { useContext, useEffect } from 'react';
import { MyContext } from '../../Provider/MyProvider';

const Home = () => {
    const { loader, setLoader } = useContext(MyContext);
    useEffect(()=>{
        setTimeout(() => {
            setLoader(false)
        }, 2000);
    }, [])
    return (
        <div className='w-full max-w-[1200px] m-auto homepage homewrapper'>
            
        </div>
    );
};

export default Home;