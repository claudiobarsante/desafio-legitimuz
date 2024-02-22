import React from 'react';
import Image from 'next/image';

type EnviadaProps = { content: string; imagePath: string };

function Enviada({ content, imagePath }: EnviadaProps) {
	return (
		<div className='flex items-center gap-4 my-4'>
			<Image
				alt='Avatar'
				className='rounded-full'
				height='30'
				src={imagePath}
				style={{ aspectRatio: '40/40', objectFit: 'cover' }}
				width='30'
			/>
			<div className='flex-1'>
				<div className='rounded-lg border p-4 text-sm'>{content}</div>
			</div>
		</div>
	);
}

export default Enviada;
