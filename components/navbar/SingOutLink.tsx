'use client';

import { SignOutButton } from '@clerk/nextjs';
import { useToast } from '@/hooks/use-toast';

function SingOutLink() {
	const { toast } = useToast();
	const hadnleLogout = () => {
		toast({ description: 'You have been singed out.' });
	};

	return (
		<SignOutButton redirectUrl='/'>
			<button className='w-full text-left' onClick={hadnleLogout}>
				Logout
			</button>
		</SignOutButton>
	);
}

export default SingOutLink;
