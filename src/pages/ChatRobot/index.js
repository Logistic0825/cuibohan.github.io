"use client"
import { ChatAPI } from '@/apis';
import { request } from '@/utils/request';
import React, { useState } from 'react';

const ChatRobot = () => {
    const [messages, setMessages] = useState([]);
    const [inputMessage, setInputMessage] = useState('');

    const handleSendMessage = async () => {
        if (inputMessage.trim() === '') return;

        // 添加用户消息到消息列表
        const newUserMessage = { role: 'user', content: inputMessage };
        setMessages(prevMessages => [...prevMessages, newUserMessage]);
        setInputMessage('');

        try {
            // const response = await fetch('http://127.0.0.1:5000/chat', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json'
            //     },
            //     body: JSON.stringify({ message: inputMessage })
            // });
            const response = await ChatAPI(inputMessage)

            const data = response;
            // 添加机器人回复到消息列表
            const newBotMessage = { role: 'bot', content: data.response };
            setMessages(prevMessages => [...prevMessages, newBotMessage]);
        } catch (error) {
            console.error('请求出错:', error);
        }
    };

    return (
        <div className="bg-gray-100 flex flex-col items-center justify-center p-4">
            <div className='text-4xl font-bold text-center text-gray-800 mb-6'>金牌聊天机</div>
            <div id="chat-box" className="bg-white border border-gray-300 rounded-lg h-96 w-full max-w-screen-md overflow-y-auto p-4 mb-4">
                {messages.map((message, index) => (
                    <p
                        key={index}
                        className={`${message.role === 'user' ? 'bg-blue-100 self-end' : 'bg-gray-100 self-start'} p-2 rounded mb-2 max-w`}
                    >
                        {message.role === 'user' ? '你: ' : '机器人: '}{message.content}
                    </p>
                ))}
            </div>
            <div id="input-box" className="flex w-full max-w-md">
                <input
                    type="text"
                    id="message-input"
                    placeholder="输入你的消息"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    className="flex-1 border border-gray-300 rounded-l-lg p-2 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                />
                <button
                    id="send-button"
                    onClick={handleSendMessage}
                    className="bg-black text-white px-4 py-2 rounded-r-lg hover:bg-purple-700 focus:outline-none focus:ring-purple-500"
                >
                    发送
                </button>
            </div>
        </div>
    );
};

export default ChatRobot