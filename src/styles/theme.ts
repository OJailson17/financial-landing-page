import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
	colors: {
		blue: {
			100: '#A5A6F6',
			500: '#5D5FEF',
			600: '#7879F1',
		},
	},

	styles: {
		global: {
			html: {
				scrollBehavior: 'smooth',
			},
			body: {
				fontFamily: 'Poppins, sans-serif',
				lineHeight: 1.2,
			},
		},
	},
});
