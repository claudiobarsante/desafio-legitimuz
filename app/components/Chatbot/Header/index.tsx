import React from 'react';
import Image from 'next/image';

export type HeaderProps = {
	username: string;
	imagePath: string;
};
function Header({ username, imagePath }: HeaderProps) {
	return (
		<header className='flex items-center p-4 border-b'>
			<div className='flex items-center space-x-4'>
				{!!imagePath && (
					<span className='relative flex shrink-0 overflow-hidden rounded-full w-8 h-8'>
						<Image
							alt='Logo'
							height='40'
							src={imagePath}
							style={{ aspectRatio: '40/40', objectFit: 'cover' }}
							width='40'
						/>
					</span>
				)}
				<h1 className='text-xl font-bold'>{username}</h1>
			</div>
		</header>
	);
}

export default Header;
