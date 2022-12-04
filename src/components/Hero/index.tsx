import { Box, Flex, Image, Text } from '@chakra-ui/react';

import appleImg from '../../assets/apple-logo.svg';
import googlePlayImg from '../../assets/google-play-logo.svg';
import heroImg from '../../assets/hero-phones.png';

export const Hero = () => {
	return (
		<Flex
			m='0 auto'
			mt='20'
			bg='blue.500'
			maxW='1271px'
			borderRadius='3xl'
			align='center'
			justify='space-between'
			paddingInline={14}
		>
			<Box w='45%' mt='14' mb='14' position='relative' left='50px'>
				<Text
					as='h1'
					fontSize='55'
					fontWeight='bold'
					fontFamily='epilogue, sans-serif'
					color='white'
				>
					Ganhar recompensas nunca foi tão fácil
				</Text>

				<Flex gap='6' mt='9'>
					<Flex
						bg='black'
						w='273px'
						h='75px'
						align='center'
						justify='center'
						gap='2.5'
						borderRadius='xl'
						padding='4'
						textAlign='center'
						_hover={{
							cursor: 'pointer',
						}}
					>
						<Image src={appleImg} w='50px' h='50px' />
						<Text
							fontSize='18'
							fontWeight='medium'
							fontFamily='Work Sans, sans-serif'
							color='white'
						>
							Baixe na App Store
						</Text>
					</Flex>

					<Flex
						bg='black'
						w='273px'
						h='75px'
						align='center'
						justify='center'
						gap='2.5'
						borderRadius='xl'
						padding='4'
						textAlign='center'
						_hover={{
							cursor: 'pointer',
						}}
					>
						<Image src={googlePlayImg} w='50px' h='50px' />
						<Text
							fontSize='18'
							fontWeight='medium'
							fontFamily='Work Sans, sans-serif'
							color='white'
						>
							Baixe na Play Store
						</Text>
					</Flex>
				</Flex>
			</Box>

			<Image src={heroImg} />
		</Flex>
	);
};
