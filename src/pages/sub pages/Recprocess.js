import React, { useState } from 'react';
import './Recprocess.css'; // Ensure this CSS file is created and updated

const Overview = () => {
    const [columns, setColumns] = useState({
        underReview: ['User 1 - Details', 'User 2 - Details', 'User 3 - Details'],
        interviewing: ['User 4 - Details', 'User 5 - Details', 'User 6 - Details'],
        hired: ['User 7 - Details', 'User 8 - Details'],
    });

    const handleDragStart = (e, card) => {
        e.dataTransfer.setData('text/plain', card);
    };

    const handleDrop = (e, columnKey) => {
        const card = e.dataTransfer.getData('text/plain');
        setColumns(prevColumns => {
            const newColumns = { ...prevColumns };
            for (const key in newColumns) {
                if (newColumns[key].includes(card)) {
                    newColumns[key] = newColumns[key].filter(c => c !== card);
                }
            }
            newColumns[columnKey].push(card);
            return newColumns;
        });
        e.preventDefault();
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    return (
        <div className="overview-container">
            <h2 className="overview-title">Overview</h2>
            <div className="columns">
                <div className="column" onDrop={(e) => handleDrop(e, 'underReview')} onDragOver={handleDragOver}>
                    <h3>Under Review</h3>
                    {columns.underReview.map((card, index) => (
                        <div
                            key={index}
                            className="recard"
                            draggable
                            onDragStart={(e) => handleDragStart(e, card)}
                        >
                            {card}
                        </div>
                    ))}
                </div>
                <div className="column" onDrop={(e) => handleDrop(e, 'interviewing')} onDragOver={handleDragOver}>
                    <h3>Interviewing</h3>
                    {columns.interviewing.map((card, index) => (
                        <div
                            key={index}
                            className="recard"
                            draggable
                            onDragStart={(e) => handleDragStart(e, card)}
                        >
                            {card}
                        </div>
                    ))}
                </div>
                <div className="column" onDrop={(e) => handleDrop(e, 'hired')} onDragOver={handleDragOver}>
                    <h3>Hired</h3>
                    {columns.hired.map((card, index) => (
                        <div
                            key={index}
                            className="recard"
                            draggable
                            onDragStart={(e) => handleDragStart(e, card)}
                        >
                            {card}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Overview;
