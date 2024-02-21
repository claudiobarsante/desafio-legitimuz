'use client';
import { useState } from 'react';
import Chatbot from './components/Chatbot';
import SelectUser from './components/SelectUser';

export default function Home() {
	const [selectedOption, setSelectedOption] = useState('');

	const handleUserChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const index = event.target.selectedIndex;
		const selectedOptionText = (event.target.options[index] as HTMLOptionElement).text;

		setSelectedOption(selectedOptionText);
	};

	const handleReset = () => {
		setSelectedOption('');
	};
	const USER_IMAGE: Record<string, string> = {
		'User 1': '/logo.png',
		'User 2': '/logo2.png',
		'User 3': '/logo3.png',
		'': '',
	};

	return (
		<div className='flex flex-col gap-2'>
			<Chatbot username={selectedOption} imagePath={USER_IMAGE[selectedOption]} />
			<SelectUser selectedUser={selectedOption} handleUserChange={handleUserChange} />
			<button
				type='button'
				className='w-20 rounded-lg border  border-zinc-300 px-4 py-2.5 text-sm font-semibold text-zinc-700 shadow-sm hover:bg-zinc-50'
				onClick={handleReset}
			>
				Resetar
			</button>
		</div>
	);
}
