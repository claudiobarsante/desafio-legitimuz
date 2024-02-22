import React from 'react';
import { Message } from '../Chatbot';
import Recebida from './Recebida';
import Enviada from './Enviada';

type ChatMessageProps = {
	imagePath?: string;
} & Message;
function ChatMessage({ content, type, imagePath = '' }: ChatMessageProps) {
	const MESSAGE = {
		Recebida: <Recebida content={content} />,
		Enviada: <Enviada content={content} imagePath={imagePath} />,
	};

	return MESSAGE[type];
}

export default ChatMessage;
