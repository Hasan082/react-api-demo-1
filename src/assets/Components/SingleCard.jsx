import React from 'react';

const SingleCard = ({ cardData }) => {
    const { id, title, body } = cardData
    return (
        <div className="single-card text-center bg-white rounded-lg shadow-md border shadow-gray-200 p-5 transition-transform transform hover:scale-105 hover:shadow-lg cursor-pointer transition-duration-500">
            <span className="bg-blue-500 text-white text-sm rounded-full w-8 h-8 text-center inline-flex items-center justify-center">{id}</span>
            <h1 className="text-xl font-semibold mt-2">{title}</h1>
            <p className="text-gray-600 mt-2">{body}</p>
        </div>
    );
};

export default SingleCard;