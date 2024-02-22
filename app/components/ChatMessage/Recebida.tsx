import React from 'react';

type RecebidaProps = { content: string };

function Recebida({ content }: RecebidaProps) {
	return (
		<div className='rounded-lg bg-gray-100 p-4 text-sm max-w-[85%] self-start mb-4'>{content}</div>
	);
}

export default Recebida;
