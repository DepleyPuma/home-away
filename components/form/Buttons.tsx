'use client';

import { Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useFormStatus } from 'react-dom';

type SubmitButtonProps = {
	className?: string;
	text: string;
};

function Buttons({ className = '', text = 'submit' }: SubmitButtonProps) {
	const { pending } = useFormStatus();

	return (
		<Button type='submit' disabled={pending} className={`capitalize ${className}`} size='lg'>
			{pending ? (
				<>
					<Loader2 className='animate-spin' />
					Please wait...
				</>
			) : (
				text
			)}
		</Button>
	);
}

export default Buttons;
