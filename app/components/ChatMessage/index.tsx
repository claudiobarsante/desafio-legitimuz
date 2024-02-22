import React from 'react';
import { Message } from '../Chatbot';
import Recebida from './Recebida';
import Enviada from './Enviada';

type ChatMessageProps = {
	imagePath?: string;
} & Message;

type MessageType = {
	[type: string]: React.JSX.Element;
};
function ChatMessage({ content, type, imagePath = '' }: ChatMessageProps) {
	const MESSAGE: MessageType = {
		Recebida: <Recebida content={content} />,
		Enviada: <Enviada content={content} imagePath={imagePath} />,
	};

	return MESSAGE[type];
}

export default ChatMessage;
