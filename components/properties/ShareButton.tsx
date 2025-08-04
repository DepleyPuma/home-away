'use client';

import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { LuShare2 } from 'react-icons/lu';
import {
	EmailShareButton,
	EmailIcon,
	FacebookShareButton,
	FacebookIcon,
	LinkedinShareButton,
	LinkedinIcon,
	TwitterShareButton,
	TwitterIcon,
} from 'react-share';

type ShareButtonTypeProps = {
	propertyId: string;
	name: string;
};

export function ShareButton({ propertyId, name }: ShareButtonTypeProps) {
	const url = process.env.NEXT_PUBLIC_WEBSITE_URL;
	const shareLink = `${url}/properties/${propertyId}`;

	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button size='icon' variant='outline' className='p-2 cursor-pointer'>
					<LuShare2 />
				</Button>
			</PopoverTrigger>

			<PopoverContent
				side='bottom'
				align='end'
				sideOffset={10}
				className='flex-col items-center justify-center w-full px-3'
			>
				<div className='hover:bg-muted p-2 px-3 rounded-md'>
					<TwitterShareButton
						url={shareLink}
						title={name}
						className='flex justify-center items-center gap-2'
					>
						<TwitterIcon size={32} className='rounded-sm' /> Share on Twitter
					</TwitterShareButton>
				</div>
				<div className='hover:bg-muted p-2 px-3 rounded-md'>
					<EmailShareButton
						url={shareLink}
						title={name}
						className='flex justify-center items-center gap-2'
					>
						<EmailIcon size={32} className='rounded-sm' /> Share on Email
					</EmailShareButton>
				</div>
				<div className='hover:bg-muted p-2 px-3 rounded-md'>
					<FacebookShareButton
						url={shareLink}
						title={name}
						className='flex justify-center items-center gap-2'
					>
						<FacebookIcon size={32} className='rounded-sm' /> Share on Facebook
					</FacebookShareButton>
				</div>
				<div className='hover:bg-muted p-2 px-3 rounded-md'>
					<LinkedinShareButton
						url={shareLink}
						title={name}
						className='flex justify-center items-center gap-2'
					>
						<LinkedinIcon size={32} className='rounded-sm' /> Share on LinkedIn
					</LinkedinShareButton>
				</div>
			</PopoverContent>
		</Popover>
	);
}
