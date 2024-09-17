import React, { useState } from 'react';
import './StarRating.css'; // Optional: for styling

const sampleReviews = {
    1: [
        { name: 'Alice', image: 'path/to/image1.jpg', review: 'Not great, could be improved.' },
        { name: 'Bob', image: 'path/to/image2.jpg', review: 'Not satisfied with the service.' },
        { name: 'Carol', image: 'path/to/image3.jpg', review: 'Needs a lot of improvements.' },
        { name: 'Dave', image: 'path/to/image4.jpg', review: 'Disappointing experience.' },
        { name: 'Eve', image: 'female.webp', review: 'Very poor quality.' },
    ],
    2: [
        { name: 'Frank', image: 'path/to/image1.jpg', review: 'Fair but not impressive.' },
        { name: 'Grace', image: 'path/to/image2.jpg', review: 'Could use more enhancements.' },
        { name: 'Hank', image: 'path/to/image3.jpg', review: 'Service was okay, but room for improvement.' },
        { name: 'Ivy', image: 'path/to/image4.jpg', review: 'Not bad, but could be better.' },
        { name: 'Jack', image: 'path/to/image5.jpg', review: 'Not up to expectations.' },
    ],
    3: [
        { name: 'Kathy', image: 'path/to/image1.jpg', review: 'Good service, but not outstanding.' },
        { name: 'Leo', image: 'path/to/image2.jpg', review: 'Satisfied with the service.' },
        { name: 'Mona', image: 'path/to/image3.jpg', review: 'Service met my expectations.' },
        { name: 'Nina', image: 'path/to/image4.jpg', review: 'Good but with some minor issues.' },
        { name: 'Owen', image: 'path/to/image5.jpg', review: 'Overall a decent experience.' },
    ],
    4: [
        { name: 'Paul', image: 'path/to/image1.jpg', review: 'Very good service, would recommend.' },
        { name: 'Quinn', image: 'path/to/image2.jpg', review: 'Impressive experience.' },
        { name: 'Rita', image: 'path/to/image3.jpg', review: 'Highly satisfied with the service.' },
        { name: 'Sam', image: 'path/to/image4.jpg', review: 'Really enjoyed the service.' },
        { name: 'Tina', image: 'path/to/image5.jpg', review: 'Great, with just a few minor flaws.' },
    ],
    5: [
        { name: 'Ursula', image: 'path/to/image1.jpg', review: 'Excellent service, exceeded expectations!' },
        { name: 'Victor', image: 'path/to/image2.jpg', review: 'Fantastic experience, highly recommended!' },
        { name: 'Wendy', image: 'path/to/image3.jpg', review: 'Absolutely perfect, could not be better.' },
        { name: 'Xander', image: 'path/to/image4.jpg', review: 'Outstanding, will definitely come back.' },
        { name: 'Yara', image: 'path/to/image5.jpg', review: 'Exceptional service and quality!' },
    ],
};

const StarRating = () => {
    const [rating, setRating] = useState(1); // State to keep track of the selected rating

    // Function to handle star click
    const handleStarClick = (value) => {
        setRating(value);
    };

    // Function to render stars
    const renderStars = () => {
        return Array.from({ length: 5 }, (_, index) => {
            const starValue = index + 1;
            return (
                <span
                    key={starValue}
                    className={`star ${starValue <= rating ? 'filled' : ''}`}
                    onClick={() => handleStarClick(starValue)}
                >
                    &#9733;
                </span>
            );
        });
    };

    // Function to render review boxes
    const renderReviews = () => {
        return sampleReviews[rating]?.map((review, index) => (
            <div
                key={index}
                className="review-box"
                style={{
                    '--row-span': review.rowSpan || 1,
                    '--col-span': review.colSpan || 1,
                }}
            >
                <img src={review.image} alt={review.name} className="review-image" />
                <div className="review-content">
                    <p className="review-name">{review.name}</p>
                    <p className="review-text">{review.review}</p>
                </div>
            </div>
        ));
    };

    return (
        <div className="star-rating">
            <div className="stars">
                {renderStars()}
            </div>
            <div className="review-container">
                {rating > 0 ? (
                    <div className="review-main">
                        <div className="review-grid">
                            {renderReviews()}
                        </div>
                    </div>
                ) : (
                    <p>Please select a rating to see reviews.</p>
                )}
            </div>
        </div>
    );
};

export default StarRating;