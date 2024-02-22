'use client';
import { FormEvent, useState } from 'react';
import Chatbot, { Message } from './components/Chatbot';
import SelectUser from './components/SelectUser';
import Form from './components/Form';

const INITIAL_MESSAGES: Message[] = [
	{
		content: 'Esse aqui é um exemplo de Chatbot, aqui onde você inciará o seu teste.',
		type: 'Recebida',
	},
	{ content: 'Siga as instruções detalhadas no Notion oficial e boa sorte!', type: 'Recebida' },
];
export default function Home() {
	const [selectedOption, setSelectedOption] = useState('');
	const [selectedUser, setSelectedUser] = useState('');
	const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
	const [userMessage, setUserMessage] = useState('');

	const handleUserChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const index = event.target.selectedIndex;
		const selectedOptionText = (event.target.options[index] as HTMLOptionElement).text;

		setSelectedUser(selectedOptionText);
		setSelectedOption(event.target.value);
		setMessages(INITIAL_MESSAGES);
	};

	const handleReset = () => {
		setSelectedOption('');
		setSelectedUser('');
		setMessages(INITIAL_MESSAGES);
	};

	const handleTypedMessage = (event: React.ChangeEvent<HTMLInputElement>) => {
		setUserMessage(event.target.value);
	};
	const USER_IMAGE: Record<string, string> = {
		'User 1': '/logo.png',
		'User 2': '/logo2.png',
		'User 3': '/logo3.png',
		'': '',
	};

	const handleFormSubmit = () => {
		if (userMessage === '' || selectedOption === '') return;

		setMessages([...messages, { content: userMessage, type: 'Enviada' }]);
		setUserMessage('');
	};

	return (
		<>
			<main className='flex flex-col w-full max-w-sm border border-gray-200 rounded-lg overflow-hidden'>
				<Chatbot username={selectedUser} imagePath={USER_IMAGE[selectedUser]} messages={messages} />
				<Form
					message={userMessage}
					handleTypedMessage={handleTypedMessage}
					handleFormSubmit={handleFormSubmit}
				/>
			</main>
			<footer className='px-4 flex flex-col gap-4 mt-4'>
				<SelectUser selectedUser={selectedOption} handleUserChange={handleUserChange} />
				<button
					type='button'
					className='w-20 rounded-lg border  border-zinc-300 px-4 py-2.5 text-sm font-semibold text-zinc-700 shadow-sm hover:bg-zinc-50'
					onClick={handleReset}
				>
					Resetar
				</button>
			</footer>
		</>
	);
}
