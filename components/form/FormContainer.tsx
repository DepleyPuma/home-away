'use client';

import { useFormState } from 'react-dom';
import { useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { actionFunction } from '@/utils/types';

const initialState = {
	message: '',
};

export function FormContainer({
	action,
	children,
}: {
	action: actionFunction;
	children: React.ReactNode;
}) {
	const [state, formAction] = useFormState(action, initialState);
	const { toast } = useToast();

	useEffect(() => {
		if (state.message) {
			toast({ description: state.message });
		}
	}, [state]);

	return <form action={formAction}>{children}</form>;
}
