import React, { useState, useEffect } from "react";
import axios from "axios";

const Chatbot = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const [isListening, setIsListening] = useState(false);

    // Initialize Speech Recognition API
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = "en-US";

    // Start listening
    const startListening = () => {
        setIsListening(true);
        recognition.start();
    };

    // Stop listening and process result
    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setInput(transcript);
        sendMessage(transcript);
    };

    recognition.onend = () => {
        setIsListening(false);
    };

    recognition.onerror = (event) => {
        console.error("Speech recognition error:", event.error);
        setIsListening(false);
    };

    const sendMessage = async (message = input) => {
        if (!message.trim()) return;

        setMessages((prevMessages) => [...prevMessages, { text: message, sender: "user" }]);
        setInput("");

        try {
            const response = await axios.post("http://localhost:5001/chat", { message });
            const botReply = response.data.reply;

            setMessages((prevMessages) => [...prevMessages, { text: botReply, sender: "bot" }]);
        } catch (error) {
            setMessages((prevMessages) => [...prevMessages, { text: "Error communicating with the server.", sender: "bot" }]);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            sendMessage();
        }
    };

    return (
        <div className="w-full max-w-md mx-auto p-4 bg-white shadow-lg rounded-lg">
            <h2 className="text-xl font-bold mb-3 text-center">Chat Assistant</h2>
            
            <div className="h-80 overflow-y-auto mb-4 p-3 border border-gray-300 rounded-lg">
                {messages.length === 0 ? (
                    <div className="text-gray-400 text-center py-10">Start a conversation...</div>
                ) : (
                    <div className="flex flex-col space-y-3">
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                className={`p-3 rounded-lg max-w-[75%] break-words ${
                                    msg.sender === "user"
                                        ? "bg-blue-500 text-white self-end ml-auto"
                                        : "bg-gray-200 text-black self-start"
                                }`}
                            >
                                {msg.text}
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <div className="flex items-center gap-2">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyPress}
                    placeholder="Type a message..."
                    className="flex-1 px-3 py-2 text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button
                    onClick={sendMessage}
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                >
                    Send
                </button>
                <button
                    onClick={startListening}
                    className={`p-2 rounded-full transition ${
                        isListening ? "bg-red-500" : "bg-gray-300"
                    }`}
                    title="Click to Speak"
                >
                    🎤
                </button>
            </div>
        </div>
    );
};

export default Chatbot;
