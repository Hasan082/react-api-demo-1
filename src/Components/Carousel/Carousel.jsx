import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Carousel.css'

import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
const Carousel = () => {
    
    
    const HeroSlides = [
        {
            name: 'Rekob Ramya',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
            img: 'https://i.ibb.co/jkYSNnF/slide-1.jpg'
        },
        {
            name: 'Brandon Savage',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
            img: 'https://i.ibb.co/5c7cmYc/slide-2.jpg'
        },
        {
            name: 'Steve Burns',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
            img: 'https://i.ibb.co/xYkPMYQ/slide-3.jpg'
        },
        {
            name: 'Steve Burns',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
            img: 'https://picsum.photos/id/20/1920/1080'
        },
        {
            name: 'Steve Burns',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
            img: 'https://picsum.photos/id/14/1920/1080'
        },
    ]

    return (
        <div>
            <Swiper
                cssMode={true}
                loop={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper"
            >

                {HeroSlides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="sliderWrapper relative">
                            <div className="imgwrap">
                                <img src={slide.img} alt={slide.name} />
                            </div>
                            <div className="text-center contentPart absolute max-w-[500px] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
                                <h2 className='text-[40px] mb-4'>{slide.name}</h2>
                                <p className='text-[18px]'>{slide.description}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}


            </Swiper>

        </div>
    );
};

export default Carousel;