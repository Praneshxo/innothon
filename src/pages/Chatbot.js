// src/Chatbot.js
import React, { useState } from 'react';
import axios from 'axios';
import './Chatbot.css'; // Import the CSS file

const Chatbot = () => {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);

    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    const handleSendMessage = async () => {
        const userMessage = { message: input };
        setMessages([...messages, { text: input, sender: 'user' }]);
        setInput('');

        try {
            const response = await axios.post('http://localhost:5000/chat', userMessage);
            setMessages([...messages, { text: input, sender: 'user' }, { text: response.data.response, sender: 'bot' }]);
        } catch (error) {
            console.error("Error sending message:", error);
        }
    };

    return (
        <div className="chatbot-container">
            <div className="messages">
                {messages.map((msg, index) => (
                    <div key={index} className={msg.sender}>
                        {msg.text}
                    </div>
                ))}
            </div>
            <input
                type="text"
                value={input}
                onChange={handleInputChange}
                placeholder="Type a message..."
            />
            <button onClick={handleSendMessage}>Send</button>
        </div>
    );
};

export default Chatbot;