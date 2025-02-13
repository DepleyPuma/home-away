import Navbar from '@/components/navbar/Navbar';
import { ClerkProvider } from '@clerk/nextjs';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Providers from './providers';

const geistSans = localFont({
	src: './fonts/GeistVF.woff',
	variable: '--font-geist-sans',
	weight: '100 900',
});
const geistMono = localFont({
	src: './fonts/GeistMonoVF.woff',
	variable: '--font-geist-mono',
	weight: '100 900',
});

export const metadata: Metadata = {
	title: 'Home Away',
	description: 'Feel at home, away from home.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ClerkProvider>
			<html lang='en' suppressContentEditableWarning>
				<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
					<Providers>
						<Navbar />
						<main className='container py-10'>{children}</main>
					</Providers>
				</body>
			</html>
		</ClerkProvider>
	);
}
