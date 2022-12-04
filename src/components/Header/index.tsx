import { Box, Button, Flex, Link, Text, HStack, Image } from '@chakra-ui/react';

import logoImg from '../../assets/logo.svg';

export const Header = () => {
	return (
		<Flex
			as='header'
			justify='space-between'
			align='center'
			paddingInline='16'
			mt='10'
		>
			{/* Logo */}
			<Image src={logoImg} alt='' />

			{/* Navbar */}
			<HStack as='nav' spacing='4'>
				<Box color='blue.500' fontWeight='bold' fontSize='25'>
					<Link href='/'>Home</Link>
				</Box>
				<Box color='blue.500' fontWeight='bold' fontSize='25'>
					<Link href='#how-works'>Como funciona</Link>
				</Box>
				<Box color='blue.500' fontWeight='bold' fontSize='25'>
					<Link href='#testimonials'>Testemunhas</Link>
				</Box>
			</HStack>

			{/* Download button */}
			<Button
				w='36'
				h='14'
				bg='blue.500'
				borderRadius='md'
				_hover={{ bgColor: 'blue.600' }}
			>
				<Text fontWeight='medium' fontSize='18' color='white'>
					Download
				</Text>
			</Button>
		</Flex>
	);
};
