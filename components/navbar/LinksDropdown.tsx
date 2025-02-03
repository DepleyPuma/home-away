import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
	DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { links } from '@/utils/links';
import Link from 'next/link';
import { Button } from '../ui/button';
import { LuAlignLeft } from 'react-icons/lu';
import { UserIcon } from 'lucide-react';
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs';
import SingOutLink from './SingOutLink';

function LinksDropdown() {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant={'outline'} className='flex gap-4 max-w-[100px]'>
					<LuAlignLeft className='w-6 h-6' />
					<SignedOut>
						<UserIcon />
					</SignedOut>
					<SignedIn>
						<UserButton />
					</SignedIn>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className='w-52' align='start' sideOffset={10}>
				<SignedOut>
					<DropdownMenuItem>
						<SignInButton mode='modal'>
							<button className='w-full text-left'>Login</button>
						</SignInButton>
					</DropdownMenuItem>
					<DropdownMenuSeparator />
					<DropdownMenuItem>
						<SignUpButton mode='modal'>
							<button className='w-full text-left'>Register</button>
						</SignUpButton>
					</DropdownMenuItem>
				</SignedOut>
				<SignedIn>
					{links.map(link => (
						<DropdownMenuItem key={link.href}>
							<Link href={link.href} className='capitalize w-full'>
								{link.label}
							</Link>
						</DropdownMenuItem>
					))}
					<DropdownMenuSeparator />
					<DropdownMenuItem>
						<SingOutLink />
					</DropdownMenuItem>
				</SignedIn>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}

export default LinksDropdown;
