import React from 'react';
import Image from 'next/image';
import Header, { HeaderProps } from './Header';
import Form from '../Form';
import ChatMessage from '../ChatMessage';
export type Message = {
	content: string;
	type: 'Recebida' | 'Enviada';
};
type ChatbotProps = { messages: Message[] } & HeaderProps;
function Chatbot({ username, imagePath, messages }: ChatbotProps) {
	return (
		<>
			<Header username={username} imagePath={imagePath} />
			<div className='flex flex-col p-4 overflow-hidden'>
				{messages.length > 0 &&
					messages.map((message, index) => (
						<ChatMessage
							key={index}
							content={message.content}
							type={message.type}
							imagePath={imagePath}
						/>
					))}
			</div>
		</>
	);
}

export default Chatbot;
