'use client';
import { useState } from 'react';
import Chatbot from './components/Chatbot';
import SelectUser from './components/SelectUser';

export default function Home() {
	const [selectedOption, setSelectedOption] = useState('');

	const handleUserChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setSelectedOption(event.target.value);
	};

	return (
		<div className='flex flex-col gap-2'>
			<Chatbot />
			<SelectUser selectedUser={selectedOption} handleUserChange={handleUserChange} />
		</div>
	);
}
