type NavLink = {
	href: string;
	label: string;
};

export const links: NavLink[] = [
	{ href: '/', label: 'Home' },
	{ href: '/favorites', label: 'Favorites' },
	{ href: '/bookings', label: 'Booking' },
	{ href: '/reviews', label: 'Reviews' },
	{ href: '/rentals/create', label: 'Create Rental' },
	{ href: '/rentals', label: 'My Rentals' },
	{ href: '/profile', label: 'Profile' },
];

// npm install @clerk/nextjs@5.0.1
